let main = document.querySelector("main");
let cursor = document.querySelector("main img")


main.addEventListener("mousemove" , (dets)=>{
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
    cursor.style.transform = "translate(-50% ,-50%)";
    console.log("move");
    
})