Radha Radha

This proje t goals in js
1)show real products
2)show real popular products
3)when user clivk on add button the product will be add to the cart (this functionality)




1) Project goals (JS)

Show real products — frontend pe products ka data dikhe (array of objects ya API se).

Show real popular products — popular products ko alag section ya filter se dikhana.

Add to cart functionality — jab user Add button pe click kare to woh product cart mein add ho jaaye (state ya array update + UI refresh).

2) target ka matlab

event.target batata hai kis element pe click (ya koi event) actually hua tha.

Example: agar button ke andar ek <span> hai aur user span pe click kare, to event.target span hoga, lekin event.currentTarget ya this wo element hoga jisme listener laga hua hai.

3) Event listener parent pe kyun lagaya? (Event Delegation)

Aapne har product ke button pe alag listener na laga ke products container (parent) pe ek listener lagaya — isko event delegation kehte hain.

Kyun?



Performance: bahut saare buttons hon to ek hi listener better hota hai.

Dynamic elements: agar future mein products add/remove honge to baar-baar listener attach karne ki zaroorat nahi.

Simplicity: central handling, event ke target se pata laga lenge kaunsa button click hua.

Example (Event Delegation):



<div id="products">
  <div class="product" data-index="0">
    <button class="add" data-index="0">Add</button>
  </div>
  <div class="product" data-index="1">
    <button class="add" data-index="1">Add</button>
  </div>
</div>

const productsDiv = document.getElementById('products');

productsDiv.addEventListener('click', function(event) {
  // check if clicked element is an add button (or inside it)
  if (event.target.classList.contains('add')) {
    const index = event.target.dataset.index;
    addToCart(index); // aapka function
  }
});

4) classList — array-like structure

element.classList ek DOMTokenList hota hai — behave karta hai array-like (iterate kar sakte ho) par woh actual array nahi.

Useful methods:

classList.add('cls') — class add kare

classList.remove('cls') — class remove kare

classList.toggle('cls') — agar hai to remove, nahin toh add

classList.contains('cls') — check karta hai class present hai ya nahi (boolean)

for (const c of el.classList) { ... } — iterate kar sakte ho

Example:

const el = document.querySelector('.card');
el.classList.add('active');
if (el.classList.contains('active')) {
  // kuch karo
}
el.classList.toggle('hidden');

5) contains() kya karta hai?

element.classList.contains('classname') => true/false return karta hai.

Use-case: condition check karne ke liye (kya clicked element ek specific button ya state mein hai).

6) data-index="3" ka matlab

HTML attribute data-* custom data store karne ke liye use hota hai.

data-index="3" matlab: is element ka index = 3 (aapka JS code is index se product identify karega).

JS se access: element.dataset.index (ye string return karega — zarurat ho toh Number(...) se convert karo).

Example:

<button class="add" data-index="3">Add</button>

// agar ye button click hua:
console.log(event.target.dataset.index); // "3"
const idx = Number(event.target.dataset.index); // 3 (number)

7) console.log(dets.target.dataset.index);

Yahan dets aapke event object ka naam hai (normally event).

dets.target.dataset.index se aapko clicked element ka data-index milega.

Useful to know kaunse product ko add karna hai.

8) Event bubbling kya hai?

Event bubbling: jab kisi child element pe event hota hai, woh event DOM tree mein child → parent → grandparent ... tak bubble (upar) ho jata hai.

Isliye agar #products pe listener laga hai, to child button pe click hone par bhi parent ka listener trigger ho jayega.

Agar aap chahte ho ki event parent tak na jaaye: event.stopPropagation() use karo.

event.currentTarget batata hai jisme listener laga hua hai (parent), event.target batata hai actual clicked element (child).

Diagram (soch lo):
button (clicked) → bubbles to product div → bubbles to products container → bubbles to document

9) forEach loop — object and index

Agar aapke paas products array hai:

products.forEach((product, index) => {
  // product = current item (object)
  // index = us item ka position in array (0,1,2...)
});


forEach callback parameters (in order): (element, index, array) — agar chahe to teenon use kar sakte ho.

Example:

const products = [
  {id:1, name:'Sofa'},
  {id:2, name:'Chair'}
];

products.forEach((obj, idx) => {
  console.log(idx, obj.name);
});


Notes for exam/notes:

obj (ya product) — current element

index — position in array

array — original array (optional)

10) Quick example — Add to cart flow (summary)
const products = [{id:0, name:'Sofa'}, {id:1, name:'Chair'}];
const productsDiv = document.getElementById('products');

function render() {
  productsDiv.innerHTML = products.map((p, i) => `
    <div class="product">
      <h4>${p.name}</h4>
      <button class="add" data-index="${i}">Add</button>
    </div>
  `).join('');
}

productsDiv.addEventListener('click', (event) => {
  if (event.target.classList.contains('add')) {
    const idx = Number(event.target.dataset.index);
    // add to cart logic
    console.log('Add product index:', idx);
  }
});

render();

11) Short tips (one-liners)

Event delegation = parent pe listener + event.target = scalable.

dataset stores data- attributes as strings.

classList handy methods: add, remove, toggle, contains.

forEach((item, index) => ...) — index bhi milta hai.

Use event.stopPropagation() agar bubble rokna ho.

event.currentTarget vs event.target — currentTarget = listener laga hua element; target = actually clicked element.