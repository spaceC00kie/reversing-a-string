const revStr = str => {
  //make string into an array
  let arr = str.split("")
  //define left and right pointer variables
  let left = 0
  let right = arr.length - 1
  //while loop moving pointers in until the pointers cross
  while (left < right) {
    //switch the values at the pointers
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    //move both pointers inward
    left++
    right--
  }
  //make array into string and return
  return arr.join("")
}

console.log(revStr("testing"))
