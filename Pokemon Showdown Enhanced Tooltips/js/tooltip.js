var ShowdownEnhancedTooltip = {};

ShowdownEnhancedTooltip.BattleTypeChart = {
	// defending type
	"Bug": {
		damageTaken: {
			// attacking type : effectivenessMultiplier
			"Bug": 1,
			"Dark": 1,
			"Dragon": 1,
			"Electric": 1,
			"Fairy": 1,
			"Fighting": .5,
			"Fire": 2,
			"Flying": 2,
			"Ghost": 1,
			"Grass": .5,
			"Ground": .5,
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
			prankster: 3,
			"Bug": 2,
			"Dark": .5,
			"Dragon": 1,
			"Electric": 1,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 1,
			"Flying": 1,
			"Ghost": .5,
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
			"Electric": .5,
			"Fairy": 2,
			"Fighting": 1,
			"Fire": .5,
			"Flying": 1,
			"Ghost": 1,
			"Grass": .5,
			"Ground": 1,
			"Ice": 2,
			"Normal": 1,
			"Poison": 1,
			"Psychic": 1,
			"Rock": 1,
			"Steel": 1,
			"Water": .5,
		},
		HPivs: {"atk":30},
		HPdvs: {"def":14},
	},
	"Electric": {
		damageGiven: {
			par: 3,
			"Bug": 1,
			"Dark": 1,
			"Dragon": 1,
			"Electric": .5,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 1,
			"Flying": .5,
			"Ghost": 1,
			"Grass": 1,
			"Ground": 2,
			"Ice": 1,
			"Normal": 1,
			"Poison": 1,
			"Psychic": 1,
			"Rock": 1,
			"Steel": .5,
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
			brn: 3,
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
			trapped: 3,
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
			powder: 3,
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
			sandstorm: 3,
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
			hail: 3,
			frz: 3,
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
			psn: 3,
			tox: 3,
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
			sandstorm: 3,
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
			psn: 3,
			tox: 3,
			sandstorm: 3,
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

ShowdownEnhancedTooltip.showPokemonTooltip = function(pokemon, pokemonData, isActive){
	console.log(pokemonData);
	var text = '';
	var gender = pokemon.gender;
	if (gender) gender = ' <img src="' + Tools.resourcePrefix + 'fx/gender-' + gender.toLowerCase() + '.png" alt="' + gender + '" />';
	text = '<div class="tooltipinner"><div class="tooltip">';
	text += '<h2>' + pokemon.getFullName() + gender + (pokemon.level !== 100 ? ' <small>L' + pokemon.level + '</small>' : '') + '<br />';

	var template = pokemon;
	if (!pokemon.types) template = Tools.getTemplate(pokemon.species);
	if (pokemon.volatiles && pokemon.volatiles.transform && pokemon.volatiles.formechange) {
		template = Tools.getTemplate(pokemon.volatiles.formechange[2]);
		text += '<small>(Transformed into ' + pokemon.volatiles.formechange[2] + ')</small><br />';
	} else if (pokemon.volatiles && pokemon.volatiles.formechange) {
		template = Tools.getTemplate(pokemon.volatiles.formechange[2]);
		text += '<small>(Forme: ' + pokemon.volatiles.formechange[2] + ')</small><br />';
	}

	var types = template.types;
	if (this.battle.gen < 7) {
		var table = BattleTeambuilderTable['gen' + this.battle.gen];
		if (template.speciesid in table.overrideType) types = table.overrideType[template.speciesid].split('/');
	}

	var isTypeChanged = false;
	if (pokemon.volatiles && pokemon.volatiles.typechange) {
		isTypeChanged = true;
		types = pokemon.volatiles.typechange[2].split('/');
	}
	if (pokemon.volatiles && pokemon.volatiles.typeadd) {
		isTypeChanged = true;
		if (types && types.indexOf(pokemon.volatiles.typeadd[2]) === -1) {
			types = types.concat(pokemon.volatiles.typeadd[2]);
		}
	}
	if (isTypeChanged) text += '<small>(Type changed)</small><br />';
	if (types) {
		text += types.map(Tools.getTypeIcon).join(' ');
	} else {
		text += 'Types unknown';
	}
	text += '</h2>';
	if (pokemon.fainted) {
		text += '<p>HP: (fainted)</p>';
	} else {
		var exacthp = '';
		if (pokemonData) exacthp = ' (' + pokemonData.hp + '/' + pokemonData.maxhp + ')';
		else if (pokemon.maxhp == 48) exacthp = ' <small>(' + pokemon.hp + '/' + pokemon.maxhp + ' pixels)</small>';
		text += '<p>SarahPoints: ' + pokemon.hpDisplay() + exacthp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '') + '</p>';
	}
	var showOtherSees = isActive;
	if (pokemonData) {
		if (this.battle.gen > 2) {
			var abilityText = '';
			if (pokemon.ability && (pokemon.ability !== pokemon.baseAbility)) {
				abilityText = Tools.getAbility(pokemon.ability).name + ' (base: ' + Tools.getAbility(pokemon.baseAbility).name + ')';
			} else {
				abilityText = Tools.getAbility(pokemonData.baseAbility).name;
			}
			text += '<p>Ability: ' + abilityText;
			if (pokemonData.item) {
				text += ' / Item: ' + Tools.getItem(pokemonData.item).name;
			}
			text += '</p>';
		} else if (pokemonData.item) {
			item = Tools.getItem(pokemonData.item).name;
			text += '<p>Item: ' + item + '</p>';
		}
		text += '<p>' + pokemonData.stats['atk'] + '&nbsp;Atk /&nbsp;' + pokemonData.stats['def'] + '&nbsp;Def /&nbsp;' + pokemonData.stats['spa'];
		if (this.battle.gen === 1) {
			text += '&nbsp;Spc /&nbsp;';
		} else {
			text += '&nbsp;SpA /&nbsp;' + pokemonData.stats['spd'] + '&nbsp;SpD /&nbsp;';
		}
		text += pokemonData.stats['spe'] + '&nbsp;Spe</p>';
		if (isActive) {
			if (this.battle.gen > 1) {
				var modifiedStats = this.calculateModifiedStats(pokemon, pokemonData);
				var statsText = this.makeModifiedStatText(pokemonData, modifiedStats);
				if (statsText.match('<b')) {
					text += '<p>After Modifiers:</p>';
					text += statsText;
				}
			}
			text += '<p class="section">Opponent sees:</p>';
		}
	} else {
		showOtherSees = true;
	}
	if (this.battle.gen > 2 && showOtherSees) {
		if (!pokemon.baseAbility && !pokemon.ability) {
			if (template.abilities) {
				var ability0 = template.abilities['0'];
				if (this.battle.gen < 7) {
					var table = BattleTeambuilderTable['gen' + this.battle.gen];
					if (template.speciesid in table.overrideAbility) ability0 = table.overrideAbility[template.speciesid];
				}
				text += '<p>Possible abilities: ' + Tools.getAbility(ability0).name;
				if (template.abilities['1']) text += ', ' + Tools.getAbility(template.abilities['1']).name;
				if (this.battle.gen > 4 && template.abilities['H']) text += ', ' + Tools.getAbility(template.abilities['H']).name;
				text += '</p>';
			}
		} else if (pokemon.ability) {
			if (pokemon.ability === pokemon.baseAbility) {
				text += '<p>Ability: ' + Tools.getAbility(pokemon.ability).name + '</p>';
			} else {
				text += '<p>Ability: ' + Tools.getAbility(pokemon.ability).name + ' (base: ' + Tools.getAbility(pokemon.baseAbility).name + ')' + '</p>';
			}
		} else if (pokemon.baseAbility) {
			text += '<p>Ability: ' + Tools.getAbility(pokemon.baseAbility).name + '</p>';
		}
	}

	if (showOtherSees) {
		var item = '';
		var itemEffect = pokemon.itemEffect || '';
		if (pokemon.prevItem) {
			item = 'None';
			if (itemEffect) itemEffect += '; ';
			var prevItem = Tools.getItem(pokemon.prevItem).name;
			itemEffect += pokemon.prevItemEffect ? prevItem + ' was ' + pokemon.prevItemEffect : 'was ' + prevItem;
		}
		if (pokemon.item) item = Tools.getItem(pokemon.item).name;
		if (itemEffect) itemEffect = ' (' + itemEffect + ')';
		if (item) text += '<p>Item: ' + item + itemEffect + '</p>';

		if (template.baseStats) {
			text += '<p>' + this.getTemplateMinSpeed(template, pokemon.level) + ' to ' + this.getTemplateMaxSpeed(template, pokemon.level) + ' Spe (before items/abilities/modifiers)</p>';
		}
	}

	if (pokemonData && !isActive) {
		text += '<p class="section">';
		var battlePokemon = this.battle.getPokemon(pokemon.ident, pokemon.details);
		for (var i = 0; i < pokemonData.moves.length; i++) {
			var move = Tools.getMove(pokemonData.moves[i]);
			var name = move.name;
			var pp = 0, maxpp = 0;
			if (battlePokemon && battlePokemon.moveTrack) {
				for (var j = 0; j < battlePokemon.moveTrack.length; j++) {
					if (name === battlePokemon.moveTrack[j][0]) {
						name = this.getPPUseText(battlePokemon.moveTrack[j], true);
						break;
					}
				}
			}
			text += '&#8226; ' + name + '<br />';
		}
		text += '</p>';
	} else if (pokemon.moveTrack && pokemon.moveTrack.length) {
		text += '<p class="section">';
		for (var i = 0; i < pokemon.moveTrack.length; i++) {
			text += '&#8226; ' + this.getPPUseText(pokemon.moveTrack[i]) + '<br />';
		}
		text += '</p>';
	}
	text += '</div></div>';
	
	console.log(pokemon.baseStats);
	console.log(template.baseStats);
	
	return text;
};

ShowdownEnhancedTooltip.getWeakness = function(types){



};

BattleTooltips.prototype.showPokemonTooltip = ShowdownEnhancedTooltip.showPokemonTooltip;
