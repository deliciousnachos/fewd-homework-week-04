// alert('Welcome to the Calculator');

  document.querySelector('#convert').addEventListener('click', sendCels);

function sendCels() {
  var celsInput = parseInt(document.querySelector('#convert').value);
  console.log(celsInput);
}

//
//
// function getAnswer() {
//   var operand = document.querySelector('#operand').value;
//   var firstnum = parseInt(document.querySelector('#firstnum').value);
//   var lastnum = parseInt(document.querySelector('#lastnum').value);
//   var result = calculator[operand](firstnum, lastnum);
//   document.querySelector('h1').innerHTML = result;
// }
