// destructuring function 

// contoh function sederhana yang isinya mengembalikkan nilai yang bentukknya Array 

function penjumlahanPerkalian ( a, b){
    return [a +b, a *b] //maka akan menghasilkan 2 parameter
}

const jmlah = penjumlahanPerkalian(2,4)//[0]
console.log(jmlah)
console.log(jmlah[0])//semisal juma ingin satu

//kalo menggunakan destructuring
//lansung saja bikin variable yang isinya juga array

const [ jumlah, kali] = penjumlahanPerkalian(2,5)
console.log(kali)

//bagaimana klo return valuenya banyak

function kalkulasi (a,b){
    return [a + b, a-b, a*b, a / b] //return valuenya banyak 
}

//maka bikin distructuring lebih lengkap lagi
const [ tambah ,kurang , kali1, bagi] = kalkulasi (4,2)
console.log(bagi)

//jadi urutan untuk variable sangat berperangu,
//tapi klo misalkan urutan tdk berpengaruh, maka retuen valuenya bisa kita ganti jadi object bukan array
//contohnya

function kalkulasiObject(a,b){
return{ //maka returnya pakai object
    tam : a +b,
    kur : a -b,
    kal : a * b
}
}
// maka kalo object, maka kita bisa distrcutring object juga kan

const {kal, tam, kur} = kalkulasiObject(4,2) //ini tdk amasalah karaena sudah terosisasi di returnya jadi urutan tidak berpengarun
console.log(kal)


//nahhh selanjut,
//destructuring pada function Argument

const mhs1 = {
    nama : 'warham',
    umur :22,
    email : 'warham@gmail.com'
}
 
function cetakmhhs(nama,umur){ //jadi disini saya butuh parameter nama dan umur
    return `hallo, nama saya ${nama}` 
}
// jadi kalo saya mau jalankan, saya ambil isi parameternya dengan mgambil object mhs

console.log(cetakmhhs(mhs1.nama,mhs1.umur))// ini klo kita pakai function declaration biasa dimana parameternya kita pecah sendiri


//cara lain, kita bisa kiriminnya object
function cetakmhhs2(mhs){// maka disini kita pecahnya manual
    return `hallo, umur  saya ${mhs.umur}`
}

console.log(cetakmhhs2(mhs1))


//sekarang klo mau pake dectracturuing
//biar tidak ada yang dipecah, jadi kita bisa kirimnya object
function cetakmhsDes({nama , umur}){ // jadi disini kita pecah lansung
    return `hallo nama saya ${nama}, umur saya ${umur}` // jadi sisah panggi aja nama variablennya
}
console.log(cetakmhsDes(mhs1))


// lebih komples lagi klo dalam object ada object lagi
const mhsObject = {
    nama : 'warham',
    umur :22,
    email : 'warham@gmail.com',
    nilai :{ 
        tugas : 80,
        uts :85,
        uas : 75
    }
}

function cetakmhsobj ({nama , umur, nilai:{tugas,uts,uas}}){ // jadi disini kita distructuring lagi nilai
    return `hallo nama saya ${nama}, umur saya ${umur}, nilai uas saya ${uas}` 
}
console.log(cetakmhsobj(mhsObject))