const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  themeSwitch.checked = true;
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}

themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
});
