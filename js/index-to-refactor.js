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

$('#button-export').click(function () {
	var jsonData = getJsonDataFromHtml();
	exportToJsonFile(jsonData, getCharacterName());
});

$('#button-import').click(function () {
	getJsonContentFromFileSelector();
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
	showImage(document.getElementById("input-choose-picture"),document.getElementById("input-show-picture"));
}

/**
 * @returns JSON Object containing the html values of the Sheet
 */
function getJsonDataFromHtml(){
	//TODO : Gérer divs damage wounds injuries

	// All inputs which have an id not empty and are not of type 'button' or type 'file'
	var inputsToSave = document.querySelectorAll('[id]:not([type="button"]):not([type="file"]):not([id=""]):not([id="div-container"]):not([id="damage"]):not([id="wounds"]):not([id="injuries"])');
	var jsonArr = [];
	var i = 0;

	// For every inputs push the properties which will be saved
	for (i; i < inputsToSave.length; ++i) {
		jsonArr.push({
			id: inputsToSave[i].id,
			value: inputsToSave[i].value,
			tabIndex: inputsToSave[i].tabIndex,
			className: inputsToSave[i].className,
			innerText: inputsToSave[i].innerText
		});
	}

	return JSON.stringify(jsonArr);
}

function getJsonContentFromFileSelector(){
	var file = document.getElementById("file-import").files[0];
	console.log(file);
	if (file) {
		var reader = new FileReader();
		reader.readAsText(file, "UTF-8");
		reader.onload = function (evt) {

			var fileObject = evt.target.result;

			// implement toJSON() behavior
			fileObject.toJSON = function() { return {
				'lastModified'     : evt.target.result.lastModified,
				'lastModifiedDate' : evt.target.result.lastModifiedDate,
				'name'             : evt.target.result.name,
				'size'             : evt.target.result.size,
				'type'             : evt.target.result.type
			};};

			importJsonContentToHtml(JSON.stringify(fileObject));
		};
		reader.onerror = function (evt) {
			alert("error reading file");
		};
	}
}

/**
 * @param JSON jsonData
 * @param String characterName
 */
function exportToJsonFile(jsonData, characterName) {

	let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(jsonData);
	let linkElement = document.createElement('a');
	let exportFileName;

	if (!characterName) {
		exportFileName = "data.json";
	}
	else{
		exportFileName = characterName+".json";
	}
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileName);
	linkElement.click();
}

/**
 * @param jsonData
 */
function importJsonContentToHtml(jsonData) {
	//needs double parse see https://stackoverflow.com/questions/42494823/json-parse-returns-string-instead-of-object
	$.each(JSON.parse(JSON.parse(jsonData)), function(idx, obj) {
		if(obj.value) {
			$("#" + obj.id).val(obj.value);
		}
		if(obj.innerText) {
			$("#" + obj.id).html(obj.innerText);
		}
	});
}

/**
 * @returns String character name or "" if character name is not filled
 */
function getCharacterName(){
	return document.getElementById('character-name').innerText;
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