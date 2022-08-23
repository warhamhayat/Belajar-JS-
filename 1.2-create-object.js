//review materi sebelumnya
// dengan menggunakan object.create, kita bisa memberitahu kepada object parents nya
//agar kita tidak mengulan mthod pada semua varuable yang kita buat, maka baiknya kita buat du object untuk method tersebut

const  methodMahasiswa ={
    makan : function (porsi) {
        this.energi += porsi;
        console.log("energinya sudah bertambah")
        },
    main : function(jam){
    this.energi -= jam
    console.log(`haloo ${this.nama}, selama bermain `)
    }
} //ketika object ini dibuat, maka hanya akan disimpan di memory 


 //nah kemudian caranya untuk hubungan ke object kita,
function mahasiswa1 (nama, energi){
    let Maha = {}
    Maha.nama = nama,
    Maha.energi = energi
    //kemudian gunakan method diatas
    Maha.makan = methodMahasiswa.makan
    
    return Maha
}

const tegar = mahasiswa1("tegar",10)
console.log(tegar)


//kalo menggunkan methode diatas, ketika ada method baru, maka harus didaftarin lagi di variable.
//meribetkan jikau ada metode baru yang dibuat


//solusi untuk diatas, bisa menggunkan contoh dibawah
function mahasiswa (nama, energi){
    let maha = Object.create(methodMahasiswa); //sama saja denga {},bagusnya dia membuat oebjectnya
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


