//  78 innerHTML 
var home = [
    {
        people: '卡哥',
        dogs: ['ambie','假假']
    },
    {
        people: '大K',
        dogs: ['ruby','鄧鄧']
    }
];

var el = document.querySelector('.list');
var homeleng = home.length;
var str = '';
for (var i =0; i<homeleng; i++){
    for(var j=0; j<home[i].dogs.length; j++){
        // el.textContent += home[i].dogs[j];
        var content = '<li>'+ home[i].dogs[j] +'</li>';
        str += content;
    }
    // el.textContent += home[i].people;
}
el.innerHTML = str;


// 79 80  create_ element textContent
var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['張姆士', '龐的'],
    },
    {
        farmer: '查理',
        dogs: ['皮皮'],
    }
];
var el = document.querySelector('.list2');
var farmLen = farms.length;
for(var i =0;i<farmLen;i++){
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}


var pstr = document.createElement('p');
pstr.textContent = 'hahahahohoho';
pstr.setAttribute('class', 'green');
// 增加子節點
document.querySelector('.pst33').appendChild(pstr);