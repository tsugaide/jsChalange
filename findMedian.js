function find(){
  const arr = [1,5,2,3]
  arr.sort()
  const ganjil = Math.floor((arr.length / 2) + 1)
  
  const genap = Math.floor(arr.length / 2)

  if(arr.length % 2 !== 0){
    console.log(arr[ganjil])
  }else {
    console.log((arr[genap - 1] + arr[genap]) / 2)
  }
}
find()