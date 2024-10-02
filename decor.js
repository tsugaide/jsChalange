const dec = "&&**&&&"
const text = "Mantap"
const decArr = dec.split("")
const arr1 = decArr.filter((item) => item === "&")
const arr2 = decArr.filter((item) => item === "*")

const result = arr1.join("")+text+arr2.join("")
console.log(result)