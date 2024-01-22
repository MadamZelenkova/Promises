import read from ".reader.js";
import json from "./parser";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((value) => {
          const saving = JSON.parse(value);
          resolve(saving);
        })
        .catch((error) => {
          reject(new Error(error.message));
        });
    });
  }
}
