const { fetchChaos } = require('smogon-usage-fetch');

let ShowdownEnhancedTooltip = {};

ShowdownEnhancedTooltip.Settings = {
  showBaseStats: 'ON',
};

ShowdownEnhancedTooltip.BattleTypeChart = {
  // defending type
  "Bug": {
    damageGiven: {
      // attacking type : effectivenessMultiplier
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 0.5,
      "Fire": 2,
      "Flying": 2,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 0.5,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 2,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"atk":30, "def":30, "spd":30},
    HPdvs: {"atk":13, "def":13},
  },
  "Dark": {
    damageGiven: {
      "Bug": 2,
      "Dark": 0.5,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 2,
      "Fighting": 2,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 0.5,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 0,
      "Rock": 1,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {},
  },
  "Dragon": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 2,
      "Electric": 0.5,
      "Fairy": 2,
      "Fighting": 1,
      "Fire": .5,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 1,
      "Ice": 2,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 1,
      "Water": 0.5,
    },
    HPivs: {"atk":30},
    HPdvs: {"def":14},
  },
  "Electric": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 0.5,
      "Fairy": 1,
      "Fighting": 1,
      "Fire": 1,
      "Flying": 0.5,
      "Ghost": 1,
      "Grass": 1,
      "Ground": 2,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 0.5,
      "Water": 1,
    },
    HPivs: {"spa":30},
    HPdvs: {"atk":14},
  },
  "Fairy": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 0.5,
      "Dragon": 0,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 0.5,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 1,
      "Poison": 2,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 2,
      "Water": 1,
    },
  },
  "Fighting": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 0.5,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 2,
      "Fighting": 1,
      "Fire": 1,
      "Flying": 2,
      "Ghost": 1,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 2,
      "Rock": 0.5,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"def":30, "spa":30, "spd":30, "spe":30},
    HPdvs: {"atk":12, "def":12},
  },
  "Fire": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 0.5,
      "Fighting": 1,
      "Fire": 0.5,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 2,
      "Ice": 0.5,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 2,
      "Steel": 0.5,
      "Water": 2,
    },
    HPivs: {"atk":30, "spa":30, "spe":30},
    HPdvs: {"atk":14, "def":12},
  },
  "Flying": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 2,
      "Fairy": 1,
      "Fighting": 0.5,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 0,
      "Ice": 2,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 2,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"hp":30, "atk":30, "def":30, "spa":30, "spd":30},
    HPdvs: {"atk":12, "def":13},
  },
  "Ghost": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 2,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 0,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 2,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 0,
      "Poison": 0.5,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"def":30, "spd":30},
    HPdvs: {"atk":13, "def":14},
  },
  "Grass": {
    damageGiven: {
      "Bug": 2,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 0.5,
      "Fairy": 1,
      "Fighting": 1,
      "Fire": 2,
      "Flying": 2,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 0.5,
      "Ice": 2,
      "Normal": 1,
      "Poison": 2,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 1,
      "Water": 0.5,
    },
    HPivs: {"atk":30, "spa":30},
    HPdvs: {"atk":14, "def":14},
  },
  "Ground": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 0,
      "Fairy": 1,
      "Fighting": 1,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 2,
      "Ground": 1,
      "Ice": 2,
      "Normal": 1,
      "Poison": 0.5,
      "Psychic": 1,
      "Rock": 0.5,
      "Steel": 1,
      "Water": 2,
    },
    HPivs: {"spa":30, "spd":30},
    HPdvs: {"atk":12},
  },
  "Ice": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 2,
      "Fire": 2,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 1,
      "Ground": 1,
      "Ice": 0.5,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 2,
      "Steel": 2,
      "Water": 1,
    },
    HPivs: {"atk":30, "def":30},
    HPdvs: {"def":13},
  },
  "Normal": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 2,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 0,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 1,
      "Water": 1,
    },
  },
  "Poison": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 0.5,
      "Fighting": 0.5,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 2,
      "Ice": 1,
      "Normal": 1,
      "Poison": 0.5,
      "Psychic": 2,
      "Rock": 1,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"def":30, "spa":30, "spd":30},
    HPdvs: {"atk":12, "def":14},
  },
  "Psychic": {
    damageGiven: {
      "Bug": 2,
      "Dark": 2,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 0.5,
      "Fire": 1,
      "Flying": 1,
      "Ghost": 2,
      "Grass": 1,
      "Ground": 1,
      "Ice": 1,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 0.5,
      "Rock": 1,
      "Steel": 1,
      "Water": 1,
    },
    HPivs: {"atk":30, "spe":30},
    HPdvs: {"def":12},
  },
  "Rock": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 1,
      "Fairy": 1,
      "Fighting": 2,
      "Fire": 0.5,
      "Flying": 0.5,
      "Ghost": 1,
      "Grass": 2,
      "Ground": 2,
      "Ice": 1,
      "Normal": 0.5,
      "Poison": 0.5,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 2,
      "Water": 2,
    },
    HPivs: {"def":30, "spd":30, "spe":30},
    HPdvs: {"atk":13, "def":12},
  },
  "Steel": {
    damageGiven: {
      "Bug": 0.5,
      "Dark": 1,
      "Dragon": 0.5,
      "Electric": 1,
      "Fairy": 0.5,
      "Fighting": 2,
      "Fire": 2,
      "Flying": 0.5,
      "Ghost": 1,
      "Grass": 0.5,
      "Ground": 2,
      "Ice": 0.5,
      "Normal": 0.5,
      "Poison": 0,
      "Psychic": 0.5,
      "Rock": 0.5,
      "Steel": 0.5,
      "Water": 1,
    },
    HPivs: {"spd":30},
    HPdvs: {"atk":13},
  },
  "Water": {
    damageGiven: {
      "Bug": 1,
      "Dark": 1,
      "Dragon": 1,
      "Electric": 2,
      "Fairy": 1,
      "Fighting": 1,
      "Fire": 0.5,
      "Flying": 1,
      "Ghost": 1,
      "Grass": 2,
      "Ground": 1,
      "Ice": 0.5,
      "Normal": 1,
      "Poison": 1,
      "Psychic": 1,
      "Rock": 1,
      "Steel": 0.5,
      "Water": 0.5,
    },
    HPivs: {"atk":30, "def":30, "spa":30},
    HPdvs: {"atk":14, "def":13},
  },
};

ShowdownEnhancedTooltip.ChaosData = null;

const getChaosData = (currentTier) => {
  if (currentTier) {
    const days = 36;
    const date = new Date();
    const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    const month = ('0' + (last.getMonth() + 1)).slice(-2);
    const year = last.getFullYear();
    fetchChaos(
      { year, month },
      { name: currentTier},
      'https://cors-anywhere.herokuapp.com/'
    ).then(chaos => ShowdownEnhancedTooltip.ChaosData = chaos.data)
      .catch(console.error);
  }
}

if (app && app.curRoom && app.curRoom.id) {
  const initialTier = app.curRoom.id.split('-')[1];
  if (initialTier) {
    getChaosData(initialTier);
  }
}

addEventListener('currentTier', function (e) {
  getChaosData(e.detail);
}, false);

function sumObjectValues(obj) {
  return Object.keys(obj).reduce((sum, key)=> sum+parseFloat(obj[key]||0), 0);
}

function getChaosDataFromLocal(species) {
  return species &&
    ShowdownEnhancedTooltip.ChaosData &&
    ShowdownEnhancedTooltip.ChaosData[BattleLog.escapeHTML(species)];
}

ShowdownEnhancedTooltip.getStatbarHTML = function getStatbarHTML(pokemon) {
  let buf = '<div class="statbar' + (this.siden ? ' lstatbar' : ' rstatbar') + '" style="display: none">';
  const ignoreNick = this.siden && (this.scene.battle.ignoreOpponent || this.scene.battle.ignoreNicks);

  // *****************
  // Make pokemon name open smogon link in new tab
  buf += `<strong><a href="https://www.smogon.com/dex/ss/pokemon/${pokemon.name}/" target="_blank" style="color: #222222; text-decoration: none;">${BattleLog.escapeHTML(ignoreNick ? pokemon.species : pokemon.name)}</a>`;
  //

  const gender = pokemon.gender;
  if (gender === 'M' || gender === 'F') {
    buf += ` <img src="${Dex.resourcePrefix}fx/gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" />`;
  }
  buf += (pokemon.level === 100 ? `` : ` <small>L${pokemon.level}</small>`);

  let symbol = '';
  if (pokemon.speciesForme.indexOf('-Mega') >= 0) symbol = 'mega';
  else if (pokemon.speciesForme === 'Kyogre-Primal') symbol = 'alpha';
  else if (pokemon.speciesForme === 'Groudon-Primal') symbol = 'omega';
  if (symbol) {
    buf += ` <img src="${Dex.resourcePrefix}sprites/misc/${symbol}.png" alt="${symbol}" style="vertical-align:text-bottom;" />`;
  }

  buf += `</strong><div class="hpbar"><div class="hptext"></div><div class="hptextborder"></div><div class="prevhp"><div class="hp"></div></div><div class="status"></div>`;
  buf += `</div>`;
  return buf;
}

ShowdownEnhancedTooltip.showPokemonTooltip = function showPokemonTooltip(clientPokemon, serverPokemon, isActive, illusionIndex) {
  const pokemon = clientPokemon || serverPokemon;
  let text = '';
  let genderBuf = '';
  const gender = pokemon.gender;
  if (gender === 'M' || gender === 'F') {
    genderBuf = ` <img src="${Dex.resourcePrefix}fx/gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" /> `;
  }

  let name = BattleLog.escapeHTML(pokemon.name);
  if (pokemon.speciesForme !== pokemon.name) {
    name += ' <small>(' + BattleLog.escapeHTML(pokemon.speciesForme) + ')</small>';
  }

  // *****
  // Show height
  let heightBuf = '';
  if (clientPokemon && pokemon.getSpecies(pokemon).heightm) {
    heightBuf += '<small>' + ' ' + pokemon.getSpecies(pokemon).heightm.toFixed(2) + 'm' + '</small>';
  }
  //

  // ******************
  // Show weight
  let weightBuf = '';
  if (clientPokemon && pokemon.getSpecies(pokemon).weightkg) {
    weightBuf += '<small>' + ' ' + pokemon.getSpecies(pokemon).weightkg + 'kg' + '</small>';
  }
  // ******************

  let levelBuf = (pokemon.level !== 100 ? ` <small>L${pokemon.level}</small>` : ``);
  if (!illusionIndex || illusionIndex === 1) {
    text += `<h2>${name}${genderBuf}${illusionIndex ? '' : levelBuf}${heightBuf}${weightBuf}<br />`;

    if (clientPokemon && clientPokemon.volatiles && clientPokemon.volatiles.formechange) {
      if (clientPokemon.volatiles.transform) {
        text += `<small>(Transformed into ${clientPokemon.volatiles.formechange[1]})</small><br />`;
      } else {
        text += `<small>(Changed forme: ${clientPokemon.volatiles.formechange[1]})</small><br />`;
      }
    }

    let types = this.getPokemonTypes(pokemon);

    if (clientPokemon && (clientPokemon.volatiles.typechange || clientPokemon.volatiles.typeadd)) {
      text += `<small>(Type changed)</small><br />`;
    }
    text += types.map(type => Dex.getTypeIcon(type)).join(' ');

    // ***********
    // Show base stats
    var template = clientPokemon ? clientPokemon.getSpecies() : null;
    if (ShowdownEnhancedTooltip.Settings.showBaseStats === "ON" && template) {
      text += '<br /><small>Base stats:' + '<br />';
      text += 'HP: ' + template.baseStats.hp + ' ';
      text += 'Atk: ' + template.baseStats.atk + ' ';
      text += 'Def: ' + template.baseStats.def + ' ';
      text += 'SpA: ' + template.baseStats.spa + ' ';
      text += 'SpD: ' + template.baseStats.spd + ' ';
      text += 'Spe: ' + template.baseStats.spe + '</small>'
    }
    // **********

    text += `</h2>`;
  }

  if (illusionIndex) {
    text += `<p class="section"><strong>Possible Illusion #${illusionIndex}</strong>${levelBuf}</p>`;
  }

  // ***********************
  // Show type effectiveness icons
  var types = this.getPokemonTypes(pokemon);
  const typeEff = ShowdownEnhancedTooltip.getTypeEff(types);
  const multiplierKeys = [4, 2, .5, .25, 0];
  text += '<p>Weaknesses: <br />';
  multiplierKeys.forEach((multiplierKey) => {
    if (typeEff[multiplierKey].length > 0) {
      const weakTypes = typeEff[multiplierKey].map(effect => effect ? Dex.getTypeIcon(effect) : '').join('');
      text += `<p>${multiplierKey}x: ${weakTypes}</p>`;
    }
  });
  text += '</p><h2></h2>';
  // ********************

  if (pokemon.fainted) {
    text += '<p><small>HP:</small> (fainted)</p>';
  } else if (this.battle.hardcoreMode) {
    if (serverPokemon) {
      text += '<p><small>HP:</small> ' + serverPokemon.hp + '/' + serverPokemon.maxhp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '') + '</p>';
    }
  } else {
    let exacthp = '';
    if (serverPokemon) {
      exacthp = ' (' + serverPokemon.hp + '/' + serverPokemon.maxhp + ')';
    } else if (pokemon.maxhp === 48) {
      exacthp = ' <small>(' + pokemon.hp + '/' + pokemon.maxhp + ' pixels)</small>';
    }
    text += '<p><small>HP:</small> ' + Pokemon.getHPText(pokemon) + exacthp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '');
    if (clientPokemon) {
      if (pokemon.status === 'tox') {
        if (pokemon.ability === 'Poison Heal' || pokemon.ability === 'Magic Guard') {
          text += ' <small>Would take if ability removed: ' + Math.floor(100 / 16 * Math.min(clientPokemon.statusData.toxicTurns + 1, 15)) + '%</small>';
        } else {
          text += ' Next damage: ' + Math.floor(100 / 16 * Math.min(clientPokemon.statusData.toxicTurns + 1, 15)) + '%';
        }
      } else if (pokemon.status === 'slp') {
        text += ' Turns asleep: ' + clientPokemon.statusData.sleepTurns;
      }
    }
    text += '</p>';
  }

  const supportsAbilities = this.battle.gen > 2 && !this.battle.tier.includes("Let's Go");

  let abilityText = '';
  if (supportsAbilities) {
    abilityText = this.getPokemonAbilityText(
      clientPokemon, serverPokemon, isActive, !!illusionIndex && illusionIndex > 1
    );
  }

  let itemText = '';
  if (serverPokemon && serverPokemon.item) {
    itemText = '<small>Item:</small> ' + Dex.getItem(serverPokemon.item).name;
  } else if (clientPokemon) {
    let item = '';
    let itemEffect = clientPokemon.itemEffect || '';
    if (clientPokemon.prevItem) {
      item = 'None';
      if (itemEffect) itemEffect += '; ';
      let prevItem = Dex.getItem(clientPokemon.prevItem).name;
      itemEffect += clientPokemon.prevItemEffect ? prevItem + ' was ' + clientPokemon.prevItemEffect : 'was ' + prevItem;
    }
    if (pokemon.item) item = Dex.getItem(pokemon.item).name;
    if (itemEffect) itemEffect = ' (' + itemEffect + ')';
    if (item) itemText = '<small>Item:</small> ' + item + itemEffect;
  }

  text += '<p>';
  text += abilityText;
  if (itemText) {
    // ability/item on one line for your own switch tooltips, two lines everywhere else
    text += (!isActive && serverPokemon ? ' / ' : '</p><p>');
    text += itemText;
  }
  text += '</p>';

  text += this.renderStats(clientPokemon, serverPokemon, !isActive);

  text += '<p class="section">';
  if (serverPokemon && !isActive) {
    text += '<strong>Known moves:</strong><br/>';
    // move list
    const battlePokemon = clientPokemon || this.battle.findCorrespondingPokemon(pokemon);
    for (const moveid of serverPokemon.moves) {
      const move = Dex.getMove(moveid);
      let moveName = `&#8226; ${move.name}`;
      if (battlePokemon && battlePokemon.moveTrack) {
        for (const row of battlePokemon.moveTrack) {
          if (moveName === row[0]) {
            moveName = this.getPPUseText(row, true);
            break;
          }
        }
      }
      // ***************
      // Show move base power
      text += moveName + ', Base power: ' + move.basePower + ' ' +
        Dex.getTypeIcon(move.type) + ' ' +
        `<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
        '<br />';
      // *********************
    }
  } else if (!this.battle.hardcoreMode && clientPokemon && clientPokemon.moveTrack.length) {
    // move list (guessed)
    text += '<strong>Known moves:</strong><br/>';
    for (const row of clientPokemon.moveTrack) {
      // *****************
      // Show move base power
      var move = Dex.getMove(row[0]);
      text += this.getPPUseText(row) + ' BP: ' + move.basePower + ' ' +
        Dex.getTypeIcon(move.type) + ' ' +
        `<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
        '<br />';
      // *********************
    }
    if (this.battle.gen < 8 && clientPokemon.moveTrack.filter(([moveName]) =>
      moveName.charAt(0) !== '*' && !this.battle.dex.getMove(moveName).isZ
    ).length > 4) {
      text += `(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.) `;
    }
    if (this.battle.gen === 3) {
      text += `(Pressure is not visible in Gen 3, so in certain situations, more PP may have been lost than shown here.) `;
    }
    if (this.pokemonHasClones(clientPokemon)) {
      text += `(Your opponent has two indistinguishable Pokémon, making it impossible for you to tell which one has which moves/ability/item.) `;
    }
  }
  // Likely Moves
  const pokemonChaosData = getChaosDataFromLocal(pokemon.speciesForme);
  if (pokemonChaosData && clientPokemon) {
    const movesTotal = sumObjectValues(pokemonChaosData.Moves);
    const likelyMoves = Object.entries(pokemonChaosData.Moves)
      .sort((a, b) => (a[1] > b[1]) ? -1 : 1)
      .slice(0, 7) // Only showing the 7 most likely moves
      .filter(movesArray => {
        for (const row of clientPokemon.moveTrack) {
          let move = Dex.getMove(row[0]);
          if (move.id === movesArray[0]) {
            return false;
          }
        }
        return true;
      })
      .map(movesArray => {
        const movesLikelihood = Math.round(((movesArray[1] / movesTotal)*100) * 100) / 100;
        const move = Dex.getMove(movesArray[0]);
        return `${move.name} (${movesLikelihood}%) BP: ${move.basePower} ${Dex.getTypeIcon(move.type)} <img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />`;
      });
    text += `<strong>Likely moves:</strong><br/>• ${likelyMoves.join('<br/> • ')}`;
  }

  text += `</p>`;

  return text;
};

ShowdownEnhancedTooltip.getPokemonAbilityText = function(
  clientPokemon,
  serverPokemon,
  isActive,
  hidePossible
) {
  let text = '';
  const abilityData = this.getPokemonAbilityData(clientPokemon, serverPokemon);
  if (!isActive) {
    // for switch tooltips, only show the original ability
    const ability = abilityData.baseAbility || abilityData.ability;
    if (ability) text = '<small>Ability:</small> ' + Dex.getAbility(ability).name;
  } else {
    if (abilityData.ability) {
      const abilityName = Dex.getAbility(abilityData.ability).name;
      text = '<small>Ability:</small> ' + abilityName;
      const baseAbilityName = Dex.getAbility(abilityData.baseAbility).name;
      if (baseAbilityName && baseAbilityName !== abilityName) text += ' (base: ' + baseAbilityName + ')';
    }
  }
  const pokemon = clientPokemon || serverPokemon;

  const pokemonChaosData = getChaosDataFromLocal(pokemon.speciesForme);
  if (pokemonChaosData) {
    // Enhanced Possible Abilities
    const abilityTotal = sumObjectValues(pokemonChaosData.Abilities);
    const likelyAbilities = Object.entries(pokemonChaosData.Abilities)
      .sort((a, b) => (a[1] > b[1]) ? -1 : 1)
      .map(abilityArray => {
        const abilityLikelihood = Math.round(((abilityArray[1] / abilityTotal)*100) * 100) / 100;
        return `${Dex.getAbility(abilityArray[0]).name} (${abilityLikelihood}%)`;
      });
    text = '<small>Possible abilities:</small> ' + likelyAbilities.join(', ');
  } else if (!text && abilityData.possibilities.length && !hidePossible) {
    text = '<small>Possible abilities:</small> ' + abilityData.possibilities.join(', ');
  }
  return text;
}

ShowdownEnhancedTooltip.getTypeEff = function(types){
  if (types.length == 1){
    var damage = ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven;
  }else{
    var damage = {
      "Bug": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Bug * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Bug,
      "Dark": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Dark * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Dark,
      "Dragon": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Dragon * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Dragon,
      "Electric": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Electric * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Electric,
      "Fairy": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Fairy * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Fairy,
      "Fighting": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Fighting * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Fighting,
      "Fire": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Fire * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Fire,
      "Flying": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Flying * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Flying,
      "Ghost": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Ghost * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Ghost,
      "Grass": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Grass * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Grass,
      "Ground": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Ground * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Ground,
      "Ice": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Ice * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Ice,
      "Normal": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Normal * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Normal,
      "Poison": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Poison * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Poison,
      "Psychic": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Psychic * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Psychic,
      "Rock": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Rock * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Rock,
      "Steel": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Steel * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Steel,
      "Water": ShowdownEnhancedTooltip.BattleTypeChart[types[0]].damageGiven.Water * ShowdownEnhancedTooltip.BattleTypeChart[types[1]].damageGiven.Water,
    }
  }

  var typeEff = {
    "4": [],
    "2": [],
    "1": [],
    "0.5": [],
    "0.25": [],
    "0": []
  };

  for(var index in damage) {
    var eff = damage[index];
    typeEff[eff].push(index);
  }

  return typeEff;
};

// Overwrite client tooltip method with enhanced tooltip method
PokemonSprite.prototype.getStatbarHTML = ShowdownEnhancedTooltip.getStatbarHTML;
BattleTooltips.prototype.getPokemonAbilityText = ShowdownEnhancedTooltip.getPokemonAbilityText;
BattleTooltips.prototype.showPokemonTooltip = ShowdownEnhancedTooltip.showPokemonTooltip;
