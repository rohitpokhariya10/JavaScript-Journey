<!-- //this project is very helpful
//eg--- jb bd se fe me data bhenge tab kaam ayga -->



JS ki help se data dala hai(stories)

<!-- printing array elements -->

let arr = [1 , 2 , 3 ,4 ,5]
arr.forEach(function(elem){
   console.log(elem)
})

<!-- elem me ek ek karke aray ke elements ayenge and log se sare elements ek ek krke print ho jayenge -->


JS forEach vs for loop

CODE1)
var arr = [1,2,3,4,5];
var clutter = "";

arr.forEach(function(num){
  for (var i = 0; i < num; i++){
    clutter = clutter + "Hello";
  }
});

console.log(clutter);
<!-- num me forEach ke time arr ki direct value ati hai -->


2)CODE
var arr = [1,2,3,4,5];
var clutter = "";

arr.forEach(function(){
  clutter = clutter + "Hello";
});

console.log(clutter);

3)code
var arr = [1,2,3,4,5];
var clutter = "";

arr.forEach(function(num , idx){
    
  clutter = clutter + "Hello";
  console.log(clutter , num,idx);
});


<!-- OUTPUT OF CODE 3
Hello 1 0
HelloHello 2 1
HelloHelloHello 3 2
HelloHelloHelloHello 4 3
HelloHelloHelloHelloHello 5 4 -->



Q)Interview Important Question
1)Template Literals





Pointer Events




