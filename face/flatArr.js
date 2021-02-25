function flatArr(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => {
      return [...flatArr(a), ...flatArr(b)]
    },[])
  }else{
    return [arr];
  }
}

console.log(flatArr(([1, [[2], [3, [4]], 5]])));