console.log('Hello');

sessionStorage.clear();

const userValue = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');

var username = null;

userValue.addEventListener("submit", function () {
    username = userValue.value;
    window.location.href = "/views/username.html/";
    parseUsername();
})

submitBtn.addEventListener("click", function () {
    // alert(userValue.value);
    username = userValue.value;
    parseUsername();
    window.location.href = "/views/username.html";
})

// console.log(username);


function parseUsername() {
    if (username != null) {
        sessionStorage.setItem("Username", username);
    }

    else {
        alert("username is null");
    }
}

