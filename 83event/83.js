// 92 target 
var cheader = document.querySelector('.header');

cheader.addEventListener('click', function(e){
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.nodeName);
})


//  true event capturing 從最外面找到指定元素 
//  false event Bubbling 從指定元素往外找

//  stopPropagation 停止往外 或往內尋找
//  preventDefault 取消預設click 行為 如 a:link 跳轉頁籤/， submit 表單送出 
var el =document.querySelector('.box');
el.addEventListener('click', function(e){
    e.stopPropagation();
    alert('box');
    console.log('box:');
},false);

// var elBody =document.querySelector('body');
// elBody.addEventListener('click', function(){
//     alert('你沒有點到box，你點到的是body');
//     console.log('你沒有點到box，你點到的是body');
// },false);


// 只會顯示最後一個
var  el0n = document.querySelector('.btnOn');
el0n.onclick = function() {
    alert('on-1');
}
el0n.onclick = function() {
    alert('on-2');
}

// 會顯示兩個
var  elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click', function(){
    alert('on-1');
},false)
elAd.addEventListener('click', function(){
    alert('on-2');
},false)


