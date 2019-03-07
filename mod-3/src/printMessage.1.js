let now = new Date().toLocaleTimeString();

now = '';

function printMessage(msg) {
  console.log(`%cprintMessage 2 : ${msg} om ${now}`, 'color: darkred');
}

export default printMessage;
