// alert('Welcome to the Calculator');



document.querySelector('#convert').addEventListener('click', sendCels);

function sendCels() {

  var celsInput = parseInt(document.querySelector('#celsius-input').value);
  var degF = celsInput * 9 / 5 +32;
  document.querySelector('#degF').innerHTML = degF + ' ºF';

  if (degF > 60) {
    document.querySelector('#fahrenheit-display').style['background-color'] = 'red';
    document.querySelector('#fahrenheit-display').style['color'] = 'white';
  }
  else if (degF < 30) {
    document.querySelector('#fahrenheit-display').style['background-color'] = 'blue';
    document.querySelector('#fahrenheit-display').style.color = 'white';
  }
  else {
    document.querySelector('#fahrenheit-display').style['background-color'] = 'lightgray';
    document.querySelector('#fahrenheit-display').style.color = 'black';
  };



  
}

