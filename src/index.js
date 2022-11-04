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
  document.getElementById("kanji-character").innerText = data.kanji;
  document.getElementById("stroke-count").innerText = data.stroke_count;
  document.getElementById("meaning").innerText = data.meanings.join(', ');
  document.getElementById("kun-yomi").innerText = data.kun_readings.join(', ');
  document.getElementById("on-yomi").innerText = data.on_readings.join(', ');
  document.getElementById("jlpt-level").innerText = data.jlpt;
}

function printError(error) {
  document.getElementsByClassName('error').innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputKanji = document.getElementById('kanji').value;
  getKanji(inputKanji);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
