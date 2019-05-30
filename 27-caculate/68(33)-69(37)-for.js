// 雙迴圈 加總練習
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


// break 練習

var movies = [{
        name: "寶貝老闆",
        type: "喜劇"
    },
    {
        name: "目擊者",
        type: "驚悚"
    },
    {
        name: "玩命關頭8",
        type: "動作"
    }
];

function findComedy() {
    //請在此處撰寫迴圈
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].type == "喜劇") {
            console.log('找到一部喜劇片了，是' + movies[i].name);
            break;
        }
    }
}

