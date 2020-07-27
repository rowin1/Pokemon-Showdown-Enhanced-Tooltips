browser.contextMenus.removeAll();
browser.contextMenus.create({
  id: "showBaseStats",
  title: "Show Base Stats",
  type: "checkbox",
  contexts: ["browser_action"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "showBaseStats") {
    const checkedString = info.checked ? 'ON' : 'OFF';

    localStorage['showBaseStats'] = checkedString;
    alert('Show Base Stats: ' + checkedString + "; Please refresh your Pokemon Showdown tab if currently open.");
  }
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage") {
      sendResponse({data: localStorage[request.key]});
    }
    else {
      sendResponse({});
    }
});
