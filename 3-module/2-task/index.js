function filterRange(arr, a, b) {
  // ваш код...
  if (a > b) [a, b] = [b, a];
  let filtered = [];
  
  arr.forEach(item => {
    if (item >=a && item <=b) filtered.push(item)
  })
  
  return filtered
}
