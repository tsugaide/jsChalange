function anagram(){
  const kata1 = "menggunakan"
  const kata2 = "nnnggemauka"
  const result1 = kata1.split("").sort().join("")
  const result2 = kata2.split("").sort().join("")
  if(result1 == result2){console.log("benar")}
}
anagram()