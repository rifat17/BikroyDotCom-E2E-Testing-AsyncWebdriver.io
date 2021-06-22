import Page from "./page";

class MyAccountPage extends Page {
  get favoriteLinkHtmlElement() {
    return $(".ui-nav-stack > ul > :nth-child(3) > a");
  }
  get favoriteHeading() {
    return $(".is-main");
  }

  async clickFavorites() {
    await (await this.favoriteLinkHtmlElement).click();
  }

  async favoriteHeadingText() {
    return await (await this.favoriteHeading).getText();
  }
}

module.exports = new MyAccountPage();
