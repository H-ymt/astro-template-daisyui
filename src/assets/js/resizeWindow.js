export const initializeViewport = () => {
  console.log("hello");

  let timeoutId = null;
  const handleResize = () => {
    const minWidth = 375;
    const value = window.outerWidth > minWidth ? 'width=device-width,initial-scale=1' : `width=${minWidth}`;
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  const debouncedResize = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(handleResize, 250);
  };

  window.addEventListener('resize', debouncedResize, false);
  handleResize();
};