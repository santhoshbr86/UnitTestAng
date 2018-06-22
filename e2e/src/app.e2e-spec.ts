import { AppPage } from './app.po';

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


});
