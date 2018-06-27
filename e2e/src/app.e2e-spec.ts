import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Servers List');
  });
  it('Should display filter title', ()=>{
    expect(page.getFilterTitle()).toEqual('Use Filters')
  });
  it('Should change input Range', ()=> {
    page.navigateTo();
    page.getStorageInput().click();
    expect(page.getStorageMaxText()).toEqual('Max:250GB');
  });


});
