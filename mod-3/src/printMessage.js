var now = new Date().toLocaleTimeString();

function printMessage(msg) {
  console.log(`%cprintMessage: ${msg} at ${now}`, 'color: darkgreen');
}   
