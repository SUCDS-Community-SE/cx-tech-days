import SuggestionObject from "./modules/objects/suggestionObject";
import VoteObject from "./modules/objects/voteObject";

export default class API {
  static #api = null;

  //Cloud
  #ServerBaseURL =
    "http://ec2-3-120-134-153.eu-central-1.compute.amazonaws.com:5000/cxtechdays/api";

  //Local
  //#ServerBaseURL = "http://127.0.0.1:5000/cxtechdays/api";

  #getSuggestionsURL = () => `${this.#ServerBaseURL}/suggestions`;
  #addSuggestionURL = () => `${this.#ServerBaseURL}/suggestions`;
  #updateSuggestionURL = (id) => `${this.#ServerBaseURL}/suggestions/${id}`;

  #getVoteURL = (userid) => `${this.#ServerBaseURL}/votes/${userid}`;
  #addVoteURL = () => `${this.#ServerBaseURL}/votes`;
  #updateVoteURL = (userid) => `${this.#ServerBaseURL}/votes/${userid}`;

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

  getVoteByUser(userid) {
    return this.#fetchAdvanced(this.#getVoteURL(userid)).then(
      (responseJSON) => {
        //console.log(typeof responseJSON);
        //console.log(responseJSON);
        let voteObject = VoteObject.fromJSON(responseJSON);

        return new Promise(function (resolve) {
          resolve(voteObject);
        });
      }
    );
  }

  addVote(voteObject) {
    return this.#fetchAdvanced(this.#addVoteURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
      },
      body: JSON.stringify(voteObject),
    }).then((responseJSON) => {
      let responseVoteObject = VoteObject.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseVoteObject);
      });
    });
  }

  updateVote(voteObject) {
    console.log(voteObject);
    return this.#fetchAdvanced(this.#updateVoteURL(voteObject.getUserId()), {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(voteObject),
    }).then((body) => {
      //console.log(body);
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }
}
