//Fill avantages select boxes
$(".avantage-select").each(function() {
	var elem = $(this);

	//On change update the weapon Row
	elem.on("change", updateFromAvantage);

	// Add empty first option
	elem.append(htmlOption('', ''));

	_(Data.get('avantages'))
		.groupBy((avantage) => avantage.group)
		.map((groupAvantages, groupName) =>
			htmlOptGroup(
				groupName,
				_.reduce(groupAvantages, (html, avantage) => html + htmlOption(avantage.id, avantage.name, avantage.title), '')
			)
		)
		.each(appendIn(elem))
});

function updateFromAvantage(){
	var avantage = _.find(Data.get('avantages'), (o) => o.id == this.value);

	if (avantage) {
		$(this)
			.closest('td')
			.next('td').html(avantage.title)
	}
	else{
		$(this)
			.closest('td')
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