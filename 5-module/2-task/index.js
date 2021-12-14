function toggleText() {
  // ваш код...
  document.getElementsByClassName('toggle-text-button')[0].addEventListener('click', ()=> {
    const Text = document.getElementById('text');
    Text.hidden = !Text.hidden;
  })
}
