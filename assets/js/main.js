// Show product
const btnMacchiato = document.getElementById('btn-macchiato'),
    btnSpecial = document.getElementById('btn-special'),
    btnBeauty = document.getElementById('btn-beauty'),
    btnFresh = document.getElementById('btn-fresh'),
    macchiato = document.getElementById('macchiato'),
    special = document.getElementById('specialdrink'),
    beauty = document.getElementById('beauty'),
    fresh = document.getElementById('fresh');

if (btnMacchiato) {
    btnMacchiato.addEventListener('click', () => {
        macchiato.classList.add('active-food');
        special.classList.remove('active-food');
        beauty.classList.remove('active-food');
        fresh.classList.remove('active-food');
    })
}

if (btnSpecial) {
    btnSpecial.addEventListener('click', () => {
        macchiato.classList.remove('active-food');
        special.classList.add('active-food');
        beauty.classList.remove('active-food');
        fresh.classList.remove('active-food');
    })
}


if (btnBeauty) {
    btnBeauty.addEventListener('click', () => {
        macchiato.classList.remove('active-food');
        special.classList.remove('active-food');
        beauty.classList.add('active-food');
        fresh.classList.remove('active-food');
    })
}

if (btnFresh) {
    btnFresh.addEventListener('click', () => {
        macchiato.classList.remove('active-food');
        special.classList.remove('active-food');
        beauty.classList.remove('active-food');
        fresh.classList.add('active-food');
    })
}

const menuToggle = document.getElementById('toggle'),
    menuCLose = document.getElementById('close'),
    menu = document.getElementById('menu-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.remove('show');
        menuCLose.classList.remove('show')
    })
};

if (menuCLose) {
    menuCLose.addEventListener('click', () => {
        menu.classList.add('show');
        menuCLose.classList.add('show')
    })
}


let carts = document.querySelectorAll(".product-item__cart");

let products = [{
        name: "?? Long Kem Ph?? Mai",
        tag: "macchiato1",
        price: 25,
        inCarrt: 0,
    },
    {
        name: "D??u T???m Kem Ph?? Mai",
        tag: "macchiato2",
        price: 25,
        inCarrt: 0,
    },
    {
        name: "Matcha Kem Ph?? Mai",
        tag: "macchiato3",
        price: 25,
        inCarrt: 0,
    },
    {
        name: "S???a T????i Tr??n Ch??u",
        tag: "specialdrink1",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Matcha ?????u ?????",
        tag: "specialdrink2",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Tiger Sugar",
        tag: "specialdrink3",
        price: 39,
        inCarrt: 0,
    },
    {
        name: "?? Long Tr??n Ch??u Baby",
        tag: "specialdrink4",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Tr?? D???a H???ng B???c",
        tag: "fresh1",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Probi B?????i Tr??n Ch??u S????ng Mai",
        tag: "fresh2",
        price: 45,
        inCarrt: 0,
    },
    {
        name: "Probi Xo??i Tr??n Ch??u S????ng Mai",
        tag: "fresh3",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Tr?? Xanh Chanh Leo",
        tag: "fresh4",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Tr?? Xanh Xo??i",
        tag: "fresh5",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "Tr?? D???a Nhi???t ?????i",
        tag: "fresh6",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "H???ng Long Pha L?? Tuy???t",
        tag: "fresh7",
        price: 40,
        inCarrt: 0,
    },
    {
        name: "H???ng Long B???ch Ng???c",
        tag: "fresh8",
        price: 40,
        inCarrt: 0,
    },
    {
        name: "H???ng Tr?? B?????i M???t Ng???c",
        tag: "fresh9",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "S???a Chua Thanh Long H???t D???",
        tag: "beauty1",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "S???a Chua D??u T???m Ho??ng Kim",
        tag: "beauty2",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "S???a Chua D??u T???m H???t D???",
        tag: "beauty3",
        price: 35,
        inCarrt: 0,
    },
    {
        name: "S???a Chua Tr???ng",
        tag: "beauty4",
        price: 35,
        inCarrt: 0,
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumber(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumber");

    if (productNumber) {
        document.querySelector(".number").textContent = productNumber;
    }
}

// === cartNumbeer
function cartNumber(product) {
    let productNumber = localStorage.getItem("cartNumber");

    productNumber = parseInt(productNumber);
    if (productNumber) {
        localStorage.setItem("cartNumber", productNumber + 1);
        document.querySelector(".number").textContent = productNumber + 1;
    } else {
        localStorage.setItem("cartNumber", 1);
        document.querySelector(".number").textContent = 1;
    }
    let lastTitle;
}

// === object tag
function setItems(product) {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);

    if (Array.isArray(cartItems) && cartItems.length > 0) {
        [...cartItems].forEach((item) => products(item));
    }

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product,
            };
        }
        cartItems[product.tag].inCarrt += 1;
    } else {
        product.inCarrt = 1;
        cartItems = {
            [product.tag]: product,
        };
    }
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

// =-- GI??
function totalCost(product) {
    // console.log("price", product.price);
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cartCost", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
};

function displatCart() {
    let cartItems = localStorage.getItem("productsIncart");
    let cartCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);
    let products = document.querySelector(".products");

    if (cartItems && products) {
        products.innerHTML = "";
        Object.values(cartItems).map((item) => {
            products.innerHTML += `
        <div class="todo">
            <div class="product">
                <i class="fa fa-times-circle icon-times" aria-hidden="true"></i>
                <img src="./assets/img/${
                  tag
                }.png" alt="" class="menu-image">
                <span>${name}</span>
            </div>
            <div class="price">
                $${price},00
            </div>
            <div class="quanlity">
                ${inCarrt}
            </div>
            <div class="total">
               $${inCarrt * price},00
            </div>
        </div>
    `;
        });

        products.innerHTML += `
        <div class = "basketTotalContainer">
            <h4 class = "backet-title">
                Basket Total
            </h4>
            <h4 class= "basketTotal">
                $${cartCost},00
            </h4>
        <div>
    `;
    }
}

onLoadCartNumbers();
displatCart();

const productsRemove = document.querySelector(".products");
const backet = document.querySelector(".basketTotal");
const totalCart = document.querySelector(".total");
let cartItemsK =
    localStorage.length > 0 ?
    JSON.parse(localStorage.getItem("productsIncart")) : [];

if (Array.isArray(cartItemsK) && cartItemsK.length > 0) {
    [...cartItemsK].forEach((item) => todo(item.tag));
}
productsRemove.addEventListener("click", function(e) {
    if (e.target.matches(".icon-times")) {
        const productList = e.target.parentNode.parentNode;
        productList.parentNode.removeChild(productList);
        localStorage.removeItem("productsIncart");
        localStorage.removeItem("cartNumber");
        localStorage.removeItem("totalCost");
        localStorage.clear();
    }
});

const payment = document.getElementById('payment'),
    paymentAlert = document.getElementById('payment-alert'),
    send = document.getElementById('send'),
    blurPage = document.getElementById('menu-container')
if (payment) {
    payment.addEventListener('click', () => {
        paymentAlert.classList.add('show_alert');
        blurPage.classList.add('blurpage');
    })
}

if (send) {
    send.addEventListener('click', () => {
        paymentAlert.classList.remove('show_alert');
        blurPage.classList.remove('blurpage');
    })
}