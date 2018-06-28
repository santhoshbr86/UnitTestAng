import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getFilterTitle() {
    return element(by.css('aside h4')).getText();
  }
  getStorageInput() {
      return element(by.css('input[name="range"]'));
  }
  getStorageMaxText() {
    return element(by.css('storage .pull-right')[0]).getText();
  }

}
