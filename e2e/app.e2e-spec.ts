import { JadeAllenCookPage } from './app.po';

describe('jade-allen-cook App', () => {
  let page: JadeAllenCookPage;

  beforeEach(() => {
    page = new JadeAllenCookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
