let ShowdownEnhancedTooltip = {};

ShowdownEnhancedTooltip.Settings = {
	showBaseStats: document.getElementById('pset-showBaseStats').getAttribute('enabled')
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

ShowdownEnhancedTooltip.showPokemonTooltip = function showPokemonTooltip(clientPokemon, serverPokemon, isActive) {
    var _this3 = this;
    var pokemon = clientPokemon || serverPokemon;
    var text = '';
    var genderBuf = '';
    if (pokemon.gender) {
        genderBuf = ' <img src="' + Dex.resourcePrefix + 'fx/gender-' + pokemon.gender.toLowerCase() + '.png" alt="' + pokemon.gender + '" />';
    }

    var name = BattleLog.escapeHTML(pokemon.name);
    if (pokemon.species !== pokemon.name) {
        name += ' <small>(' + BattleLog.escapeHTML(pokemon.species) + ')</small>';
    }

    text += '<h2>' + name + genderBuf + (pokemon.level !== 100 ? ' <small>L' + pokemon.level + '</small>' : '');

    // Show height
	if (pokemon.heightm) {
		text += '<small>' + ' ' + pokemon.heightm.toFixed(2) + 'm' + '</small>';
	}
    //

    // Show weight
	if (pokemon.weightkg) {
		text += '<small>' + ' ' + pokemon.weightkg + 'kg' + '</small>' + '<br />';
	}
    //

    var template = this.battle.dex.getTemplate(clientPokemon ? clientPokemon.getSpecies() : pokemon.species);
    if (clientPokemon && clientPokemon.volatiles.formechange) {
        if (clientPokemon.volatiles.transform) {
            text += '<small>(Transformed into ' + clientPokemon.volatiles.formechange[1] + ')</small><br />';
        } else {
            text += '<small>(Changed forme: ' + clientPokemon.volatiles.formechange[1] + ')</small><br />';
        }
    }

    var types = this.getPokemonTypes(pokemon);

    if (clientPokemon && (clientPokemon.volatiles.typechange || clientPokemon.volatiles.typeadd)) {
        text += '<small>(Type changed)</small><br />';
    }
    text += types.map(function (type) { return Dex.getTypeIcon(type); }).join(' ');

    // Show base stats
		if (ShowdownEnhancedTooltip.Settings.showBaseStats === "ON") {
			text += '<br /><small>Base stats:' + '<br />';
			text += 'HP: ' + template.baseStats.hp + ' ';
			text += 'Atk: ' + template.baseStats.atk + ' ';
			text += 'Def: ' + template.baseStats.def + ' ';
			text += 'SpA: ' + template.baseStats.spa + ' ';
			text += 'SpD: ' + template.baseStats.spd + ' ';
			text += 'Spe: ' + template.baseStats.spe + '</small>'
		}

    text += '</h2>';

    // Show type effectiveness icons
    const typeEff = ShowdownEnhancedTooltip.getTypeEff(types);
    const multiplierKeys = [4, 2, .5, .25, 0]
    text += '<p>Weaknesses: <br />';
    multiplierKeys.forEach((multiplierKey) => {
        if (typeEff[multiplierKey].length > 0) {
            text += `<p>${multiplierKey}x: ` + (typeEff[multiplierKey].map(Dex.getTypeIcon).join('')) + '</p>';
        }
    })
    text += '</p><h2></h2>';
    //


    if (pokemon.fainted) {
        text += '<p><small>HP:</small> (fainted)</p>';
    } else if (this.battle.hardcoreMode) {
        if (serverPokemon) {
            text += '<p><small>HP:</small> ' + serverPokemon.hp + '/' + serverPokemon.maxhp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '') + '</p>';
        }
    } else {
        var exacthp = '';
        if (serverPokemon) {
            exacthp = ' (' + serverPokemon.hp + '/' + serverPokemon.maxhp + ')';
        } else if (pokemon.maxhp === 48) {
            exacthp = ' <small>(' + pokemon.hp + '/' + pokemon.maxhp + ' pixels)</small>';
        }
        text += '<p><small>HP:</small> ' + Pokemon.getHPText(pokemon) + exacthp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '');
        if (clientPokemon) {
            if (pokemon.status === 'tox') {
                if (pokemon.ability === 'Poison Heal' || pokemon.ability === 'Magic Guard') {
                    text += ' <small>Would take if ability removed: ' + Math.floor(100 / 16) * Math.min(clientPokemon.statusData.toxicTurns + 1, 15) + '%</small>';
                } else {
                    text += ' Next damage: ' + Math.floor(100 / 16) * Math.min(clientPokemon.statusData.toxicTurns + 1, 15) + '%';
                }
            } else if (pokemon.status === 'slp') {
                text += ' Turns asleep: ' + clientPokemon.statusData.sleepTurns;
            }
        }
        text += '</p>';
    }

    var supportsAbilities = this.battle.gen > 2 && !this.battle.tier.includes("Let's Go");
    if (serverPokemon) {
        if (supportsAbilities) {
            var abilityText = Dex.getAbility(serverPokemon.baseAbility).name;
            var _ability = Dex.getAbility(serverPokemon.ability || pokemon.ability).name;
            if (_ability && _ability !== abilityText) {
                abilityText = _ability + ' (base: ' + abilityText + ')';
            }
            text += '<p><small>Ability:</small> ' + abilityText;
            if (serverPokemon.item) {
                text += ' / <small>Item:</small> ' + Dex.getItem(serverPokemon.item).name;
            }
            text += '</p>';
        } else if (serverPokemon.item) {
            var _itemName = Dex.getItem(serverPokemon.item).name;
            text += '<p><small>Item:</small> ' + _itemName + '</p>';
        }
    } else if (clientPokemon) {
        if (supportsAbilities) {
            if (!pokemon.baseAbility && !pokemon.ability) {
                var abilities = template.abilities;
                text += '<p><small>Possible abilities:</small> ' + abilities['0'];
                if (abilities['1']) text += ', ' + abilities['1'];
                if (abilities['H']) text += ', ' + abilities['H'];
                if (abilities['S']) text += ', ' + abilities['S'];
                text += '</p>';
            } else if (pokemon.ability) {
                if (pokemon.ability === pokemon.baseAbility) {
                    text += '<p><small>Ability:</small> ' + Dex.getAbility(pokemon.ability).name + '</p>';
                } else {
                    text += '<p><small>Ability:</small> ' + Dex.getAbility(pokemon.ability).name + ' (base: ' + Dex.getAbility(pokemon.baseAbility).name + ')' + '</p>';
                }
            } else if (pokemon.baseAbility) {
                text += '<p><small>Ability:</small> ' + Dex.getAbility(pokemon.baseAbility).name + '</p>';
            }
        }
        var _item2 = '';
        var itemEffect = clientPokemon.itemEffect || '';
        if (clientPokemon.prevItem) {
            _item2 = 'None';
            if (itemEffect) itemEffect += '; ';
            var prevItem = Dex.getItem(clientPokemon.prevItem).name;
            itemEffect += clientPokemon.prevItemEffect ? prevItem + ' was ' + clientPokemon.prevItemEffect : 'was ' + prevItem;
        }
        if (pokemon.item) _item2 = Dex.getItem(pokemon.item).name;
        if (itemEffect) itemEffect = ' (' + itemEffect + ')';
        if (_item2) text += '<p><small>Item:</small> ' + _item2 + itemEffect + '</p>';
    }

    text += this.renderStats(clientPokemon, serverPokemon, !isActive);

    if (serverPokemon && !isActive) {

        text += '<p class="section">';
        var battlePokemon = this.battle.getPokemon(pokemon.ident, pokemon.details);
        for (var _i4 = 0, _serverPokemon$moves = serverPokemon.moves; _i4 < _serverPokemon$moves.length; _i4++) {
        	  var _moveid = _serverPokemon$moves[_i4];
            var move = Dex.getMove(_moveid);
            var moveName = '&#8226; ' + move.name;
            if (battlePokemon && battlePokemon.moveTrack) {
                for (var _i5 = 0, _battlePokemon$moveTr =
                    battlePokemon.moveTrack; _i5 < _battlePokemon$moveTr.length; _i5++) {
                        var row = _battlePokemon$moveTr[_i5];
                    if (moveName === row[0]) {
                        moveName = this.getPPUseText(row, true);
                        break;
                    }
                }
            }
            text += moveName + ', Base power: ' + move.basePower + ' ' +
							Dex.getTypeIcon(move.type) + ' ' +
							`<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
							'<br />';
        }
        text += '</p>';
    } else if (!this.battle.hardcoreMode && clientPokemon && clientPokemon.moveTrack.length) {

        text += '<p class="section">';
        for (var _i6 = 0, _clientPokemon$moveTr = clientPokemon.moveTrack; _i6 < _clientPokemon$moveTr.length; _i6++) {
						var _row = _clientPokemon$moveTr[_i6];
						var move = Dex.getMove(_row[0]);
            text += this.getPPUseText(_row) + ' Base power: ' + move.basePower + ' ' +
							Dex.getTypeIcon(move.type) + ' ' +
							`<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
							'<br />';
        }
        if (clientPokemon.moveTrack.filter(function (_ref) {
            var moveName = _ref[0];
            return (moveName.charAt(0) !== '*' && !_this3.battle.dex.getMove(moveName).isZ);
        }).
            length > 4) {
            text += '(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.)';
        }
        if (this.battle.gen === 3) {
            text += '(Pressure is not visible in Gen 3, so in certain situations, more PP may have been lost than shown here.)';
        }
        text += '</p>';
    }

    return text;
};

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
BattleTooltips.prototype.showPokemonTooltip = ShowdownEnhancedTooltip.showPokemonTooltip;
