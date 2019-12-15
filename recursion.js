/* 
 * Recursion
 * Task: Find "x" value in a given array
**/

// Given Array
const tab = [1,2,5,3,88,3,7,3,775,3];

const search = (tab) => {
  const right = tab.lenth;
  return function searchHandler(left, x) {
    if(right === 0){
      return "Array is empty.";
    }
    if(left > right) {
      return `Couldn't find "x".`;
    }
    if(tab[left] === x) {
      return `Found "x" on position: ${left}.`;
    } else {
      return searchHandler(left+1, x);
    }
  }
};

const searchResult = search(tab);

console.log(searchResult(0, 3));
