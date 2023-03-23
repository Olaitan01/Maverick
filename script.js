const removeBtn=document.querySelectorAll(".remove")

const addToCartBtn=document.querySelectorAll(".add-to-cart")
const cartRowContainer=document.querySelector(".cart-row-container")
let cartTotal=document.querySelector(".cart-total")
let price=document.getElementsByClassName("item-price")
    let quantity=document.getElementsByClassName("item-quantity")



/**Item add to cart */
for(let i=0;i<addToCartBtn.length;i++){
    addToCartBtn[i].addEventListener("click",()=>{
        let priceEl=document.querySelectorAll(".price")[i].innerText
        let titleEl=document.querySelectorAll(".title")[i].innerText
        let img=document.querySelectorAll(".product-img")[i].src
    itemAddedToCart(priceEl,titleEl,img)
    updateTotal()
    })
}

function  itemAddedToCart(priceEl,titleEl,img){
    let itemsContainer=document.createElement("div")
    itemsContainer.classList.add("cart-row")
    itemsContainer.innerHTML=`   <div class="cart-row">
    <span
    ><img src="${img}" alt="leather jacket" class="item-image"
  /></span>
  <span class="item-details">
    <span class="item-title">${titleEl} </span>
    <span class="item-price"
      >${priceEl}<span class="item-quantity">5</span></span
    >
    <span class="item-price-total"></span>
  </span>
  <span><button class="remove">REMOVE</button></span>
  </div>`;
  
  cartRowContainer.append(itemsContainer)
  itemsContainer.getElementsByClassName("remove")[0].addEventListener("click",removeItem)
    
}


/**update total */
function updateTotal(){
        let totall=0
    for(let i=0;i<price.length;i++){
        
        
        let priceEl=parseFloat(price[i].innerText.replace("$",""))
        
        let quantityEl=parseInt(quantity[i].innerText)
        
        totall=totall + (priceEl*quantityEl)
        
    }
     totall=Math.round(totall*100)/100
    console.log(totall)
    cartTotal.innerText=`Total: $${totall}`  
    
}

 


for(let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener("click",()=>{
        removeItem()
        updateTotal()
    })
}
        
    function removeItem(event){
        const removeButtonClicked=event.target
        removeButtonClicked.parentElement.parentElement.remove()  
        updateTotal()  
    }

