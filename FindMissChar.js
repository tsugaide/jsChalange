function find(arr){
  const miss = []
  
  for(let i=1;i<arr.length;i++){
    if(arr[i].charCodeAt(0) !== (arr[i-1].charCodeAt(0)+1)){
      miss.push(String.fromCharCode(arr[i-1].charCodeAt(0)+1))
    }
  }
return miss
}
console.log(find(["a","c","d","f"]))