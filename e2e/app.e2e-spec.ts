import { TourOfHeroesTutorialPage } from './app.po';

describe('tour-of-heroes-tutorial App', () => {
  let page: TourOfHeroesTutorialPage;

  beforeEach(() => {
    page = new TourOfHeroesTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
