// ===== V-Guard Store - Application Logic =====

// ===== PRODUCT DATA =====
const products = [
  // Water Heaters
  { id:"VG-WH-001", name:"Divino DG 15L Storage Water Heater", category:"Water Heaters", price:8499, originalPrice:11999, rating:4.5, reviews:2340, image:"images/water_heater.png", badge:"Bestseller",
    description:"The V-Guard Divino is a premium 15-litre storage water heater with advanced safety features. Its glass-lined inner tank ensures long-lasting performance while the high-density PUF insulation keeps water hot for longer.",
    specs:[["Capacity","15 Litres"],["Power","2000W"],["Pressure","8 Bar"],["Inner Tank","Glass Lined"],["Warranty","5 Years on Tank"]]},
  { id:"VG-WH-002", name:"Pebble Shine 25L Water Heater", category:"Water Heaters", price:10999, originalPrice:14999, rating:4.3, reviews:1876, image:"images/water_heater.png", badge:"New",
    description:"V-Guard Pebble Shine 25L geyser with vitreous enamel coated tank. Features multi-function safety valve and thermal cut-out for complete protection.",
    specs:[["Capacity","25 Litres"],["Power","2000W"],["Pressure","8 Bar"],["Inner Tank","Vitreous Enamel"],["Warranty","5 Years on Tank"]]},
  { id:"VG-WH-003", name:"Victo Plus 6L Instant Geyser", category:"Water Heaters", price:4299, originalPrice:5999, rating:4.2, reviews:3210, image:"images/water_heater.png", badge:"",
    description:"Compact instant water heater ideal for kitchen use. Advanced copper heating element with ISI mark safety compliance.",
    specs:[["Capacity","6 Litres"],["Power","3000W"],["Heating","Instant"],["Element","Copper"],["Warranty","2 Years"]]},

  // Ceiling Fans
  { id:"VG-FAN-001", name:"Glado 400 1200mm Ceiling Fan", category:"Ceiling Fans", price:2899, originalPrice:3999, rating:4.6, reviews:4521, image:"images/ceiling_fan.png", badge:"Bestseller",
    description:"High-performance ceiling fan with aerodynamic blade design delivering 230 CMM air delivery. Energy-efficient motor with powder-coated finish.",
    specs:[["Sweep Size","1200mm"],["Air Delivery","230 CMM"],["Speed","380 RPM"],["Power","75W"],["Warranty","2 Years"]]},
  { id:"VG-FAN-002", name:"DERA Deco 1200mm Premium Fan", category:"Ceiling Fans", price:3799, originalPrice:4999, rating:4.7, reviews:1890, image:"images/ceiling_fan.png", badge:"Premium",
    description:"Designer ceiling fan with metallic finish and LED light. High-speed motor with superior air delivery for large rooms.",
    specs:[["Sweep Size","1200mm"],["Air Delivery","240 CMM"],["Speed","400 RPM"],["Finish","Metallic"],["Warranty","2 Years"]]},
  { id:"VG-FAN-003", name:"Ecowind BLDC Energy Saver Fan", category:"Ceiling Fans", price:4299, originalPrice:5499, rating:4.8, reviews:2670, image:"images/ceiling_fan.png", badge:"Eco",
    description:"BLDC motor ceiling fan consuming only 35W power. Remote controlled with timer, sleep mode, and boost function.",
    specs:[["Sweep Size","1200mm"],["Power","35W"],["Motor","BLDC"],["Remote","Yes"],["Warranty","3 Years"]]},

  // Stabilizers
  { id:"VG-STB-001", name:"VG Crystal Plus 4KVA Stabilizer", category:"Stabilizers", price:3499, originalPrice:4999, rating:4.4, reviews:5670, image:"images/stabilizer.png", badge:"Top Rated",
    description:"Digital voltage stabilizer for AC up to 1.5 ton. Wide working range of 90V-290V with intelligent time delay system.",
    specs:[["Capacity","4 KVA"],["Input Range","90V-290V"],["Display","Digital LED"],["Suitable For","1.5 Ton AC"],["Warranty","3 Years"]]},
  { id:"VG-STB-002", name:"VND 400 Digital Stabilizer", category:"Stabilizers", price:2799, originalPrice:3599, rating:4.3, reviews:3420, image:"images/stabilizer.png", badge:"",
    description:"Wall-mountable digital stabilizer for AC up to 1.5 ton with advanced microprocessor control and surge protection.",
    specs:[["Capacity","3 KVA"],["Input Range","100V-280V"],["Display","LED"],["Type","Wall Mount"],["Warranty","3 Years"]]},
  { id:"VG-STB-003", name:"Mini Crystal Supreme Stabilizer", category:"Stabilizers", price:1899, originalPrice:2499, rating:4.1, reviews:7800, image:"images/stabilizer.png", badge:"Value",
    description:"Compact stabilizer for TV, Computer, and other electronics. Smart voltage correction with built-in thermal overload.",
    specs:[["Capacity","1 KVA"],["Input Range","90V-290V"],["Suitable For","TV/Computer"],["Type","Desktop"],["Warranty","3 Years"]]},

  // Water Purifiers
  { id:"VG-WP-001", name:"Zenora RO+UV+MB Water Purifier", category:"Water Purifiers", price:12999, originalPrice:17999, rating:4.6, reviews:1540, image:"images/water_purifier.png", badge:"New",
    description:"Advanced 7-stage RO+UV+Mineral Booster water purifier with 10L storage tank. TDS controller for optimized purification.",
    specs:[["Purification","RO+UV+MB"],["Storage","10 Litres"],["TDS Controller","Yes"],["Stages","7"],["Warranty","1 Year"]]},
  { id:"VG-WP-002", name:"Rejive RO Water Purifier", category:"Water Purifiers", price:9999, originalPrice:13999, rating:4.4, reviews:2130, image:"images/water_purifier.png", badge:"",
    description:"RO water purifier with 8L storage, 7-stage purification, and mineral enhancer technology for healthy drinking water.",
    specs:[["Purification","RO+UF"],["Storage","8 Litres"],["Stages","7"],["Filter Life","6000 Litres"],["Warranty","1 Year"]]},

  // Kitchen Appliances
  { id:"VG-KA-001", name:"Ignite 750W Mixer Grinder", category:"Kitchen Appliances", price:3499, originalPrice:4999, rating:4.5, reviews:3870, image:"images/mixer_grinder.png", badge:"Bestseller",
    description:"Powerful 750W mixer grinder with 3 stainless steel jars. Motor overload protection and ergonomic design for comfortable use.",
    specs:[["Power","750W"],["Jars","3 SS Jars"],["Speed","3 + Pulse"],["Blade","SS"],["Warranty","2 Years"]]},
  { id:"VG-KA-002", name:"Induction Cooktop VIC-15", category:"Kitchen Appliances", price:2199, originalPrice:2999, rating:4.3, reviews:2450, image:"images/induction_cooktop.png", badge:"",
    description:"1500W induction cooktop with crystal glass surface and push button controls. 7 preset cooking menus with auto-off timer.",
    specs:[["Power","1500W"],["Surface","Crystal Glass"],["Menus","7 Preset"],["Timer","Yes"],["Warranty","1 Year"]]},
  { id:"VG-KA-003", name:"Spray Steam Iron IRS-02", category:"Kitchen Appliances", price:1299, originalPrice:1799, rating:4.2, reviews:4120, image:"images/steam_iron.png", badge:"",
    description:"1200W steam iron with non-stick coated sole plate. Variable steam control and self-cleaning function for easy maintenance.",
    specs:[["Power","1200W"],["Sole Plate","Non-stick"],["Steam","Variable"],["Self-Clean","Yes"],["Warranty","1 Year"]]},
  { id:"VG-KA-004", name:"Rice Cooker 1.8L", category:"Kitchen Appliances", price:1999, originalPrice:2899, rating:4.4, reviews:3400, image:"images/rice_cooker.png", badge:"Value",
    description:"1.8L electric rice cooker with auto keep-warm function. Comes with measuring cup and rice spoon.",
    specs:[["Capacity","1.8L"],["Power","700W"],["Cook Pan","Anodized Aluminum"],["Lid","Dome Type"],["Warranty","1 Year"]]},

  // Inverters & Batteries
  { id:"VG-INV-001", name:"Sinewave Inverter 850VA", category:"Inverters & Batteries", price:4499, originalPrice:5999, rating:4.5, reviews:2600, image:"images/inverter.png", badge:"Premium",
    description:"Pure sinewave inverter for sensitive electronics. Smart battery management system prevents deep discharge.",
    specs:[["Capacity","850VA"],["Waveform","Pure Sinewave"],["Display","LED Indicators"],["Support","1 Battery"],["Warranty","2 Years"]]},
  { id:"VG-INV-002", name:"Inverter Battery 150Ah", category:"Inverters & Batteries", price:14999, originalPrice:18999, rating:4.6, reviews:1900, image:"images/inverter_battery.png", badge:"Top Rated",
    description:"Tubular inverter battery capable of long power backup. Deep cycle design with low maintenance requirements.",
    specs:[["Capacity","150Ah"],["Type","Tubular"],["Voltage","12V"],["Maintenance","Low"],["Warranty","3 Years"]]},

  // Pumps
  { id:"VG-PMP-001", name:"Self-Priming Pump 1HP", category:"Pumps", price:5999, originalPrice:7999, rating:4.4, reviews:1670, image:"images/pump.png", badge:"",
    description:"1HP self-priming monoblock pump suitable for domestic water supply. High suction lift and corrosion-resistant body.",
    specs:[["Power","1 HP"],["Head","35m"],["Suction","8m"],["Type","Self-Priming"],["Warranty","2 Years"]]},
  { id:"VG-PMP-002", name:"Submersible Pump VAS-30", category:"Pumps", price:8499, originalPrice:10999, rating:4.5, reviews:890, image:"images/pump.png", badge:"",
    description:"3-stage submersible pump for borewell applications. Stainless steel construction with energy-efficient motor.",
    specs:[["Power","1 HP"],["Stages","3"],["Material","SS"],["Head","45m"],["Warranty","2 Years"]]},

  // Air Coolers
  { id:"VG-AC-001", name:"Desert Air Cooler 55L", category:"Air Coolers", price:9999, originalPrice:13499, rating:4.5, reviews:1120, image:"images/air_cooler.png", badge:"Summer Special",
    description:"55-litre desert cooler with dense honeycomb cooling pads. Heavy-duty fan with 4-way air deflection.",
    specs:[["Capacity","55 Litres"],["Cooling Pad","Honeycomb"],["Air Throw","35 Ft"],["Power","190W"],["Warranty","1 Year"]]},

  // Solar
  { id:"VG-SOL-001", name:"Solar Water Heater 200LPD", category:"Solar", price:24999, originalPrice:31999, rating:4.7, reviews:540, image:"images/solar_heater.png", badge:"Eco Friendly",
    description:"200LPD non-pressurized solar water heater with high-efficiency evacuated tubes. Zero electricity consumption.",
    specs:[["Capacity","200 LPD"],["Type","Evacuated Tube"],["Tank Material","SS 304"],["Suitable For","4-5 Pax"],["Warranty","5 Years"]]},

  // Switches
  { id:"VG-SW-001", name:"Modular Switch Kit", category:"Switches", price:899, originalPrice:1299, rating:4.3, reviews:640, image:"images/modular_switch.png", badge:"",
    description:"Premium polycarbonate modular switch kit with FR-grade material. Smooth action and long-lasting durability.",
    specs:[["Material","Polycarbonate"],["Color","Milky White"],["Flame Retardant","Yes"],["Package","1 Switch + 1 Socket"],["Warranty","10 Years"]]}
];

const categories = [
  { name:"Water Heaters", icon:"fa-fire-flame-curved", count:3 },
  { name:"Ceiling Fans", icon:"fa-fan", count:3 },
  { name:"Stabilizers", icon:"fa-bolt", count:3 },
  { name:"Water Purifiers", icon:"fa-droplet", count:2 },
  { name:"Kitchen Appliances", icon:"fa-blender", count:4 },
  { name:"Inverters & Batteries", icon:"fa-car-battery", count:2 },
  { name:"Pumps", icon:"fa-faucet-drip", count:2 },
  { name:"Air Coolers", icon:"fa-wind", count:1 },
  { name:"Solar", icon:"fa-solar-panel", count:1 },
  { name:"Switches", icon:"fa-toggle-on", count:1 },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('vguard_cart') || '[]');
let user = JSON.parse(localStorage.getItem('vguard_user') || 'null');
let currentPage = 'home';
let currentSlide = 0;
let heroInterval;

// ===== INIT & ROUTING =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeatured();
  renderPopular();
  initHeroSlider();
  updateCartUI();
  checkUser();
  initScrollEffects();
  setTimeout(() => { if (!user) document.getElementById('registerModal').classList.add('open'); }, 5000);
  
  handleInitialRoute();
});

window.addEventListener('popstate', (e) => {
  if (e.state) {
    navigateTo(e.state.page, e.state.data, false);
  } else {
    handleInitialRoute();
  }
});

function handleInitialRoute() {
  const path = window.location.pathname;
  if (path.startsWith('/products/')) {
    const productId = path.split('/')[2];
    if (productId && products.some(p => p.id === productId)) {
      navigateTo('detail', productId, false);
    } else {
      navigateTo('home', null, false);
    }
  } else if (path === '/products') {
    navigateTo('products', null, false);
  } else if (path === '/cart') {
    navigateTo('cart', null, false);
  } else if (path === '/checkout') {
    navigateTo('checkout', null, false);
  } else if (path === '/payment') {
    navigateTo('payment', null, false);
  } else if (path === '/order-confirmation' || path === '/confirmation') {
    navigateTo('confirmation', null, false);
  } else if (path === '/about') {
    navigateTo('about', null, false);
  } else if (path === '/support') {
    navigateTo('support', null, false);
  } else if (path === '/dealer-locator') {
    navigateTo('dealer-locator', null, false);
  } else {
    navigateTo('home', null, false);
  }
}

// ===== NAVIGATION =====
const PAGE_TITLES = {
  'home': 'V-Guard Store | Premium Home Appliances',
  'products': 'All Products | V-Guard Store',
  'checkout': 'Secure Checkout | V-Guard Store',
  'cart': 'Your Cart | V-Guard Store',
  'payment': 'Payment | V-Guard Store',
  'confirmation': 'Order Confirmed | V-Guard Store',
  'about': 'About Us | V-Guard Store',
  'support': 'Support | V-Guard Store',
  'dealer-locator': 'Dealer Locator | V-Guard Store'
};

function navigateTo(page, data, pushState = true) {
  if (page === 'cart') {
    document.title = PAGE_TITLES['cart'];
    toggleCart();
    if (pushState) window.history.pushState({ page: 'cart' }, '', '/cart');
    return;
  }

  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active-page'));
  const target = document.getElementById(page + '-page');
  
  if (target) {
    target.classList.add('active-page');
  } else if (page !== 'detail') {
    // create skeleton container dynamically if it doesn't exist
    const skeleton = document.createElement('div');
    skeleton.id = page + '-page';
    skeleton.className = 'page-view active-page';
    skeleton.innerHTML = `<div class="page-content"><div class="container"><section class="section" style="min-height:50vh;text-align:center;padding:100px 0;"><h2>${PAGE_TITLES[page] || page}</h2><p>This page is currently under maintenance.</p></section></div></div>`;
    document.getElementById('home-page').parentElement.appendChild(skeleton);
  }

  // For product detail, it uses its own '#detail-page' which exists but needs activation
  if (page === 'detail') {
    document.getElementById('detail-page').classList.add('active-page');
  }

  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentPage = page;

  if (page === 'products') renderAllProducts();
  if (page === 'detail' && data) renderProductDetail(data);
  if (page === 'checkout') renderCheckoutSummary();
  if (page === 'payment') renderPaymentSummary();

  // close mobile menu
  document.getElementById('navMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');

  // History API routing
  if (pushState) {
    let url = `/${page}`;
    if (page === 'home') url = '/';
    if (page === 'detail' && data) url = `/products/${data}`;
    if (page === 'confirmation') url = '/order-confirmation';
    window.history.pushState({ page, data }, '', url);
  }

  // Title Update
  if (page === 'detail' && data) {
    const p = products.find(x => x.id === data);
    document.title = p ? `${p.name} | V-Guard Store` : 'Product Not Found | V-Guard Store';
  } else {
    document.title = PAGE_TITLES[page] || 'V-Guard Store';
  }
}

// ===== HERO VIDEO SLIDER =====
const SLIDE_COUNT = 2;
const SLIDE_INTERVAL = 5000;
let isSliding = false;
let isPaused = false;

function initHeroSlider() {
  // Start auto-slide
  heroInterval = setInterval(autoSlide, SLIDE_INTERVAL);

  // Pause on hover
  const hero = document.getElementById('hero');
  hero.addEventListener('mouseenter', () => {
    isPaused = true;
    clearInterval(heroInterval);
  });
  hero.addEventListener('mouseleave', () => {
    isPaused = false;
    heroInterval = setInterval(autoSlide, SLIDE_INTERVAL);
  });

  // Ensure all videos are playing
  document.querySelectorAll('.hero-vslide-video').forEach(v => {
    v.play().catch(() => {});
  });
}

function autoSlide() {
  if (isPaused || isSliding) return;
  const next = (currentSlide + 1) % SLIDE_COUNT;
  slideToIndex(next, 'right');
}

function heroSlideNav(direction) {
  if (isSliding) return;
  let next;
  if (direction === 1) {
    next = (currentSlide + 1) % SLIDE_COUNT;
    slideToIndex(next, 'right');
  } else {
    next = (currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT;
    slideToIndex(next, 'left');
  }
  // Reset auto-slide timer
  clearInterval(heroInterval);
  heroInterval = setInterval(autoSlide, SLIDE_INTERVAL);
}

function goToSlide(index) {
  if (isSliding || index === currentSlide) return;
  const direction = index > currentSlide ? 'right' : 'left';
  slideToIndex(index, direction);
  // Reset auto-slide timer
  clearInterval(heroInterval);
  heroInterval = setInterval(autoSlide, SLIDE_INTERVAL);
}

function slideToIndex(nextIndex, direction) {
  if (isSliding || nextIndex === currentSlide) return;
  isSliding = true;

  const slides = document.querySelectorAll('.hero-vslide');
  const dots = document.querySelectorAll('.hero-vdot');
  const currentEl = slides[currentSlide];
  const nextEl = slides[nextIndex];

  // Remove all transition classes
  slides.forEach(s => {
    s.classList.remove('active', 'exit-left', 'exit-right', 'enter-left', 'enter-right');
  });

  // Position the next slide off-screen on the correct side (no transition)
  nextEl.style.transition = 'none';
  if (direction === 'right') {
    nextEl.classList.add('enter-right');
  } else {
    nextEl.classList.add('enter-left');
  }

  // Force reflow so the positioning takes effect before animating
  void nextEl.offsetWidth;

  // Re-enable transitions
  nextEl.style.transition = '';

  // Animate: current exits, next enters
  requestAnimationFrame(() => {
    if (direction === 'right') {
      currentEl.classList.add('exit-left');
    } else {
      currentEl.classList.add('exit-right');
    }
    currentEl.classList.remove('active');

    nextEl.classList.remove('enter-right', 'enter-left');
    nextEl.classList.add('active');

    // Update dots
    dots.forEach(d => d.classList.remove('active'));
    dots[nextIndex].classList.add('active');

    currentSlide = nextIndex;

    // Allow next slide after transition completes
    setTimeout(() => {
      isSliding = false;
    }, 950);
  });
}

// ===== MUTE TOGGLE =====
function toggleMute() {
  const videos = document.querySelectorAll('.hero-vslide-video');
  const btn = document.getElementById('heroMuteBtn');
  const icon = document.getElementById('muteIcon');
  const isMuted = videos[0].muted;

  videos.forEach(v => v.muted = !isMuted);

  if (isMuted) {
    icon.className = 'fas fa-volume-up';
    btn.classList.add('unmuted');
  } else {
    icon.className = 'fas fa-volume-mute';
    btn.classList.remove('unmuted');
  }
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(cat => `
    <div class="category-card" onclick="navigateTo('products'); setTimeout(()=>filterByCategory('${cat.name}'),100);">
      <div class="cat-icon"><i class="fas ${cat.icon}"></i></div>
      <h3>${cat.name}</h3>
      <p>${cat.count} Products</p>
    </div>
  `).join('');
}

// ===== RENDER PRODUCTS =====
function createProductCard(p) {
  const discount = Math.round((1 - p.price / p.originalPrice) * 100);
  return `
    <div class="product-card" onclick="navigateTo('detail', '${p.id}')">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <button class="product-wishlist" onclick="event.stopPropagation(); toggleWishlist('${p.id}')" title="Add to Wishlist">
        <i class="far fa-heart"></i>
      </button>
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-light);color:var(--text-light);\\'><i class=\\'fas fa-box\\' style=\\'font-size:3rem;\\'></i></div>'">
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span>${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="current">₹${p.price.toLocaleString()}</span>
          <span class="original">₹${p.originalPrice.toLocaleString()}</span>
          <span class="discount">${discount}% off</span>
        </div>
      </div>
    </div>`;
}

function getStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= Math.floor(rating) ? '★' : (i - 0.5 <= rating ? '★' : '☆');
  }
  return s;
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = products.filter(p => p.badge).slice(0, 4);
  grid.innerHTML = featured.map(createProductCard).join('');
}

function renderPopular() {
  const grid = document.getElementById('popularGrid');
  const popular = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  grid.innerHTML = popular.map(createProductCard).join('');
}

// ===== PRODUCTS PAGE =====
function renderAllProducts() {
  // render category filters
  const filterDiv = document.getElementById('categoryFilters');
  filterDiv.innerHTML = categories.map(c => `
    <label><input type="checkbox" value="${c.name}" onchange="applyFilters()"> ${c.name} (${c.count})</label>
  `).join('');
  applyFilters();
}

function applyFilters() {
  const checkedCats = [...document.querySelectorAll('#categoryFilters input:checked')].map(i => i.value);
  const maxPrice = parseInt(document.getElementById('priceRange').value);
  const sortVal = document.getElementById('sortSelect').value;
  const ratingChecks = [...document.querySelectorAll('.filter-group input[type="checkbox"][value]')]
    .filter(i => i.parentElement.parentElement.querySelector('h4')?.textContent === 'Rating' && i.checked)
    .map(i => parseInt(i.value));
  document.getElementById('priceVal').textContent = '₹' + maxPrice.toLocaleString();

  let filtered = products.filter(p => {
    if (checkedCats.length && !checkedCats.includes(p.category)) return false;
    if (p.price > maxPrice) return false;
    if (ratingChecks.length && !ratingChecks.some(r => p.rating >= r)) return false;
    return true;
  });

  // sort
  switch (sortVal) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  document.getElementById('resultsCount').textContent = `Showing ${filtered.length} products`;
  document.getElementById('allProductsGrid').innerHTML = filtered.length
    ? filtered.map(createProductCard).join('')
    : '<div style="text-align:center;padding:60px;color:var(--text-light);grid-column:1/-1;"><i class="fas fa-search" style="font-size:2rem;margin-bottom:12px;display:block;"></i>No products found matching your filters</div>';
}

function filterByCategory(catName) {
  const checks = document.querySelectorAll('#categoryFilters input');
  checks.forEach(c => c.checked = c.value === catName);
  applyFilters();
}

function resetFilters() {
  document.querySelectorAll('#categoryFilters input, .filter-group input[type="checkbox"]').forEach(i => i.checked = false);
  document.getElementById('priceRange').value = 50000;
  document.getElementById('sortSelect').value = 'featured';
  applyFilters();
}

// ===== PRODUCT DETAIL =====
function renderProductDetail(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const discount = Math.round((1 - p.price / p.originalPrice) * 100);
  document.getElementById('detailBreadcrumb').textContent = p.name;
  document.getElementById('productDetail').innerHTML = `
    <div class="product-gallery">
      <img src="${p.image}" alt="${p.name}" onerror="this.outerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-light);border-radius:var(--radius-lg);color:var(--text-light);\\'><i class=\\'fas fa-box\\' style=\\'font-size:4rem;\\'></i></div>'">
    </div>
    <div class="product-detail-info">
      <div class="detail-category">${p.category}</div>
      <h1>${p.name}</h1>
      <div class="detail-rating">
        <span class="stars" style="color:var(--star);font-size:1rem;">${getStars(p.rating)}</span>
        <span style="font-size:0.9rem;color:var(--text-mid);">${p.rating} | ${p.reviews.toLocaleString()} Reviews</span>
      </div>
      <div class="detail-price">
        <span class="current">₹${p.price.toLocaleString()}</span>
        <span class="original">₹${p.originalPrice.toLocaleString()}</span>
        <span class="discount-tag">${discount}% OFF</span>
      </div>
      <div class="detail-description">
        <p>${p.description}</p>
      </div>
      <div class="detail-specs">
        <h3>Specifications</h3>
        <table>${p.specs.map(s => `<tr><td>${s[0]}</td><td style="font-weight:500;">${s[1]}</td></tr>`).join('')}</table>
      </div>
      <div class="detail-qty">
        <span style="font-weight:500;">Quantity:</span>
        <div class="qty-controls">
          <button onclick="changeQty(-1)">−</button>
          <input type="number" id="detailQty" value="1" min="1" max="10" readonly>
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn btn-primary btn-lg" onclick="addToCart('${p.id}', getQty())">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn btn-accent btn-lg" onclick="addToCart('${p.id}', getQty()); navigateTo('checkout');">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>
      <div style="display:flex;gap:20px;padding-top:20px;border-top:1px solid var(--border-light);font-size:0.85rem;color:var(--text-mid);">
        <span><i class="fas fa-truck" style="color:var(--success)"></i> Free Delivery</span>
        <span><i class="fas fa-shield-alt" style="color:var(--accent)"></i> ${p.specs.find(s=>s[0]==='Warranty')?.[1] || '1 Year Warranty'}</span>
        <span><i class="fas fa-undo" style="color:var(--primary)"></i> 7 Day Return</span>
      </div>
    </div>`;

  // related products
  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  document.getElementById('relatedProducts').innerHTML = related.map(createProductCard).join('');
}

function changeQty(delta) {
  const inp = document.getElementById('detailQty');
  let v = parseInt(inp.value) + delta;
  inp.value = Math.max(1, Math.min(10, v));
}
function getQty() { return parseInt(document.getElementById('detailQty')?.value || 1); }

// ===== CART =====
function addToCart(productId, qty = 1) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: productId, qty }); }
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() { localStorage.setItem('vguard_cart', JSON.stringify(cart)); }

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const cartCountEl = document.getElementById('cartCount');
  if(cartCountEl) cartCountEl.textContent = count;
  
  const cartItemCountEl = document.getElementById('cartItemCount');
  if(cartItemCountEl) cartItemCountEl.textContent = count;

  const total = getCartTotal();
  const tax = Math.round(total * 0.18);
  const shipping = total > 999 || total === 0 ? 0 : 99;
  const finalTotal = total + tax + shipping;

  const cartTotalEl = document.getElementById('cartTotal');
  if(cartTotalEl) cartTotalEl.textContent = '₹' + finalTotal.toLocaleString();
  
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');
  if(cartSubtotalVal) cartSubtotalVal.textContent = '₹' + total.toLocaleString();

  const cartGstVal = document.getElementById('cartGstVal');
  if(cartGstVal) cartGstVal.textContent = '₹' + tax.toLocaleString();

  const cartShippingVal = document.getElementById('cartShippingVal');
  if(cartShippingVal) cartShippingVal.textContent = shipping === 0 ? '<span style="color:var(--success)">FREE</span>' : '₹' + shipping;

  const cartFooterEl = document.getElementById('cartFooter');
  if(cartFooterEl) {
     if(cart.length > 0) {
        cartFooterEl.style.display = 'block';
     } else {
        cartFooterEl.style.display = 'none';
     }
  }

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  
  if (!cart.length) {
    container.innerHTML = `<div style="text-align:center; padding: 60px 20px; background:white; border-radius:12px; border:1px solid var(--border-light); grid-column:1/-1;">
      <i class="fas fa-shopping-basket" style="font-size:3rem; color:var(--border-light); margin-bottom:16px;"></i>
      <h2 style="font-size:1.4rem; font-weight:600; margin-bottom:8px;">Your cart is empty</h2>
      <p style="color:var(--text-mid); margin-bottom:24px;">Looks like you haven't added any products to your cart yet.</p>
      <button class="btn btn-primary btn-lg" onclick="navigateTo('products');">Continue Shopping</button>
    </div>`;
    return;
  }
  container.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    const fallbackImage = `this.outerHTML='<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:var(--text-light); background:var(--bg-light); border-radius:8px;"><i class="fas fa-box" style="font-size:1.5rem;"></i></div>'`;
    return `
      <div style="display:flex; gap:20px; padding:20px; background:white; border-radius:12px; border:1px solid var(--border-light); margin-bottom:16px; align-items:center; position:relative;">
        <div style="width:100px; height:100px; flex-shrink:0;">
           <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:contain; border-radius:8px; background:var(--bg-light);" onerror="${fallbackImage}">
        </div>
        <div style="flex:1;">
          <h4 style="font-size:1.1rem; font-weight:600; margin-bottom:4px;">${p.name}</h4>
          <span style="font-size:0.85rem; color:var(--text-mid); display:block; margin-bottom:8px;">ID: ${p.id}</span>
          <div style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:12px;">₹${p.price.toLocaleString()}</div>
          
          <div style="display:flex; gap:12px; align-items:center;">
             <div class="qty-controls" style="display:flex; align-items:center; border:1px solid var(--border-light); border-radius:6px; overflow:hidden; width:max-content;">
               <button onclick="updateCartQty('${p.id}', -1)" style="padding:6px 12px; background:var(--bg-light); border:none; cursor:pointer;">−</button>
               <span style="padding:0 12px; font-weight:600; min-width:30px; text-align:center;">${item.qty}</span>
               <button onclick="updateCartQty('${p.id}', 1)" style="padding:6px 12px; background:var(--bg-light); border:none; cursor:pointer;">+</button>
             </div>
             <button onclick="removeFromCart('${p.id}')" style="background:none; border:none; color:var(--text-light); cursor:pointer; font-size:0.9rem; text-decoration:underline;">Remove</button>
          </div>
        </div>
        <div style="font-size:1.2rem; font-weight:700; text-align:right;">
           <div style="font-size:0.85rem; color:var(--text-mid); font-weight:500;">Subtotal</div>
           ₹${(p.price * item.qty).toLocaleString()}
        </div>
      </div>`;
  }).join('');
}

function toggleCart() {
  navigateTo('cart');
}

// ===== CHECKOUT =====
function renderCheckoutSummary() {
  const el = document.getElementById('checkoutSummary');
  const total = getCartTotal();
  const shipping = total > 999 ? 0 : 99;
  const tax = Math.round(total * 0.18);
  el.innerHTML = `
    <h3><i class="fas fa-receipt" style="color:var(--primary)"></i> Order Summary</h3>
    ${cart.map(item => {
      const p = products.find(x => x.id === item.id);
      return p ? `<div class="summary-item"><span>${p.name} × ${item.qty}</span><span>₹${(p.price*item.qty).toLocaleString()}</span></div>` : '';
    }).join('')}
    <div class="summary-item"><span>Subtotal</span><span>₹${total.toLocaleString()}</span></div>
    <div class="summary-item"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">FREE</span>' : '₹' + shipping}</span></div>
    <div class="summary-item"><span>GST (18%)</span><span>₹${tax.toLocaleString()}</span></div>
    <div class="summary-item total"><span>Total</span><span>₹${(total + shipping + tax).toLocaleString()}</span></div>
    <button class="btn btn-primary btn-block btn-lg" onclick="goToPayment()" style="margin-top:20px">
      Proceed to Payment <i class="fas fa-arrow-right"></i>
    </button>`;
}

function goToPayment() {
  const required = ['shipFirst','shipLast','shipAddr1','shipCity','shipState','shipPin','shipPhone'];
  for (const id of required) {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.focus(); showToast('Please fill all required fields', 'error'); return; }
  }
  navigateTo('payment');
}

function renderPaymentSummary() {
  const el = document.getElementById('paymentSummary');
  const total = getCartTotal();
  const shipping = total > 999 ? 0 : 99;
  const tax = Math.round(total * 0.18);
  el.innerHTML = `
    <h3><i class="fas fa-receipt" style="color:var(--primary)"></i> Order Summary</h3>
    <div class="summary-item"><span>Items (${cart.reduce((s,i)=>s+i.qty,0)})</span><span>₹${total.toLocaleString()}</span></div>
    <div class="summary-item"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">FREE</span>' : '₹' + shipping}</span></div>
    <div class="summary-item"><span>GST (18%)</span><span>₹${tax.toLocaleString()}</span></div>
    <div class="summary-item total"><span>Total</span><span>₹${(total + shipping + tax).toLocaleString()}</span></div>`;
}

let currentPaymentMethod = 'upi';

function selectPayment(el, method) {
  currentPaymentMethod = method;
  document.querySelectorAll('.payment-option').forEach(o => { o.classList.remove('active'); o.querySelector('input').checked = false; });
  el.classList.add('active');
  el.querySelector('input').checked = true;
  const form = document.getElementById('paymentForm');
  const templates = {
    upi: '<div class="form-group"><label>UPI ID</label><input type="text" placeholder="yourname@upi"></div>',
    card: `<div class="form-group"><label>Card Number</label><input type="text" placeholder="XXXX XXXX XXXX XXXX" maxlength="19"></div>
           <div class="form-row"><div class="form-group"><label>Expiry</label><input type="text" placeholder="MM/YY" maxlength="5"></div>
           <div class="form-group"><label>CVV</label><input type="password" placeholder="***" maxlength="3"></div></div>
           <div class="form-group"><label>Name on Card</label><input type="text" placeholder="Full name"></div>`,
    netbanking: '<div class="form-group"><label>Select Bank</label><select><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Punjab National Bank</option><option>Bank of Baroda</option></select></div>',
    cod: '<p style="padding:16px;background:var(--bg-light);border-radius:var(--radius-md);font-size:0.9rem;color:var(--text-mid);"><i class="fas fa-info-circle" style="color:var(--accent)"></i> You will pay the delivery agent in cash when your order arrives. A fee of ₹49 will be added for COD orders.</p>'
  };
  form.innerHTML = templates[method] || '';
}

function placeOrder() {
  const btn = document.querySelector('button[onclick="placeOrder()"]');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
  }

  const overlay = document.getElementById('payment-modal-container');
  overlay.innerHTML = `
    <div class="payment-overlay active" id="paymentOverlayUI">
      <div class="payment-modal fade-in" id="paymentModalUI">
        <div class="payment-modal-logo">V-Guard</div>
        <div id="paymentModalContent" style="width:100%;">
           <!-- Dynamic content injected here based on method -->
        </div>
      </div>
    </div>
  `;

  const content = document.getElementById('paymentModalContent');

  if (currentPaymentMethod === 'upi') {
    content.innerHTML = `
      <div class="qr-container"><i class="fas fa-qrcode"></i></div>
      <h3 style="font-size:1.1rem;margin-bottom:8px;">Scan QR code with any UPI app to complete payment</h3>
      <div class="upi-logos"><i class="fab fa-google-pay"></i> <i class="fas fa-mobile-alt"></i></div>
      <div class="payment-spinner" style="margin:20px auto 10px; width:30px; height:30px; border-width:3px;"></div>
      <p style="color:var(--text-light);font-size:0.9rem;">Waiting for payment...</p>
    `;
    setTimeout(startProgressiveFlow, 3000);
  } else if (currentPaymentMethod === 'card') {
    content.innerHTML = `
      <h3 style="font-size:1.2rem;margin-bottom:8px;">OTP Verification</h3>
      <p style="color:var(--text-mid);font-size:0.9rem;">OTP sent to your registered mobile number</p>
      <div class="otp-inputs">
        <input type="text" maxlength="1" onkeyup="if(this.value) this.nextElementSibling?.focus()"><input type="text" maxlength="1" onkeyup="if(this.value) this.nextElementSibling?.focus()"><input type="text" maxlength="1" onkeyup="if(this.value) this.nextElementSibling?.focus()"><input type="text" maxlength="1" onkeyup="if(this.value) this.nextElementSibling?.focus()"><input type="text" maxlength="1" onkeyup="if(this.value) this.nextElementSibling?.focus()"><input type="text" maxlength="1">
      </div>
      <button class="btn btn-primary btn-block btn-lg" onclick="startProgressiveFlow()">Verify OTP</button>
      <p style="color:var(--primary);font-size:0.85rem;margin-top:16px;cursor:pointer;">Resend OTP (00:30)</p>
    `;
  } else if (currentPaymentMethod === 'netbanking') {
    content.innerHTML = `
      <div class="payment-spinner" style="margin:0 auto 20px;"></div>
      <h3 style="font-size:1.2rem;margin-bottom:8px;">Secure Bank Redirect</h3>
      <p style="color:var(--text-mid);font-size:0.9rem;">Redirecting to your bank portal securely...</p>
    `;
    setTimeout(startProgressiveFlow, 2000);
  } else if (currentPaymentMethod === 'cod') {
    finalizeOrderSuccess('Cash on Delivery', true);
  }
}

function startProgressiveFlow() {
  const content = document.getElementById('paymentModalContent');
  content.innerHTML = `
    <div class="payment-spinner" style="margin:0 auto 20px;" id="mainSpinner"></div>
    <h3 style="font-size:1.2rem;margin-bottom:8px;" id="mainStatusText">Processing Your Payment...</h3>
    <p style="color:var(--text-mid);font-size:0.9rem;">Please do not close or refresh this page</p>
    <div class="payment-progress-bg"><div class="payment-progress-bar" id="progressBar"></div></div>
    <div class="payment-steps" id="paymentStepsContainer"></div>
  `;

  const steps = [
    "Connecting to payment gateway...",
    "Verifying payment details...",
    "Authenticating transaction...",
    "Processing payment...",
    "Confirming with bank...",
    "Payment successful!"
  ];

  const stepsContainer = document.getElementById('paymentStepsContainer');
  stepsContainer.innerHTML = steps.map((s,i) => `
    <div class="pay-step" id="step-${i}">
      <i class="far fa-clock"></i> <span>${s}</span>
    </div>
  `).join('');

  const progress = document.getElementById('progressBar');
  let currentStep = 0;
  
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      const el = document.getElementById(`step-${currentStep}`);
      el.classList.add('visible');
      if (currentStep > 0) {
        // Mark previous step complete
        const prev = document.getElementById(`step-${currentStep-1}`);
        prev.classList.add('completed');
        prev.querySelector('i').className = 'fas fa-check-circle';
      }
      progress.style.width = ((currentStep+1) / steps.length * 100) + '%';
      currentStep++;
    } else {
      clearInterval(interval);
      // Mark last step complete
      const last = document.getElementById(`step-${steps.length-1}`);
      last.classList.add('completed');
      last.querySelector('i').className = 'fas fa-check-circle';
      document.getElementById('mainSpinner').style.display = 'none';
      document.getElementById('mainStatusText').textContent = 'Verification Complete';
      
      const methodName = currentPaymentMethod === 'card' ? 'Credit / Debit Card' : (currentPaymentMethod === 'upi' ? 'UPI' : 'Net Banking');
      setTimeout(() => finalizeOrderSuccess(methodName, false), 500);
    }
  }, 800); // 800ms per step up to 5 steps, roughly 4 seconds.
}

function finalizeOrderSuccess(methodName, isCod) {
  const total = getCartTotal();
  const shipping = total > 999 ? 0 : 99;
  const tax = Math.round(total * 0.18);
  const finalAmount = total + shipping + tax + (isCod ? 49 : 0);
  const txnId = 'TXN' + Math.floor(Math.random()*100000000).toString().padStart(8, '0');
  const orderId = 'VG-' + Date.now().toString().slice(-6);
  
  const content = document.getElementById('paymentModalContent');
  let confettiHtml = Array.from({length: 40}).map((_, i) => `<div class="confetti" style="left:${Math.random()*100}%; background:hsl(${Math.random()*360}, 80%, 50%); animation: confettiFall ${1+Math.random()*1.5}s ease-in forwards; animation-delay: ${Math.random()*0.3}s"></div>`).join('');

  if (isCod) {
    content.innerHTML = `
      ${confettiHtml}
      <div style="display:flex;justify-content:center"><div class="success-circle"><i class="fas fa-check"></i></div></div>
      <h3 style="font-size:1.4rem;margin-bottom:12px;color:var(--success);">Order Confirmed! 🎉</h3>
      <p style="font-size:1.1rem;font-weight:600;margin-bottom:8px;">Pay ₹${finalAmount.toLocaleString()} to delivery agent</p>
      <p style="color:var(--text-mid);font-size:0.9rem;">Estimated delivery: ${new Date(Date.now() + 5*24*60*60*1000).toDateString()}</p>
    `;
  } else {
    content.innerHTML = `
      ${confettiHtml}
      <div style="display:flex;justify-content:center"><div class="success-circle"><i class="fas fa-check"></i></div></div>
      <h3 style="font-size:1.4rem;margin-bottom:12px;color:var(--success);">Payment Successful! 🎉</h3>
      <p style="color:var(--text-mid);font-size:0.9rem;margin-bottom:4px;">Transaction ID: ${txnId}</p>
      <p style="font-size:1.1rem;font-weight:600;margin-bottom:4px;">Amount Paid: ₹${finalAmount.toLocaleString()}</p>
      <p style="color:var(--text-light);font-size:0.85rem;">Paid via ${methodName}</p>
    `;
  }

  // Inject Order Details to UI
  const estDate = new Date(Date.now() + 5*24*60*60*1000).toDateString();
  const addr = `${document.getElementById('shipFirst').value || 'Customer'} ${document.getElementById('shipLast').value || ''}, ${document.getElementById('shipAddr1').value || 'Delivery Address'}, ${document.getElementById('shipCity').value || 'City'}, PIN: ${document.getElementById('shipPin').value || 'xxxxxx'}`;
  
  document.getElementById('orderId').textContent = '#' + orderId;
  document.getElementById('orderDetails').innerHTML = `
    <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:16px;">Order Summary</h3>
    ${cart.map(item => {
      const p = products.find(x => x.id === item.id);
      return p ? `<div style="display:flex; gap:16px; align-items:center; padding:12px 0; border-bottom:1px solid var(--border-light);">
        <img src="${p.image}" style="width:50px; height:50px; object-fit:contain; border-radius:8px; border:1px solid var(--border-light);">
        <div style="flex:1;">
           <div style="font-weight:500;">${p.name}</div>
           <div style="font-size:0.85rem; color:var(--text-mid);">Qty: ${item.qty}</div>
        </div>
        <div style="font-weight:600;">₹${(p.price*item.qty).toLocaleString()}</div>
      </div>` : '';
    }).join('')}
    <div style="display:flex;justify-content:space-between;padding:16px 0 8px;font-size:1.1rem;font-weight:700;">
      <span>Total Paid</span><span style="color:var(--primary)">₹${finalAmount.toLocaleString()}</span>
    </div>
    
    <div style="background:var(--bg-light); border-radius:8px; padding:16px; margin-top:20px; text-align:left;">
       <div style="font-weight:600; margin-bottom:8px; display:flex; align-items:center; gap:8px;"><i class="fas fa-truck" style="color:var(--success)"></i> Delivery Details</div>
       <div style="font-size:0.9rem; color:var(--text-mid); line-height:1.5;">
          <strong>Estimated Delivery:</strong> ${estDate}<br>
          <strong>Address:</strong> ${addr}<br>
          <strong>Payment Method:</strong> ${methodName}<br>
          ${!isCod ? `<strong>Transaction ID:</strong> ${txnId}` : ''}
       </div>
    </div>
  `;

  setTimeout(() => {
    // Fade out modal and navigate!
    document.getElementById('payment-modal-container').innerHTML = '';
    
    cart = [];
    saveCart();
    updateCartUI();
    
    const btn = document.querySelector('button[onclick="placeOrder()"]');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-lock"></i> Place Order & Pay';
    }
    
    navigateTo('confirmation');
    
    // Start countdown
    let timeLeft = 5;
    const timerDisplay = document.getElementById('redirectTimer');
    if(timerDisplay) {
      timerDisplay.textContent = `Redirecting to home in ${timeLeft}...`;
      const countdownInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
          timerDisplay.textContent = `Redirecting to home in ${timeLeft}...`;
        } else {
          clearInterval(countdownInterval);
          navigateTo('home');
          showToast(`Thank you for your order! Your order ${orderId} has been placed successfully 🎉`, 'success', 4000);
        }
      }, 1000);
    }
  }, 3500);
}

// ===== SEARCH =====
function handleSearch(query) {
  if (!query.trim()) return;
  if (query.length > 2) {
    navigateTo('products');
    setTimeout(() => {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      document.getElementById('resultsCount').textContent = `Found ${filtered.length} results for "${query}"`;
      document.getElementById('allProductsGrid').innerHTML = filtered.length
        ? filtered.map(createProductCard).join('')
        : '<div style="text-align:center;padding:60px;color:var(--text-light);grid-column:1/-1;"><i class="fas fa-search" style="font-size:2rem;margin-bottom:12px;display:block;"></i>No products found for "' + query + '"</div>';
    }, 150);
  }
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
  showToast('Added to wishlist! ❤️', 'success');
}

// ===== AUTH =====
function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  if (!name || !email) return;
  user = { name, email, phone };
  localStorage.setItem('vguard_user', JSON.stringify(user));
  closeModal();
  checkUser();
  showToast(`Welcome, ${name}! 🎉`, 'success');
}

function checkUser() {
  const userEl = document.getElementById('navUser');
  const nameEl = document.getElementById('userName');
  if (user) {
    userEl.style.display = 'flex';
    nameEl.textContent = 'Hi ' + user.name.split(' ')[0];
  }
}

function closeModal() {
  document.getElementById('registerModal').classList.remove('open');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('navMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== TOAST =====
function showToast(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="color:${type === 'success' ? 'var(--success)' : 'var(--primary)'}"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; toast.style.transition = 'all 0.4s ease'; setTimeout(() => toast.remove(), 400); }, duration);
}
