var hexSchool = [{
        teacher: "Jane",
        student: ["Andy", "Peter", "John"],
        studentGrade: [89, 100, 99],
        studentNumber: 3,
        classRoom: "B104"
    },
    {
        teacher: "Gary",
        student: ["Sam", "Jenny", "Rose"],
        studentGrade: [88, 79, 99],
        studentNumber: 3,
        classRoom: "C104"
    }
];


var studentTotal = 0;




function findStudentTotal() {
    //在此處撰寫for迴圈
    for (var i = 0; i < hexSchool.length; i++) {
        for (var j = 0; j < hexSchool[i].studentGrade.length; j++) {
            studentTotal += hexSchool[i].studentGrade[j];
        }
    }
}
findStudentTotal();
console.log(studentTotal);



//39.js  物件+ 陣列 第二種包裝
var farms2 = [{
        farmer: '卡司丁',
        dogs: ['艾蜜莉', '中禮'],
        chick: 25,
        cornField: [989],
        brocolliField: [6, 6, 6, 6],
        scarerow: 9
    },
    {
        farmer: '皮查',
        dogs: ['拖拖'],
        chick: 33,
        cornField: [3, 2, 1],
        scarerow: 4
    }
]

// console.log(farms2[1].farmer)
console.log(farms2[1].dogs[0]);


var farm1 = {
    farmer: '卡斯柏',
    dogs: ['QQ', 'YY'],
    chick: 15,
    cornField: [856],
    brocolliField: [6, 6, 6, 6],
    scarerow: 9,
    doDinner: function () {
        console.log(farm1.farmer + '該回家吃晚飯啦!');
    },
    poultryTotal: function () {
        var num = farm1.chick + farm1.scarerow;
        console.log('我的農場有' + num + '隻家禽');
    }
}
// console.log(farm.cornField);
// console.log(cornField);
// farm.doDinner();
// farm.poultryTotal();


var cornField = [];
cornField.push(5);
cornField.push(5);
cornField[4] = 18;
// console.log(cornField);