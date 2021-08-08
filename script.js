const doc = document.documentElement;
const $ = (el) => document.querySelector(el);
const setCssVar = (prop, value) => doc.style.setProperty(prop, value);
const getCSSVar = (prop) => getComputedStyle(doc).getPropertyValue(prop).trim();

const initialSettings = {}
const props = ['speed', 'rotation', 'origin-x', 'origin-y'];

props.forEach(prop => initialSettings[prop] = getCSSVar('--' + prop));

$('#play').addEventListener('click', (e) => {
  const running = getCSSVar('--play-state') === 'running';
  const toggledState = running ? 'paused' : 'running';
  const buttonLabel = running ? 'Play' : 'Pause';
  setCssVar('--play-state', toggledState);
  e.target.textContent = buttonLabel;
});

$('#reset').addEventListener('click', (e) => {
  props.forEach(prop => {
    const val = initialSettings[prop];
    setCssVar('--' + prop, val);
    $(`#${prop}`).value = extractNum(val);
  });
});

const extractNum = (str) => {
  return (str.match(/\d+/g) || []).map(n => parseInt(n)).shift();
}

$('#speed').addEventListener('input', (e) => {
  setCssVar('--speed', e.target.value + 's');
});

$('#rotation').addEventListener('input', (e) => {
  setCssVar('--rotation', e.target.value + 'deg');
});

$('#origin-x').addEventListener('input', (e) => {
  setCssVar('--origin-x', e.target.value + '%');
});

$('#origin-y').addEventListener('input', (e) => {
  setCssVar('--origin-y', e.target.value + '%');
});