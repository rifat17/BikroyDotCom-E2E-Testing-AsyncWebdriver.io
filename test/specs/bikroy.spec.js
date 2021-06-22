// login.spec.js

const HomePage = require("../POM/home.page");
const AdsPage = require("../POM/ads.page");
const AdDetails = require("../POM/ad.detail.page");
const LoginPage = require("../POM/login.page");
const MyAccountPage = require("../POM/my.account.page");
// const { login } = require("../utils/commands");

describe("Testing Bikroy.com", () => {
  afterEach(() => {
    browser.deleteAllCookies();
  });
  it("TC-001: Open Bikroy Site in Browser", async () => {
    await HomePage.open();
    const title = await browser.getTitle();
    expect(title).toEqual(
      "Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh"
    );
  });

  it("TC-003 Login", async () => {
    await HomePage.open();
    await HomePage.clickLoginLink();
    await LoginPage.login("lowaci7232@threepp.com", "bikroy123456");
    await browser.pause(3000);
    expect(browser).toHaveUrlContaining("login");
  });

  it("TC-004 Invalid Password", async () => {
    await HomePage.open();
    await HomePage.clickLoginLink();
    await LoginPage.login("lowaci7232@threepp.com", "bikroy12345");
    await browser.pause(3000);
    expect(await browser.getUrl()).not.toHaveTextContaining("login");
  });

  it("TC-005 Show all ads", async () => {
    await AdsPage.open();
    const ads = await AdsPage.numOfAdsBeingShown();
    expect(ads).toBeGreaterThan(0);
  });

  it("TC-006 Show all urgent ads", async () => {
    await AdsPage.open();
    const ads = await AdsPage.numOfUrgentAdsBeingShown();
    expect(ads).toBeGreaterThan(0);
  });

  it("TC-007 Display ads by Category 'Mobile'", async () => {
    await AdsPage.open();
    const ads = await AdsPage.numOfAdsBeingShownInCategoryMobile();
    expect(ads).toBeGreaterThan(0);
  });

  it("TC-008 Display ads by Location 'Dhaka'", async () => {
    await AdsPage.open();
    const ads = await AdsPage.numOfAdsBeingShownInCategoryLocationDhaka();
    expect(ads).toBeGreaterThan(0);
  });

  it("TC-009 Ads Search", async () => {
    await AdsPage.open();
    const ads = await AdsPage.Search("Dell Laptop");
    browser.pause(2000);
  });

  it("TC-010 Search and count number of ads", async () => {
    await AdsPage.open();
    const ads = await AdsPage.Search("Dell Laptop");
    expect(ads).toBeGreaterThan(0);
  });

  it("TC-011 Get lowest price", async () => {
    await AdsPage.open();
    await AdsPage.Search("Dell Laptop");
    await browser.pause(2000);
    const ad = await AdsPage.getLowestPriceAd();

    await ad.click();
  });

  it("TC-012 Get lowest price", async () => {
    await AdsPage.open();
    await AdsPage.Search("Dell Laptop");
    await browser.pause(2000);
    const ad = await AdsPage.getLowestPriceAd();

    await ad.click();
  });

  it("TC-013 Show to product details", async () => {
    await AdsPage.open();
    await AdsPage.Search("Dell Laptop");
    await browser.pause(2000);
    const ad = await AdsPage.getRandomAd(1); //first product
    await ad.click();

    const title = await AdDetails.adTitleText();
    expect(title).not.toBeUndefined();
  });

  it("TC-014 Show phone number", async () => {
    await AdsPage.open();
    const ad = await AdsPage.getRandomAd(1); //first product
    await ad.click();
    const contactnumberBtn = await AdDetails.adHiddenContactNumberBtn();
    await contactnumberBtn.click();
    const numbers = await AdDetails.sellerContactNumber();
    expect(await numbers.getText()).not.toBeUndefined();
    await browser.pause(1000);
  });

  it("TC-015 Assert product description", async () => {
    await AdsPage.open();
    const ad = await AdsPage.getRandomAd(0); //first product
    await ad.click();
    const adDescriptionText = await AdDetails.adDescriptionText();
    expect(adDescriptionText).not.toBeUndefined();
    await browser.pause(1000);
  });

  it("TC-016 Show to product details", async () => {
    await AdsPage.open();
    await AdsPage.Search("Dell Laptop");
    await browser.pause(2000);
    const ad = await AdsPage.getRandomAd(0); //first product
    await ad.click();

    const title = await AdDetails.adTitleText();
    expect(title).not.toBeUndefined();
  });

  it("TC-018 Add product on Favorites", async () => {
    await HomePage.open();
    await HomePage.clickLoginLink();
    await LoginPage.login("lowaci7232@threepp.com", "bikroy123456");
    await browser.pause(3000);

    await AdsPage.open();
    await AdsPage.Search("Dell Laptop");
    await browser.pause(2000);
    const ad = await AdsPage.getRandomAd(0); //first product
    await browser.pause(3000);

    await ad.click();

    const title = await AdDetails.clickSaveAdBtn();
    await browser.pause(3000);
  });

  it("TC-019 Show to favorites product list", async () => {
    await HomePage.open();
    await HomePage.clickLoginLink();
    await LoginPage.login("lowaci7232@threepp.com", "bikroy123456");
    await browser.pause(3000);

    await HomePage.clickNavBarMyAccount();
    await MyAccountPage.clickFavorites();
    expect(await MyAccountPage.favoriteHeadingText()).not.toBeUndefined();
  });

  it("TC-020 Assert Browse our top category", async () => {
    await HomePage.open();
    await HomePage.browseOurTopCategoryLinks();
  });
});
