module.exports = {
    '@disabled': true,
    'Demo Test Google' : function (client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body',1000)
            .assert.title('Google')
            .assert.visible('input[type=text]', 'rembrandt van rijn')
            .waitForElementVisible('button[name=btnG]',1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsTest('ol#rso li:first-child', 'Rembrandt - Wikepedia')
            .end();
    }
}