function add(){
    add_user = document.getElementById("SingIn").value;
    localStorage.setItem("user", add_user);
    window.location = "index2.html";
}