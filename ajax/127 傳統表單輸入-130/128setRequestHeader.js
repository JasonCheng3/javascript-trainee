//128 在瀏覽器上測試
var xhr = new XMLHttpRequest();

// xhr
// readyState: 0

xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)

// xhr
// readyState: 1

xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=abcde@gmail.com&password=1234');

// var xhr = new XMLHttpRequest();
// xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// xhr.send('email=abcde@gmail.com&password=1234');


//130
var account = {
    email: 'qqeuw@gmail.com',
    password: '2233'
}
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader('Content-type','application/json');
var data = JSON.stringify(account);
xhr.send(data);
