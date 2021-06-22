// login.page.js
import Page from "./page";

class HomePage extends Page {
  get loginFromNavBarHtmlElement() {
    return $(".ui-nav-item.nav-login");
  }

  get NavBarAllAdsHtmlElement() {
    return $(".ui-nav-item.force-show-label.browse-ads.gtm-hamburger-ads");
  }
  get BrowseOurTopCategoryHtmlElement() {
    return $(".home-focus > .title");
  }

  get BrowseOurTopCategoryLinksHTMLElement() {
    return $$(".home-focus > div > div:nth-child(1) a");
  }

  get NavBarMyAccountHtmlElement() {
    return $(".ui-nav-item.nav-dashboard");
  }

  open() {
    return super.open();
  }

  async browseOurTopCategoryLinks() {
    const links = await this.BrowseOurTopCategoryLinksHTMLElement;

    for (let i = 0; i < links.length; i++) {
      let link = await links[i].getAttribute("href")[0];
      await browser.pause(2000);
      console.log(link);
    }
  }

  async clickNavBarMyAccount() {
    await (await this.NavBarMyAccountHtmlElement).click();
  }
  async clickLoginLink() {
    await (await this.loginFromNavBarHtmlElement).click();
  }
}

module.exports = new HomePage();
