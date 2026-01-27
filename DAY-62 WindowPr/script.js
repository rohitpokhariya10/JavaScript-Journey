let menu;

// Function jo right-click menu create karta hai
const rightClickMenu = () => {
  menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.background = "grey";
  menu.style.display = "none"; // default: chhupa hua
  menu.style.minWidth = "200px";
  menu.style.borderRadius = "5px";

  // menu div ko HTML body ke andar add karna zaroori hai
  document.body.appendChild(menu);

  // Helper function → ek-ek menu item (field) create karta hai
  const mkItem = (text) => {
    const item = document.createElement("div");
    item.textContent = text;
    item.style.color = "black";
    item.style.padding = "8px";
    item.style.cursor = "pointer";

    // Hover effect → mouse lane par bg change, hatane par normal
    item.addEventListener("mouseover", () => {
      item.style.background = "rgba(255,255,255,0.3)";
    });
    item.addEventListener("mouseout", () => {
      item.style.background = "transparent";
    });

    // Kisi bhi item par click hote hi menu hide kar do
    item.addEventListener("click", () => {
      menu.style.display = "none";
    });

    // Agar item ka text "Refresh" hai → page reload kar do
    if (text === "Refresh") {
      item.addEventListener("click", () => {
        location.reload();
      });
    }

    // Bana hua item menu ke andar add kar do
    menu.appendChild(item);
  };

  // Yahan tum jitne chahe menu items create kar sakte ho
   mkItem("View");
  mkItem("Refresh");
   mkItem("Story by");
    mkItem("New");
     mkItem("Display Setting");
    mkItem("Open in Terminal");
  mkItem("Open Box");
};

// Pehle right-click menu ko initialize karo
rightClickMenu();

// Right-click hone par menu show kar do cursor ke paas
window.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // browser ka default right-click menu hata do
  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
});

// Normal click (kahin bhi) par menu hide kar do
window.addEventListener("click", () => {
  menu.style.display = "none";
});
