
// Closure

    // clouse a/ sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingukungan saat ia diciptakan


// Lexical Scope

function init () {
    let nama = "warham"; //local variable

    function tampilNama(){ //inner function (closure*) memiliki akses ke parentnya
        console.log(nama) //akses ke parent variable
    }

    tampilNama()
}
init()