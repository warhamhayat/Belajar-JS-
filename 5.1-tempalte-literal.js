// template literal iti atau string itu apa?
// a/ string literla yang memungkinkan adanya expression di dalamnya.

// template literal hanya bisa digunakan menggunakan (``) back tick
// multi-line string
// embedded expression
//HTML fragments
//expression interpolation
//tagge tempalte


//contoh
// multi-linr
` string tex 1
    string text 2
    string tex 3
`// multi line string

`string text ${expression} string text`//embedded expression

tag `string text ${expression} string text` //tagged template

// multi-line String
console.log(` string 1\n string 2`) //\n = new line

//mul-line (HTML Fragment)

const mhs = {
    nama : "warham",
    umur : 22,
    email : "warhamhayat@gmail.com"
}

//embedded Expression
const  nama = "warham"
const umur = 33;
console.log(` hallo ${nama}`);

//embedded interpolation
//kalo dalam expressi terdapat perjumlahan

let a = 10;
let b = 15

console.log(` jika a = a dan b = 15, maka jumlahkan : ${a + b}, bukan ${2 * a + b}`)


