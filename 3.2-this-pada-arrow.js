
// conteks "this" pada arrow function
// konsep this pada contructor function

const Mahasiswa = function (){
    this.nama = "warham",
    this.umur = 22;
    this.sayhello = function(){
       console.log( `hello nama saya ${this.nama} umur saya ${this.umur}`)}
}
 

const warham = new Mahasiswa()
console.log(warham.sayhello())
console.log(warham)

// kode yang diatas kita ubah menjadi arrow funtion
// tidak semua function bisa di ubah menjadi arrow function, seperti constructur function
// karena tidak ada "this" pada arrow function
// jadi cuma bisa di method, contohnya

const Mahasiswa1 = function (){
    this.nama = "warham",
    this.umur = 22;
    this.sayhello = () =>{ //cuma bisa di methodnya
       console.log( `hello nama saya ${this.nama} umur saya ${this.umur}`)}
}
// tapi ini akan berbeda klo kita ubah objectnya bukan pakai costructor function 
// tapi pakai obejct liberal
// jadi tdiak pakai "this lagi" 
const mhs = {
    nama : "warham",
    umur : 22,
    sayhello :function(){ //kalo menggunakan function, kita akan menjacari ke lexical scopenya
        console.log( `hello nama saya ${this.nama} umur saya ${this.umur}`)
    }
}
console.log(mhs.sayhello())
// berbeda dengan klo arrow function karne tdk ada konsep thisnya

const mhs1 = {
    nama : "warham",
    umur : 22,
    sayhello :() => { //maka thisnya ini undefind
        console.log( `hello nama saya ${this.nama} umur saya ${this.umur}`)
    }
}

console.log(mhs1.sayhello());


//contoh kasus lain;
// dalam construction functionkita coba bikin function yang lansung diajalnkan 
const Mahasiswa2 = function (){
    this.nama = "warham",
    this.umur = 22; 
    this.sayhello = function(){
       console.log( `hello nama saya ${this.nama} umur saya ${this.umur}`)
    }
    // setInterval(function(){
    //     console.log(this.umur++)
    // },500) //klo setinterval ini diajalanin maka this.umur akan menncari ke global jadi dia undefind.
// untuk itu kita gunakan arrow function krna arrow function tdk punya this global
    setInterval(()=>{
        console.log(this.umur++)
    },100) //kare dia nggap punya konsep this maka dian mencari ke lexical scopenya
}
const Ham = new Mahasiswa2()

