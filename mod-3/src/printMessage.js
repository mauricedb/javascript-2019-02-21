const now = new Date().toLocaleTimeString();

function printMessage(msg) {
  console.log(`%cprintMessage: ${msg} om ${now}`, 'color: darkgreen');
}

export default printMessage;
