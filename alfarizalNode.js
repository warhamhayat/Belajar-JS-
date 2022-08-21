const system = require("os");

const data = {
  memory: system.freemem(),
  type: system.type(),
  netrwork: system.networkInterfaces(),
  hosname: system.hostname(),
};

console.log(data);

var number = "234";
var name = " wARhaM asdasdadad";
var chngeToString = number.slice(1, 2);

var changeName = name.length;

function validasi() {
  if (name.length < 15) {
    return " selamat yahh";
  } else {
    return " wahh sepertinya kamu belum anggota kami";
  }
}
console.log(chngeToString);
console.log(changeName);
var cek = validasi();
console.log(cek);
