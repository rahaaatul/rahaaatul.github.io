// darkmode.js
// Function to check if the user's system is in dark mode
function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  // Function to set the background image based on dark mode status
  function setBackgroundImages() {
    const isDarkMode = isDarkModeEnabled();
    const lightBackgroundImage = "assets/images/background-image.png";
    const darkBackgroundImage = "assets/images/background-image-dark.png";
  
    // Get the background image element by its ID
    const backgroundImageElement = document.getElementById("background-image");
  
    // Check if the element exists before accessing its style property
    if (backgroundImageElement) {
      backgroundImageElement.style.backgroundImage = isDarkMode ? `url(${darkBackgroundImage})` : `url(${lightBackgroundImage})`;
    }
  
    // Add 'dark-mode' class to the HTML element if dark mode is enabled
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }
  
  // Call the function as soon as the script is loaded
  setBackgroundImages();
  