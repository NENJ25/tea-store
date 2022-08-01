// const products = [{ "name": "Vivimee Ceramic Mugs", "price": "GHC 40", "img":"mug-1.jpg", "remaining": 20, "url": "vivimeemugs.html"},
// { "name": "Taimer Ceramic Mugs", "price": "GHC 40", "img":"mug-2.jpg", "remaining": 20, "url": "taimermugs.html"},
// { "name": "Suyika Teapot", "price": "GHC 100", "img":"teapot-1.jpg", "remaining": 15,  "url": "suyikateapot.html"},
// { "name": "Taylors of Harrogate Assorted Tea", "price": "GHC 200", "img":"teas-1.jpg", "remaining": 10, "url": "tohtea.html"},
// { "name":"Pukka Assorted Tea", "price": "GHC 150", "img":"teas-2.jpg", "remaining": 10, "url": "pukkatea.html"}]

// add product info
const products = [{"Vivimee Ceramic Mugs": { "name": "Vivimee Ceramic Mugs", "price": "40", "img":"mug-1.jpg", "remaining": 20, "url": "vivimeemugs.html", "id":"vivimeemugs"}, 
"Taimer Ceramic Mugs": { "name": "Taimer Ceramic Mugs", "price": "40", "img":"mug-2.jpg", "remaining": 20, "url": "taimermugs.html", "id":"taimermugs"}, 
"Suyika Teapot": { "name": "Suyika Teapot", "price": "100", "img":"teapot-1.jpg", "remaining": 15,  "url": "suyikateapot.html", "id":"suyikateapot"}, 
"Taylors of Harrogate Assorted Tea": { "name": "Taylors of Harrogate Assorted Tea", "price": "200", "img":"teas-1.jpg", "remaining": 10, "url": "tohtea.html", "id":"tohtea"}, 
"Pukka Assorted Tea": { "name":"Pukka Assorted Tea", "price": "150", "img":"teas-2.jpg", "remaining": 10, "url": "pukkatea.html", "id":"pukkatea"}}]
// const products = JSON.parse(products_json);
document.getElementById("shelf").innerHTML = Object.keys(products[0]).map(productCard).join("")

// document.getElementById("shelf").innerHTML += products.map(productCard).join("")

// turn product info into html
function productCard(productName){
    let productData = products[0][productName]
    return `<div class="productcontainers" id="${productData.id}">
                <a href="${productData.url}">
                    <img src=${productData.img} alt="Ceramic mugs" class="productpics">
                    <p class="names">${productData.name}</p>
                    <p class="prices"> GHC ${productData.price}</p>
                    <p class="itemsleft" id="${productData.id}_left">${productData.remaining} items left</p></a>
                    <button class="addbtns">Add to Cart</button>
            </div>`
}


function getCookie(cname){
    cookies = document.cookie.split(";").map(cookie => cookie.split("="))
    let cookie_dict = {}
    for(let i=0; i<cookies.length; i++){
        cookie_dict[cookies[i][0]] = decodeURIComponent(cookies[i][1])
    }
    return cookie_dict[cname]
}

function addProduct(prodName){
    let cart = getCookie("cart")

    if(cart == null){
        cart = {}
    }

    else{
        cart = JSON.parse(cart)
    }
    
    let productData = products[0][prodName]

    if (!cart[prodName]){
        cart[prodName] = {};
        let pNamedata = {"name": productData.name,
                         "quantity": 1,
                         "img": productData.img,
                         "price": productData.price
        };
        cart[prodName] = pNamedata;
    }
    else{cart[prodName].quantity += 1;
    }
    //update product remaining
    productData.remaining -= 1;
    document.getElementById(`${productData.id}_left`).innerHTML = `${productData.remaining} items left`
    //update cookie
    let cart_json = JSON.stringify(cart)
    const d = new Date();
    //cart cookie lasts for only one day
    d.setTime(d.getTime + (24*60*60*1000))
    document.cookie = `cart = ${cart_json}; expires = ${d}; path=/`

}



const container = document.querySelector("#shelf");

container.addEventListener("click", function(e){
    if(e.target.classList.contains("addbtns")){
        let productName = e.target.parentNode.querySelector(".names").innerHTML
        addProduct(productName)
        e.target.innerHTML = "ADDED"
        setTimeout(function(){
            e.target.innerHTML = "ADD TO CART"
        }, 500)
    }
})



