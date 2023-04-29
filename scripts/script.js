const btn = document.querySelector('.btn');

btn.onclick = function(){
const customerName = document.querySelector('.customerName').value;
const productName = document.querySelector('.productName').value;
const productPrice = document.querySelector('.productPrice').value;
const value = document.querySelector('.value').value;
console.log(customerName)
console.log(productName)
console.log(productPrice)
console.log(value)

let newRecord = "<tr>";
newRecord += "<td>" + customerName + "</td>";
newRecord += "<td>" + productName + "</td>";
newRecord += "<td>" + productPrice + "</td>";
newRecord += "<td>" + (productPrice*value) + "</td>";
newRecord += "</tr>";


}



