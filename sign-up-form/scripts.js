function checkSamePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password != confirmPassword) {
        document.getElementById("error").style.display = "block";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm-password").style.borderColor = "red";
    } else {
        document.getElementById("error").style.display = "none";
        document.getElementById("password").style.borderColor = "black";
        document.getElementById("confirm-password").style.borderColor = "black";
    }
}

document.getElementById("create-account").addEventListener("click", checkSamePassword);
