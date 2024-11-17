function shufle(){
  let array = [1,2,3,4,5,6,7,8,9];
  for(let i = array.length-1; i>=0; i--){
    const angka = Math.floor(Math.random()* array.length);
    [array[i], array[angka]] = [array[angka], array[i]];
  }
  console.log(array)
}
shufle()