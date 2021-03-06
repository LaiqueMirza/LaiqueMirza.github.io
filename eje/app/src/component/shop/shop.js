import axios from "axios";
import React, { useEffect, useState } from "react";
import "./shop.css";
import Products from "../product/products/products";
import InfiniteScroll from 'react-infinite-scroll-component';


//te problem is we are still gettting data after a;ll render 
//has more should not be true

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
   
    axios
      .get("/api/products?page=1")
      .then((res) => {
        setProducts(res.data.result)
        setPage(res.data.next.page)
      })
      .catch((err) => console.log(err));
        setLoading(false);
       
  }, []);
 const fetchProducts = () => {
    axios
    .get(`/api/products?page=${page}`)
    .then((res) => {
      setProducts(products.concat(res.data.result))
      setPage(res.data.next.page)
    })
    .catch((err) => {
     setHasMore(false)
      console.log(err);
    })
  };
  console.log(products);
  console.log(loading);
  return (
    <div className="shopDiv">
      {loading && <img className="med-8x6 lazyautosizes lazyloaded monkeyLoader" alt="Monkey Swinging Loader. Hello Dribbble!! monkey motion design duik after effects loader swinging gif" width="auto" height="auto" data-id="2946353" data-optimize-for-bots="true" data-srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" data-src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif" data-sizes="auto" skip_resize="true" srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif"  />}
      
<section className="clothing-section">

<h3 className="header-clothing">Clothing for Men and Women</h3>

{/* <div className="clothing" id="clothing"> */}

       <InfiniteScroll
       className="clothing"
       id="clothing"
       style={{ overflow:"hidden" }}
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
          loader={<img className="med-8x6 lazyautosizes lazyloaded monkeyLoader" alt="Monkey Swinging Loader. Hello Dribbble!! monkey motion design duik after effects loader swinging gif" width="auto" height="auto" data-id="2946353" data-optimize-for-bots="true" data-srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" data-src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif" data-sizes="auto" skip_resize="true" srcset="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 300w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 400w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 600w, https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif 800w" src="https://cdn.dribbble.com/users/1319489/screenshots/2946353/monkey-1.gif"  />}
          endMessage={
            <h3 style={{ textAlign: 'center', marginLeft:"50px" }}>
              Yay! You have seen it all
            </h3>
          }
        >
          {products.map((product) => (
        <Products
         data={product} 
        key={product._id}
        />
      ))}
        </InfiniteScroll>
{/* </div> */}
    

</section>
      
    </div>
  );
};

export default Shop;
