document.addEventListener('DOMContentLoaded', function () {
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');
    const toggleModeButton = document.getElementById('toggle-mode');

    // Check user's preference from localStorage
    const userPreference = localStorage.getItem('theme');

    if (userPreference === 'dark') {
      enableDarkMode();
    } else {
      enableLightMode();
    }

    // Toggle mode function
    toggleModeButton.addEventListener('click', function () {
      if (lightTheme.disabled) {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });

    function enableDarkMode() {
      lightTheme.disabled = true;
      darkTheme.disabled = false;
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }

    function enableLightMode() {
      lightTheme.disabled = false;
      darkTheme.disabled = true;
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });

