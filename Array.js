const arr = ["apel","pisang","melon","semangka","anggur"]

//tambah item
arr.push("naga","salak","anggur")
//hapus buah di index 
arr.splice(2,1)

arr.sort((a, b) => a - b)
console.log(arr)


