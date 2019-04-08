chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      id: "toggleBaseStats",
      title: "Show Base Stats",
      type: "checkbox",
      contexts: ["browser_action"],
      onclick: function() {

      }
});
