
// ============================================
// FASHION STORE - COMPLETE DYNAMIC SYSTEM
// ============================================


// 1. PRODUCT DATABASE - 30 PRODUCTS

const products = [
    {id:1, name:"Classic White Shirt", category:"Men", price:1250, image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600", badge:"NEW"},
    {id:2, name:"Elegant Summer Dress", category:"Women", price:2200, image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600", badge:"SALE"},
    {id:3, name:"Premium Casual Jacket", category:"Men", price:2800, image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"},
    {id:4, name:"Modern Fashion Outfit", category:"Women", price:1950, image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"},
    {id:5, name:"Stylish Denim Jacket", category:"Men", price:2400, image:"https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600"},
    {id:6, name:"Summer Collection Dress", category:"Women", price:1800, image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600"},
    {id:7, name:"Casual Fashion Shirt", category:"Men", price:1450, image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"},
    {id:8, name:"Luxury Women's Outfit", category:"Women", price:3200, image:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600"},
    {id:9, name:"Black Formal Shirt", category:"Men", price:1550, image:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"},
    {id:10, name:"Floral Summer Dress", category:"Women", price:2100, image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"},
    {id:11, name:"Premium Hoodie", category:"Men", price:1850, image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"},
    {id:12, name:"Elegant Women's Blazer", category:"Women", price:2950, image:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600"},
    {id:13, name:"Casual Blue Jeans", category:"Men", price:1750, image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"},
    {id:14, name:"Women's Fashion Top", category:"Women", price:1350, image:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600"},
    {id:15, name:"Classic Men's Suit", category:"Men", price:5500, image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600"},
    {id:16, name:"Designer Handbag", category:"Accessories", price:2600, image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"},
    {id:17, name:"Premium Sneakers", category:"Accessories", price:3200, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"},
    {id:18, name:"Women's Heels", category:"Accessories", price:2450, image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"},
    {id:19, name:"Classic Sunglasses", category:"Accessories", price:950, image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"},
    {id:20, name:"Luxury Wrist Watch", category:"Accessories", price:3800, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"},
    {id:21, name:"Men's Polo Shirt", category:"Men", price:1150, image:"https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600"},
    {id:22, name:"Women's Casual Outfit", category:"Women", price:2250, image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600"},
    {id:23, name:"Leather Jacket", category:"Men", price:4200, image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"},
    {id:24, name:"Elegant Party Dress", category:"Women", price:3500, image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600"},
    {id:25, name:"Men's Casual Shoes", category:"Accessories", price:2750, image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600"},
    {id:26, name:"Women's Handbag", category:"Accessories", price:1950, image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600"},
    {id:27, name:"Oversized T-Shirt", category:"Men", price:990, image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"},
    {id:28, name:"Women's Knitwear", category:"Women", price:1850, image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},
    {id:29, name:"Premium Backpack", category:"Accessories", price:2300, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"},
    {id:30, name:"Fashion Winter Coat", category:"Women", price:3900, image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600"}
];


// 2. NEW PRODUCTS

// সর্বশেষ ৮টি Product New Products Page-এ দেখানো হবে।

const newProducts = products.slice(-8).reverse();


// 3. LOCAL STORAGE

function getStorage(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

let cart = getStorage("fashionCart");
let wishlist = getStorage("fashionWishlist");


// 4. PRODUCT CONTAINERS

const productContainer = document.getElementById("product-container");
const newProductContainer = document.getElementById("new-product-container");


// 5. PRODUCT CARD GENERATOR

function createProductCards(productList) {

    if (productList.length === 0) {
        return `
            <div class="no-products">
                <h3>No Products Found!</h3>
                <p>Try another search.</p>
            </div>
        `;
    }

    return productList.map(product => `
        <div class="product-card">

            <div class="product-image">

                ${product.badge ? `
                    <span class="product-badge">
                        ${product.badge}
                    </span>
                ` : ""}

                <button
                    class="wishlist-btn ${wishlist.includes(product.id) ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Toggle wishlist">

                    ${wishlist.includes(product.id) ? "♥" : "♡"}

                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.name}</h3>

                <p class="product-price">
                    ৳${product.price.toLocaleString("en-BD")}
                </p>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})">

                    ADD TO CART +

                </button>

            </div>

        </div>
    `).join("");
}


// 6. DISPLAY ALL PRODUCTS

function displayProducts(productList = products) {

    if (!productContainer) return;

    productContainer.innerHTML = createProductCards(productList);

    updateProductCount(productList.length);
}


// 7. DISPLAY NEW PRODUCTS

function displayNewProducts() {

    if (!newProductContainer) return;

    newProductContainer.innerHTML = createProductCards(newProducts);
}


// 8. PRODUCT COUNT

function updateProductCount(count) {

    const countElement = document.getElementById("product-count");

    if (countElement) {
        countElement.textContent =
            `Showing ${count} of ${products.length} products`;
    }
}


// 9. SEARCH + CATEGORY + SORTING

function applyFilters() {

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const clearButton = document.getElementById("clear-search");

    if (!searchInput || !sortFilter) return;

    const searchText = searchInput.value.trim().toLowerCase();

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    const selectedSort = sortFilter.value;

    let filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    switch (selectedSort) {

        case "price-low":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "name-asc":
            filteredProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "name-desc":
            filteredProducts.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
            break;

        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    displayProducts(filteredProducts);

    if (clearButton) {
        clearButton.style.display =
            searchText ? "block" : "none";
    }
}


// 10. RESET FILTERS

function resetFilters() {

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.value = "all";
    if (sortFilter) sortFilter.value = "default";

    applyFilters();
}


// 11. PAGE NAVIGATION SYSTEM

function showPage(pageId, updateHistory = true) {

    const pages = document.querySelectorAll(".page-section");

    let targetPage = document.getElementById(pageId);

    // ভুল Page ID হলে Home দেখাবে।
    if (!targetPage || !targetPage.classList.contains("page-section")) {
        pageId = "home";
        targetPage = document.getElementById("home");
    }

    if (!targetPage) return;

    // সব Page বন্ধ করা।
    pages.forEach(page => {
        page.classList.remove("active");
        page.hidden = true;
    });

    // শুধু নির্বাচিত Page দেখানো।
    targetPage.hidden = false;
    targetPage.classList.add("active");

    // Browser URL Update
    if (updateHistory) {
        history.pushState(
            { page: pageId },
            "",
            `#${pageId}`
        );
    }

    // Menu বন্ধ করা।
    closeHeaderMenu();

    // নতুন Page-এর শুরুতে যাওয়া।
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 12. NAVIGATION LINK EVENTS

function initializePageNavigation() {

    document.addEventListener("click", event => {

        const link = event.target.closest('a[href^="#"]');

        if (!link) return;

        const pageId = link.getAttribute("href").substring(1);

        const targetPage = document.getElementById(pageId);

        // শুধু Page Section-এর Link নিয়ন্ত্রণ করবে।
        if (
            targetPage &&
            targetPage.classList.contains("page-section")
        ) {
            event.preventDefault();
            showPage(pageId);
        }

    });


    // Browser Back / Forward
    window.addEventListener("popstate", () => {

        const pageId = window.location.hash.substring(1) || "home";

        showPage(pageId, false);

    });


    // প্রথমবার Website চালু হলে
    const initialPage = window.location.hash.substring(1) || "home";

    showPage(initialPage, false);
}


// 13. FILTER EVENT LISTENERS

function initializeFilters() {

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const clearButton = document.getElementById("clear-search");
    const resetButton = document.getElementById("reset-filters");

    if (!searchInput || !sortFilter) {
        console.error("Search or sorting HTML elements not found!");
        return;
    }

    // Search
    searchInput.addEventListener("input", () => {

        if (searchInput.value.trim() !== "") {
            if (window.location.hash !== "#products") {
                showPage("products");
            }
        }

        applyFilters();
    });


    // Category
    categoryFilter?.addEventListener("change", applyFilters);

    // Sorting
    sortFilter.addEventListener("change", applyFilters);


    // Clear Search
    clearButton?.addEventListener("click", () => {

        searchInput.value = "";

        applyFilters();

        searchInput.focus();

    });


    // Reset
    resetButton?.addEventListener("click", resetFilters);
}


// 14. HEADER MENU + SEARCH ICON

function initializeHeaderMenu() {

    const menuToggle = document.getElementById("menu-toggle");
    const dropdown = document.getElementById("category-dropdown");

    const searchToggle = document.getElementById("search-toggle");
    const searchBox = document.querySelector(".header-search-box");
    const searchInput = document.getElementById("product-search");


    // MENU BUTTON
    menuToggle?.addEventListener("click", event => {

        event.stopPropagation();

        dropdown?.classList.toggle("show");
        menuToggle.classList.toggle("active");

    });


    // SEARCH ICON
    searchToggle?.addEventListener("click", () => {

        if (!searchBox) return;

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {

            searchInput?.focus();

        } else {

            if (searchInput) {
                searchInput.value = "";
            }

            applyFilters();

        }

    });


    // CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", event => {

        if (
            dropdown &&
            menuToggle &&
            !dropdown.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            closeHeaderMenu();

        }

    });


    // CLOSE MENU AFTER CLICKING A LINK
    dropdown?.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeHeaderMenu);

    });


    // ESCAPE KEY
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeHeaderMenu();

            searchBox?.classList.remove("active");

        }

    });

}


// 15. CLOSE HEADER MENU

function closeHeaderMenu() {

    const menuToggle = document.getElementById("menu-toggle");
    const dropdown = document.getElementById("category-dropdown");

    dropdown?.classList.remove("show");
    menuToggle?.classList.remove("active");

}


// 16. ADD TO CART

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem(
        "fashionCart",
        JSON.stringify(cart)
    );

    showToast("Product added to cart!");
}


// 17. WISHLIST SYSTEM

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist = wishlist.filter(
            id => id !== productId
        );

        showToast("Removed from wishlist!");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist!");

    }

    localStorage.setItem(
        "fashionWishlist",
        JSON.stringify(wishlist)
    );

    // দুই Page-এর Wishlist Icon Update
    applyFilters();
    displayNewProducts();
}


// 18. TOAST NOTIFICATION

function showToast(message) {

    let toast = document.getElementById("fashion-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "fashion-toast";

        toast.style.cssText = `
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #171717;
            color: white;
            padding: 16px 24px;
            border-radius: 4px;
            font-size: 13px;
            z-index: 9999;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            transition: opacity 0.3s;
        `;

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(window.fashionToastTimer);

    window.fashionToastTimer = setTimeout(() => {
        toast.style.opacity = "0";
    }, 2200);
}


// 19. INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {

    initializePageNavigation();

    initializeFilters();

    initializeHeaderMenu();

    applyFilters();

    displayNewProducts();

    console.log("Fashion Store Loaded Successfully!");
    console.log("Total Products:", products.length);
    console.log("New Products:", newProducts.length);

});
