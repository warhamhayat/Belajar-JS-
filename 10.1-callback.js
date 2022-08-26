//callbacks
//a/ sebuah function  yang dikirimkan sebagai parameter ke function yang lain
//a/ function yang dieksekusi setelah function lain selesai dijalankan.

// lettt code 
//callback function yang syncronus
        // function halo (nama){
        //     alert(`halooo ${nama}`)
        // }//nanti function ini akan kita kirimkan sebagai parameter ke function lain

        // function tampilkanPesan (callback){ //nama parameternya bisa apa aja
        //     const nama = prompt('masukkan nama')
        //     callback(nama)
        // }
        // tampilkanPesan(halo)



//contoh berikut
//saya punya variable yang tipenya array yang salamnya ada objex

const mhs =[
    {
        nama:'warham',
        nim :'2020210',
        email: 'warham@gmail.com',
        jurusan: 'bahasa'
    },
    {
        nama:'jhono',
        nim :'1020210',
        email: 'jhonom@gmail.com',
        jurusan: 'budaya'
    },
    {
        nama:'budi',
        nim :'4000210',
        email: 'budi@gmail.com',
        jurusan: 'seni'
    }
]//saya punya data dalam bentuk array of objec

//
// casenya
//saya ingin menampilkan nama mahasiswa saja
//jadi kita bisa gunkanan higher order function

console.log("mulai")
//kalo pakai arrow function
    // mhs.forEach(m => console.log(m.nim)) 
mhs.forEach(function (m){ //jadi kira merepentasikan mhs nya sebagai m.
    console.log(m.nama) //jadi cuma looping namanya saja
})

mhs.forEach( m =>{
    for (let i =0; i <10000000; i++){ //sebelum kita nampilan nama , kita coba buat looping
        let date = new Date()//walaupun tanggalnya kita gak pakai
    }
    console.log(m.jurusan)
}) //jadi klo ini belum selesai yang dibawah bakal menunggu terus karna synchronous
console.log("selesai")
//bisa kita lihat diatas higher order function itu adalah parameternya adalah callback
//jadi semua code diatas berjalan secara syncronous



//Asynchrounous callback


    // function getDataMahasiswa(url, succes,error){
    //     let xhr = new XMLHttpRequest()
    //     xhr.onreadystatechange =function(){
    //         if (xhr.readyState ===4){
    //             if(xhr.status ===200){
    //                 succes(xhr.response)
    //             }
    //             else if (xhr.status ===400){
    //                 error()
    //             }
    //         }
    //     }
    //     xhr.open('get',url)
    //     xhr.send()
    // }

    //latihan callback
    

