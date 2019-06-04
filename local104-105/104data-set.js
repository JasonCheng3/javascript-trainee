// 105
var country = [
    {
        farmer: '卡哥'
    },
    {
        farmer: '帕尼'
    }
]
var list105 = document.querySelector('.list105');

function updateList105(){
    var str = '';
    var len = country.length;
    for (var i=0; len > i; i++) {
        str += '<li data-num="'+i+'">'+country[i].farmer+'</li>'
    }
    list105.innerHTML = str;
}
updateList105();

function checkList105(item){
    var num = item.target.nodeName;

    console.log(item);
    console.log(item.target);
    if(num !== "LI")return;
    var str = item.target.dataset.num;
    console.log('您現在選擇的農夫是'+country[str].farmer);
}

list105.addEventListener('click', checkList105);

// 104
var list104 = document.querySelector('.list104 li');

// 確認點擊的農夫

function checkList(item) {
    
    var num = item.target.dataset.num;
    var dog = item.target.dataset.dog;
    console.log(item);
    console.log('農夫編號'+num);
    console.log('有'+dog+'隻狗');
}

list104.addEventListener('click', checkList, false)