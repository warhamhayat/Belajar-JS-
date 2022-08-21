

// function declaration
function tampilPesan (ham){
    alert("hallo" + ham)
}

// funcstion expression
const ham = function(nama){
   console.log(`halo ${nama}`)
}
ham("warham")

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
    return maha;
}

const ipul = mahasiswa ("ipul",10)

ipul.main(3)
console.log(ipul)

// constructor Function

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
console.log(bayu);
