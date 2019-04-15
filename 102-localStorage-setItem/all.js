var str = 'gary';
localStorage.setItem("myName", str);

console.log(localStorage.getItem("myName"));

var el = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');
function saveName(e) {
    var str = document.querySelector('.textClass').value;
    // console.log(str);
    localStorage.setItem('myName', str);
}

el.addEventListener("click", saveName);
call.addEventListener("click", function(){
    var str = localStorage.getItem("myName");
    alert('你的名字叫做'+ str);
})

console.log(el)
