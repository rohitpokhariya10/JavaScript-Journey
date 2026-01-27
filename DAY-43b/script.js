let box = document.querySelector('.box');
let btn = document.querySelector('.btn');
let background = document.querySelector('.background');

let teams = [
  {
    teamName: "CSK",
    teamFullName: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad",
    primaryColour: "Yellow",
    secondaryColour: "Blue",
    trophies: 5,
    img: "https://i.pinimg.com/736x/70/b8/67/70b8674c6f38c938798945d5cb8499ec.jpg"
  },
  {
    teamName: "MI",
    teamFullName: "Mumbai Indians",
    captain: "Hardik Pandya",
    primaryColour: "Blue",
    secondaryColour: "white",
    trophies: 5,
    img: "https://i.pinimg.com/736x/d2/4d/cd/d24dcd252fec0bd4dd3f8e521c34c6ef.jpg"
  },
  {
    teamName: "RCB",
    teamFullName: "Royal Challengers Bengaluru",
    captain: "Faf du Plessis",
    primaryColour: "Red",
    secondaryColour: "Black",
    trophies: 0,
    img: "https://i.pinimg.com/1200x/a5/8d/5f/a58d5f5fa26bb5d13d93acd3ac09892d.jpg"
  },
  {
    teamName: "KKR",
    teamFullName: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    primaryColour: "Purple",
    secondaryColour: "crimson",
    trophies: 3,
    img: "https://i.pinimg.com/736x/d2/2e/87/d22e87445ae99f53688b0f3e29a8edb2.jpg"
  },
  {
    teamName: "RR",
    teamFullName: "Rajasthan Royals",
    captain: "Sanju Samson",
    primaryColour: "Pink",
    secondaryColour: "Blue",
    trophies: 1,
    img: "https://i.pinimg.com/1200x/00/49/4d/00494d3f8e286a5644e84a4915e1e2b1.jpg"
  },
  {
    teamName: "SRH",
    teamFullName: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    primaryColour: "Orange",
    secondaryColour: "yellow",
    trophies: 1,
    img: "https://i.pinimg.com/1200x/1b/01/5d/1b015dc74ef18412a02e46d59c6bed5e.jpg"
  },
  {
    teamName: "DC",
    teamFullName: "Delhi Capitals",
    captain: "Rishabh Pant",
    primaryColour: "Blue",
    secondaryColour: "Red",
    trophies: 0,
    img: "https://i.pinimg.com/1200x/ea/7b/f6/ea7bf6d2cdb86a37df1ad10f03e5c6f4.jpg"
  },
  {
    teamName: "PBKS",
    teamFullName: "Punjab Kings",
    captain: "Shikhar Dhawan",
    primaryColour: "Red",
    secondaryColour: "Silver",
    trophies: 0,
    img: "https://i.pinimg.com/1200x/bb/5c/db/bb5cdbadf7038068ba1476906a48d1a1.jpg"
  }
];

btn.addEventListener('click', function () {
   let winner = teams[Math.floor(Math.random()*teams.length)];
   console.log(winner);
   // show info in left panel
     document.body.style.backgroundColor = winner.secondaryColour;

   background.innerHTML = `
     <h2 style="margin:0; font-weight:100">${winner.teamName}</h2>
     <p style="margin:4px 0">👑 Captain: ${winner.captain}</p>
     <p style="margin:4px 0">🏆 Trophies: ${winner.trophies}</p>
   `;

   // set box background: primary colour + image cover
   box.style.backgroundColor = winner.primaryColour;
   if (winner.img) {
     box.style.backgroundImage = `url("${winner.img}")`;
     box.style.backgroundSize = "cover";
     box.style.backgroundPosition = "center";
   } else {
     box.style.backgroundImage = "none";
   }

   // set left panel color using secondaryColour
   background.style.backgroundColor = winner.secondaryColour;

  

// change text color ONLY if background is black in (background div)
if (winner.secondaryColour.toLowerCase() === "black") {
  background.style.color = "white";
} else {
  background.style.color = ""; // reset to original (default CSS)
}

});
