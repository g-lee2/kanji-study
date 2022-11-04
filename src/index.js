import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import KanjiService from './js/kanji.js';

async function getKanji(response) {
  const responseAPI = await KanjiService.getKanji(response);
  if (responseAPI) {
    printElements(responseAPI);
  } else {
    printError(responseAPI);
  }
}

function printElements(data) {
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  const p = document.getElementById('result');
  li1.append(data.kanji);
  li2.append(data.stroke_count);
  li3.append(data.meanings.join(', '));
  li4.append(data.kun_readings.join(', '));
  li5.append(data.on_readings.join(', '));
  li6.append(data.jlpt);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);
  ul.append(li5);
  ul.append(li6);
  p.append(ul);
}

function printError(error) {
  document.getElementById('result').innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputKanji = document.getElementById('kanji').value;
  getKanji(inputKanji);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
