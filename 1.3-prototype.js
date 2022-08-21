
// sebelumnya kita menggunkan object
// const  methodMahasiswa ={
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log("energinya sudah bertambah")
//         },
//     main : function(jam){
//     this.energi -= jam
//         }
// }

function mahasiswa (nama, energi){
    
    //let this = Object.create(mahasiswa.protorype) :  function declaration 
    // sudah punya parent yang namanya prototye
    // let mahasiswa =  {} //object biasa

    // let this ={} //terjadi dibelakan layar\\

    // constructor function
    this.nama = nama;
    this.energi = energi;

    // return this //terjadi dibelakan layar  
}

const ipul = new mahasiswa ("ipul",10)
const en = ipul.energi
console.log(ipul)
console.log(en)

// jadi bikin method makan kita memanfaatkan prototype

function mahasiswa (nama, energi){
    this.nama = nama;
    this.energi = energi;
}
mahasiswa.prototype.tidur = function(jam){
    this.energi += jam
}

mahasiswa.prototype.makan = function(porsi){
     this.energi += porsi
 } //method ini masuk dalam prototype jadi tdk perlu bikin object baru

//  karena constructor function maka pakai "new"
let budi = new mahasiswa("budi", 10)

budi.makan(3)

console.log(budi)
// konsep prototype ini mirip dengan konsep class yang menggunakan pewarisan


// coba kita  buat versi yang sama menggunakn konsep classs

class mahasiswa1 {
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi
    }
    // metthodnya
    tidur = function(jam){
        this.energi += jam
    }
    makan = function(porsi){
        this.energi += porsi
    }

} // menggunakan classs terlihat lebih rapih
// versi kelas ini dibelakang layar menggukan konsep prototype diatas (konsep sebarnya) yang terjadi
 
const nurdin = new mahasiswa1("nurdi",10)
console.log(nurdin);

//  apapun didalam  javas crip sebenarnya otu object.
//karna dia object, pasti punya protorype didalamnya.

// contoh pada Array
    let angka = []

    // yang terjadi sebenarnya 
    // function  Array(){
    //     let this = Object.create(Array.prototype)
    // }
     let angka1 = [3,1,2]

     console.log(angka1.reverse()); //method

    //  jadi array mewarisi segala yang adalah didalamnya(prototype);
    

