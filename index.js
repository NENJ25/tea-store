const products = [{ "name": "Vivimee Ceramic Mugs", "price": "GHC 40", "img":"mug-1.jpg", "remaining": 20, "url": "vivimeemugs.html"},
{ "name": "Taimer Ceramic Mugs", "price": "GHC 40", "img":"mug-2.jpg", "remaining": 20, "url": "taimermugs.html"},
{ "name": "Suyika Teapot", "price": "GHC 100", "img":"teapot-1.jpg", "remaining": 15,  "url": "suyikateapot.html"},
{ "name": "Taylors of Harrogate Assorted Tea", "price": "GHC 200", "img":"teas-1.jpg", "remaining": 10, "url": "tohtea.html"},
{ "name":"Pukka Assorted Tea", "price": "GHC 150", "img":"teas-2.jpg", "remaining": 10, "url": "pukkatea.html"}]

// const products = JSON.parse(products_json);
// document.getElementById("shelf").innerHTML = products;

document.getElementById("shelf").innerHTML += products.map(productCard).join("")

function productCard(productData){
    return `<div class="productcontainers">
                <a href="${productData.url}">
                    <img src=${productData.img} alt="Ceramic mugs" class="productpics">
                    <p class="names">${productData.name}</p>
                    <p class="prices">${productData.price}</p>
                    <p class="itemsleft">${productData.remaining} items left</p>
                    <button class="addbtns">Add to Cart</button>
                </a>
            </div>`
}

// totalproducthtml = ``

// for(let i = 0; i < products.length; i++){
//     // producthtml = `<div class="productcontainers">
//     //                 <a href="${products[x].url}">
//     //                     <img src=${products[x].img} alt="Ceramic mugs" class="productpics">
//     //                     <p class="names">${products[x].name}</p>
//     //                     <p class="prices">${products[x].price}</p>
//     //                     <p class="itemsleft">${products[x].remaining} items left</p>
//     //                     <button class="addbtns">Add to Cart</button>
//     //                 </a>
//     //             </div>`

//     // totalproducthtml += producthtml;
//     var product = products[i]
//     console.log(products[i].name)
//     console.log(products[i])
    
// }

// document.getElementById("shelf").innerHTML = totalproducthtml;


let cart = []

function addProduct(productData){
    if (!cart.includes(productData.name)){
        let pName = productData.name;
        let pNamedata = {"name": pName,
                         "quantity": 1,
        };
        cart.pName = pNamedata;
    }
    else{cart.pName.qauntity += 1
    }
}

