export default class SuggestionObject {
  constructor(
    id,
    title,
    topic,
    type,
    speaker,
    abstract,
    speakerShortInfo,
    votes
  ) {
    this.id = parseInt(id);
    this.title = title;
    this.topic = topic;
    this.type = type;
    this.speaker = speaker;
    this.abstract = abstract;
    this.speakerShortInfo = speakerShortInfo;
    this.votes = parseInt(votes);
  }

  getId() {
    return this.id;
  }

  getVotes() {
    return this.votes;
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
        Object.setPrototypeOf(f, SuggestionObject.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = json;
      Object.setPrototypeOf(f, SuggestionObject.prototype);
      result.push(f);
    }

    return result;
  }
}
