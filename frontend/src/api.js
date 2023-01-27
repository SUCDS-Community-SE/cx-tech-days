function fromJSON(json) {
  let result = [];

  json.forEach((f) => {
    const data = Object.values(f);
    result.push(data);
  });
  //console.log(typeof result);
  return result;
}

export default class API {
  static #api = null;

  #ServerBaseURL = "http://127.0.0.1:5000/cxtechdays/api";

  #getSuggestionsURL = () => `${this.#ServerBaseURL}/suggestions`;

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

  getSuggestions() {
    return this.#fetchAdvanced(this.#getSuggestionsURL()).then(
      (responseJSON) => {
        //console.log(typeof responseJSON);
        //console.log(responseJSON);
        let suggestions = fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(suggestions);
          //console.log(suggestions);
          //console.log(typeof suggestions);
        });
      }
    );
  }
}
