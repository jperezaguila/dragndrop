if (sessionStorage.getItem("nombre")) {
    location.replace("index.html");
}

function login() {
 if (document.getElementById("txtnom").value == "") {
     alert("nombre vacio");
     return;
 }
    sessionStorage.setItem("nombre", document.getElementById("txtnom").value);
    location.replace("inicio.html");
}
document.getElementById("btnok").addEventListener("click", login);