// alert('Welcome to the Calculator');



document.querySelector('#convert').addEventListener('click', sendCels);

function sendCels() {
  var celsInput = parseInt(document.querySelector('#celsius-input').value);
  var degF = celsInput * 9 / 5 +32;
  document.querySelector('#degF').innerHTML = degF;
}

