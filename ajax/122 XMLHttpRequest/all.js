// readyState
// 0 你已經產生一個XMLHttpRequest 但是還沒有連結
// 1 你用 open()，但還沒傳資料過去
// 2 偵測到有send
// 3 loading
// 4 finished
// 可貼在瀏覽器上
var xhr = new XMLHttpRequest();

// 格式、讀取網址、同步非同步
xhr.open('get', 'https://reqres.in/api/users?page=2',true);
xhr.send(null);

// console.log(xhr.responseText); // false 會有資料

// onload 確定事件回傳後會執行
xhr.onload = function() {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector('.message').textContent = str.data[0].first_name + ' ' +str.data[0].last_name;
}

// 123 非同步
// true 非同步，不會等資料傳回來，就讓程式繼續往下跑，等到回傳才會自動回傳
// false 會等資料傳回來才會讓程式繼續往下跑

// 1. 建立一個xmlhttprequest
// 2. 到對方伺服器要資料
// 3. 回傳資料到自己的瀏覽器
// 4. 拿到資料後處理