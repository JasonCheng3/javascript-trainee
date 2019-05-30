document.getElementById('countId').onclick = function() {
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    console.log(hamNum+cokeNum);
    document.getElementById('totalId').textContent = hamNum + cokeNum;
}

// -----28.js

function getHamPrice(num) {
    var hamPrice = 50;
    var total = hamPrice * num;
    return total;
}

var tom = getHamPrice(20);
var john = getHamPrice(50);

// console.log(tom);
// console.log('******:');
// console.log(john);

function count(price) {
    return addTax(price*0.8);
}

function addTax(price){
    return price*1.1;
}

// console.log(count(500));

