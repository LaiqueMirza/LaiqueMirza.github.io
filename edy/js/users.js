let orderBody = document.getElementById("all-the-record-body");
let resetButton = document.getElementById("reset-button");
let inputSearch = document.getElementById("input-search");
let searchIcon = document.getElementById("search-icon");
const logoutButton = document.getElementById("logout-button");


function searching() {
  let searchValue = inputSearch.value.toLowerCase();
  console.log(searchValue.length)
  if(searchValue.length < 2){
    alert("Your search should have more than one letter")
    return;
  }
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=" + searchValue,
      true
    );
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(xhr.status == 200){

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
        } else {
          console.log(`error ${xhr.status} ${xhr.statusText}`);
          orderBody.innerHTML = `
          <h3> Sorry Something Went wrong Could not fetch the Data </h3>
            <h3>it is an ${xhr.statusText}</h3>
            <h3> the status code is ${xhr.status}</h3>
          `;
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
  inputSearch.value = "";
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
        if(xhr.status == 200){

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


