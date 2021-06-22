import Page from "./page";

class LoginPage extends Page {
  get continueWithEmailElementBtn() {
    return $(".gtm-email-login");
  }

  get emailInputField() {
    return $("input[name=email]");
  }

  get passwordInputField() {
    return $("input[name=password]");
  }

  get loginErrorMessage() {
    return $(".error-msg--2buvb");
  }

  get loginButton() {
    return $("button[type=submit]");
  }

  async login(email, password) {
    await (await this.continueWithEmailElementBtn).click();
    await (await this.emailInputField).setValue(email);
    await (await this.passwordInputField).setValue(password);
    await (await this.loginButton).click();
  }

  async loginErrorMessageText() {
    await (await this.loginErrorMessage).getText();
  }
}
module.exports = new LoginPage();
