(function () {
  let devtools = { open: false };
  const threshold = 160;
  const checkInterval = 1000;
  let alerted = false;

  const detectDevTools = () => {
    const width = window.outerWidth - window.innerWidth > threshold;
    const height = window.outerHeight - window.innerHeight > threshold;
    devtools.open = width || height;

    if (!devtools.open && !alerted) {
      alerted = true;
      alert("Please open the developer tools (right-click and select 'Inspect', then 'Console')!");
    }
  };
  setInterval(detectDevTools, checkInterval);
})();
