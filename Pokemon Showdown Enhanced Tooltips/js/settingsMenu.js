chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: "showBaseStats",
  title: "Show Base Stats",
  type: "checkbox",
  contexts: ["browser_action"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "showBaseStats") {
    const checkedString = info.checked ? 'ON' : 'OFF';

    localStorage['showBaseStats'] = checkedString;
    alert('Show Base Stats: ' + checkedString + "; Please refresh your Pokemon Showdown tab if currently open.");
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage") {
      sendResponse({data: localStorage[request.key]});
    }
    else {
      sendResponse({});
    }
});
