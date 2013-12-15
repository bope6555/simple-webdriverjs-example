['chrome', 'firefox'].forEach(detectBrowser);

function detectBrowser(name) {
  require('webdriverjs')
    .remote({
      desiredCapabilities: {
        browserName: name
      }
    })
    .init()
    .url('http://www.whatismybrowser.com/')
    .getText('.detected.simple-browser-string', function(err, text) {
      console.log(name + 'browser was detected as ' + text);
    })
    .end()
}