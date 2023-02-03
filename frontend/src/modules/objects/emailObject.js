export default class EmailObject {
  constructor(id, email) {
    this.id = parseInt(id);
    this.email = email;
  }

  getId() {
    return this.id;
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
        Object.setPrototypeOf(f, EmailObject.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = json;
      Object.setPrototypeOf(f, EmailObject.prototype);
      result.push(f);
    }

    return result;
  }
}
