// function declaration 

function panggilNama (nama){
    console.log(` hallo ${nama}`)
}
// function expression
const panggilNama2 = function(nama){
    console.log(` hallo ${nama}`)
}

// arrow function expresiion

const tampilNama = (nama) => {
    console.log(` hallo ${nama}`)
}
tampilNama("ham")

// kalo parameternya satu nggak usah pakai kurung di parameternya

const tampilNama2 = nama => {
    console.log(` hallo ${nama}`)
}

// implisit return kalo eksekusinya cuma satu
// satu parameternya dan eksekusinya
const tampilNama3 = nama => `helooo ${nama}`;


// arrow function tampa parameter, wajib menulis kurungnya
const tampilnama4 = () => `helloooo ham`;
console.log(tampilnama4())

//arrow function dengan menggunakan function map
let mhs =["budi hartono", "woody", "warham"]

let jumlahHuruf = mhs.map(function(nama){
    return nama.toLocaleUpperCase()
});

console.log(jumlahHuruf);


// kita ubah menjadi arrow functionn
let jumlahHuruf1 = mhs.map(nama => nama.length);
console.log(jumlahHuruf1);

// kalo mau dikembali dalam bentuk object bukan lagi array
// biar dianggap object kita bungkus pakai () pada kurung kurawal
let jumlahHuruf2 = mhs.map(nama =>( {nama}));
console.log(jumlahHuruf2);
console.log(jumlahHuruf2[1])
const isinyaApa = jumlahHuruf2[1]
console.log(isinyaApa)


// biar objectnya lengkap

let jadikanObject = mhs.map(nama =>( {
    nama : nama,
    jmlHuruf : nama.length
}));
console.table(jadikanObject);


