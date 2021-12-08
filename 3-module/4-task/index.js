function showSalary(users, age) {
  // ваш код...
  const result = [];

  for( const pers in users) {
    if ( users[pers].age <= age ) result.push( users[pers].name + ', ' + users[pers].balance )
  };

  return result.join('\n');

}
