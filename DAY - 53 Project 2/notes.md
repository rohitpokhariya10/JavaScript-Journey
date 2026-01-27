1:08:00  ADVANCE CSS second Project

1)box-shadow
box-shadow: x-cordinate y-cordinate spreadradius color;

>spread radius ---> border kitni soft hai
>x-axis --->means jo element hai uske x axis jitni value pe kishak jayegi shadow
>y-axis --->means jo element hai uske y axis jitni value pe kishak jayegi shadow

syntax: box-shadow: 10px -10px 50px green ;//- me bhi de skte hai value
------>box-shadow:inset 10px -10px 50px green ;
inset---> ka use krke shadow box ke andar banegi

2)text-shadow---> same as box-shadow but text-shadow is only for text
---->inset text-shadow me work nhi krta hai


3)conic-gradient(!Important)
Syntax: background: conic-gradient(white , black);
---->3 4 color bhi add kr skte hai
>background: conic-gradient(from 90deg, white , black);
----> from 90deg se hum line ka angle change kr skte hai kuch bhi krdo deg ki value uske accrd change hojayegi line


4)1:24:00---->keyframes
---->it is mainly used for Animations
>changeBackgroudColor---> ye humne apne animation ka custom name rkha
>from --> ki kha se lekr jana hai animation
>to----> kha tak lekr jana hai animation
>keyframes ko use kese kre--->
>syntax: animation: name duration timing-function delay iteration-count direction fill-mode;
     syntax: animation: changeBg 5s infinite forwards alternate;
   forwards ---> means animation discard nhi hogi ui me  rhegi present 
   infinite ----> animation infinite chlti rhegi
   alternate ----->means animation from se to and to to from hoti rhegi




syntax:  @keyframes changeBackgroudColor{

from{

}
to{


}

}
------------------------------------------------------------------------------------------------------------------------------------------
1) box-shadow
   Syntax: box-shadow: x y blur spread color;

   > x-axis → horizontal move
   > y-axis → vertical move
   > blur-radius → how soft the shadow is
   > spread → increase/decrease size of shadow
   > inset → shadow inside the box

   Example:
   box-shadow: 10px -10px 50px 0px green;
   box-shadow: inset 10px -10px 50px green;

---------------------------------------

2) text-shadow
   Same as box-shadow but only for text.
   inset does NOT work.

   Example:
   text-shadow: 5px 5px 10px red;

---------------------------------------

3) conic-gradient
   Syntax: background: conic-gradient(color1, color2...);

   Example:
   background: conic-gradient(white, black);
   background: conic-gradient(from 90deg, white, black);
   background: conic-gradient(red, yellow, green, blue);

---------------------------------------

4)1:24:00---->keyframes
---->it is mainly used for Animations
>changeBackgroudColor---> ye humne apne animation ka custom name rkha
>from --> ki kha se lekr jana hai animation
>to----> kha tak lekr jana hai animation
>keyframes ko use kese kre--->
>syntax: animation: name duration timing-function delay iteration-count direction fill-mode;
     syntax: animation: changeBg 5s infinite forwards alternate;
   forwards ---> means animation discard nhi hogi ui me  rhegi present 
   infinite ----> animation infinite chlti rhegi
   alternate ----->means animation from se to and to to from hoti rhegi




syntax:  @keyframes changeBackgroudColor{

from{

}
to{


}

}