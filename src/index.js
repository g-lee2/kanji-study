import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import KanjiService from './kanji.js';

// Business Logic

function getKanji() {
  let promise = KanjiService.getKanji();
  promise.then(function(kanjiDataArray) {
    printElements(kanjiDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// UI Logic

function printElements(data) {
  document.getElementById('Response').innerText = data;
}

function printError(error) {
  document.getElementById('Response').innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  getKanji();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});