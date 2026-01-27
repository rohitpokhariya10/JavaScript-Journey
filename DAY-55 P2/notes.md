# https://drive.google.com/file/d/1-BpejwoJRjHghyHwSHeGa0UHeQwBN3g1/preview

**DAY-55----->36:00 minute start**


44:00 ----->  anchor concept start
anchor me 2 element hote hai
45:00
1)target element------>syntax:    anchor-name:--some-anchor;
# target element ke name ke age humesha 2 hyphon ayenge -- like this
2)positioned elment
# position element bnane ke lie 2 property deni hoti hai
>position:absloute;
<!-- position-anchor me target element ka name ayega -->
>position-anchor:--some-anchor;


# target element ke hisab se  positioned element ko khi bhi rakh skte hai

>Summary--->Anchor property ko Hinglish + super simple language me samjho — yeh CSS ka naya feature hai jo elements ko dusre element ke hisaab se position karne ke kaam aata hai, bina position: absolute; top:100px; left:200px; jaise static numbers use kiye.Yeh bilkul waise hi kaam karta hai jaise tum kisi cheez ko magnet se attach karte ho — jis jagah magnet hoga, object automatically waha chipak jayega.CSS me “magnet” = anchor element,Aur “chipakne wala object” = positioned element.


anchor property is mainly used to create tooltip in the website


EXAMPLE:

.box {
  height: 200px;
  width: 200px;
}
.box:hover{
    anchor-name: --some-anchor;
}

/* Anchor is here — always defined */
.red {
  background-color: rgb(134, 48, 48);
 
}

.blue {
  background-color: rgb(54, 54, 143);
}

.green {
  background-color: rgb(68, 139, 68);
    
}

/* positioned element */
.anchor {
  height: 50px;
  width: 60px;
  border-radius: 10px;
  background-color: beige;

  position: absolute;
  position-anchor: --some-anchor;

  top: anchor(top);
  left: anchor(left); /* right use karenge to side me chipkega */
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 56:00
>mix-blend-mode : exclusion;
# mix-blend-mode me bhout saari properties hoti hai
# exclusite means opposite color set hoijayega-->background me jo color hoga uska opposite color set krdega (mix-blend-mode:difference;) ka bhi yhi kaam hai.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 58:00  main Effect start from here

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# # 1:04:00 Next concept start from here
>:has() is a parent selector

<!-- body agr tumpe koi esa element hai jiski class box hai and uspr hover horha hai tu tumhare andar ke sabhi boxes ka scale 0.8(chota) krdoge -->

<!--!important mtalb ki ye property apply hogi hi hogi kuch bhi ho  -->
syntax:
1)body:has(.box.hover) .box{
  transform:scale(0.8);
}
<!--jis box me hover krenge  vo bda hojayega !important he tbhi upper vali property ispe apply nhi hogi  -->
2)box:hover{
  transform:scale(1.2) !important;
}
has()-----> usecase in this class jis box me hover krenge uska scale bdega baki boxes chote hojayenge thora.









