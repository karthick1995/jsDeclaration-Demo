// Import stylesheets
import './style.css';

// Write Javascript code!
document.getElementById('v1').innerHTML = var1;
var var1 = 'Welcome var';
document.getElementById('v2').innerHTML = var1;

let varA = 'Welcome let_global';
try {
  let varA = 'Welcome let_local';
  document.getElementById('va').innerHTML = varA;
} catch (error) {
  document.getElementById('va').innerHTML = error;
}

try {
  document.getElementById('v3').innerHTML = var2;
  let var2 = 'Welcome let';
} catch (error) {
  document.getElementById('v4').innerHTML = error;
}

try {
  const var3 = 'Welcome const';
  document.getElementById('v7').innerHTML = var3;
  var3 = 'Welcome const2';
} catch (error) {
  document.getElementById('v8').innerHTML = error;
}

try {
  document.getElementById('v5').innerHTML = varC;
  const varC = 'Welcome let';
} catch (error) {
  document.getElementById('v6').innerHTML = error;
}
