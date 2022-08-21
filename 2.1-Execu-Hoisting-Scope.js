// 2 fase pada Execution Context
    // -Creation
    // -Execution

// contoh 
    console.log(nama) //eror

    console.log(nama) //undefind
    var nama = "ham" 

    console.log(nama) //"ham"

    // jadi secara global menggunakan konsep hoisting jadi mencara dulu ada tidak var & function

    // JS mendefiniskan window = global object
    // juga this = whindow

    //setalh creation menekukan var dan function, kemudian execution

// contoh

console.log(sayHello) // tampil isi function yang di tulis
console.log(sayHello())//ini eksekusi, tapi nilai undefind karena konsep hoisting tdi
var nama = "ham"
var umur = 3

function sayHello(){
    return (`haiii nama saya ${nama}`)
} //function ini membuat local execution contexr
    // yang didalamnya terdapat creation dan executionn

// contoh berikutnya

var nama =" warham hayat"
var userName = "@warhma14"

function certakUrl (){
    var igUrl = "http://instagram.com/"
    return igUrl + userName;
}

console.log(certakUrl());
// setiat function dipanggil maka akan membuat eksekusi baru (local)



var nama =" warham hayat"
var userName = "@warhma14"

function certakUrl (){
    var igUrl = "http://instagram.com/"
    return igUrl + userName;
}

 
// yang terjadi dalam function

    //function membuat local execution context
    // yang didalamnya terdapat creation dan execution phase
    //window
    // argument
    // hoisting

    