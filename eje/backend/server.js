import dotenv from "dotenv";
import express from "express";
import data from "./data.js";
import users from "./users.js";
import mongoose from "mongoose";
import productsSchema from "./productSchema.js";
import usersSchema from "./usersSchema.js";
import Razorpay from "razorpay";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import cors from "cors";
import shortid from "shortid";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
// console.log(process.env.SECRET_KEY);
// console.log(process.env.RAZORPAY_KEY_ID);
// console.log(process.env.RAZORPAY_KEY_SECRET);

const url = "mongodb://localhost:27017/jeanEcom";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  useFindAndModify: false,
  useCreateIndex: true,
});

connect.then(
  () => {
    console.log("db succesfully connected");
  },
  (err) => {
    console.log(err);
  }
);

const Product = new mongoose.model("Product", productsSchema);
const User = new mongoose.model("User", usersSchema);

const creatingOneProduct = async () => {
  try {
    const newProduct = new Product({
      name: "checking",
      preview: "checking",
      photos: ["checking", "checking"],
      description: "checking",
      size: [90, 80],
      isAccessory: true,
      brand: "checking",
      price: 999,
    });

    const result = await newProduct.save();
    // for inserting multiple product or document at once
    // const result = await Product.insertMany([ all the new products]);
    console.log("successfully Added the product");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// creatingOneProduct()

const getProduct = async () => {
  const result = await Product.find({ name: "Men" });
  console.log(result);
};

// getProduct()

// app.post("/verifyPayment", (req, res) => {
//   // do a validation
//   const secret = "12345678";

//   console.log(req.body, ">>>>>>>>");

//   const crypto = require("crypto");

//   const shasum = crypto.createHmac("sha256", secret);
//   shasum.update(JSON.stringify(req.body));
//   const digest = shasum.digest("hex");

//   console.log(digest, req.headers["x-razorpay-signature"]);

//   if (digest === req.headers["x-razorpay-signature"]) {
//     console.log("request is legit");
//     // process it
//     require("fs").writeFileSync(
//       "payment1.json",
//       JSON.stringify(req.body, null, 4)
//     );
//   } else {
//     // pass it
//   }
//   res.json({ status: "ok" });
// });

app.post("/verifyPayment", (req, res) => {
  const order = req.body;

  const text = order.razorpay_order_id + "|" + order.razorpay_payment_id;
  var signature = crypto
    .createHmac("sha256", "12345678")
    .update(text)
    .digest("hex");

  if (signature === order.razorpay_signature) {
    // You can update payment details in your database here
    console.log(signature);
    return res.status(201).send({ message: "Successful payment" });
  } else {
    return res.status(400).send({ message: "Payment verification failed" });
  }
});



const auth = async (req,res,next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token,"{{{{{{{{{{{{{");
    const verifyUser = Jwt.verify(token, process.env.SECRET_KEY)
    console.log(verifyUser);
    const user = await User.findOne({_id:verifyUser._id});
    console.log(user.userCart.itemsInCart);
    // const userTotalAmount = user.userCart.itemsInCart.map(item => item.price*item.quantity)
    let cartProducts = user.userCart.itemsInCart
    let bagTotal = 0;
    let totalAmount = 0;
    {
      cartProducts?.map((product) => (bagTotal = bagTotal + product.price*product.quantity));
    }
    totalAmount += bagTotal;
    let shippingCharge = 0;
    shippingCharge = bagTotal > 20000 ? "FREE" : 50;
    if (typeof shippingCharge === "number") {
      totalAmount += shippingCharge;
    }

    req.totalAmount = totalAmount
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
// jwt must be provided
app.post("/razorpay",auth, async (req, res) => {
  console.log("cookie",req.cookies.jwt);
const totalAmount = req.totalAmount
console.log(totalAmount,"}}}}}}}}}}}");
  const payment_capture = 1;
  const amount = totalAmount*100;
  const currency = "INR";

  const options = {
    amount: amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
console.log(options);
  try {
    const response = await razorpay.orders.create(options);
    console.log("response",response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, error });

  }
});

// app.get('/api/products',(req,res) => {
//     res.send(data.products)
// })

//pagination of backend so we get only 50 data at a time
//model is the model of mongo db database here it is product

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    let limit = 50;
    let lastData;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const inMongo = await model.countDocuments().exec();
    console.log(endIndex, typeof endIndex, inMongo);
    const result = {};

    if (endIndex + 50 < inMongo) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
      console.log(result.next);
    } else if (endIndex < inMongo) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
      lastData = inMongo - endIndex;
      console.log(limit);
    } else if (endIndex >= inMongo) {
      console.log(endIndex);
      res.status(500).json({ message: "Yay You Have Seen it All" });
      return;
    }

    try {
      if (lastData) {
        result.result = await model
          .find()
          .limit(lastData)
          .skip(startIndex)
          .exec();
        res.paginatedResults = result;
        next();
      } else {
        result.result = await model.find().limit(limit).skip(startIndex).exec();
        res.paginatedResults = result;
        next();
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

app.get("/api/products", paginatedResults(Product), async (req, res) => {
  try {
    const result = await Product.find();
    // console.log(res);
    res.json(res.paginatedResults);
    // res.json({status: 200, result})

    // console.log(result)
  } catch (err) {
    res.json({ status: 500, err });
  }
});

//searcnh result may be modified with mongo
app.get("/products/:product", async (req, res) => {
  try {
    const word = req.params.product;
    const mongoData = await Product.find();

    let resultedData = mongoData.filter((searchedValue) => {
      let nameOfProduct = searchedValue.name.toLowerCase();
      return nameOfProduct.includes(word);
    });

    if (resultedData && resultedData.length) {
      res.send(resultedData);
    } else {
      console.log("no data found");
      res.send();
    }
  } catch (err) {
    console.log(err);
  }
});

// app.get("/login", (req,res) =>{
// 	res.send(users)
// })

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userData = await User.findOne({ "userInfo.email": email });
    console.log(userData);
    const isMatch = await bcrypt.compare(password, userData.userInfo.password);
    if (isMatch) {
      const token = await userData.generateAuthToken();
      console.log(token, "tokenSignUp");
      res.cookie("jwt", token)
      // {
      //   expires:new Date(Date.now()+ 300000),
      //   // secure:true
      // });
      console.log("cookie",req.cookies);
      console.log("sending data");
      res.status(200).send(userData);
    } else {
      res.status(400).send("no user found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

app.post("/signUp", async (req, res) => {
  try {
    console.log(req.body);

    const checkEmailPresent = await User.findOne({
      "userInfo.email": req.body.email,
    });
    const checkNumberPresent = await User.findOne({
      "userInfo.phoneNumberMain": req.body.phoneNumber,
    });
    // console.log(checkEmailPresent.userInfo.email,checkNumberPresent.userInfo.phoneNumberMain);
    if (checkEmailPresent || checkNumberPresent) {
      res.status(206).send("Email or Phone Number is already there. Go, Login");
    } else {
      const newUser = new User({
        userInfo: {
          userName: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phoneNumberMain: req.body.phoneNumber,
          gender: req.body.gender,
        },
        userCart: {
          countOfCart: 0,
        },
      });

      const token = await newUser.generateAuthToken();
      console.log(token, "tokenSignUp");

      res.cookie("jwt", token);
      // console.log(cookie);

      const newUserRegistered = await newUser.save();
      res.status(201).send(newUserRegistered);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Could Not Add You, Try Again");
  }
});
app.post("/users", async (req, res) => {
  try {
    const userData = req.body.userData;
    console.log(userData);
    const result = await User.updateOne(
      { _id: userData._id },
      {
        $set: {
          userCart: userData.userCart,
          userAddress: userData.userAddress,
        },
      }
    );
    console.log(result);
    res.status(201).send("Updated the dataBase");
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
