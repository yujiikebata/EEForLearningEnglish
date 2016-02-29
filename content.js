chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var word = window.getSelection().toString();
    chrome.runtime.sendMessage({ "message": "open_new_tab", "word": word });
  }
});