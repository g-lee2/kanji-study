//import KanjiResult from "../classes/kanjiClass.js";

export default class KanjiService {  
  static async getKanji(kanjiCharacter) {
    try {
      const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanjiCharacter}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusTest} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}
