
// modern javascript
// a/ function yang beroperasi pada function yang lain 
// js memperlakukan function sebgai object

function kerjakanTugas (matakuliah, selesai){
    console.log(`mulai mengerjakan tugas ${matakuliah} ....`);
    selesai() //meupakan function
} 

function selesai (){
    console.log("tugasnya selesai")
}

kerjakanTugas ("matematika",selesai) // ketika kita menggunakan function, kita bisa menggunakan function lagi sebagai argumentnya

// pada contoh diata, (function kerjakanTugas) itu disebeut higher order function, dan jika kita punya function sebagai argument kita sebut "callback"
// function yang kita simpan sebagai argument kita sebut "callback"
//function yang memiliki "callback" sbg argumenya kita sebut "higher order function"

//contoh lain;

setTimeout(function(){
    console.log('hello word')
}, 1000);

 //pada parameter pertamanya adalah function, keduanya int untuk mentimpan waktu tunggu
 // maka setTimeoutnya adalah "higherorder function";


// contoh lain ketika kita punya function yang return valuenya dalah function lagi 

function ucapkanSalam (waktu){ //function Ucap ini bisa kita anggap high order karena didalamnya memiliki rturn value yang jyga function
    return function (nama){
        console.log(` hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan~`);
    }
}
 let selamaMalam = ucapkanSalam("malam");

 console.dir(selamaMalam("warham"));

// kenapa kita buku higher order function?
// abtraksi, untuk membuat kode kita buat lebih sederhana

//contoh

let total = 0, count =1;

while (count <= 10){
    total += count;
    count += 1;
}
console.log(total)

// bandingkan dengan begini
    // console.log(sum(range(1,10)))//eror

    // tapi bayangkan aja ada defini function yang namanya "sum", dan function range,
//  makanya pada saat panggil dua function ini bersamaan makanya  ada function menjadi paramedter pada function yang lain

//contoh klo kita punya looping kaya ini
for (let i=0; i <=10; i++){
    console.log(i)
}// ini menjadi inya mengguakan consolo

// klo misalkan saya ingin looping gak 10x jadi 100x, kan berarti kita berubah angka 10 , jadi kan tdk dinami s

//tapi gimana klo kita gunakan function

function repeatLog(n){
    for( let i = 0; i< n; i++){
        console.log(i)
    }
}
repeatLog(10)
//jadi pd contoh diatas, kita ganti angka 10 dengan varibel n yang menjadi argument dari repeat log
//  sehingga klo ini ingin mengubah seberapa kali jadi kita tinggal panggin function "repeatlog" dan kasih parameter berapa
// tanpa mengubah lagi loopingnya, jadi dengan fmenggunkan function itu abtraksi

//bagaimana kalo aksinya itu bukan consolo?
//coba kita bikin lebih efektif lagi, kita bisa ubah seperti ini lagi

function repeat(n, action){
    for(let i =0; i <= n; i++){
        action(i)
    }
}
// jadi sekarang, functionnya mempunya 2 argument, argument pertamana (n) untuk menentukan aksinya mau di ulang berapa kali
// argumen kedua (action) yang berisi aksi apa yang mau dilakukan, jadi parameter kedua adalah parameter
repeat(10, console.log);  //

//alasan lain, dengan terbiasa membuat segala sesuatu ke dalam functionan programing

// contoh lain, dari beberapa higher order function pada pengelolahan array yang biasa digunakan;

    // Array.prototype.map()// untuk mapping pada array
    // Array.prototype.filter()//untuk menyeleksi pada array
    // Array.prototype.reduce()//
