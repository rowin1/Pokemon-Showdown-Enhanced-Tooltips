var ele = document.createElement("script");
ele.src = chrome.extension.getURL("/js/showPokemonTooltip.js");
document.body.appendChild(ele);