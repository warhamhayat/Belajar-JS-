const peope = [
    {
        nama : "Budi",
        umur :22,
        alamt:"pinrang"
    },
    {
        nama : "saipul",
        umur:22,
        alamat: "pare-pare"
    }
]
console.log(peope)

const getPerson = function(peope){ return peope.umur*2} 

const umr = peope.map(getPerson)
console.log(umr)

