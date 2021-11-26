function checkSpam(str) {
  // ваш код...

  const checkText = str.toLowerCase();
  
  return (checkText.includes('1xbet') || checkText.includes('xxx')) ? true : false;

}
