var context = document.getElementById('canvas').getContext('2d');
context.lineWidth = 8;

// Wall
context.strokeRect(75, 140, 150, 110);

// Door
context.fillRect(130, 190, 40, 60);

// Roof
context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();