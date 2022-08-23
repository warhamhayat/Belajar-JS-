
// Closure

    // clouse a/ sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingukungan saat ia diciptakan


// Lexical Scop e
const nama = "hayat"

function init () {
    const nama = "warham"; //local variable

    function tampilNama(){ //inner function (closure*) memiliki akses ke parentnya
        console.log(nama) //akses ke parent variable
    }

    tampilNama()
}
init()


//kenapa kita membutuhkan clouser?
    //untuk membuat function factories,
    // untuk membuat seolah@ method 


//untuk membuat function factories

function ucapSalam (waktu){
    return function (nama){ 
        console.log(`hallo ${nama} selamat ${waktu}`)
    }
}

let selamatPagi = ucapSalam("pagi") //jadi isi selamat malam, inner functionnya sudah jalan stengah, dan sudah ada closure

console.log(selamatPagi)
// jadi klo mau dijalankan tinggal
selamatPagi("Ham")  //jadi inin adalah factorie function, kita bikin function sesuai dengan function yang lain



//private variable/method

let counter = 0;

function add (){
    return ++counter
}
console.log(add())
console.log(add())
console.log(add())

console.log(counter)

//supaya counter diatas tidak tergantu, kita bisa pakai clousre, jadi klo kita return adalag function
//jadi kita punya inner function

// let counter2 = 0;

function add2 (){
    let counter2 = 0 //jadi seolah2  privatecounter ini tdk bisa diakses dari luar, tapi bilai dipertahankan krna nilainya clousreu
    return function(){ //jaddi kita punya inner function
        return ++counter2
    }
}

let a = add2() // jaadi kita simpat returnya dalam variable, segingga counter akan mmengacu pada pada nilai coun sebelumnya
console.log(a())


