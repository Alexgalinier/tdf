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
	calculateDamage : function (qualityId) {
		var degats = 0;

		if(qualityId)
		{
			var quality = _.find(Data.get('qualities'), (o) => o.id == qualityId);
			degats = quality.bonus.deg;
		}

		if(this.associatedComp.length === 0) {
			return degats;
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

	getAttribute : function (qualityId) {
		var attribute = this.attributs.label;
		if(qualityId)
		{
			var quality = _.find(Data.get('qualities'), (o) => o.id == qualityId);
			attribute = quality.calculateAttribute(this.id);
		}
		return attribute;
	},

	hasPerforanteAttribute : function () {
		return this.attributs.isPerf === true;
	}

};