//looping baru pada javascript

//objetc iterable
// -String
// -Array
// -argument/NodeList
// -typeArray
// -Map
// -set
// -user-defined



    // for..of  a/ sebuah loping yang bisa mengulan dan menelusuri object iterable
    // for..in

//for of
//for biasa 
const mhs = ["warham","budy","dody"];
//kalo menggunkan for biasa
for (let i = 0; i < mhs.length; i++){
    console.log(mhs[i])
}
//kita juga bisa menggunakan for each

mhs.forEach(m => console.log(m))//tiap2 elemen pada mahasiswa kita representasikan (m)


//kita juga bisa juganakan for of

for ( const m  of mhs){ //kita gunakan const karna variable m tdk akn pernah berubah, mekudian tulis of lalu nama arraynya
    console.log(m)
}//jadi tiap2 elemen di representasikan sebagi mahasiswa


//kita juga bisa meluping string
//for each khush untuk array jadi tdak bisa untuk stirng

//string
const nama = "warham"

for(const n of nama){ //variable bebas (n) untuk representasi dari satua buah elemen dari tiap2 pengulangannya
    console.log(n)//jadi dia akan meloping tiap2 karakter pada srtingnnya
}
  



const mhs1 = ["warham","budy","dody"];

 mhs1.forEach((m,i) => console.log(`${m} adalah mahasiswa ke-${i}`)) //foreach punya parameter tambhan, dimana i menjadi index

//kalo for of tdk bisa pakai parameter index

//kita bisa gunakan sebagai  argument

function jumlahAngka (){
    console.log(arguments) //tapi argument bukan arrai
}

jumlahAngka(1,2,3,4,5)

//kita bisa jumlahin pakai higher order function

function jumlahAngka2 (){
    return [1,2,3,4,5].reduce((a,i) => a + i)
}

jumlahAngka2()

//for in
//jadi ini hanya untuk enumerable(hanya untuk object)


const karyawan ={
    nama : 'warham',
    umur : 22,
    email :'warham@gmail.com'
}

for (m in karyawan){
    console.log(m) //ini mengambil properto
    console.log(karyawan[m]) //ini mengambil value
}


//kalo mau loopingnya objec pakainya  in,
//kala array pakainya of dan foreach 

for (const n in karyawan){
    return karyawan[n] //ini mengambil value
}