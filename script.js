let icon = document.getElementById("icon");
let content = document.getElementById("content");
let ShoppingCard = document.getElementById("ShoppingCard");
let closed = document.getElementById("closed");
icon.addEventListener("click", () => {
  ShoppingCard.classList.toggle("showcart");
});
closed.addEventListener("click", () => {
  ShoppingCard.classList.toggle("showcart");
});

let resulDataa = [];
let respponse =[]; 
(async function () {
  resulDataa = await fetch(`products.json`);
  respponse = await resulDataa.json();

  console.log(respponse);
  ShowProduct(respponse);
})();
function ShowProduct(Productss) {
  let cartona = ``;

  for (let i =0 ; i < Productss.length -1; i++) {
    cartona += `
            <div class="cardproduct col-md-3 text-center" id="cardproduct">
            
    
         <img src=${Productss[i].imge} alt="">
            <h5>${Productss[i].name} </h5>
             <p class="price">${Productss[i].price}</p>
          <button class="btn btn-dark" onclick="showProductInCart(${Productss[i].id})" id="buttton" type="button">Add To Cart</button>
   
             </div>
           `; 
  }
  document.getElementById("listproduct").innerHTML = cartona;
}
//number of product
let count =0;
function showProductInCart(id) {
    document.getElementById("countProduct").innerHTML=++count;
   
  let cartonaa = ``;
     
    cartonaa += `
 
               <div class="listcart m-3">
  <img src=${respponse[id].imge} class="mb-2"  alt="">
  <p>${respponse[id].name}</p>
  <p class="price">${respponse[id].price}</p>
  <div class="group text-center">
     
  <p class="beforee"><</p>
  <p class="one mx-1">1</p>
  <p class="afterr">></p> 
  </div>
    
  </div> `;
     
  document.getElementById("alll").innerHTML += cartonaa;
  ShoppingCard.classList.toggle("showcart");
  ShoppingCard.classList.toggle("showcart"); 
}
let countofeveryChair=0;
