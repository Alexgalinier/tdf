$("td").each(function (index, cell) {
	if(cell.className !== 'td-not-editable') {
		$(cell).attr('contenteditable', 'true')
	}
});

$('#switch-blason').click(function () {
	$('.sheet').toggleClass("no-bg");

	if ($(this).val() == "Cacher Blason") {
		$(this).val("Afficher Blason")
	} else {
		$(this).val("Cacher Blason")
	}
});

$("#vig").on("keyup", updateDefIntrig);
$("#ing").on("keyup", updateDefIntrig);
$("#status").on("keyup", updateDefIntrig);

$("#will").on("keyup", updateColdBlood);

$("#agility").on("keyup", updateDefCombat);
$("#athl").on("keyup", updateDefCombat);
$("#vig").on("keyup", updateDefCombat);
$("#malus-armure").on("keyup", updateDefCombat);

$("#end").on("keyup", updateSante);

function updateDefIntrig() {
	$("#def-intrigue").html(
		v("vig") + v("ing") + v("status")
	);
}

function updateColdBlood() {
	$("#cold-blood").html(
		v("will") * 3
	);
}

function updateDefCombat() {
	$('#def-combat').html(
		v("agility") + v("athl") + v("vig")
		- toInt($("#malus-armure").html().replace("&nbsp;", ""))
	)
}

function updateSante() {
	var sante = v("end") * 3

	$('#sante').html(
		sante
	)

	$("#damage").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= sante)
			$(this).prop('checked', true);
	})

	$("#wounds").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= v("end")) {
			$(this).prop('checked', true);
		}
	})

	$("#injuries").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= v("end")) {
			$(this).prop('checked', true);
		}
	})
}

//Fill weapons select boxes
$(".weapon-select").each(function() {
	var weapons = Data.get('weapons');
	var elem = $(this);
	var specialities = [];

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	weapons.forEach(function(weapon) {
		//Add opt-groups
		if(!specialities.includes(weapon.group)){
			elem.append(
				$("<optgroup label="+weapon.group+">")
			);
		}

		elem.append(
			$("<option></option>").attr("value", weapon.id).text(weapon.name)
		);

		if(!specialities.includes(weapon.group)){
			specialities.push(weapon.group);
			elem.append(
				$("</optgroup>")
			);
		}
	})
});

//Fill qualities select boxes
$(".quality-select").each(function() {
	var qualities = Data.get('qualities');
	var elem = $(this);

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	qualities.forEach(function(quality) {
		elem.append(
			$("<option></option>").attr("value", quality.id).text(quality.name)
		);
	})
});

//Fill armors select box
$(".armor-select").each(function() {
	var armors = Data.get('armors');
	var elem = $(this);

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	armors.forEach(function(armor) {
		elem.append(
			$("<option></option>").attr("value", armor.id).text(armor.name)
		);
	})
});

// -------------------
// Private functions
// -------------------
function toInt(val) {
	var int = parseInt(val.trim(), 10)
	return (isNaN(int)) ? 0 : int
}

function v(id) {
	return toInt($("#" + id).val())
}