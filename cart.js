let cart = JSON.parse(getCookie("cart"));

function getCookie(cname){
    cookies = document.cookie.split(";").map(cookie => cookie.split("="))
    let cookie_dict = {}
    for(let i=0; i<cookies.length; i++){
        cookie_dict[cookies[i][0]] = decodeURIComponent(cookies[i][1])
    }
    return cookie_dict[cname]
}

function removeProduct(cname){
    let currentCart = JSON.parse(getCookie("cart"))
    // console.log(currentCart["Vivimee Ceramic Mugs"])
    delete currentCart[cname]
    let cart_json = JSON.stringify(currentCart)
    const d = new Date();
    d.setTime(d.getTime + (24*60*60*1000))
    document.cookie = `cart = ${cart_json}; expires = ${d}; path=/` 
}

function changeQuantity(pname, change){
        let currentCart = JSON.parse(getCookie("cart"))
        if(change == "delete"){
            delete currentCart[pname]
        }
        else if(change == "increase"){
            currentCart[pname].quantity += 1
        }
        else if(change == "decrease"){
            if(currentCart[pname].quantity > 1){
                currentCart[pname].quantity -= 1
            }
            else{
                delete currentCart[pname]
            }
        }
        let cart_json = JSON.stringify(currentCart)
        const d = new Date();
        d.setTime(d.getTime + (24*60*60*1000))
        document.cookie = `cart = ${cart_json}; expires = ${d}; path=/` 
}

function populateCart(cartProductName){
    let currentCart = JSON.parse(getCookie("cart"))
    let cartProduct = currentCart[cartProductName]
    return `<tr>
                <td class="prodimgs">
                <img src="${cartProduct.img}" width=100>
                </td>
                <td class="prodnames">${cartProduct.name}</td>
                <td>${cartProduct.price}</td>
                <td><button class="decbtns">-</button>${cartProduct.quantity}<button class="incbtns">+</button></td>
                <td>GHC ${cartProduct.price * cartProduct.quantity}</td>
                <td>
                    <button class="rmvbtns">X</button>
                </td>
            </tr>`
}

let cartHeaders = `<tr id="cart_headers">
                        <th colspan="2">
                            Product
                        </th>
                    
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Subtotal
                        </th>
                        <th>

                        </th>
                    </tr>`


if((Object.keys(cart).length) > 0){
    document.getElementById("noitemscontainer").style.display = "none";
    document.getElementById("cart_table").innerHTML = cartHeaders
    document.getElementById("cart_table").innerHTML += Object.keys(cart).map(populateCart).join("")
}
                    

const cartTable = document.querySelector("#cart_table")
cartTable.addEventListener("click", function(e){
    if(e.target.classList.contains("rmvbtns")){
        let prodName = e.target.parentNode.parentNode.querySelector(".prodnames").innerHTML;
        changeQuantity(prodName, "delete")
    }

    if(e.target.classList.contains("decbtns")){
        let prodName = e.target.parentNode.parentNode.querySelector(".prodnames").innerHTML;
        changeQuantity(prodName, "decrease")
    }

    if(e.target.classList.contains("incbtns")){
        let prodName = e.target.parentNode.parentNode.querySelector(".prodnames").innerHTML;
        changeQuantity(prodName, "increase")
    }

    let currentCart = JSON.parse(getCookie("cart"));
    document.getElementById("cart_table").innerHTML = cartHeaders
    document.getElementById("cart_table").innerHTML += Object.keys(currentCart).map(populateCart).join("")

    if((Object.keys(currentCart).length) === 0){
    document.getElementById("cart_table").innerHTML = ""
    document.getElementById("noitemscontainer").style.display = "block";
    }

})

// console.log(populateCart(cart["Vivimee Ceramic Mugs"]))


//have to display a your bag is empty thing if there's nothing in cart