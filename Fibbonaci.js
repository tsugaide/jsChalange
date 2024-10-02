
const arr = [0,1]
const deret = 10
for(let i=1; i<deret; i++){
  arr.push(arr[i] + arr[i-1])
}
console.log(arr)