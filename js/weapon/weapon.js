//Fill weapons select boxes
$(".weapon-select").each(function() {
	var elem = $(this);

	//On change update the weapon Row
	elem.on("change", updateFromWeapon);

	// Add empty first option
	elem.append(htmlOption('', ''));

	_(Data.get('weapons'))
		.groupBy((weapon) => weapon.group)
		.map((groupWeapons, groupName) =>
			htmlOptGroup(
				groupName,
				_.reduce(groupWeapons, (html, weapon) => html + htmlOption(weapon.id, weapon.name), '')
			)
		)
		.each(appendIn(elem))
});

//Fill qualities select boxes
$(".quality-select").each(function() {
	var elem = $(this);

	//On change update the weapon Row
	elem.on("change", updateFromQuality);

	// Add empty first option
	elem.append(htmlOption('', ''));

	_(Data.get('qualities'))
		.map((quality) => htmlOption(quality.id, quality.name, quality.title))
		.each(appendIn(elem))
});

// Listen to some skills value changed
$("#agility").bind("change", updateWeapons)
$("#athl").bind("change", updateWeapons)
$("#cac").bind("change", updateWeapons)
$("#tir").bind("change", updateWeapons)
// Listen to all spe for value changed
$('.skills td:nth-child(3)').bind("DOMSubtreeModified", updateWeapons);

function updateWeapons() {
  $(".weapon-select").each(function() {
    updateFromWeapon.call(this)
  })
}

function updateFromWeapon(){
	var weapon = _.find(Data.get('weapons'), (o) => o.id == this.value);
	var qualityValue = $(this).closest('tr').find('.quality-select').val();

	if (weapon) {
		$(this)
			.closest('td')
			.next('td').html(specialityToValue(weapon, qualityValue))
			.next('td')
			.next('td').html(weapon.calculateDamage(qualityValue))
			.next('td').html(weapon.getAttribute(qualityValue))
	}
	else{
		$(this)
			.closest('td')
			.next('td').html('')
			.next('td')
			.next('td').html('')
			.next('td').html('')
	}
}

function updateFromQuality(){
	var quality = _.find(Data.get('qualities'), (o) => o.id == this.value);
	var weaponValue = $(this).closest('tr').find('.weapon-select').val();
	var waepon = _.find(Data.get('weapons'), (o) => o.id == weaponValue);

	if (quality && weaponValue) {
		$(this)
			.closest('td')
			.prev('td').html(specialityToValue(waepon, this.value))
			.next('td')
			.next('td').html(quality.calculateDamage(weaponValue))
			.next('td').html(quality.calculateAttribute(weaponValue))
	}
	else if (weaponValue) {
		var weapon = _.find(Data.get('weapons'), (o) => o.id == weaponValue);
		$(this)
			.closest('td')
			.next('td').html(weapon.calculateDamage())
			.next('td').html(weapon.getAttribute())
	}
	else{
		$(this)
			.closest('td')
			.prev('td').html('')
			.next('td')
			.next('td').html('')
			.next('td').html('')
	}
}

// Private

function htmlOption(value, text, title) {
	return $("<option></option>").attr("value", value).attr("title", title).text(text)[0].outerHTML
}

function htmlOptGroup(name, htmlContent) {
	return $("<optgroup></optgroup>").attr('label', name).html(htmlContent)[0].outerHTML
}

function appendIn(elem) {
	return (item) => elem.append(item)
}

// TODO refactor this thing, truth comes from one point
function specialityToValue(weapon, qualityId) {
	if (weapon) {
		var spe = weapon.getSpeciality(),
				speValue;

		if (spe == 'Jet') {
			var cell = $('.skills td:nth-child(2):contains("' + spe + '")')[1]
			speValue = toInt($(cell).next('td').html())
		} else {
			speValue = toInt($('.skills td:nth-child(2):contains("' + spe + '")').next('td').html())
		}
		var skillValue = (['Arbalètes', 'Arcs', 'Jet', 'Siège'].includes(spe)) ? v('tir') : v('cac')

		var bonusStr = ''
		if(qualityId) {
			var quality = _.find(Data.get('qualities'), (o) => o.id == qualityId)
			if (quality.bonus.spe > 0) {
				bonusStr = ' (+' + quality.bonus.spe + ')'
			} else if (quality.bonus.spe > 0) {
				bonusStr = ' (' + quality.bonus.spe + ')'
			}
		}

		return skillValue + ' + ' + speValue + 'B' + bonusStr
  }

  return ''
}