// Get the color mode toggle checkbox element
const colorModeToggle = document.getElementById('colorModeToggle');
    
// Function to toggle color mode
function toggleColorMode() {
  const htmlElement = document.documentElement;
  if (colorModeToggle.checked) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-bs-theme');
  }
}

// Event listener for the color mode toggle
colorModeToggle.addEventListener('change', toggleColorMode);