/* =====================================================
   KRISHI MITRA - SCRIPT.JS
   PART 1/3
===================================================== */

/* =====================================================
   DATA
===================================================== */

const products = [
{
id:1,
name:"Premium Wheat Seeds",
category:"Seeds",
icon:"🌾",
price:599,
mrp:749,
rating:4.8,
badge:"bestseller",
description:"High germination wheat seeds suitable for Indian climate."
},
{
id:2,
name:"Hybrid Rice Seeds",
category:"Seeds",
icon:"🌱",
price:699,
mrp:849,
rating:4.7,
badge:"new",
description:"Hybrid rice seeds with high yield potential."
},
{
id:3,
name:"Organic Compost",
category:"Organic",
icon:"🌿",
price:399,
mrp:499,
rating:4.9,
badge:"organic",
description:"Rich organic compost for healthy crops."
},
{
id:4,
name:"Bio Fertilizer",
category:"Fertilizers",
icon:"🧪",
price:449,
mrp:549,
rating:4.6,
badge:"sale",
description:"Improves soil fertility naturally."
},
{
id:5,
name:"NPK Fertilizer",
category:"Fertilizers",
icon:"🧴",
price:799,
mrp:950,
rating:4.7,
badge:"bestseller",
description:"Balanced nutrition for crops."
},
{
id:6,
name:"Neem Pesticide",
category:"Protection",
icon:"🌳",
price:349,
mrp:420,
rating:4.5,
badge:"organic",
description:"Natural pest control solution."
},
{
id:7,
name:"Crop Protection Spray",
category:"Protection",
icon:"🚿",
price:499,
mrp:620,
rating:4.6,
badge:"sale",
description:"Protects against common crop diseases."
},
{
id:8,
name:"Garden Sprayer",
category:"Equipment",
icon:"🚜",
price:999,
mrp:1200,
rating:4.8,
badge:"new",
description:"Durable sprayer for farms."
},
{
id:9,
name:"Drip Kit",
category:"Equipment",
icon:"💧",
price:1499,
mrp:1799,
rating:4.9,
badge:"bestseller",
description:"Efficient water-saving irrigation kit."
},
{
id:10,
name:"Tomato Seeds",
category:"Seeds",
icon:"🍅",
price:199,
mrp:249,
rating:4.5,
badge:"new",
description:"Healthy tomato seed variety."
},
{
id:11,
name:"Organic Growth Booster",
category:"Organic",
icon:"🌿",
price:549,
mrp:650,
rating:4.7,
badge:"organic",
description:"Boost crop growth naturally."
},
{
id:12,
name:"Power Tiller Tool Set",
category:"Equipment",
icon:"🛠️",
price:1999,
mrp:2499,
rating:4.8,
badge:"sale",
description:"Essential farming tool set."
}
];

const cropGuides = [
{
id:1,
name:"Wheat",
hindi:"गेहूं",
icon:"🌾",
season:"Rabi",
water:"Medium",
description:"Popular winter crop.",
steps:[
"Prepare fertile soil",
"Sow quality seeds",
"Apply fertilizer",
"Regular irrigation",
"Harvest after maturity"
]
},
{
id:2,
name:"Rice",
hindi:"धान",
icon:"🌱",
season:"Kharif",
water:"High",
description:"Major staple crop.",
steps:[
"Nursery preparation",
"Transplant seedlings",
"Water management",
"Pest monitoring",
"Harvest carefully"
]
},
{
id:3,
name:"Cotton",
hindi:"कपास",
icon:"☁️",
season:"Kharif",
water:"Medium",
description:"Cash crop."
},
{
id:4,
name:"Sugarcane",
hindi:"गन्ना",
icon:"🎋",
season:"Annual",
water:"High",
description:"High yielding crop."
},
{
id:5,
name:"Tomato",
hindi:"टमाटर",
icon:"🍅",
season:"All",
water:"Medium",
description:"Vegetable crop."
},
{
id:6,
name:"Potato",
hindi:"आलू",
icon:"🥔",
season:"Rabi",
water:"Medium",
description:"Popular food crop."
},
{
id:7,
name:"Onion",
hindi:"प्याज",
icon:"🧅",
season:"Rabi",
water:"Low",
description:"Storage crop."
},
{
id:8,
name:"Maize",
hindi:"मक्का",
icon:"🌽",
season:"Kharif",
water:"Medium",
description:"Versatile cereal crop."
}
];

let reviews = [
{
id:1,
name:"Ramesh Patil",
location:"Pune",
crop:"Wheat",
product:"Premium Wheat Seeds",
rating:5,
text:"Excellent yield and quality.",
helpful:12,
date:"2 days ago"
},
{
id:2,
name:"Suresh Kumar",
location:"Nagpur",
crop:"Rice",
product:"Hybrid Rice Seeds",
rating:5,
text:"Very good germination rate.",
helpful:9,
date:"5 days ago"
},
{
id:3,
name:"Amit Singh",
location:"Nashik",
crop:"Tomato",
product:"Organic Compost",
rating:4,
text:"Healthy growth observed.",
helpful:7,
date:"1 week ago"
},
{
id:4,
name:"Rajesh Sharma",
location:"Delhi",
crop:"Cotton",
product:"Bio Fertilizer",
rating:5,
text:"Improved productivity.",
helpful:5,
date:"2 weeks ago"
},
{
id:5,
name:"Kiran More",
location:"Kolhapur",
crop:"Sugarcane",
product:"NPK Fertilizer",
rating:4,
text:"Good crop response.",
helpful:6,
date:"3 weeks ago"
},
{
id:6,
name:"Prakash",
location:"Satara",
crop:"Onion",
product:"Neem Pesticide",
rating:5,
text:"Natural and effective.",
helpful:11,
date:"1 month ago"
},
{
id:7,
name:"Mahesh",
location:"Ahmednagar",
crop:"Maize",
product:"Drip Kit",
rating:5,
text:"Saved lots of water.",
helpful:13,
date:"1 month ago"
},
{
id:8,
name:"Vijay",
location:"Aurangabad",
crop:"Potato",
product:"Garden Sprayer",
rating:4,
text:"Easy to use equipment.",
helpful:4,
date:"1 month ago"
}
];

/* =====================================================
   GLOBAL STATE
===================================================== */

let currentCategory = "All";
let searchTerm = "";

let cart = JSON.parse(
localStorage.getItem("krishi_cart")
) || [];

/* =====================================================
   HELPERS
===================================================== */

function saveCart() {
localStorage.setItem(
"krishi_cart",
JSON.stringify(cart)
);
}

function formatPrice(price){
return `₹${price}`;
}

function getStars(rating){
const full = Math.round(rating);
return "★".repeat(full) + "☆".repeat(5-full);
}

/* =====================================================
   TOAST
===================================================== */

function showToast(message,type="success"){

const toast=document.getElementById("toast");
if(!toast) return;

toast.className=`toast show toast-${type}`;
toast.innerHTML=message;

clearTimeout(toast.timer);

toast.timer=setTimeout(()=>{
toast.className="toast";
},3000);
}

/* =====================================================
   PRODUCT FILTERS
===================================================== */

function renderFilters(){

const container=document.getElementById("filter-bar");
if(!container) return;

const categories=[
"All",
...new Set(products.map(p=>p.category))
];

container.innerHTML=categories.map(cat=>`
<button
class="filter-btn ${cat===currentCategory?'active':''}"
onclick="setCategory('${cat}')">
${cat}
</button>
`).join("");
}

function setCategory(category){
currentCategory=category;
renderFilters();
renderProducts();
}

/* =====================================================
   PRODUCTS
===================================================== */

function renderProducts(){

const grid=document.getElementById("products-grid");
const empty=document.getElementById("no-products");

if(!grid) return;

let filtered=products.filter(product=>{

const categoryMatch=
currentCategory==="All" ||
product.category===currentCategory;

const searchMatch=
product.name.toLowerCase()
.includes(searchTerm.toLowerCase());

return categoryMatch && searchMatch;

});

if(filtered.length===0){
grid.innerHTML="";
empty?.classList.remove("hidden");
return;
}

empty?.classList.add("hidden");

grid.innerHTML=filtered.map(product=>`

<div class="product-card">

<div class="product-badge badge-${product.badge}">
${product.badge}
</div>

<div class="product-img">
${product.icon}
</div>

<div class="product-body">

<div class="product-category">
${product.category}
</div>

<h3 class="product-name">
${product.name}
</h3>

<p class="product-desc">
${product.description}
</p>

<div class="product-rating">
<span class="stars">
${getStars(product.rating)}
</span>
<span class="rating-num">
${product.rating}
</span>
</div>

</div>

<div class="product-footer">

<div>
<div class="product-price">
₹${product.price}
</div>

<div class="product-mrp">
₹${product.mrp}
</div>
</div>

<div class="product-actions">

<button
class="btn-view-details"
onclick="openProductModal(${product.id})">
Details
</button>

<button
class="btn-add-cart"
onclick="addToCart(${product.id})">
Add
</button>

</div>

</div>

</div>

`).join("");
}

/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProductModal(id){

const product=
products.find(p=>p.id===id);

if(!product) return;

const modal=
document.getElementById("product-modal");

const box=
document.getElementById("product-modal-box");

box.innerHTML=`

<div class="modal-header">

<button
class="modal-close-btn"
onclick="closeProductModal()">
✕
</button>

<div class="modal-icon">
${product.icon}
</div>

<div class="modal-title">
${product.name}
</div>

<div class="modal-subtitle">
${product.category}
</div>

</div>

<div class="modal-body">

<p class="modal-desc">
${product.description}
</p>

<div class="modal-price-row">

<div>
<div class="mp-price">
₹${product.price}
</div>

<div class="mp-mrp">
₹${product.mrp}
</div>
</div>

<button
class="btn-primary"
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>
`;

modal.classList.add("open");
}

function closeProductModal(e){

if(
!e ||
e.target.id==="product-modal"
){
document
.getElementById("product-modal")
.classList.remove("open");
}
}

/* =====================================================
   CART
===================================================== */

function addToCart(id){

const item=
cart.find(x=>x.id===id);

if(item){
item.qty++;
}else{

const product=
products.find(p=>p.id===id);

cart.push({
...product,
qty:1
});
}

saveCart();
updateCartBadge();

showToast("Added to cart");
}
/* =====================================================
   CART SIDEBAR
===================================================== */

function openCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");

  if (sidebar) sidebar.classList.add("open");
  if (overlay) overlay.classList.add("open");

  renderCart();
}

function closeCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");

  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");

  if (!badge) return;

  const count = cart.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);

  badge.textContent = count;
}

function renderCart() {

  const body = document.getElementById("cart-body");
  const foot = document.getElementById("cart-foot");

  if (!body || !foot) return;

  if (cart.length === 0) {

    body.innerHTML = `
      <div class="cart-empty">
        <div class="ce-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>
    `;

    foot.innerHTML = `
      <div class="cart-total-row">
        <span class="label">Total</span>
        <span class="value">₹0</span>
      </div>
    `;

    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">

      <div class="ci-icon">
        ${item.icon}
      </div>

      <div class="ci-info">

        <div class="ci-name">
          ${item.name}
        </div>

        <div class="ci-sub">
          ₹${item.price} each
        </div>

        <div class="ci-qty-row">

          <button
            class="qty-btn"
            onclick="decreaseQty(${item.id})">
            -
          </button>

          <span class="qty-num">
            ${item.qty}
          </span>

          <button
            class="qty-btn"
            onclick="increaseQty(${item.id})">
            +
          </button>

          <button
            class="ci-remove"
            onclick="removeFromCart(${item.id})">
            Remove
          </button>

        </div>

      </div>

      <div class="ci-price">
        ₹${item.price * item.qty}
      </div>

    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.qty);
  }, 0);

  const shipping = subtotal > 0 ? 99 : 0;

  const total = subtotal + shipping;

  foot.innerHTML = `
    <div class="cart-summary">
      <span class="label">Subtotal</span>
      <span class="value">₹${subtotal}</span>
    </div>

    <div class="cart-summary">
      <span class="label">Shipping</span>
      <span class="value">₹${shipping}</span>
    </div>

    <div class="cart-total-row">
      <span class="label">Total</span>
      <span class="value">₹${total}</span>
    </div>

    <button
      class="btn-checkout"
      onclick="checkoutCart()">
      Proceed To Checkout
    </button>
  `;
}

function increaseQty(id) {

  const item = cart.find(x => x.id === id);

  if (!item) return;

  item.qty++;

  saveCart();
  updateCartBadge();
  renderCart();
}

function decreaseQty(id) {

  const item = cart.find(x => x.id === id);

  if (!item) return;

  item.qty--;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function removeFromCart(id) {

  cart = cart.filter(item => item.id !== id);

  saveCart();
  updateCartBadge();
  renderCart();

  showToast("Removed from cart", "error");
}

function checkoutCart() {

  showToast(
    "Checkout functionality coming soon",
    "info"
  );
}

/* =====================================================
   CROP GUIDES
===================================================== */

function renderCropGuides() {

  const grid =
    document.getElementById("guidance-grid");

  if (!grid) return;

  grid.innerHTML = cropGuides.map(crop => `

    <div
      class="crop-card"
      onclick="openCropModal(${crop.id})">

      <div class="crop-card-icon">
        ${crop.icon}
      </div>

      <div class="crop-card-name">
        ${crop.name}
      </div>

      <div class="crop-card-hindi">
        ${crop.hindi}
      </div>

      <div class="crop-card-info">
        ${crop.description}
      </div>

      <div class="crop-tags">

        <span class="crop-tag season">
          ${crop.season}
        </span>

        <span class="crop-tag water">
          ${crop.water}
        </span>

      </div>

    </div>

  `).join("");
}

/* =====================================================
   CROP MODAL
===================================================== */

function openCropModal(id) {

  const crop =
    cropGuides.find(c => c.id === id);

  if (!crop) return;

  const modal =
    document.getElementById("crop-modal");

  const box =
    document.getElementById("crop-modal-box");

  const steps = crop.steps || [
    "Prepare field properly",
    "Use certified seeds",
    "Monitor crop regularly",
    "Apply nutrients",
    "Harvest on time"
  ];

  box.innerHTML = `

    <div class="modal-header">

      <button
        class="modal-close-btn"
        onclick="closeCropModal()">
        ✕
      </button>

      <div class="modal-icon">
        ${crop.icon}
      </div>

      <div class="modal-title">
        ${crop.name}
      </div>

      <div class="modal-subtitle">
        ${crop.hindi}
      </div>

    </div>

    <div class="modal-body">

      <div class="modal-info-grid">

        <div class="modal-info-item">
          <div class="mii-label">Season</div>
          <div class="mii-value">
            ${crop.season}
          </div>
        </div>

        <div class="modal-info-item">
          <div class="mii-label">Water</div>
          <div class="mii-value">
            ${crop.water}
          </div>
        </div>

      </div>

      <p class="modal-desc">
        ${crop.description}
      </p>

      <div class="modal-steps">

        <h4>Growing Steps</h4>

        ${steps.map((step,index)=>`
          <div class="modal-step">

            <div class="step-num">
              ${index+1}
            </div>

            <div class="step-txt">
              ${step}
            </div>

          </div>
        `).join("")}

      </div>

    </div>

  `;

  modal.classList.add("open");
}

function closeCropModal(e) {

  if (
    !e ||
    e.target.id === "crop-modal"
  ) {

    document
      .getElementById("crop-modal")
      .classList.remove("open");
  }
}

/* =====================================================
   REVIEWS
===================================================== */

function renderReviews() {

  const container =
    document.getElementById("reviews-grid");

  if (!container) return;

  container.innerHTML = reviews.map(review => `

    <div class="review-card">

      <div class="reviewer-row">

        <div class="reviewer-avatar">
          👨‍🌾
        </div>

        <div>

          <div class="reviewer-name">
            ${review.name}
          </div>

          <div class="reviewer-loc">
            ${review.location}
          </div>

          <div class="reviewer-crop">
            ${review.crop}
          </div>

        </div>

      </div>

      <div class="review-stars">
        ${"★".repeat(review.rating)}
        ${"☆".repeat(5-review.rating)}
      </div>

      <div class="review-text">
        ${review.text}
      </div>

      <div class="review-meta">

        <span class="review-product">
          ${review.product}
        </span>

        <span class="review-date">
          ${review.date}
        </span>

      </div>

      <br>

      <button
        class="review-helpful"
        onclick="markHelpful(${review.id})">

        👍 Helpful
        (${review.helpful})

      </button>

    </div>

  `).join("");
}

/* =====================================================
   HELPFUL BUTTON
===================================================== */

function markHelpful(id) {

  const review =
    reviews.find(r => r.id === id);

  if (!review) return;

  review.helpful++;

  renderReviews();

  showToast(
    "Thanks for your feedback",
    "success"
  );
}

/* =====================================================
   RATING SUMMARY
===================================================== */

function renderRatingSummary() {

  const container =
    document.getElementById("rating-summary");

  if (!container) return;

  const total = reviews.length;

  const avg =
    reviews.reduce(
      (sum,r)=>sum+r.rating,
      0
    ) / total;

  const counts = {
    5:0,
    4:0,
    3:0,
    2:0,
    1:0
  };

  reviews.forEach(review => {
    counts[review.rating]++;
  });

  container.innerHTML = `

    <div class="rs-big">

      <span class="rs-num">
        ${avg.toFixed(1)}
      </span>

      <span class="rs-stars">
        ★★★★★
      </span>

      <span class="rs-total">
        ${total} Reviews
      </span>

    </div>

    <div class="rs-bars">

      ${[5,4,3,2,1].map(star=>{

        const percent =
          total
          ? (counts[star]/total)*100
          : 0;

        return `

          <div class="rs-row">

            <div class="rs-label">
              ${star}★
            </div>

            <div class="rs-track">
              <div
                class="rs-fill"
                style="width:${percent}%">
              </div>
            </div>

            <div class="rs-count">
              ${counts[star]}
            </div>

          </div>

        `;

      }).join("")}

    </div>

  `;
}
/* =====================================================
   REVIEW FORM
===================================================== */

function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById("r-name").value.trim();
  const location = document.getElementById("r-location").value.trim();
  const product = document.getElementById("r-product").value;
  const crop = document.getElementById("r-crop").value.trim();
  const rating = Number(
    document.getElementById("r-rating").value
  );
  const text = document.getElementById("r-text").value.trim();

  if (!name || !location || !product || !text) {
    showToast("Please fill all required fields", "error");
    return;
  }

  if (rating === 0) {
    showToast("Please select a rating", "error");
    return;
  }

  reviews.unshift({
    id: Date.now(),
    name,
    location,
    crop: crop || "General Farming",
    product,
    rating,
    text,
    helpful: 0,
    date: "Just now"
  });

  renderReviews();
  renderRatingSummary();

  document.getElementById("review-form").reset();
  document.getElementById("r-rating").value = "0";

  updateStarPicker(0);

  showToast(
    "Review submitted successfully",
    "success"
  );
}

/* =====================================================
   STAR PICKER
===================================================== */

function updateStarPicker(value) {

  const stars =
    document.querySelectorAll(
      "#star-picker span"
    );

  stars.forEach(star => {

    const current =
      Number(star.dataset.val);

    if (current <= value) {
      star.classList.add("lit");
    } else {
      star.classList.remove("lit");
    }

  });
}

function initializeStarPicker() {

  const stars =
    document.querySelectorAll(
      "#star-picker span"
    );

  stars.forEach(star => {

    star.addEventListener(
      "click",
      () => {

        const value =
          Number(star.dataset.val);

        document.getElementById(
          "r-rating"
        ).value = value;

        updateStarPicker(value);

      }
    );

  });
}

/* =====================================================
   CONTACT FORM
===================================================== */

function submitContact(event) {

  event.preventDefault();

  const form = event.target;

  showToast(
    "Message sent successfully",
    "success"
  );

  form.reset();
}

/* =====================================================
   PRODUCT DROPDOWN
===================================================== */

function populateProductDropdown() {

  const select =
    document.getElementById("r-product");

  if (!select) return;

  const defaultOption =
    `<option value="">Select product…</option>`;

  const options =
    products.map(product => `
      <option value="${product.name}">
        ${product.name}
      </option>
    `).join("");

  select.innerHTML =
    defaultOption + options;
}

/* =====================================================
   SEARCH
===================================================== */

function initializeSearch() {

  const searchInput =
    document.getElementById(
      "search-input"
    );

  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    function () {

      searchTerm = this.value.trim();

      renderProducts();

    }
  );
}

/* =====================================================
   STICKY NAVBAR
===================================================== */

function handleNavbarScroll() {

  const navbar =
    document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

/* =====================================================
   MOBILE MENU
===================================================== */

function initializeMobileMenu() {

  const hamburger =
    document.getElementById(
      "hamburger"
    );

  const navLinks =
    document.getElementById(
      "nav-links"
    );

  if (!hamburger || !navLinks)
    return;

  hamburger.addEventListener(
    "click",
    () => {

      hamburger.classList.toggle(
        "open"
      );

      navLinks.classList.toggle(
        "open"
      );

    }
  );

  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          hamburger.classList.remove(
            "open"
          );

          navLinks.classList.remove(
            "open"
          );

        }
      );

    });

}

/* =====================================================
   SMOOTH SCROLL
===================================================== */

function initializeSmoothScroll() {

  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );

  links.forEach(link => {

    link.addEventListener(
      "click",
      function (e) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) return;

        const target =
          document.querySelector(
            targetId
          );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

}

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

function updateActiveNav() {

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const links =
    document.querySelectorAll(
      ".nav-link"
    );

  let current = "";

  sections.forEach(section => {

    const top =
      section.offsetTop - 150;

    const height =
      section.offsetHeight;

    if (
      window.scrollY >= top &&
      window.scrollY <
      top + height
    ) {

      current =
        section.getAttribute("id");

    }

  });

  links.forEach(link => {

    link.classList.remove(
      "active"
    );

    const href =
      link.getAttribute("href");

    if (href === "#" + current) {

      link.classList.add(
        "active"
      );

    }

  });

}

/* =====================================================
   RESPONSIVE EVENTS
===================================================== */

function initializeResponsiveEvents() {

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 768
      ) {

        document
          .getElementById(
            "nav-links"
          )
          ?.classList.remove(
            "open"
          );

        document
          .getElementById(
            "hamburger"
          )
          ?.classList.remove(
            "open"
          );

      }

    }
  );

}

/* =====================================================
   FEATURES SECTION
===================================================== */

function renderFeatures() {

  const features = [
    {
      icon:"🌱",
      title:"Premium Seeds",
      desc:"Certified high-yield seeds."
    },
    {
      icon:"🧪",
      title:"Fertilizers",
      desc:"Balanced crop nutrition."
    },
    {
      icon:"🌿",
      title:"Organic Products",
      desc:"Eco-friendly farming."
    },
    {
      icon:"🚜",
      title:"Equipment",
      desc:"Modern farming tools."
    },
    {
      icon:"📚",
      title:"Crop Guidance",
      desc:"Expert cultivation support."
    },
    {
      icon:"📦",
      title:"Fast Delivery",
      desc:"Across India delivery."
    }
  ];

  const container =
    document.getElementById(
      "features-grid"
    );

  if (!container) return;

  container.innerHTML =
    features.map(feature => `
      <div class="feature-card">

        <div class="fc-icon">
          ${feature.icon}
        </div>

        <div class="fc-title">
          ${feature.title}
        </div>

        <div class="fc-desc">
          ${feature.desc}
        </div>

      </div>
    `).join("");
}

/* =====================================================
   ESC KEY SUPPORT
===================================================== */

function initializeKeyboardSupport() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeCart();
        closeCropModal();
        closeProductModal();

      }

    }
  );

}

/* =====================================================
   SCROLL EVENTS
===================================================== */

function initializeScrollEvents() {

  window.addEventListener(
    "scroll",
    () => {

      handleNavbarScroll();
      updateActiveNav();

    }
  );

}

/* =====================================================
   PAGE INIT
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFeatures();

    renderFilters();

    renderProducts();

    renderCropGuides();

    renderReviews();

    renderRatingSummary();

    populateProductDropdown();

    initializeStarPicker();

    initializeSearch();

    initializeMobileMenu();

    initializeSmoothScroll();

    initializeResponsiveEvents();

    initializeKeyboardSupport();

    initializeScrollEvents();

    updateCartBadge();

    renderCart();

    handleNavbarScroll();

    updateActiveNav();

    showToast(
      "Welcome to Krishi Mitra 🌾",
      "success"
    );

  }
);

/* =====================================================
   GLOBAL ACCESS
===================================================== */

window.openCart = openCart;
window.closeCart = closeCart;

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;

window.openCropModal = openCropModal;
window.closeCropModal = closeCropModal;

window.openProductModal =
  openProductModal;

window.closeProductModal =
  closeProductModal;

window.markHelpful =
  markHelpful;

window.submitReview =
  submitReview;

window.submitContact =
  submitContact;

window.setCategory =
  setCategory;