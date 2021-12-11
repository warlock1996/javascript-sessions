function filter(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]))
      result.push(array[i]) // callback(array[i]) = (array[i]) => array[i] !== 2
  }
  return result;
}


const result = filter.call(this, [1, 2, 3, 4, 5], (v) => v !== 2)
console.log(result)