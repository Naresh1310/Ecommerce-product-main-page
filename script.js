"use strict"

const quantityHolder = document.querySelector(".quantity")
const value = document.querySelector(".value")
const minus = document.querySelector(".minu")
const plus = document.querySelector(".plus")
const cart = document.querySelector(".cart-img")
const cartInfo = document.querySelector(".cart-info")
const thumbnailImg = document.querySelector(".thumbnail-images")
const imagePopUp = document.querySelector(".image-popup")
const closePopUp = document.querySelector(".close-popup")
const mainPopUpImg = document.querySelector(".main-pop-up")
const popUpsmallImg = document.querySelector(".small-img")
const popupImageHolder = document.querySelector(".big-img")
const addToCart = document.querySelector(".btn-addtocart")
const cartDefaultText = document.querySelector(".cart-text")
const cartItemHolder = document.querySelector(".cart-item-holder")
const cartItemText = document.querySelector(".cart-item-text")
const cartItemDelete = document.querySelector(".cart-item-delete")
const cartTag = document.querySelector(".cart-tag")
const body = document.querySelector("body")
const productSection = document.querySelector(".product-section")
const overlay = document.querySelector(".overlay")
const closeCart = document.querySelector(".close-cart")

// MOBILE
const mainImgHolder = document.querySelector(".main-img-holder")
const mobileBtnRight = document.querySelector(".btn-main-right")
const mobileBtnLeft = document.querySelector(".btn-main-left")
const mainImg = document.querySelector(".main-img")
const menu = document.querySelector(".mobile-menu")
const navLinks = document.querySelector(".nav-links")
const navigation = document.querySelector(".navigation")
const menuClose = document.querySelector(".menu-close")


let imgNum = 1
mobileBtnRight.addEventListener("click", function () {
    if (imgNum >= 4) return
    imgNum++
    console.log(imgNum)
    mainImg.src = `./images/image-product-${imgNum}.jpg`

})

navigation.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-img")) {
        navLinks.style.transform = "translateX(0)"
        navLinks.classList.remove("hidden")
        navLinks.style.display = "block"
        menuClose.classList.toggle("hidden")
    }

    else if (e.target.classList.contains("menu-close")) {
        navLinks.classList.toggle("hidden")
        menuClose.classList.toggle("hidden")
    }


})

mobileBtnLeft.addEventListener("click", function () {
    if (imgNum <= 1) return
    --imgNum
    mainImg.src = `./images/image-product-${imgNum}.jpg`
})

quantityHolder.addEventListener("click", function (e) {
    if (e.target.classList.contains("plus")) {
        +value.textContent++
    }
    else if (e.target.classList.contains("minus")) {
        if (+value.textContent === 0) return

        +value.textContent--
    }

})

cart.addEventListener("click", function () {
    // mainImgHolder.style.position = "static"
    mainImgHolder.classList.toggle("position-relative")
    cartInfo.classList.toggle("hidden")
    console.log(mainImgHolder.style.position)
})

// IMAGE POPUP
thumbnailImg.addEventListener("click", function (e) {
    if (!e.target.classList.contains("thumbnail-image")) return
    const currentProduct = e.target.getAttribute("name")
    console.log(e.target.getAttribute("name"))
    mainPopUpImg.src = `./images/${currentProduct}.jpg`
    imagePopUp.classList.remove("hidden")
    overlay.classList.remove("hidden")


})



imagePopUp.addEventListener("click", function (e) {
    const imageMonitor = mainPopUpImg.getAttribute("src")
    const ans = imageMonitor.split("-").pop()
    const finalAns = +ans.split(".").shift()
    console.log(e.target)

    if (e.target.classList.contains("left-btn")) {

        let copyCurrentImg = finalAns
        if (finalAns === 1) return
        mainPopUpImg.src = `./images/image-product-${--copyCurrentImg}.jpg`
    }

    else if (e.target.classList.contains("right-btn")) {
        let copyCurrentImg = finalAns
        if (finalAns === 4) return
        mainPopUpImg.src = `./images/image-product-${++copyCurrentImg}.jpg`
    }

})


//CLOSE POPUP
overlay.addEventListener("click", function () {
    imagePopUp.classList.add("hidden")
    overlay.classList.add("hidden")

})
closePopUp.addEventListener("click", function () {
    imagePopUp.classList.toggle("hidden")
    overlay.classList.add("hidden")

})


popUpsmallImg.addEventListener("click", function (e) {
    console.log(e.target)
    console.log(e.target.classList.contains("thumbnail-image"))
    if (!e.target.classList.contains("thumbnail-image")) return
    const currentProduct = e.target.getAttribute("name")
    console.log(e.target.getAttribute("name"))
    mainPopUpImg.src = `./images/${currentProduct}.jpg`
})

const displayCartItems = function () {
    const price = 128 * +value.textContent;
    cartItemHolder.innerHTML = `<div class="cart-item">
                        <img class="cart-item-img" src="./images/image-product-1-thumbnail.jpg" alt="product image" />
                        <p class="cart-item-text">
                             ${`Fall Limited Edition Sneakers <br>$128.00*${value.textContent} <strong>$${price}.00</strong>`}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="cart-item-delete" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path class="cart-item-delete" stroke-linecap="round" stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    <button class="checkout">Checkout</button>`
}


addToCart.addEventListener("click", function (e) {
    console.log(value)
    if (value.textContent === "0") return
    cartDefaultText.classList.toggle("hidden")
    displayCartItems()
    if (+value.textContent >= 1) {
        cartTag.textContent = `${value.textContent}`
        cartTag.classList.remove("hidden")
    }
    else {
        cartTag.classList.add("hidden")
    }


})


// DELETE CART ITEMS
cartItemHolder.addEventListener("click", function (e) {
    console.log(e.target.classList)
    if (!e.target.classList.contains("cart-item-delete")) return

    cartItemHolder.innerHTML = ""
    cartDefaultText.classList.toggle("hidden")
    cartTag.textContent = `${value.textContent}`
    cartTag.classList.toggle("hidden");
})

//CLOSE CART
closeCart.addEventListener("click", function () {
    cartInfo.classList.add("hidden")
})


