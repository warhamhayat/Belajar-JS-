//Destructuring variable
//  a/ expression pada javascript yang membuat ,
// kita dapat membongkar nilai dari Array atau porperti dari object kedalam variable terpisah

// contoh sederhananyanya

const coba =['satu', 'dua','tiga'] //array, dengan 3 element string
//kemudian kita element itu menjadi nilai  pada variable  terpisah

//dengan   menggunakan destrcutuing ini, kita cukup dungan taand [] untuk array, lalu kita simpan dengan nama2 variable yang ingin kita gunakan
// jadi otomatis isi dari  destrtucting ini akan dipetakan kedalam tiap2 elemenpada arraynya
const [a , b , c] = coba;
console.log(a)//satu
console.log(c)//"tiga"
 


// contoh lainnya adalah  dengan obejct

const mhs = {
    nama : 'warham hayat',
    umur :22,
    email : "warhamhayat@gamail.com"
}

console.log(mhs.nama) //cuma cek saja

const {nama, umur, email} = mhs; //kurung kurawal untuk membongkar object
console.log(nama) //"warhamhayat"
console.log(email) //"warhamhayat@gmail.com"


//kita lihat penggunaan sedeerhananya lagi,

//destructuring Array

const perkenalan = ['nama', 'saya','Woody']
const salam = perkenalan[2] // ini teknis biasa mengambil data pada array
console.log(salam)  
 // kita coba menggunakan destructuring 

 //kita cukup bikin variable bentuk pakai []; yang mana kita petakan tiap@ eleme ntya pada variable terpisah yg namnya bebsa

 const [ greating, satu , name ] = perkenalan // yang di assign ke dalam array sapa 
 console.log(satu)

 //kita juga bisa melompati element2 pada array misalnya saya cuma ini "nama" saja sama "woody"
 //jadi kita bisa pisahkan dengan (, ,) komo dengan isi kosong
 const [ great, , namasja ] = perkenalan //kita skip menggunkan koma
 console.log(namasja)// jadi string "nama" tdk masuk dalam variable terpisah

// na kita juga bisa menukar (swap) isi dari Array,
//karna isinya akan diubha maka kita pakai let

let w = 1
let z = 2
console.log(w);

[w,z]=[z,w]

console.log(w)

// distructuring pada function 
// maka kita gunakan sebai return value pada funsction
// jadi functionnya bisa mengembalikan Array jadi array langsung di tangkap oleh sintax distructuring ini

// misalhnya
 
function cobaLagi (){
    return [4,6,8] //jadi function menegembalikan array
}

const arrayFunction =  cobaLagi() // maka varial ini tipa akan array
console.log(arrayFunction[1]);

//tapi dengan menggunakan distructuring function oini maka kita bisa lansung,

[d,f,e]=cobaLagi() // jadi dengan menggnakan distruc, maka lansung dipetakan menjadi variable

console.log(e);

//kalo misalkan mau bongkar banyak tipe Arraynya,
//tapi kita tidak tau ada berapa element
//maka kita gunakan seperti sebelumnya menggunakan (rest)= [...]
const [m,n,... o] = [1,2,3,4,5] //karena kadang kita tidak tau isi array ada bepara maka kira bisa gunakan rest parameter
console.log(o)



//kita masuk Ke OBJECT
//  DISTRUCTURING OBJECT

const mahasiswa ={
    nama2 : "waarham",
    umur2 :22,
    email2 : "warhamhayat@gmail.com"
}//object libera

const namanya = mahasiswa.nama2; //kan biasanya gini klo kita mau tangkap
console.log(namanya)

//kalo di distrucruing object
//cukup gunakan {} terus tuliskan nama variable sesuai dengan nama properti objectnya
//beda dengan array yang bebas

const { nama2 ,umur2,email2} = mahasiswa //isinya harus sama dengan propertynya
console.log(email2)

// aasigment tanpa deklarasi object
// kita tdk perlu deklarasi, dan kita tidak perlu tannda const
//tapi kita perlu menggunakan syaranta = tanda ()
//  masih eror ({nama4,umur4}={nama4 : "waarham",umur4 :22}); // jadi tidak perlu deklarasi object;

// console.log(umur4);

//misalnya assignt ke variable baru,
//kalau mau beda nama variablenya, kita cukup tambah (:)

const maha ={
    nama4 : "waarham",
    umur4 :22,
    email4 : "warhamhayat@gmail.com"
}
//kita bisa lakukan seperti ini
const {nama4 : j,umur4 :k, email4 :l} =maha
console.log(l) // jadi nama variable berganti



// kita bisa juga gunakan defaul value,
//contohnya

//kalo misalnya didalam distructaring "pekerjaan"

const pegawai ={
    na : "waarham",
    um :22,
    em : "warhamhayat@gmail.com",
} 
const {na,um,em,peker = "web developer"} =pegawai //jadi kita masukkan default value
console.log(peker)

//kalo pakai rest varameter

const {nam, ...value} = pegawai
console.log(value)// maka dia akan jadi object karna isinya lebih dari satu

//ini cukup keren, ketika kita ingin mengambil fieal pada object, setelahdikirim sebagai parameter ke object

const pegawai1 ={
    id: 123,
    nam3 : "waarham",
    um3 :22,
    em3: "warhamhayat@gmail.com",
}

function getidPegawai(peg){ //yang diterima function adaah obej
    return peg.id
}//ini biasa
console.log(getidPegawai(pegawai1))

//kalo menggunakan distructaring ini
//kita bisa simpan parameternya itu bukan objet
//tapi yang ditanggkap hanya id tapi harus pake {}
//jadi yang direturn idmya saja
function getidPegawai1({id}){ //jadi pas masuk disini dingkar dulu dan id saja yang diambil
    return id
}//ini biasa
console.log(getidPegawai(pegawai1))
