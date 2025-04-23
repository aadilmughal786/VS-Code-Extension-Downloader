// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Get current theme from local storage or default to "light"
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
  lightIcon.style.display = 'none';
  darkIcon.style.display = 'block';
}

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
  if (currentTheme === 'light') {
    currentTheme = 'dark';
    document.documentElement.setAttribute('data-theme', 'dark');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  } else {
    currentTheme = 'light';
    document.documentElement.setAttribute('data-theme', 'light');
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
  }

  // Save the current theme in local storage
  localStorage.setItem('theme', currentTheme);
});
