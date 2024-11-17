function sum(){
  
  const arr = [1,3,5,2,7]
  
  for(let i=0;i<arr.length;i++){
    for(let j= i+1;j<arr.length;j++){
      const sum = arr[i]+arr[j]
      if(sum == 8){
        console.log(arr[i] +'+'+arr[j])
      }
    }
  }
}
sum()