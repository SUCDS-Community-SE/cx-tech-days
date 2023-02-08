import SuggestionObject from "./modules/objects/suggestionObject";

export default class API {
  static #api = null;

  #ServerBaseURL = "http://ec2-3-120-134-153.eu-central-1.compute.amazonaws.com/:5000/cxtechdays/api";

  #getSuggestionsURL = () => `${this.#ServerBaseURL}/suggestions`;
  #addSuggestionURL = () => `${this.#ServerBaseURL}/suggestions`;
  #updateSuggestionURL = (id) => `${this.#ServerBaseURL}/suggestions/${id}`;

  static getAPI() {
    if (this.#api == null) {
      this.#api = new API();
    }
    return this.#api;
  }

  #fetchAdvanced(url, init) {
    if (typeof init === "undefined") {
      init = { headers: {} };
    }

    // If no headers parameter is used, create empty header
    if (typeof init.headers === "undefined") {
      init["headers"] = {};
    }
    return fetch(url, init).then((res) => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    });
  }

  // Suggestions related

  getSuggestions() {
    return this.#fetchAdvanced(this.#getSuggestionsURL()).then(
      (responseJSON) => {
        //console.log(typeof responseJSON);
        //console.log(responseJSON);
        let suggestionObjects = SuggestionObject.fromJSON(responseJSON);
        //console.log(suggestions);
        return new Promise(function (resolve) {
          resolve(suggestionObjects);
          //console.log(suggestionObjects);
          //console.log(typeof suggestionObjects);
        });
      }
    );
  }

  addSuggestion(suggestionObject) {
    return this.#fetchAdvanced(this.#addSuggestionURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
      },
      body: JSON.stringify(suggestionObject),
    }).then((responseJSON) => {
      let responseSuggestionObject = SuggestionObject.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSuggestionObject);
      });
    });
  }

  updateSuggestion(suggestionObject) {
    return this.#fetchAdvanced(
      this.#updateSuggestionURL(suggestionObject.getId()),
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(suggestionObject),
      }
    ).then((body) => {
      //console.log(body);
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }
}
