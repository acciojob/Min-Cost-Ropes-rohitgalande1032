function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a, b) => a-b);
  let totalCost = 0
  while(arr.length>1) {
    
    let first = arr[0];
    let second = arr[1];
    
    let cost = first + second;
    
    totalCost += cost;
    
    arr = [cost, ...arr.slice(2)]
  }
  
  return totalCost;
}

module.exports=mincost;
