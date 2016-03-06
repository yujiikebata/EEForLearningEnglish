chrome.contextMenus.create({
  "title": "LookUpInOALD",
  "type": "normal", 
  "contexts": ["selection"],
  "onclick":function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
    });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "open_new_tab") {
    var oald = 'http://www.oxfordlearnersdictionaries.com/search/english/?q=' + request.word;
    var eow = 'http://eow.alc.co.jp/search?q=' + request.word;
    chrome.tabs.create({ "url": oald });
    chrome.tabs.create({ "url": eow });
  }
});