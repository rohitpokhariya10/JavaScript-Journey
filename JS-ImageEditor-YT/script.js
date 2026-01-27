// Filters ka object
let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },

  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 300,
    unit: "deg"
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px"
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%"
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  }
};
//canvas element ko select kara
const imageCanvas = document.querySelector("#image-canvas")

const imageInput = document.querySelector("#image-input")
//ye smj ni aya
const canvasCtx = imageCanvas.getContext("2d")
//reset button
const resetBtn = document.querySelector("#reset-btn")
//download button
const downloadBtn = document.querySelector("#download-btn")
//presets
const presetsContainer = document.querySelector(".presets")


let file = null
let image = null//grobal variable bna lie img store karne ke lie

const filtersContainer = document.querySelector(".filters")

//JS ki help se filter bnane hunge ---> createEkement ki help se
function createFilterElement(name, unit = "%", value, min, max) {

  let div = document.createElement("div")
  div.classList.add("filter")

  let input = document.createElement("input")

  //console.log(input);
  //jo input mila vo input object ki form me hi hota hai.
  //onject islie bolte hai kyuki iske andar ----> Kyunki iske andar properties + methods hoti hain
  input.type = "range";
  input.value = value;
  input.min = min;
  input.max = max;
  input.id = name;

  let p = document.createElement("p")
  p.innerText = name


  //DOM ke andar ye element ban jayega
  div.appendChild(p)
  div.appendChild(input)

  //input change hone par photo me filter apply ho
  input.addEventListener("input", function (e) {
    // console.log(e.target.value);
    //console.log(name);//name = function ka parameter
    //console.log(input);
    //console.log(input.value);
    //console.log(filters[name]);//example--> filters ke andar brightness ki value

    filters[name].value = input.value;
    //console.log(name,filters[name]);
    applyFilters()








  })

  return div
}

//filters create hunge js ki help se
function createFilters() {

  Object.keys(filters).forEach(function (key) {

    //console.log(key , filters[key]);
    //function call
    const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
    //console.log(filterElement);

    //ui me jha pe chate the vhi pe sare filters aajayenge
    filtersContainer.appendChild(filterElement);


  })
}
createFilters()


//change kyun--->kyunki phele input ki value null hogi user ne koi bhi file select nhi ki hogi
//fir jese hi user koi image select krega input value null se change hue tabhi change laga
imageInput.addEventListener("change", function (e) {
  //console.log("input value changed");
  //change event ka object hai---> e
  //console.log(e);
  //target --> event object (e) ki ek property hai
  console.log(e.target);
  //jo image input field me dali vo miljayegi
  console.log(e.target.files[0]);

  //user ne ek image select kari
  const file = e.target.files[0];
  //jesi user ne ek image select kari place holder gayab
  const imagePlaceholder = document.querySelector(".placeholder")
  //canvas ki display none hai initially (style.css me display none kari hai)----> taki jo icon hai placeholder vo center me asake
  imageCanvas.style.display = "block"
  //jo vo icon hai gallery vala usko htado image select hone ke baad
  imagePlaceholder.style.display = "none";


  //js ki help se image create karre hai
  const img = new Image()
  //file ko URL me convert karrhe hai
  img.src = URL.createObjectURL(file);
  //image ko canvas me load karo
  img.onload = () => {
    //img ek function-scoped tak hi hai,isliye image variable banaya global”
    image = img
    //jitni image ki h and w hoga canvas bhi usi according ho jayega
    imageCanvas.width = img.width
    imageCanvas.height = img.height

    //canvas me image draw isi  se ayegi
    canvasCtx.drawImage(img, 0, 0)
  }





})

//
// Ye function tab call hoga jab koi bhi slider (filter) change hoga
function applyFilters() {
  if (!image) return;

  // 1️⃣ clear
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

  // 2️⃣ reset states
  canvasCtx.globalAlpha = 1;
  canvasCtx.filter = "none";

  // 3️⃣ set filters---> + string ko concatenate (jodne) ke liye use horha hai
  //sare filters ko ek  single string bnanane ke lie
  //example-->ctx.filter = "brightness(120%) contrast(110%) blur(2px)";

  canvasCtx.filter =
    `brightness(${filters.brightness.value}%) ` +
    `contrast(${filters.contrast.value}%) ` +
    `saturate(${filters.saturation.value}%) ` +
    `hue-rotate(${filters.hueRotation.value}deg) ` +
    `blur(${filters.blur.value}px) ` +
    `grayscale(${filters.grayscale.value}%) ` +
    `sepia(${filters.sepia.value}%) ` +
    `invert(${filters.invert.value}%)`;

  // 4️⃣ opacity
  canvasCtx.globalAlpha = filters.opacity.value / 100;

  // 5️⃣ draw
  canvasCtx.drawImage(image, 0, 0);
}


//rese filters
resetBtn.addEventListener("click", () => {
  // Filters ka object
  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%"
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%"
    },

    saturation: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%"
    },
    hueRotation: {
      value: 0,
      min: 0,
      max: 300,
      unit: "deg"
    },
    blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px"
    },
    grayscale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%"
    },
    sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%"
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%"
    },
    invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%"
    }
  };
  applyFilters()

  //previous filter ko htao phele
  filtersContainer.innerHTML = ""
  createFilters()
})

//Download function functionality
downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a")
  link.download = "edited-image-By-Rohit.png"
  link.href = imageCanvas.toDataURL()
  link.click()
})


//presets
const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vivid: {
    brightness: 110,
    contrast: 120,
    saturation: 160,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  drama: {
    brightness: 105,
    contrast: 140,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 105,
    contrast: 90,
    saturation: 70,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 40,
    opacity: 100,
    invert: 0
  },

  oldSchool: {
    brightness: 95,
    contrast: 110,
    saturation: 60,
    hueRotation: 0,
    blur: 1,
    grayscale: 20,
    sepia: 30,
    opacity: 100,
    invert: 0
  },

  blackWhite: {
    brightness: 100,
    contrast: 130,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 100,
    contrast: 105,
    saturation: 110,
    hueRotation: 190,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturation: 120,
    hueRotation: 20,
    blur: 0,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  }
};
//preset button create karre hai
Object.keys(presets).forEach((presetName) => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("btn");
  presetButton.innerText = presetName;

  // ✅ click listener INSIDE loop
  presetButton.addEventListener("click", () => {
    const preset = presets[presetName];

    Object.keys(filters).forEach((filterName) => {
      filters[filterName].value = preset[filterName];

      // slider sync
      const input = document.getElementById(filterName);
      if (input) input.value = preset[filterName];
    });

    applyFilters();
  });

  presetsContainer.appendChild(presetButton);
});
