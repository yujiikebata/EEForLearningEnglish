chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tebs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
  });
});