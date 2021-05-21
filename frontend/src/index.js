let editMode = false
let currentProducts = false
const shoppeAdapter = new ShoppeAdapter("http://localhost:3000")
const storeForm = new StoreForm
let cart = JSON.parse(localStorage.getItem("cart")) || []
let page = "home"

document.addEventListener("DOMContentLoaded", () => {
    storeForm.addCreateForm();
    shoppeAdapter.getStores();
    storeForm.listenEditDelete();
    pageFlip();
    addCart();
    checkout();
})

function pageFlip(){
    const btn = document.getElementById("switch-page")
    const cartPage = document.getElementById("cart-page")
    const homePage = document.getElementById("home-page")

    btn.addEventListener("click", () => {
        switch (page) {
            case "home":
                console.log("Moving to Cart")
                page = "cart"
                btn.innerHTML = "&#127968"
                cartPage.classList.remove("hidden")
                homePage.classList.add("hidden")

                break;
            case "cart":
                console.log("Moving to Home")
                page = "home"
                btn.innerHTML = "&#128722;"
                cartPage.classList.add("hidden")
                homePage.classList.remove("hidden")

                break;
            default:
                break;
        }
    })
}

function addCart(){
    const cartContainer = document.getElementById("cart-container")
    cart.forEach(id => {
        cartContainer.innerHTML += `<p>${id}</p>`
    })
}

function checkout(){
    document.getElementById("checkout").addEventListener("click", () => {
        localStorage.setItem("cart", JSON.stringify([]))
        cart = []
        document.getElementById("cart-container").innerHTML = ""
    })
}