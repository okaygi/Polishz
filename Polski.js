



let info = document.querySelector("#info")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let image = document.querySelector("#imageid")

left.addEventListener("click", YesOrNo)
right.addEventListener("click", YesOrNo)



function YesOrNo () {

    if (document.getElementById("left").innerHTML == "tabela" && this.id == "left") {
        this.style.backgroundColor="green";
    }
else {
    this.style.backgroundColor="red";
}





    setTimeout(devam, 1000);
    
}

function devam () {
    document.getElementById("left").style.backgroundColor="white"
    document.getElementById("right").style.backgroundColor="white"
    document.getElementById("imageid").src = "Images/chair.png"
    info.innerHTML = "Chair"
    left.innerHTML = "krzesło"
    right.innerHTML = "tabela"
    
    
    
}