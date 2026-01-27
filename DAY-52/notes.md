DAY-52 (Spotlight Effect)
17:25 start video


1)some Background properties  20:00 minute
linear gradient
radial gradient


syntax : linear-gradient( direction , white, red)

--->linear-gradient(to right , colour, colour)//white se red ki trf jata hua gradient

--->linear-gradient(to right , white, red , purple)

--->linear-gradient(to bottom , white, red)

--->linear-gradient(to left , white, red)

//NEW THINGS
---->linear-gradient(in oklab to right , whitw, red, purple)
---->linear-gradient(in hsl to right , whitw, red, purple)

29:00 minute
radial-gradient-->ye radius me gradient bnake dega

syntax: radial-gradient(radius jisme gradient chiye , colour , colour)

--->radial-gradient(150px,orange,yellow)// isme by default radial gradient div me center se banega


--->radial-gradient(150px at 100px 100px,orange,yellow)//at 100px 100px means  div ke humne x,y cordinate de diye hai ab inse gradient start hoga(100px 100px me radial gradient ka center hoga)

//basically upper vale syntax se radial gradient ka origin change kar skte hai
 

 39:30---> css custom properties or root variables//very very important

42:00 minute
----->root variables only for colour properties 
1)variable name start with double hyphon --
eg--> 
:root{
    --red:red;//ye root variable banaya
}
.box{
    height:400px;
    width:400px;
    backround-color: var(--red);
}

47:00 minute

50:54 minute JavaScript Start

56:35 minute me revision

setProperty----> root variables ko update krne ke liye use krte hai js me
syntax of setProperty:
setProperty(kis root valiable ko update krna hai , kya changes krne hai + unit kya hai)
eg)setProperty(--x,e.clientX + 'px')


--->1:0100 me se Spotlight Proje ct Start
-->white colour ko transparent krdo pura in radial-gradient and halka sa
black ko bhi kro transparent

