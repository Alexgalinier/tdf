/**
 * @copyright http://stackoverflow.com/questions/17138244/how-to-display-selected-image-without-sending-data-to-server
 */

function showImage(src,target) {
    var fr=new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function(e) { target.src = this.result; };
    $(src).on("change",function() {
        // fill fr with image data
        fr.readAsDataURL(src.files[0]);

        //hide input file
        $(src).hide();

        //add cross to remove image
        var removeButton= $('<input type="button" value="&#10006;" id="remove-picture-button"/>');
        $(target).after(removeButton);

        // add listener to the remove button
        $(removeButton).on("click",function() {
            $(this).closest('td').html('<input id="input-choose-picture" type="file"><img id="input-show-picture"/>');
            updatePicture(src,target);
        });
    });
}
