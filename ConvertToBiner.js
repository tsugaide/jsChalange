function biner(num){
  
  let number = num;
  let hasil = "";
  
  while(number > 0 ){
    number = Math.floor(number/2)
    let sisaBagi = number%2;
    hasil += sisaBagi;
  }
  console.log(hasil)
}
biner(56)