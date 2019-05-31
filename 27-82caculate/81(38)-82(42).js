var students = [
    {
        name: "小明",
        age: "18",
        phone: "0912345678"
    },
    {
        name: "小美",
        age: "17",
        phone: "0923456789"
    },
    {
        name: "小菜",
        age: "19",
        phone: "0934567891"
    }
];

//請在下方作答

for(var i=0; i<students.length; i++){
    var element = document.createElement("li");
    element.textContent = students[i].name + "，"+students[i].age + "歲，手機號碼是"+students[i].phone;
    document.getElementById('studentList').append(element);
}

