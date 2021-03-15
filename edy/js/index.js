let orderBody = document.getElementById("all-the-record-body");
let newOrder = document.getElementById("new-order");
let packedOrder = document.getElementById("packed-order");
let inTransitOrder = document.getElementById("inTransit-order");
let deliveredOrder = document.getElementById("delivered-order");
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
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
    true
  );
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if(xhr.status == 200){
        console.log(JSON.parse(xhr.response));
        let mainResponse = JSON.parse(xhr.response);
        orderBody.innerHTML = "";
        let count = 0;
        for (let i = 0; i < mainResponse.length; i++) {
          if (!newOrder.checked && mainResponse[i].orderStatus === "New") {
            continue;
          } else if (
            !deliveredOrder.checked &&
            mainResponse[i].orderStatus === "Delivered"
          ) {
            continue;
          } else if (
            !packedOrder.checked &&
            mainResponse[i].orderStatus === "Packed"
          ) {
            continue;
          } else if (
            !inTransitOrder.checked &&
            mainResponse[i].orderStatus === "InTransit"
          ) {
            continue;
          } else {
              count++;
            orderBody.innerHTML =
              orderBody.innerHTML +
              `
            <div class="main-card">

            <h4 class="id-order">${mainResponse[i].id}</h4>
            <h4 class="customer-order">${mainResponse[i].customerName}</h4>
            <div class="date-time-oreder">
                <h4 class="date-order">${mainResponse[i].orderDate}</h4>
                <h4 class="time-order">${mainResponse[i].orderTime}</h4>
    
            </div>
            <h4 class="amount-order">$${mainResponse[i].amount}</h4>
            <h4 class="status-order">${mainResponse[i].orderStatus}</h4>
          </div>

            `;
          }
        }
        countMain.innerHTML=`${count}`
      } else {
        console.log(`error ${xhr.status} ${xhr.statusText}`);
        orderBody.innerHTML = orderBody.innerHTML + `
        <h3> Sorry Something Went wrong Could not fetch the Data </h3>
          <h3>it is an ${xhr.statusText}</h3>
          <h3> the status code is ${xhr.status}</h3>
        `;
      }
      }
    };
  
  xhr.send();
}
getOrderData();

newOrder.addEventListener("click", function () {
  console.log(newOrder.checked);
  getOrderData();
});
packedOrder.addEventListener("click", function () {
    console.log(packedOrder.checked);
    getOrderData();
  });
  inTransitOrder.addEventListener("click", function () {
    console.log(inTransitOrder.checked);
    getOrderData();
  });
  deliveredOrder.addEventListener("click", function () {
    console.log(deliveredOrder.checked);
    getOrderData();
  });
