import { SachmemPage } from './app.po';

describe('sachmem App', function() {
  let page: SachmemPage;

  beforeEach(() => {
    page = new SachmemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
