
chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == “runContentScript”) {
      chrome.runtime.executeScript({
        file: 'mbg.js'
      });
    }
 });