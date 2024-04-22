document.getElementById("login-button").addEventListener("click", login);

async function login() {
    const username = document.getElementById("input-username").value;
    const password = document.getElementById("input-password").value;
    
    const url = 'http://localhost:8080/account/passwordCheck';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    };

    let result;
    try {
        const response = await fetch(url, options);
        result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    localStorage.setItem('section', result)
    
    if(result==="Invalid"){
        window.location.href = "loginPage.html";
    }
    else{
        window.location.href = "../home/homePage.html";
    }
}