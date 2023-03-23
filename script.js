const removeBtn=document.querySelectorAll(".remove")

const addToCartBtn=document.querySelectorAll(".add-to-cart")
const cartRowContainer=document.querySelector(".cart-row-container")
let cartTotal=document.querySelector(".cart-total")
let price=document.getElementsByClassName("item-price")
    let quantity=document.getElementsByClassName("quantity-input")
    let cartNum=document.querySelector(".cart-num")

    /**Cart num indicator */
    let num=0
  function cartNumIndicator(){
  num++
  cartNum.innerText=num
    
  }

/**Show cart list */
const showCartBtn=document.querySelector(".show-cart")
let cartList=document.querySelector(".cart-list")
showCartBtn.addEventListener("click",showCartList)
function showCartList(){
    if(cartList.style.display==="block"){
        cartList.style.display="none"
    }else{
        cartList.style.display="block"
    }
}

/**Item add to cart */
for(let i=0;i<addToCartBtn.length;i++){
    addToCartBtn[i].addEventListener("click",()=>{
        let priceEl=document.querySelectorAll(".price")[i].innerText
        let titleEl=document.querySelectorAll(".title")[i].innerText
        let img=document.querySelectorAll(".product-img")[i].src
    itemAddedToCart(priceEl,titleEl,img)
    updateTotal()
    cartNumIndicator()
    cartEmpty()
    })
}

function  itemAddedToCart(priceEl,titleEl,img){
    let itemsContainer=document.createElement("div")
    itemsContainer.classList.add("cart-row")
    let cartRow=document.getElementsByClassName("cart-row")
    for(let i=0;i<cartRow.length;i++){
        let itemTitle=document.getElementsByClassName("item-title")
        if(itemTitle[i].innerText===titleEl){
            alert("Item already Added")
            return
        }
    }
    itemsContainer.innerHTML=`   <div class="cart-row">
    <span
    ><img src="${img}" alt="leather jacket" class="item-image"
  /></span>
  <span class="item-details">
    <span class="item-title">${titleEl} </span>
    <span class="item-price"
      >${priceEl}<span class="item-quantity"> × <input type="number" value=1 class="quantity-input"></span></span
    >
    <span class="item-price-total"></span>
  </span>
  <span><button class="remove">REMOVE</button></span>
  </div>`;
  
  cartRowContainer.append(itemsContainer)
  itemsContainer.getElementsByClassName("quantity-input")[0].addEventListener("change",updateQuantity)
  itemsContainer.getElementsByClassName("remove")[0].addEventListener("click",removeItem)
    
}

function cartEmpty(){
    let cartEmptyEl=document.getElementsByClassName("cart-empty")[0]
    if(cartNum.innerText==0){
        
        cartEmptyEl.innerText="Cart is Empty"
        cartEmptyEl.style.display="block"
        cartEmptyEl.style.display="flex"
        cartEmptyEl.style.display="justify-content:center"
    }else{
        cartEmptyEl.style.display="none"
    }
}
cartEmpty()

/**update total */
function updateTotal(){
        let totall=0
    for(let i=0;i<price.length;i++){
        
        
        let priceEl=parseFloat(price[i].innerText.replace("$",""))
        
        let quantityEl=parseInt(quantity[i].value)
        
        totall=totall + (priceEl*quantityEl)
        
    }
     totall=Math.round(totall*100)/100
    console.log(totall)
    cartTotal.innerText=`Total: $${totall}`  
    
}

 function updateQuantity(){ 
    for(let i=0;i<quantity.length;i++){
        quantity[i].addEventListener("change",()=>{
            if(isNaN(quantity[i].value)||quantity[i].value<=0){
                quantity[i].value=1
               updateTotal()
            }
            updateTotal()
        })
    }
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
        num--
        cartNum.innerText=num 
        updateTotal() 
        cartEmpty() 
    }

