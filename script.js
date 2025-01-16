function mincost(arr)
{ 
//write your code here
// return the min cost
  let totalCost = 0; 

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);

    const first = arr[0];
    const second = arr[1];

    const cost = first + second;

    totalCost += cost;

    // Step 5: Remove the two smallest elements and add their sum back to the array
    arr = [cost, ...arr.slice(2)]; 
  }

  return totalCost; 
}

module.exports=mincost;
