chrome.runtime.sendMessage({method: "getLocalStorage", key: "showBaseStats"}, function (response) {
  var showBaseStats = document.createElement('div');
  showBaseStats.setAttribute("id", "pset-showBaseStats");
  showBaseStats.setAttribute("enabled", response.data ? response.data : "OFF");
  document.body.appendChild(showBaseStats);
});

var ele = document.createElement("script");
ele.src = chrome.extension.getURL("/js/showPokemonTooltip.js");
document.body.appendChild(ele);

chrome.runtime.onMessage.addListener(function(request) {
  if (request.message === 'url_changed') {
    var currentTier = request.url.split('-')[1];
    if (currentTier) {
      dispatchEvent(new CustomEvent('currentTier', { detail: currentTier }));
    }
  }
});
