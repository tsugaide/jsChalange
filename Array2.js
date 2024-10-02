const arr = ["ayam","bebek","ikan",1,2,3]

let hasil = 0
arr.forEach(item => {
  if(typeof item === "number"){
    hasil += item
  }
})
console.log(hasil)
