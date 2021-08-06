const doc = document.documentElement;
const $ = (el) => document.querySelector(el);
const setVar = (varName, value) => doc.style.setProperty(varName, value);

$('#speed').addEventListener('input', (e) => {
  setVar('--speed', e.target.value + 's');
});

$('#rotation').addEventListener('input', (e) => {
  setVar('--rotation', e.target.value + 'deg');
});

$('#origin-x').addEventListener('input', (e) => {
  setVar('--origin-x', e.target.value + '%');
});

$('#origin-y').addEventListener('input', (e) => {
  setVar('--origin-y', e.target.value + '%');
});