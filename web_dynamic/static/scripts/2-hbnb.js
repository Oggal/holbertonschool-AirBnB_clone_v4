#!/usr/bin/node
// Execute only when DOM is loaded
// Listen for changes on each input checkbox tag:
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked

const api_URL = 'http://' + window.location.hostname + ':5001/';
window.onload = function() {
  // Create empty object to store amenities
  let checkedAmenities = {};

  // Listen for changes on each input checkbox
  $('input[type="checkbox"]').on('change', function() {
    console.log("POP!")
    console.log($(this).data('id'));
    let myID = $(this).data('id');
    let myName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities[myID] = myName;
    } else {
      if (checkedAmenities[myID]) {
      delete checkedAmenities[myID];}
    }

    let amenitiyList = Object.values(checkedAmenities).join(', ');
    $('.amenities h4').text(amenitiyList);
  });
};

// Get status from API. If OK, add Class 'available', if not, remove Class 'available'
$(function () {
  $.get(API_URL + 'api/v1/status', function(data) {
    const apiStatusDiv = $('#api_status');
    if (data.status === 'OK') {
      apiStatusDiv.addClass('available');
    } else {
      apiStatusDiv.removeClass('available');
    }
  });
});

