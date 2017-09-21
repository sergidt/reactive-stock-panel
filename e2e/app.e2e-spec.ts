import { ReactiveStockPanelPage } from './app.po';

describe('reactive-stock-panel App', () => {
  let page: ReactiveStockPanelPage;

  beforeEach(() => {
    page = new ReactiveStockPanelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
