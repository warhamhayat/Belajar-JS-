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

const nama = "warham"

for(const n of nama){ //variable bebas (n) untuk representasi dari satua buah elemen dari tiap2 pengulangannya
    console.log(n)//jadi dia akan meloping tiap2 karakter pada srtingnnya
}
