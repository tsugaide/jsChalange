function diff(a,b){
  const result = a.filter(num => !b.includes(num))
  return result
}
console.log(diff([], [2]))