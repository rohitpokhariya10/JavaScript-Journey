12:00 start
--->first keyframes smjaya hai dubara se


27:35
---> keyframes me kisi kisi property ko hum animate nhi kr sakte jese
               1)display:none---> property ko animate nhi kr skte
               2)visibility :hidden

               kyun nhi work krta keyframes inpar because ye yaa tuh visible hunge ya invisible.

               discrete properties in css--->inko animate nhi kar sakte.

               >discrete property kya hoti hai----> Homework??



2)  @property ---> for making custom variables(-- jaruri hai)-----> ye improve karta hai code quality
example:  
@property --bgColor{
    syntax: "<color>" ;
    initial-value: red;
    inherits: false;
}
syntax----> batata hai ki es property ka kya naam and kaam hai (like color, length in px ,vw , ) ,angle 


@property jo bnaye hai custom variable use kese use kre---->background-color:var(--bgColor);
>hum ise keyframes ke sath bhi use kar skte hai
example:  
keyframes animateBgColor{
    from{
      --bgColor:red;
    }
    to{
        --bgColor:yello;
    }
}
>keyframes ko fir use krlo
animation:animateBgColor 5s forwards
------------------------------------------------------------------------------------------------------------------------------------------
>Example of usecase of @property
/* create custom variable --bgColor */
@property --bgColor{
    syntax:"<color>";
    initial-value: white;
    /* inherits false hi rheta hai */
    inherits: false;
}
/* create keyframes */
@keyframes animateBgColor{
    from{
        --bgColor:white;
    }
    to{
        --bgColor:#FFD700;
    }
}
.box{
    height: 300px;
    width:300px;
    background-color: var(--bgColor);
    animation: animateBgColor 5s infinite alternate-reverse ;
    border-radius: 50%;

}


------------------------------------------------------------------------------------------------------------------------------------------

47:30 start
>55:00 complex part of this cult project
>1:02:00 important thing

me kisi bhi gradient me bta skta hu ki gradient kis area tak apply  hoga
we have only 4 areas in css
box model khte hai ise
1)content
2)padding
3)boder
4)margin

example:
>background:linear-gradient(black) content-box;

And hum multiple gradient bhi de skte hai ek sath
example:


    background:
        linear-gradient(black) padding-box,
        conic-gradient(from 0deg, black, rgb(255, 0, 123), black) border-box;




keyframes ko hum backround ki kisi bhi property par sirect apply nhi kr skte hai tab hum 
>@property ka use krte hai background property ko animate krne ke lie

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DAY-55 Advance CSS
13:00 start
<!-- Some Animation Properties -->
1)  animation-timing-function: linear;--->
2)animation-play-state:pause;-->annimation is in pause state(animation nhi chalegi)
<!-- box element par hover(click) karte hi animation chalne lag jayegi  -->
3).box:hover{
    animation-play-state : running;
}
<!-- border ki width 0 to 5px transition -->
4)transition:all 0.3s linear;


>Glow Effect in card 
<!-- initial me spread 0px hoga -->
1)box-shadow:0px 0px 0px rgb(255,0,195); 
<!-- fir hover par ye hoga -->
2)box-shadow:0px 0px 50px rgb(255,0,195);

>Text color change
1)color:white--->color:rgb(255,0,195) on hover

>bloom Effect on text ---> The Cult
<!--initial-->
1)text-shadow: 0 0 0px rgb(255, 0, 123);
<!-- on hover -->
2)text-shadow: 0 0 10px rgb(255, 0, 123);
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------