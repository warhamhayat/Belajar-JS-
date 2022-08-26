//rest parameter
// a/ merepentasikan argument pada function dengan jumlah tidak terbatas menjadi sebuah array

function myFunction(a,b,...sisah){ //masuknya sebagai array
    return sisah //345
}

console.log(myFunction(1,2,3,4,5))


function myFunction1(){ //krn parameternya tdk ditangkap jadi secara otomatis masuk dalam 9argument
    // return Array.from(arguments) //cara lain mengmbalikan menjadi array selain menggunkn rest parameter
    return  [...arguments] //spread parameter
}

console.log(myFunction1(1,2,3,4,5))

function jumlahKan(...angka){
    let total = 0;

    for( const a of angka){
        total +=a
    }
    return total
}
console.log(jumlahKan(1,2,3,4))

//kita juga bisa menggunaakan sebgai aeeay destructuring

const kelompok1 = ['warham','hayat','ham','budi' ]

const [ketua,wkil,...anggota]=kelompok1 //array destruc

console.log(ketua)

//kalo object destruc

const team ={
    pm : 'ham',
    frontend1 : 'budi',
    backend : 'hayat',
    ux : 'budi'
}

const {pm, ...myteam} = team
console.log(myteam)

//kita  juga bisa menggunakannya di filtering

function filterBy(typer,...values){

        return values.filter( a => typeof a === typer)

}

console.log(filterBy('string',2,4,false,10,true,'budi','jhon'))//ketika saya mau memfilter nilai berdasarkan datanya yang mana itu number