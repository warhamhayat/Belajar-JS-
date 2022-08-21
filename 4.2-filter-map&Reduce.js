
// 3 contoh higher order function yang pling sering digunakan
        //.map()
        // .filter()
        // .reduce()
// Array.prototype.map()// untuk mapping pada array
// Array.prototype.filter()//untuk menyeleksi pada array
// Array.prototype.reduce()//

const angka = [-1, 2,7, -4,3, 5,-8,-5,6,9]

// filter
//  mencari angka >= 3
const newAngka = []
for(let i = 0; i <  angka.length; i++){
     if (angka[i] >= 3){
        newAngka.push(angka[i])
     }
}
console.log(newAngka);
 
//Kala kita paka filter

const newangka1 = angka.filter(function(a){
    return a >=  3;
})
console.log(newangka1)
// jadikan arrow function
const newAngka2 = angka.filter( a =>  a >= 3)
console.log(newAngka2);



//Map
// kalikan semua angka dengan 2

const mapAngka  = angka.map(function(a){
    return a * 2
}) 
console.log(mapAngka);


//reduce
//melakukan segala sesuatu pada Array
//jumlahkan seluruh element pada array

//kalo reduce, ia mempunyai 2 argument

const arrayAngka = angka.reduce(function( accumulator, currentvalue){
  return accumulator + currentvalue  
})

console.log(arrayAngka)


//method Chaining
// kita coba mencari angka >5
// kalikan 3
//jumlahkan


const hasil = angka.filter(a => a > 5) // 7 6 9
    .map(a => a * 3) //21 18 27
    .map(a => a / 2)
    .reduce((acc, cur) => acc  + cur); //66

console.log(hasil);