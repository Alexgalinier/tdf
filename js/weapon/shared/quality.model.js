function Quality(data) {
	AbstractModel.call(this, data)
}

Quality.create = AbstractModel.create;
Quality.prototype = {
	// Any calc method

	// Calculate the damages based on the weapon
	calculateDamage : function (weaponId) {
		var weapon = _.find(Data.get('weapons'), (o) => o.id == weaponId);
		var degats = weapon.calculateDamage();

		if(this.bonus.deg > 0)
		{
			degats += this.bonus.deg;
		}

		return degats;
	},

	calculateAttribute : function (weaponId) {
		var weapon = _.find(Data.get('weapons'), (o) => o.id == weaponId);
		var attributes = weapon.getAttribute();

		// If weapon is perforante we modify Perf. attribute
		if(weapon.hasPerforanteAttribute())
		{
			var position = attributes.indexOf('Perf.');
			var bonusPerfPosition = position+6; // Perf. + space = 6 chars
			var bonusPerfCurrent = Number(attributes.charAt(bonusPerfPosition));
			var bonusFinal = bonusPerfCurrent+this.bonus.perf;
			attributes = attributes.substr(0, bonusPerfPosition) + bonusFinal + attributes.substr(bonusPerfPosition + 1);
		}
		// If weapon is not perforante but quality has Perf. bonus, we add it
		else if(this.bonus.perf > 0)
		{
			attributes += ", Perf. "+this.bonus.perf;
		}

		// In any case we add the quality bonus attribute if there is
		if(this.bonus.attribute) {
			attributes += ", " + this.bonus.attribute;
		}

		return attributes;
	}
};