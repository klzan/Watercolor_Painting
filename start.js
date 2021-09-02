(() => {
  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext('2d');
  let previousPoint = { x: 0, y: 0 }; 
  function getDistance(previousPoint, currentPoint) { 
      return Math.sqrt((previousPoint.x - currentPoint.x) ** 2 + (previousPoint.y - currentPoint.y) ** 2);
  }
  function run() {
  }
  run();
})();
