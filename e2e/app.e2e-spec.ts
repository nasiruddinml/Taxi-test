import { GitSubmoduleTestPage } from './app.po';

describe('git-submodule-test App', () => {
  let page: GitSubmoduleTestPage;

  beforeEach(() => {
    page = new GitSubmoduleTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
