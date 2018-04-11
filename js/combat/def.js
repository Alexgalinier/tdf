function updateDefCombat() {
  var agi = v("agility"),
    athl = v("athl"),
    vig = v("vig"),
    armorMalus = toInt($("#malus-armure").html().replace("&nbsp;", "")),
    defBonus = 0;

  $('.weapon-select').each(function (index, weapon) {
    Data.get('weapons').filter(function(_) {
      if (_.id === toInt($(weapon).val()) && _.bonusDef) {
        defBonus = _.bonusDef;
      }
    });
  });

  $('#def-combat').html(agi + athl + vig - armorMalus + defBonus);
}