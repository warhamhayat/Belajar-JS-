// tagged template

const nama = "warham";
const umur = 33

const str = `hallo , nama saya ${nama}, saya ${umur} tahun ` // tag template

// jadikan jadi tag biasa diatas jadi tag tamplate
 function coba(){
    return 'coba'
 }
const coba = coba`hallo , nama saya ${nama}, saya ${umur} tahun `
  
console.log(str)