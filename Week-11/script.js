/*
TITLE: Lab 4 - jQuery
AUTHOR: Andrew Hage (AH)
CREATE DATE: March 18, 2024
PURPOSE: This lab demonstrates material from chapter 7 of the textbook.
LAST MODIFIED ON: March 27,2024
LAST MODIFIED BY: Andrew Hage(AH)
MODIFICATION HISTORY: Added jQuery plugin function to jQuery file. (AH)
*/

$(document).ready(function() { // 3) Encapsulate your code using a function.

    $(".menu-items li").css('color', 'green'); // 5) Demonstrate a jQuery selection of multiple page elements by tag name or class name with a single jQuery selection. Use a jQuery method to change the content of the selection.

    $("#welcome-message").css('font-size', '24px'); // 6) Demonstrate a jQuery selection of a single page element by ID. Use a jQuery method to change the content of the selection.
                                                    // 12) Use the .css() method to either change or retrieve the color of a page element.
    $(".menu-items li:odd").css('background-color', 'lightgrey').text('Changed Item');  // 7) Demonstrate a filtered jQuery selection by tag name or class. Use a jQuery method to change the content of the selection.

    $(".menu-items li").each(function() { // 9-10) Use the .each() method to loop through a jQuery selection of multiple page elements. Use $(this) with a jQuery method to create visible results on the page.
        $(this).addClass('highlight');
    });

    $("#specials").css('font-size', '20px').addClass('text-large').fadeOut(2000); // 11) Use jQuery chaining to perform at least three methods on a single jQuery selection.
    
    $("#specials").before('<div>Starters</div>').after('<div>Desserts</div>'); // 14) Add at least one element to the page using .before() .prepend() .append() or .after().

    $("form input[type='submit']").addClass('btn-primary').attr('title', 'Click to reserve a table'); // 15) Use jQuery methods to change attributes.

    $("#changeMenuButton").css('background-color', 'blue').text('Update Menu'); // 16) Use the .text() method either change or retrieve page content.

    $("#changeMenuButton").on('click', function() { // 17-18) Use the .on() method to register at least three events using jQuery.
        $(".menu-items li:first").text('Change Menu button was clicked which changed text and text color').css('color', 'orange');
    });

    $("#welcome-message").slideUp(1000).slideDown(1000); // 19) Use at least three jQuery Effects methods to enhance your page with transitions and movement.

    $(".menu-items").find('li').last().addClass('highlight'); // 20) Use at least two jQuery DOM methods to access a parent or sibling node of a previous selection. Use jQuery methods to make changes to the selections.

    $("#reservationName").closest('form').css('background-color', 'lightblue'); // 17) Create at least two jQuery selections that use form element selectors. Use jQuery methods to either make changes to the page elements or send their values to output.

    $(":text").addClass('text-input'); // Add class to all text inputs.

    $(":submit").on('click', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration.
        alert('Reservation Name: ' + $("#reservationName").val());
    });

    $("#specials").on('dblclick', function() {  // 22) Use a jQuery method to remove an element from the page.
        $(this).remove();
    });
    
    $( "#accordion" ).accordion();
});
