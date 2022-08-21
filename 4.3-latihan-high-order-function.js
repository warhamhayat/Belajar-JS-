//Ambil semua elemen vidio
const vidios = document.querySelectorAll("[data-duration]")
//karena asilnya adalah node maka kita ubah menjadi Array

const vidios1 = Array.from(document.querySelectorAll("[data-duration]"))
//pilih hanya "JAVASCRIPT-LANJUTA"

let jsLanjut =  vidios1.filter(vidio => vidio.textContent.includes("JAVASCRIPT-LANJUTAB"))// cari semua text yang  ada "js lanjutan" menggunakan (include)

//ambil durasi masing2 vidio
//kita pakai chaining
.map(item => item.dataset.duration)

//ubah durasi menjadi int, ubah menit manjadi detik
.map(waktu => {
    //10:20 -> [10,30] split
    const part = waktu.split(":").map(part => parseFloat(part))
    return (part[0] * 60)+ part[1]
})

//jumlahkan semua detik
.reduce((total, detik) => total + detik)


//ubah formatnya jadi jam detik
const jam = Math.floor(jsLanjut / 3600);

jsLanjut =jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60
//simpan di DOM

const pDurasi = document.querySelector('.total-deuraso')
pDurasi.textContent = `${jam}, ${menit}, ${detik}`

const jmlVidio =vidios1.filter(vidio => vidio.textContent.includes("JAVASCRIPT-LANJUTAB")).length;
const pjmlVidio = document.querySelector('.jumlah-vidio')  
pjmlVidio.textContent = `${jmlVidio} Vidio` 