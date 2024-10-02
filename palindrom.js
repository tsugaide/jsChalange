//metode 1 manual

const kata = "kasurrusak";

let palindrom = "";
let hasil;
for (let index = kata.length - 1; index >= 0; index--) {
  palindrom += kata[index];
  hasil = palindrom == kata;
}

console.log(hasil);

//metode 2 otomatis

const kata2 = "kasurrusak";
const reverse = kata2.split("").reverse().join("");
console.log(kata2 == reverse);
