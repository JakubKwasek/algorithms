/**
 * 
 * @param {*} arr 
 */
const multiplePointers = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(multiplePointers([-4,-3,-2, -1, 0, 1, 2, 3, 4]))

const uniqueValues = (arr) => {
  let i = 0;
  if (arr.length === 0){
    return i;
  }
  for(let j = 1; j< arr.length; j++){
    if(arr[i]!==arr[j]){
      i++;
      arr[i] = arr[j]
    }
    console.log(i,j);
  }
}

console.log(uniqueValues([1,2,3,4,4,4,5,7,8,9]));