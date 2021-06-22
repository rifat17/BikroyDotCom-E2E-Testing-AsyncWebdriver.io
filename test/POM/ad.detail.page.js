import Page from "./page";

class AdDetails extends Page {
  get hiddenContactNumberHtmlElement() {
    return $(".contact-number--jkttb");
  }

  get contactNumberHtmlElement() {
    return $(".call-button--3uvWj");
  }

  get adDescriptionHtmlElement() {
    return $(".description--1nRbz p");
  }

  get saveAdBtnHtmlElement() {
    return $(".cta--3cXbe > :nth-child(2) > .btn--1gFez");
  }
  get adTitle() {
    return $(".title--3s1R8");
  }

  async clickSaveAdBtn() {
    const btn = await this.saveAdBtnHtmlElement;
    return await btn.click();
  }

  async adDescriptionText() {
    return await (await this.adDescriptionHtmlElement).getText();
  }

  async sellerContactNumber() {
    return await this.contactNumberHtmlElement;
  }

  async adHiddenContactNumberBtn() {
    return await this.hiddenContactNumberHtmlElement;
  }

  async adTitleText() {
    const title = await this.adTitle;
    return title.getText();
  }
}

module.exports = new AdDetails();
