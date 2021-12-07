function getMinMax(str) {
  // ваш код...
  let min = 0;
  let max = 0;
  const arr = str.split(' ')
    
  arr.forEach(item => {

      item = +item;
      
      if (item < min) min = item;
      if (item > max) max = item
  });

  return { min , max}
}
