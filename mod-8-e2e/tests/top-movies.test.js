module.exports = {
  Search_For_Brazil: function(browser) {
    browser
      .url('https://top-movies-qhyuvdwmzt.now.sh/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[type=search]', 1000)
      .setValue('input[type=search]', ['Brazil', browser.Keys.ENTER])
      .waitForElementVisible('.movie-card:first-of-type button', 1000)
      .click('.movie-card:first-of-type button')
      .assert.value('input[type=text]', '1985-02-20')
      .useXpath()
      .click('//button/span[contains(text(), "Close")]')
      .end();
  }
};
