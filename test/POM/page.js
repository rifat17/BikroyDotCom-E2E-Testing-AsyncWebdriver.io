export default class Page {
  constructor() {
    this.title = "My Page";
  }

  open(path = "") {
    return browser.url(`https://bikroy.com/en/${path}`);
  }
}
