$(document).ready(function(){

    // Associate all events for comboboxes elements
    $('.combobox').each(function() {
        var elem = $(this);

        // Save current value of element
        elem.data('oldVal', elem.val());

        // When focusing in a combobox we clear the actual content
        // because if we don't it is impossible to get all the values of the datalist
        elem.on("focusin", clearComboBox);

        // Look for changes in the value
        elem.bind("propertychange change click keyup input paste", function(event){
            // If value has changed...
            if (elem.data('oldVal') != elem.val()) {
                if(elem.hasClass('combobox--armors')) {
                    updateArmor();
                }
                else if(elem.hasClass('combobox--weapons')) {
                    updateWeapon();
                }
                else if(elem.hasClass('combobox--qualities')) {
                    updateQualitie();
                }
            }
        });
    });

});

function clearComboBox(input)
{
    input.currentTarget.value = '';
}

function updateArmor(input)
{
    //TODO implement update armor
}

function updateWeapon(input)
{
    //TODO implement update weapon
}

function updateQualitie(input)
{
    //TODO implement update qualitie
}

