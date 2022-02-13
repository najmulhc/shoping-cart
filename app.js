document.getElementById("caseIncrease").addEventListener("click", function(){
  updateProductInfo('case', 10,true);
});
document.getElementById("caseDecrease").addEventListener("click", function(){
   updateProductInfo('case', 10,false);
});
document.getElementById("phoneIncrease").addEventListener("click", function(){
    updateProductInfo('phone', 1000, true);
});
document.getElementById("phoneDecrease").addEventListener("click", function(){
    updateProductInfo('phone', 1000, false);
});

function updateProductInfo(product, price , isIncreasing){
    const productCountElement =  document.getElementById(product+"Count");
    let productCount = parseInt(productCountElement.value);
    if(isIncreasing){
         productCount += 1;
    }
    else if(productCount > 0){
        productCount -=1;
    }
    document.getElementById(product+"Price").innerText = price*productCount;
    productCountElement.value = productCount;
    subtotalUpdate();
}
function subtotalUpdate(){
    let subtotal = document.getElementById("subtotal");
     let subtotalNumber =  subtotal.innerText = parseInt(document.getElementById("casePrice").innerText) + parseInt(document.getElementById("phonePrice").innerText);
    tax(subtotalNumber);
}
function tax(subtotal){
  let tax =   document.getElementById("tax").innerText = subtotal*.15;
  document.getElementById("total"). innerText = subtotal+tax;
}