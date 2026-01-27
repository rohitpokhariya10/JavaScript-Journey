// SIMPLE RIGHT-CLICK CONTEXT MENU -----

// Create the context menu
const createUI = () => {

  // MENU DIV BANANA
  const menu = document.createElement("div");
 // menu.id = "customContextMenu";
  menu.style.position = "fixed";
  menu.style.minWidth = "200px";
  menu.style.background = "grey";
  menu.style.padding = "6px";
  menu.style.borderRadius = "8px";
  menu.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
  menu.style.display = "none";
 

  // --- FUNCTION TO MAKE MENU ITEMS ---
  const mkItem = (text, id) => {
    const it = document.createElement("div");
    it.id = id;
    it.style.padding = "10px";
    it.style.cursor = "pointer";
    it.style.borderRadius = "6px";
    it.innerText = text;

    it.addEventListener("mouseover", () => {
      it.style.background = "rgba(255,255,255,0.3)";
    });
    it.addEventListener("mouseout", () => {
      it.style.background = "transparent";
    });

    return it; // item wapas dedo
  };

  // ---- 2 MENU ITEMS BAN GAYE ----
  const refreshItem = mkItem("Refresh", "cm-refresh");
  const openBoxItem = mkItem("Open Box", "cm-openbox");
  const openTerminal = mkItem("Open Terminal" , "ot");
  const DisplaySetting = mkItem("Display Setting" , "dt");

  // ---- ITEMS MENU ME ADD KAR DO ----
  menu.appendChild(refreshItem);
  menu.appendChild(openBoxItem);
  menu.appendChild(openTerminal);
  menu.appendChild(DisplaySetting);

  // MENU KO BODY ME ADD KARO
  document.body.appendChild(menu);

  return {
    //createUI() ne onject return kiya
    menu, refreshItem, openBoxItem };
};





// UI create karo
//object destructring se en teenko vo variables me store karlia hai and ab me ise khi
//bhi use kar skta hu
const { menu, refreshItem, openBoxItem } = createUI();



// --- RIGHT CLICK par menu show ---
//window---> full browser window
//contextmenu---> jab user mouse pe right click krega
window.addEventListener("contextmenu", (e) => {
  console.log(e);
  
  e.preventDefault(); // normal browser menu hatao

  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
});


// --- NORMAL CLICK par menu hide (kahi par bhi click) ---
window.addEventListener("click", () => {
  menu.style.display = "none";
});

// ---- REFRESH ITEM KA CLICK ----
refreshItem.addEventListener("click", () => {
  //location--->browser ka built in object hota hai jo ki global window object ke andar 
  //hota hai(current page ki location(url) ko btata hai)
  //reload()---->ye loaction object ka method hai -->current page ko reload kro
  location.reload();
});

// ---- OPEN BOX ITEM KA CLICK ----
openBoxItem.addEventListener("click", () => {
  alert("Open Box clicked! (Tum yahan kuch bhi kar sakte ho)");
});
