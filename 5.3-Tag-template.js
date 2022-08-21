// a/ bentuk yang lebih komplek dari template literals, memungkinkan kita untuk membaca
// template literal melalui function
//jadi kalo kita sudah membuat template literal, string itu bisa kita masukkan ke dalam function


//tagged template

const nama = 'warham'
const umur = 33

// coba kita abuat template literal biasa
const str =` halo, nama saya ${nama}, saya ${umur} tahun`

//  kita bikin functiion coba sebelum dipanggil
        // function coba (){
        //     return coba
        // }
//kalo kita buat functionnya menerima parameter maka hasilnya akan isi dari pangggil menjadi array
function coba (string){
    return string
}


// lebih kompleks lagi agar semuanya tampil 
function coba ( string,...value){ //karna ada banya string dalam template lirealnya, makanya kita gunnakan rest parameter[...](menamppung segala parameter didalamnya)
    let result = '' //varibl untuk menampung stringnya  
    string.forEach((str,i)=>{ //kemudian kita looping isi dari stringnya untuk digabungkan dengan valuesnya
        result += `${str}${value[i] || ''}` // si str itu anak digabungkan dengan valuesnya, kemduian looping lagi  ke values selanjutnya
    }) // agar nilainya tdk undefind maka kita gunakan operator or (||)
    return result
}
// coba kita jadikan  string tempalte liral diatas menjadi tagged tempalet function 
const strcoba = coba `halo, nama saya ${nama}, saya ${umur} tahun` // kita cuma menjadi funcfion didepan yang nanti string tempalte lteral ini akan masuk sebagai parameter function coba

console.log(strcoba)


// mungkin diatas terlalu  kompleks, cara gampangnya dengan menggunkan higher order function menggunakan reduce
// reduce itu , parameter wajibnya ada dua , pertama acumulator untuk menggabung semua parameternya, kedua element yang akan kita gabungkan


function cobaReduce ( string,...value){ //karna ada banya string dalam template lirealnya, makanya kita gunnakan rest parameter[...](menamppung segala parameter didalamnya)
   //kita bisa langsung return saja,
    return string.reduce((result,str,i)=> `${result}${str}${value[i] || ''}`,'')
    //jadi result itu menggabung seluruh isi arraynya, str = menggabubgkan element pada array stringnya, i= opsional untuk looping expressionya
} // terakhir kira kasih nilai awalnya string kosong

const strReduce = cobaReduce `halo, nama saya ${nama}, saya ${umur} tahun`
// maka hasilnya sama persis
console.log(strReduce)

//hight lightnya





