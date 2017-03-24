$("td").each(function (index, cell) {
	if(cell.className !== 'td-not-editable') {
		$(cell).attr('contenteditable', 'true')
	}
});

$('#switch-blason').click(function () {
	$('.sheet').toggleClass("no-bg");

	if ($(this).val() == "Cacher Blason") {
		$(this).val("Afficher Blason");
		$("#remove-picture-button").hide();
		$("#input-choose-picture").hide();

	} else {
		$(this).val("Cacher Blason");
		$("#remove-picture-button").show();
		if($("#input-show-picture").attr('src') == undefined){
			$("#input-choose-picture").show();
		}
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

updatePicture();

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
	var sante = v("end") * 3;

	$('#sante').html(sante);

	$("#damage").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= sante)
			$(this).prop('checked', true);
	});

	$("#wounds").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= v("end")) {
			$(this).prop('checked', true);
		}
	});

	$("#injuries").find("input").each(function(index) {
		$(this).prop('checked', false);
		if (index >= v("end")) {
			$(this).prop('checked', true);
		}
	})
}

function updatePicture(){
	//showImage($("#input-choose-picture"),$("#input-show-picture"));
	showImage(document.getElementById("input-choose-picture"),document.getElementById("input-show-picture"));
}

// -------------------
// Private functions
// -------------------
function toInt(val) {
	var int = parseInt(val, 10)
	return (isNaN(int)) ? 0 : int
}

function v(id) {
	return toInt($("#" + id).val())
}