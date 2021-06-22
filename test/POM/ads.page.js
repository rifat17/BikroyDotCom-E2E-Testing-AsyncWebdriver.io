// login.page.js
import Page from "./page";

class AdsPage extends Page {
  get AllAdsHTMLElementsLi() {
    return $$("//div[2]/div/div[1]/div[1]/ul/li");
  }
  get UrgentAdsHTMLElementCheckBtn() {
    return $(
      "div:nth-child(2) > div:nth-child(2) > div > label > span:nth-child(2)"
    );
  }

  get AllCategoriesHTMLElementsLi() {
    return $(".collapse-container--3-MiB li");
  }

  get CategoryMobileHtmlElement() {
    // return $("///div/ul/li[2]/button/div/div/span[2]");
    const mobile = $("//span[.='Mobiles']");

    return mobile;
  }
  get CategoryLocationDhakaHtmlElement() {
    return $("//span[.='Dhaka']");
  }

  get SearchBoxHtmlElement() {
    return $("input[type=search]");
  }
  get SearchBtnHtmlElement() {
    return $(
      "//button[@class='btn--1gFez secondary--Os-e9 background--2lR9B small--1MQ15 search-button--1RZdg background--2lR9B gtm-pwa-search']"
    );
  }

  get AllPriceTag() {
    return $$(".price--3SnqI.color--t0tGX");
  }

  get priceTag() {
    return $(".price--3SnqI.color--t0tGX");
  }

  async Search(text) {
    await (await this.SearchBoxHtmlElement).setValue(text);
    await (await this.SearchBtnHtmlElement).click();
    browser.pause(4000);
    const adList = await this.AllAdsHTMLElementsLi;
    return await adList.length;
  }

  async getLowestPriceAd() {
    const ads = await this.AllAdsHTMLElementsLi;
    let min_price = Number.POSITIVE_INFINITY;
    let min_price_ad = null;
    let tk = null;
    let indx = null;

    for (let i = 0; i < ads.length; i++) {
      let tkText = await (await ads[i].$("span")).getText();
      tkText = tkText.split(",").join("");
      console.log(tkText);

      try {
        tk = parseInt(tkText.match(/Tk ?(\d+)/i)[1]);
        //   console.log(tk);
      } catch (error) {}

      if (tk != null) {
        if (tk < min_price) {
          min_price = tk;
          min_price_ad = ads[i];
          indx = i;
        }
      }
    }
    return min_price_ad;
  }

  async getRandomAd(nth = 5) {
    const ads = await this.AllAdsHTMLElementsLi;
    return ads[nth]; // intentially select 5th ad
  }

  async numOfUrgentAdsBeingShown() {
    await (await this.UrgentAdsHTMLElementCheckBtn).click();
    await browser.pause(4000);
    const adList = await this.AllAdsHTMLElementsLi;
    return await adList.length;
  }

  async numOfAdsBeingShownInCategoryMobile() {
    await (await this.CategoryMobileHtmlElement).click();
    await browser.pause(4000);
    const adList = await this.AllAdsHTMLElementsLi;
    return await adList.length;
  }

  async numOfAdsBeingShownInCategoryLocationDhaka() {
    await (await this.CategoryLocationDhakaHtmlElement).click();
    await browser.pause(4000);
    const adList = await this.AllAdsHTMLElementsLi;
    return await adList.length;
  }
  async numOfAdsBeingShown() {
    const adList = await this.AllAdsHTMLElementsLi;
    return await adList.length;
  }

  open() {
    return super.open("ads");
  }
}

module.exports = new AdsPage();
