(() => {
  const loader = document.getElementById('loader');
  const scrollBar = document.getElementsByClassName('scroll-bar')[0];
  window.addEventListener('load', () => {
    loader.classList.add('none');
    scrollBar.classList.remove('scroll-bar')
  });
})();
