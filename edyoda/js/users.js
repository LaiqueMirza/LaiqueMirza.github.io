let orderBody = document.getElementById("all-the-record-body");
let resetButton = document.getElementById("reset-button");
let inputSearch = document.getElementById("input-search");
let searchIcon = document.getElementById("search-icon");
const logoutButton = document.getElementById("logout-button");


function searching() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
      true
    );
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(JSON.parse(xhr.response));
          let mainResponse = JSON.parse(xhr.response);
          orderBody.innerHTML = "";
          let searchValue = inputSearch.value.toLowerCase();

          for (let i = 0; i < mainResponse.length; i++) {
              let userName = mainResponse[i].fullName.toLowerCase();
              if(searchValue == userName){
              console.log(searchValue, userName)

              orderBody.innerHTML =
                orderBody.innerHTML +
                `
                <div class="main-card">
  
                <h4 class="id-users">${mainResponse[i].id}</h4>
                <div class="image-in-heading">
                  <img src="${mainResponse[i].profilePic}" class="user-avatar-users" alt="">
                </div>
                <h4 class="full-name-users">${mainResponse[i].fullName}</h4>
                <h4 class="dob-users">${mainResponse[i].dob}</h4>
                <h4 class="gender-users">${mainResponse[i].gender}</h4>
                <h4 class="location-users">${mainResponse[i].currentCity}, ${mainResponse[i].currentCountry}</h4>
              </div>
  
              `;
              }
          }
        }
      };
    xhr.send();
  }


function enterKeyPress (e) {
if(e.which === 13){
    searching();
}
}

inputSearch.addEventListener("keyup", enterKeyPress);
searchIcon.addEventListener("click", searching);

resetButton.onclick =  function () {
    getOrderData();
}

logoutButton.addEventListener("click", function () {
  localStorage.setItem("login", false);
  location.replace('../index.html');
})

function getOrderData() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    true
  );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.response));
        let mainResponse = JSON.parse(xhr.response);
        orderBody.innerHTML = "";
        for (let i = 0; i < mainResponse.length; i++) {
        
            orderBody.innerHTML =
              orderBody.innerHTML +
              `
              <div class="main-card">

              <h4 class="id-users">${mainResponse[i].id}</h4>
              <div class="image-in-heading">
                <img src="${mainResponse[i].profilePic}" class="user-avatar-users" alt="">
              </div>
              <h4 class="full-name-users">${mainResponse[i].fullName}</h4>
              <h4 class="dob-users">${mainResponse[i].dob}</h4>
              <h4 class="gender-users">${mainResponse[i].gender}</h4>
              <h4 class="location-users">${mainResponse[i].currentCity}, ${mainResponse[i].currentCountry}</h4>
            </div>

            `;
          
        }
      }
    };
  xhr.send();
}
getOrderData();


