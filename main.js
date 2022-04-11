const parent = document.getElementById("parent");
const child = document.getElementById("child");
const body = document.getElementById("body");
const heading = document.getElementById("heading");
var x = 0;

parent.addEventListener("click", (a) => {
    if(x == 0){
        child.style.transform = "translateX(100%)";
        x = 1 - x;
        heading.style.color = "white";
        body.style.background = "black";

    }
    else if(x == 1){
        child.style.transform = "translateX(0%)";
        x = 1 - x;
        // child.innerHTML = "On";
        heading.style.color = "black";
        body.style.background = "white";
    }
});