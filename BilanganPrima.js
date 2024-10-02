
const deret = 15
let hasil = [2,3]
for(let angka= 4; hasil.length<deret ;angka++){
  let n = 2
    while(n*n <= angka){
    if(angka % n == 0){
      break
    }
    n++;
  }
  if(n*n > angka){
    hasil.push(angka)
  }
}
console.log(hasil)
