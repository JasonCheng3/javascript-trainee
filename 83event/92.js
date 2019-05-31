var area = document.getElementById('areaId');
var list = document.querySelector('.list');

var country = [
    {
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    }
    ,{
        farmer: '小花',
        place: '苓雅區'
    }
]
var len = country.length;

function updateList(e){
    var listd = document.getElementsByClassName('list');
    var listc = document.getElementById('hey');
    console.log(listc);
    console.log(list);
    console.log(listd);
    listc.textContent = '333';
}


area.addEventListener('change',updateList,false)