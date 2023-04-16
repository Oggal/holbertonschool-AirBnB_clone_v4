#!/usr/bin/node
// Execute only when DOM is loaded
// Listen for changes on each input checkbox tag:
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked

window.onload = function() {
  // Create empty object to store amenities
  let checkedAmenities = {};

  // Listen for changes on each input checkbox
  $('input[type="checkbox"]').on('change', function() {
    if ($(this).is(':checked')) {
      checkedAmenities=[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }

    let amenitiyList = Object.values(checkedAmenities).join(', ');
    $('.amenities h4').text(amenitiyList);
  });
};
