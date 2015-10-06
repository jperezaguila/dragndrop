if (!sessionStorage.getItem("nombre"))location.replace("index.html");


//1º registrar los eventos
var idactual = undefined;

function drag(evt) {
//asocia al evento la informacion en este cado id
    evt.dataTransfer.setData("objeto",evt.target.id);
}

function allowdrop(evt) {
    evt.preventDefault();
}

function drop(evt) {
    evt.preventDefault();
    //var data = evt.dataTransfer.getData("objeto");

    document.getElementById("destino")
        .appendChild(document.getElementById(idactual));
    idactual = undefined;

    //evt.target.appendChild(document.getElementById(data));
}
//
var image = document.querySelectorAll("img");
var destino = document.querySelector("#destino");

//
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("dragstart", drag);
}

destino.addEventListener("dragover", allowdrop);
destino.addEventListener("drop", drop);


