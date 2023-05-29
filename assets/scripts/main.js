// Function to convert a scroll position to a RGB color
function scrollPositionToRGB(scrollTop) {
  // These are RGB values for colors that feel "cyberpunk"
  // Change these to any colors that fit your desired theme
  const colors = [
    {r: 0, g: 255, b: 255},  // Cyan
    {r: 255, g: 0, b: 255},  // Magenta
    {r: 255, g: 70, b: 0},   // Orange
    {r: 0, g: 255, b: 0}     // Green
  ];

  // How far the user can scroll
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;

  // The color index to use based on scroll position
  const colorIndex = Math.min(Math.floor(scrollTop / scrollRange * colors.length), colors.length - 2);

  // How far the user has scrolled within the current color section
  const intraSectionScroll = scrollTop % (scrollRange / colors.length);

  // The proportion of the way through the current color section
  const lerpAmount = intraSectionScroll / (scrollRange / colors.length);

  // Calculate the new color based on scroll position
  const newColor = {
    r: Math.floor(colors[colorIndex].r + lerpAmount * (colors[colorIndex + 1].r - colors[colorIndex].r)),
    g: Math.floor(colors[colorIndex].g + lerpAmount * (colors[colorIndex + 1].g - colors[colorIndex].g)),
    b: Math.floor(colors[colorIndex].b + lerpAmount * (colors[colorIndex + 1].b - colors[colorIndex].b)),
  };

  return newColor;
}

// Function to handle scroll events
function handleScroll() {
  const newColor = scrollPositionToRGB(window.pageYOffset || document.documentElement.scrollTop);
  document.body.style.backgroundColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
}

// Add the event listener
window.addEventListener('scroll', handleScroll);

// Set initial background color
handleScroll();
