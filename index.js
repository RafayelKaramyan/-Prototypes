//1.Implement a new method of the array "shuffle" to shuffle arrays. It should be used as shown below:
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    arr2.sort(() => Math.random() - 0.5)
  }
  
  let arr = [1,2,3,4];
  let arr2 = ['a', 'b', 'c']
  shuffle(arr);
  console.log((arr));
  console.log((arr2))
  