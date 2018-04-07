const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  body.addEventListener('keydown', validateCode);
}

function validateCode(event) {
  // console.log('Detail   : ', event.detail);
  // console.log('Which    : ', event.which);
  // console.log('Location : ', event.location);

  const key = parseInt(event.which);
  if (index === code.length) {
    console.log('Konami Code!!!');
    alert('Konami Code Entered');
  }

  index = key === code[index] ? ++index : 0;
  console.log(index, key);
}
