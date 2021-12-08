function camelize(str) {
  // ваш код...
  const arr = str.split('-');

  for ( const item in arr ) {
    if (item > 0) arr[item] = arr[item][0].toUpperCase() + arr[item].slice(1).toLowerCase()
  };

  return arr.join('');
}
