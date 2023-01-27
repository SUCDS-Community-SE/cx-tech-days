const app = require("express")();
const port = 8080;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

export default class API {
  static #api = null;

  static getAPI() {
    if (this.#api == null) {
      this.#api = new API();
    }
    return this.#api;
  }

  getSuggestions() {
    app.get("/suggestions", (req, res) => {
      res.status(200).send({
        id: 1,
        topic: "React",
        type: "Speach",
        speaker: "Sebastian",
        time: "12:00",
        date: "10-01-2023",
        votes: 4,
      });
    });
  }
}
