addEventListener("mouemove",function(e){
    console.log(e);
    //e--> me two mouse properties hogi clientx and clienty
    //clientX --> mouse ki position x axis pr
     //clientY --> mouse ki position y axis pr
    document.body.style.setProperty("--x",e.clientX + "px")//puri body me work krra hai
    document.body.style.setProperty("--y",e.clientY + "px")
    
    
})