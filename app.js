function repeat(n, action){
    for(let i =0; i <= n; i++){
        action(i)
    }
}
// jadi sekarang, functionnya mempunya 2 argument, argument pertamana (n) untuk menentukan aksinya mau di ulang berapa kali
// argumen kedua (action) yang berisi aksi apa yang mau dilakukan, jadi parameter kedua adalah parameter
repeat(10, console.log);  //