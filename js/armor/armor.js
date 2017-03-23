//Fill armors select box
$(".armor-select").each(function() {
	var armors = Data.get('armors');
	var elem = $(this);

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	armors.forEach(function(armor) {
		elem.append(
			$("<option></option>").attr("value", armor.id).attr("title", armor.bonus).text(armor.name)
		);
	})
});