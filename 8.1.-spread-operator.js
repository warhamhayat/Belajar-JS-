//spread operator a/ operator yang memecah (expadn) iterabel menjadi singel element
//memecah iterabel menjadi single element

const mhs = ['warham','hayat','ham']
console.log(...mhs)//hasilnya arraynya akan dipecah
console.log(...mhs[0])//klo  yang ini index pada arraynya yang akan dipecah


const maha = ['warham', 'budi', 'tono']
const dos   = ['all', 'limm', 'don']

// untuk menggabungkan 2 array ini kita bisa lakukan dua cara 

const orang = maha.concat(dos) //tapi menggunakan ini kita tdk bisa menambahkan element baru
//nah kalo mau menambahkan parameter didalammnya kita bisa gunakan spread parameter

const org = [...maha,'aji',...dos]
console.log(org)
console.log(org[4])


// kita juga bisa mencopy Array

const mhs1 = ['ham','jhon','hayat']
//klo menggunkan spread parameter, isi pada arraynya bisa berbedan dengan yang dicopy

const mhs2 =[...mhs1]
mhs2[1] ='hayat'
console.log(mhs2)
console.log(mhs1)