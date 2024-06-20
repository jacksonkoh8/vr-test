document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const startButton = document.getElementById('startButton');
    const toggleButton = document.getElementById('toggleButton');

    // Hide the splash screen and show the toggle button when start button is clicked
    startButton.addEventListener('click', () => {
      splashScreen.style.display = 'none';
      toggleButton.style.display = 'block';
    });

    // Toggle the splash screen visibility when the toggle button is clicked
    toggleButton.addEventListener('click', () => {
      if (splashScreen.style.display === 'none') {
        splashScreen.style.display = 'flex';
      } else {
        splashScreen.style.display = 'none';
      }
    });
  });