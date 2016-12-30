import { LightingPage } from './app.po';

describe('lighting App', function() {
  let page: LightingPage;

  beforeEach(() => {
    page = new LightingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
