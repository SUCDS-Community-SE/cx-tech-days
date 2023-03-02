import SuggestionObject from "./modules/objects/suggestionObject";
import VoteObject from "./modules/objects/voteObject";
import { auth } from "./FirebaseConfig";
export default class API {
  static #api = null;

  //Cloud
  //#ServerBaseURL = process.env.REACT_APP_API_CLOUD_URL;

  //Local
  #ServerBaseURL = process.env.REACT_APP_LOCAL_API_URL;

  #getSuggestionsURL = () => `${this.#ServerBaseURL}/suggestions`;
  #getSuggestionsCSVURL = () => `${this.#ServerBaseURL}/suggestionsCSV`;
  #addSuggestionURL = () => `${this.#ServerBaseURL}/suggestions`;
  #updateSuggestionURL = (id) => `${this.#ServerBaseURL}/suggestions/${id}`;
  #deleteSuggestionURL = (id) => `${this.#ServerBaseURL}/suggestions/${id}`;

  #getVoteURL = (userid) => `${this.#ServerBaseURL}/votes/${userid}`;
  #addVoteURL = () => `${this.#ServerBaseURL}/votes`;
  #updateVoteURL = (userid) => `${this.#ServerBaseURL}/votes/${userid}`;

  static getAPI() {
    if (this.#api == null) {
      this.#api = new API();
    }
    return this.#api;
  }

  download(filename, text) {
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(text)
    );
    pom.setAttribute("download", filename);

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }

  /*
    Default cookie setting for SameSite attribute was 'None' in the past, which allowed cookies to be sent with
    both cross-site and same-site requests. As of now the default for SameSite attribute is 'Lax', which means
    cookies are not sent for cross-site requests. As react runs on port 3000 and flask(backend) on 5000 in this dev environment,
    a backend fetch is considered a cross-site request (as different ports are used). So no cookie is sent.
    For SameSite attribute to be 'None', also the attribute secure (only use https) has to be set in Chrome
    and all other modern browsers as they reject the sending of cookies with only SameSite attribute set as 'None'.
   
    As a workaround we add the token of the cookie to the request headers. The backend then extracts it from there.
   
    Returns a Promise which resolves to a json object.
    The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
    fetchAdvanced throws an Error also an server status errors
   */
  async #fetchAdvanced(url, init) {
    // If no init parameter is used, create empty init
    if (typeof init === "undefined") {
      init = { headers: {} };
    }

    // If no headers parameter is used, create empty header
    if (typeof init.headers === "undefined") {
      init["headers"] = {};
    }

    const getToken = () => {
      try {
        return auth.currentUser.getIdToken();
      } catch (error) {
        console.log(error);
      }
    };
    let token = await getToken();

    if (token) {
      // Add the token to every request, so that we can use it in the backend.
      init.headers.Token = await token;
      //console.log(init.headers.Token);
    } else {
      // Handle the case where the token cookie is not present
      throw new Error("Token cookie not found");
    }

    return fetch(url, init).then((res) => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      if (res.headers.get("Content-Type").indexOf("application/json") !== -1) {
        return res.json();
      }
      if (res.headers.get("Content-Type").indexOf("text") !== -1) {
        return res.text();
      }
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

  getSuggestionsCSV() {
    return this.#fetchAdvanced(this.#getSuggestionsCSVURL()).then(
      (response) => {
        this.download(`suggestions.csv`, response);
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
    ).then((responseJSON) => {
      let responseSuggestionObject = SuggestionObject.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSuggestionObject);
      });
    });
  }

  deleteSuggestion(suggestionObject) {
    return this.#fetchAdvanced(
      this.#deleteSuggestionURL(suggestionObject.getId()),
      {
        method: "DELETE",
      }
    ).then((responseJSON) => {
      let responseSuggestionObject = SuggestionObject.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSuggestionObject);
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
    }).then((responseJSON) => {
      let responseVoteObject = VoteObject.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseVoteObject);
      });
    });
  }
}
