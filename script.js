const addToCartBtn=document.querySelectorAll(".add-to-cart")
const buyNowBtn=document.querySelectorAll(".buy-now")

for(let i=0;i<addToCartBtn.length;i++){
    addToCartBtn[i].addEventListener("click",()=>{
        let price=document.querySelectorAll(".price")
        let p=price[i].innerText.replace("$","")
        console.log(p)
    })
}