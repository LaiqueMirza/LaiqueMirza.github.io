let login = localStorage.getItem("login")
console.log(typeof(login))
if(login === "false"){

    console.log(login,2)

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const signinButton = document.getElementById("button");
    console.log(username)
    
    
    function onClickSignIn() {
    
        console.log(username.value)
        console.log(password.value)
        if(username.value =="" || password.value == "" ){
            alert("Enter the right Details")
        } else {
            const xhr = new XMLHttpRequest;
            xhr.open(
                "GET",
                "https://604e28dc2a808e0017784a4f.mockapi.io/login",
                true
            )
            xhr.onreadystatechange = function () {
                if(xhr. readyState == 4) {
                    const response = JSON.parse(xhr.response);
                    for (let i = 0; i < response.length ; i++) {
    
                        if(response[i].username === username.value && response[i].password ===password.value){
                            console.log("yes");
                            localStorage.setItem("login", true);
                            location.replace('./html/orders.html')
                            return;
                        }
    
    
                    }
                    alert("Enter the right Details")
                
                }
            }
    
            xhr.send();
        }
    
    }
    
    signinButton.addEventListener("click", onClickSignIn)
    
} else {
    console.log(login,1)

    location.replace('./html/orders.html')
 }