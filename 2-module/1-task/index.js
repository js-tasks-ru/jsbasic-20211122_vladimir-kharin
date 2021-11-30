function sumSalary(salaries) {
  // ваш код...
  let summ = 0;
  for (const k in salaries) {
    const check = salaries[k];
    if (typeof check === 'number' && !isNaN(check%1) ){
      summ += check;
    } 
  }
  return summ
}
