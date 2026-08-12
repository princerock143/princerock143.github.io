/* =========================================
   PRINCE SHARMA COMPUTERS
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


/* =========================================
   CART DATA
========================================= */

let cart = [];


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    showNotification(name + " added to cart!");

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const totalQuantity =
        cart.reduce(
            (total, product) =>
                total + product.quantity,
            0
        );

    cartCount.innerText = totalQuantity;

    renderCart();

}


/* =========================================
   DISPLAY CART
========================================= */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div style="text-align:center;padding:30px;color:#777;">
                🛒 Your cart is empty.
            </div>
        `;

        cartTotal.innerText = "₹0";

        return;

    }


    let html = "";

    let total = 0;


    cart.forEach((product, index) => {

        const productTotal =
            product.price * product.quantity;

        total += productTotal;


        html += `

            <div class="cart-product">

                <div>

                    <div class="cart-product-name">
                        ${product.name}
                    </div>

                    <small>
                        ₹${product.price.toLocaleString("en-IN")}
                        × ${product.quantity}
                    </small>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    cartItems.innerHTML = html;


    cartTotal.innerText =
        "₹" + total.toLocaleString("en-IN");

}


/* =========================================
   REMOVE PRODUCT
========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    const overlay =
        document.getElementById("cartOverlay");

    overlay.classList.add("active");

    renderCart();

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    const overlay =
        document.getElementById("cartOverlay");

    overlay.classList.remove("active");

}


/* =========================================
   WHATSAPP CHECKOUT
========================================= */

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    /*
       IMPORTANT:
       Replace 91XXXXXXXXXX
       with your real WhatsApp number.
    */

    const phoneNumber =
        "91XXXXXXXXXX";


    let message =
        "Hello Prince Sharma Computers!%0A%0A";

    message +=
        "I want to order:%0A%0A";


    let total = 0;


    cart.forEach((product, index) => {

        const productTotal =
            product.price * product.quantity;

        total += productTotal;


        message +=
            `${index + 1}. ${product.name} - ` +
            `₹${product.price.toLocaleString("en-IN")} ` +
            `x ${product.quantity}%0A`;

    });


    message +=
        `%0ATotal: ₹${total.toLocaleString("en-IN")}`;

    message +=
        "%0A%0APlease tell me about availability and delivery.";


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   PRODUCT SEARCH
========================================= */

function searchProducts() {

    const searchInput =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(product => {

        const name =
            product.dataset.name
                .toLowerCase();


        if (name.includes(searchInput)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory() {

    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================================
   NOTIFICATION
========================================= */

function showNotification(message) {

    const notification =
        document.createElement("div");


    notification.innerText =
        "✓ " + message;


    notification.style.position =
        "fixed";

    notification.style.bottom =
        "25px";

    notification.style.left =
        "50%";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.background =
        "#07182c";

    notification.style.color =
        "white";

    notification.style.padding =
        "13px 22px";

    notification.style.borderRadius =
        "8px";

    notification.style.zIndex =
        "9999";

    notification.style.boxShadow =
        "0 8px 30px rgba(0,0,0,0.25)";


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

    }, 2200);

}


/* =========================================
   CLOSE CART WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeCart();

            }

        }
    );


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document
    .querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navbar")
                    .classList
                    .remove("active");

            }
        );

    });
