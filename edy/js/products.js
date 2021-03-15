let orderBody = document.getElementById("all-the-record-body");
let expiredProduct = document.getElementById("expired-product");
let lowStockProduct = document.getElementById("low-stock-product");
let countMain = document.getElementById("count-main")
const logoutButton = document.getElementById("logout-button");







logoutButton.addEventListener("click", function () {
  localStorage.setItem("login", false);
  location.replace('../index.html');
})

function getOrderData() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
    true
  );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.response));
        let mainResponse = JSON.parse(xhr.response);
        orderBody.innerHTML = "";
        let count = 0;
        for (let i = 0; i < mainResponse.length; i++) {
                      
            const date = mainResponse[i].expiryDate;

            const productDate = new Date(date);
            const presentDate = new Date();
           
          if (!expiredProduct.checked && productDate < presentDate) {
            continue;
          } else if (
            !lowStockProduct.checked && mainResponse[i].stock < 100
          ) {
            continue;
          }  else {
              count++;
            orderBody.innerHTML =
              orderBody.innerHTML +
              `
              <div class="main-card">

              <h4 class="id-product">${mainResponse[i].id}</h4>
              <h4 class="product-name">${mainResponse[i].medicineName}</h4>
              <h4 class="product-brand">${mainResponse[i].medicineBrand}</h4>
              <h4 class="expiry-date">${mainResponse[i].expiryDate}</h4>
              <h4 class="unit-price">$${mainResponse[i].unitPrice}</h4>
              <h4 class="stock">${mainResponse[i].stock}</h4>
            </div>

            `;
           }
        }
        countMain.innerHTML=`${count}`
      }
    };
  xhr.send();
}
getOrderData();

expiredProduct.addEventListener("click", function () {
  console.log(expiredProduct.checked);
  getOrderData();
});
lowStockProduct.addEventListener("click", function () {
    console.log(lowStockProduct.checked);
    getOrderData();
  });

