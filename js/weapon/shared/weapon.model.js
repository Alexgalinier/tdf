function Weapon(data) {
	AbstractModel.call(this, data)
}

Weapon.create = AbstractModel.create;
Weapon.prototype = {
	// Any calc method

	getSpeciality : function () {
		return this.group;
	},

	// Calculate the damages of the weapon
	getDamage : function () {
		var degats = 0;

		if(this.associatedComp.length === 0) {
			return 0;
		}

		if(this.associatedComp) {
			var degatsCompStr = $("#" + this.associatedComp).val();
			if (degatsCompStr) {
				degats += Number(degatsCompStr);
			}
		}

		if(this.bonusBase >= 0) {
			degats += Number(this.bonusBase);
		}

		if(this.bonusSpe) {
			var degatsSpeStr = $("#" + this.bonusSpe).val();
			if (degatsSpeStr) {
				degats += Number(degatsSpeStr);
			}
		}

		return degats;
	},

	getAttribute : function () {
		return this.attributs;
	}

};