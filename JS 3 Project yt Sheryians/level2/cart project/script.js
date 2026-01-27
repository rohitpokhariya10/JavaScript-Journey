const products = [
      {
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
        imgName: "modern-sofa",
        heading: "Modern Lounge Sofa",
        description: "Handcrafted wooden frame with premium fabric upholstery.",
        price: "2499"
      },
      {
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop",
        imgName: "comfort-sofa",
        heading: "Luxury Comfort Sofa",
        description: "Soft-touch premium fabric 3-seater with deep cushioning.",
        price: "4199"
      },
      {
        img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&auto=format&fit=crop",
        imgName: "coffee-table",
        heading: "Glass Coffee Table",
        description: "Round tempered-glass top with solid metal legs.",
        price: "899"
      },
      {
        img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop",
        imgName: "floor-lamp",
        heading: "Studio Floor Lamp",
        description: "Warm ambient lighting with an adjustable metal stand.",
        price: "349"
      }
    ];

    const popularProducts = [
      {
        img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop",
        imgName: "office-chair",
        heading: "Ergo Office Chair",
        description: "Ergonomic lumbar support with breathable mesh.",
        price: "1199"
      },
      {
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop",
        imgName: "dining-chair",
        heading: "Classic Dining Chair",
        description: "Minimal wooden frame with cushioned seating.",
        price: "599"
      },
      {
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&auto=format&fit=crop",
        imgName: "king-bed",
        heading: "Premium King Bed",
        description: "Luxury upholstered headboard with strong wooden base.",
        price: "6499"
      }
    ];
     

    //Cart ko initially khali rakhenge
    const cart = [];

    /*********************
     * render products
     *********************/
    function showCaseProducts() {
      const container = document.querySelector(".products");
      let output = "";

      products.forEach((obj, idx) => {
        output += `
          <div class="product w-fit rounded-xl p-2 bg-white shadow-sm">
            <div class="image w-[14rem] h-[13rem] rounded-xl overflow-hidden ">
              <img class="w-full h-full object-cover" src="${obj.img}" alt="${obj.imgName}">
            </div>
            <div class="data w-full px-2 py-4">
              <h1 class="font-semibold text-lg">${obj.heading}</h1>
              <div class="flex justify-between items-center mt-2">
                <div class="w-1/2">
                  <h3 class="font-semibold opacity-60 text-xs line-clamp-2">${obj.description}</h3>
                  <h4 class="font-semibold mt-2">₹${obj.price}</h4>
                </div>
                <button data-index="${idx}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400 flex items-center justify-center">
                  <i  data-index="${idx}" class="add ri-add-line"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });
       

      //isse UI me sara data render hoga (products) ka  jo humne dynamically dala hai upper function showCaseProducts() me
      container.innerHTML = output;
    }
    showCaseProducts();

    /*********************
     * render populars
     *********************/
    function showCasePopularProducts() {
      const container = document.querySelector(".populars");
      let clutter = "";

      popularProducts.forEach(object => {
        clutter += `
          <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0 shadow-sm">
            <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
              <img class="w-full h-full object-cover" src="${object.img}" alt="${object.imgName}">
            </div>
            <div class="data py-2 w-full overflow-hidden">
              <h1 class="leading-none font-semibold">${object.heading}</h1>
              <h4 class="leading-none mt-2 text-xs font-semibold opacity-60 line-clamp-2">${object.description}</h4>
              <h4 class="mt-3 font-semibold text-zinc-500">₹${object.price}</h4>
            </div>
          </div>`;
      });
       

      //isse UI me sara data render hoga (popular products)ka jo humne dynamically dala hai function showCasePopularProducts() se
      container.innerHTML = clutter;
    }
    showCasePopularProducts();


    /*********************
     * add to cart 
     *********************/
    function addToCart(){
      //ael products class par
      let pd = document.querySelector(".products")
      pd.addEventListener("click",function(dets){
        if(dets.target.classList.contains("add")){

                let index = dets.target.dataset.index
                alert(` ${products[index].imgName} Added`)
                //isse pta chal jayega ki humne konse vale product ko add to cart kra uska index ajayega
                console.log(index);
                cart.push(products[index])//eg-->products[1]
                
        }
      


      })
    }
    addToCart()



    //yha pe toggle logic use hua hai
   function showCart(){
  let carticon = document.querySelector(".carticon")
  let cartexpnd = document.querySelector(".cartexpnd")
  let isOpen = false;  // track karo ki cart open hai ya nahi

  carticon.addEventListener("click", function(){
    if(isOpen === false){
      // Cart OPEN karo
      cartexpnd.style.display = "block"
      
      var clutter = "";
      cart.forEach(function(prod, index){
        clutter += ` <div class="flex gap-2 bg-white p-2 rounded-lg">
          <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${prod.img}">
          </div>
          <div>
            <h3 class="font-semibold">${prod.heading}</h3>
            <h5 class="text-sm font-semibold opacity-80">₹${prod.price}</h5>
          </div>
        </div>`;
      })
      cartexpnd.innerHTML = clutter
      isOpen = true
      
    } else {
      // Cart CLOSE karo
      cartexpnd.style.display = "none"
      isOpen = false
    }
  })
}
showCart()