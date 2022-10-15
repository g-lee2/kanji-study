export default class KanjiService {  
  static getKanji() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://kanjiapi.dev/v1/kanji/`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}