console.log('Hello');

sessionStorage.clear();

const userValue = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');

var username = null;

// userValue.value = null;

userValue.addEventListener("submit", function () {
    console.log(userValue.value);
    username = userValue.value;
    parseUsername();
})

submitBtn.addEventListener("click", function () {
    // alert(userValue.value);
    console.log(userValue.value);
    username = userValue.value;
    parseUsername();
    // window.location.href = "/views/username.html";
})

// console.log(username);


function parseUsername() {
    if (username !== '') {
        sessionStorage.setItem("Username", username);
        window.location.href = "http://127.0.0.1:5500/views/username.html";
    }

    else {
        alert("username is null");
    }
}



