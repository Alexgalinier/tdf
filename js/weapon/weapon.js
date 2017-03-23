//Fill weapons select boxes
$(".weapon-select").each(function() {
	var elem = $(this);

	//On change update the weapon Row
	elem.on("change", updateWeaponRow);

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

	// Add empty first option
	elem.append(htmlOption('', ''));

	_(Data.get('qualities'))
		.map((quality) => htmlOption(quality.id, quality.name, quality.bonus))
		.each(appendIn(elem))
});

function updateWeaponRow(){
	var weapon = _.find(Data.get('weapons'), (o) => o.id == this.value)

	if (weapon) {
		$(this)
			.closest('td')
			.next('td').html(weapon.getSpeciality())
			.next('td')
			.next('td').html(weapon.getDamage())
			.next('td').html(weapon.getAttribute())
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