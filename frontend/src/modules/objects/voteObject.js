export default class VoteObject {
  constructor(userid, suggestionid) {
    this.userid = userid;
    this.suggestionid = suggestionid;
  }

  getUserId() {
    return this.userid;
  }

  getSuggestionId() {
    return this.suggestionid;
  }

  setUserId(userid) {
    this.userid = userid;
  }

  setSuggestionId(suggestionid) {
    this.suggestionid = suggestionid;
  }

  static fromJSON(json) {
    let result = [];

    // json.forEach((f) => {
    //   const data = Object.values(f);
    //   console.log(data);
    //   result.push(data);
    // });
    // console.log(result);
    // return result;
    if (Array.isArray(json)) {
      /* Multiple entries */
      json.forEach((f) => {
        Object.setPrototypeOf(f, VoteObject.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = json;
      Object.setPrototypeOf(f, VoteObject.prototype);
      result.push(f);
    }

    return result;
  }
}
