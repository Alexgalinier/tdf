//Fill defauts select box
$(".defaut-select").each(function() {
	var defauts = Data.get('defauts');
	var elem = $(this);

	elem.on("change", updateFromDefaut);

	// Add empty first option
	elem.append($("<option></option>").attr("value", "").text(""));

	defauts.forEach(function(defaut) {
		elem.append(
			$("<option></option>").attr("value", defaut.id).attr("title", defaut.title).text(defaut.name)
		);
	})
});

function updateFromDefaut(){
	var defaut = _.find(Data.get('defauts'), (o) => o.id == this.value);

	if (defaut) {
		$(this)
			.closest('td')
			.next('td').html(defaut.title)
	}
	else{
		$(this)
			.closest('td')
			.next('td').html('')
	}
}