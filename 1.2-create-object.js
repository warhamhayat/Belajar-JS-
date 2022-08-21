
// dengan menggunakan object.create, kita bisa memberitahu kepada object parents nya
const  methodMahasiswa ={
    makan : function (porsi) {
        this.energi += porsi;
        console.log("energinya sudah bertambah")
        },
    main : function(jam){
    this.energi -= jam
        }
}

function mahasiswa (nama, energi){
    let maha = Object.create(methodMahasiswa);
    console.log(maha)
    maha.nama = nama;
    console.log(maha.nama)
    maha.energi = energi;
    console.log(maha);

    return maha
}

const ipul = mahasiswa ("ipul",10)

const Budi = mahasiswa("jhono", 20)
ipul.main(3)
console.log(Budi.makan(4))
console.log(ipul)


