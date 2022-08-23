//cara membuat Object pada javascript


//object literal
// ada properti ada method
let karyawan = {
    nama : "Ham",
    gaji : 1000,
    //kita juga bisa tambkan method
    // m/ function yang aada dalam object
    kerja : function (jam) {
        this.gaji *= jam
        console.log(`selamat gajimu bertamba ${this.gaji}`)
    }
}

console.log(karyawan)
karyawan.kerja(4)
console.log(karyawan)


// function declaration
function tampilPesan (ham){
    alert("hallo" + ham)
}

// funcstion expression
const ham = function(nama){
   console.log(`halo ${nama}`)
}
ham("warham")


//kalo mau bikin object karyawan ke2, jadi cukup bikin template
// function declaration

function mahasiswa (nama, energi){
    let maha = {};

    maha.nama = nama;
    maha.energi = energi;

    console.log(maha);
    
    maha.makan = function(porsi) {
    this.energi += porsi;
    console.log("energinya sudah bertambah")
    }

    maha.main = function(jam){
        this.energi -= jam
    }
    return maha; //kalo pakai function decleration harus ada returnya
}

const ipul = mahasiswa ("ipul",10)
const budi = mahasiswa ("budi", 20)


ipul.main(3)
console.log(budi)
console.log(budi)

// constructor Function
//klau pakai ini keywordnya "new"
// kalau pakai ini kita tidak perlu pakai ,kita peru mendeklarasiakan varialbe dulu dan ruturnya

function mahasiswa1 (nama, energi){
    this.nama = nama;
    this.energi = energi;

    console.log(mahasiswa1);
    this.makan = function(porsi) {
    this.energi += porsi;
    console.log("energinya sudah bertambah")
    }

    this.main = function(jam){
        this.energi -= jam
}
}

const bayu = new mahasiswa1("bayu", 20)
console.log(bayu);

bayu.makan(5);
console.log(bayu.energi);

//dengan menggunakan contructor function ini akan memudakan kita untuk membuat prototype dan membudakan membuatan object.create
