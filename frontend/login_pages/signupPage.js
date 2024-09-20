localStorage.clear();
document.getElementById("login-button").addEventListener("click", login);

async function login() {
    const username = document.getElementById("input-username").value;
    const department = document.getElementById("input-department").value;
    const name = document.getElementById("input-name").value;
    const password = document.getElementById("input-password").value;
    
    const url = 'http://localhost:8080/event/register/account';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "department": department,
            "name": name,
            "password": password
        })
    };

    let result;
    try {
        const response = await fetch(url, options);
        result = await response.text();
        console.log(result);
        alert("Successfully created new acccount!");
        window.location.href = "loginPage.html";

    } catch (error) {
        console.error(error);
        alert(error);
        window.location.href = "signupPage.html";
    }
}