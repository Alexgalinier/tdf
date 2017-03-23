//Fill armors select box
$(".armor-select").each(function() {
	var armors = Data.get('armors');
	var elem = $(this);

	//On change update the armor row and the def-combat
	elem.on("change", updateFromArmor);

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	armors.forEach(function(armor) {
		elem.append(
			$("<option></option>").attr("value", armor.id).attr("title", "Val("+armor.val+") Mal("+armor.mal+") Enc("+armor.enc+")").text(armor.name)
		);
	})
});

function updateFromArmor(){
	var armor = _.find(Data.get('armors'), (o) => o.id == this.value);

	if (armor) {
		// Update armor row
		$("#valeur-armure").html(armor.val);
		$("#malus-armure").html(armor.mal);
		$("#encombrement-armure").html(armor.enc);

		// Update def-combat
		$("#def-combat").html(v("agility") + v("athl") + v("vig") - armor.mal);
	}
	else {
		$("#valeur-armure").html('');
		$("#malus-armure").html('');
		$("#encombrement-armure").html('');
		$("#def-combat").html(v("agility") + v("athl") + v("vig"));
	}
}