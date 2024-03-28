For this lab, you will:

Create a new HTML file separate from previous labs. The page should contain as many page elements as you need to produce the required output for your theme.
Your page must use the same theme as your previous labs. Please describe your theme in an HTML comment. Each requirement must reflect your chosen theme.
Encapsulate your code using a function to ensure that the DOM has loaded before your code runs.  The textbook suggests using $(document).ready but it is depricated.
$(function(){
   // your code here
});
Include the Google-hosted jQuery library before your JS file in your HTML.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
Demonstrate a jQuery selection of multiple page elements by tag name or class name with a single jQuery selection. Filtering the selection is not necessary, but the selection must return multiple page elements. Consider converting a previous JavaScript getElementsByTagName() or getElementsByClassName() with jQuery.
Demonstrate a jQuery selection of a single page element by ID. Consider converting a previous JavaScript getElementById() with jQuery.
Demonstrate a filtered jQuery selection by tag name or class name. Filtering the selection is necessary. After the filter, the selection could return multiple page elements or just one. A filtered selection often uses a colon followed by the filter name. [:first :even :odd]
For each of the selections in requirements 5-7, use a jQuery method to change the content of the selection. Acceptable changes would be:
change the content
change the formatting (color, font, or size)
add a class
remove a class
animation
any method listed in chapter 7 of the textbook - as long as it produces visible results on the page.
Use the .each() method to loop through a jQuery selection of multiple page elements.
Use $(this) inside the .each() loop with a jQuery method to create visible results on the page.
Use jQuery chaining to perform at least three methods on a single jQuery selection.
Use the .html() method either change or retrieve page content.
Use the .text() method either change or retrieve page content.
Add at least one element to the page using .before() .prepend() .append() or .after().
Use two jQuery methods [ .attr() .removeAttr() .addClass() .removeClass() ] to change the attribute values of at least two different page elements.
Use the .css() method to either change or retrieve the color of a page element.
Use the .on() method to register at least three events using jQuery.
Example: Hover over me to change my color!
Use the Event Object with a jQuery event registration to create an event that responds differently depending on which page element was clicked.
Use at least three jQuery Effects methods to enhance your page with transitions and movement.
Use at least two jQuery methods to traverse the DOM to access a parent or sibling node of a previous selection. [ .find() .closest() .parent() .children() .next() .prev() ] Use jQuery methods to make changes to the selections.
Create at least two jQuery selections that use form element selectors. [:button :checkbox :checked :disabled :focus :image :radio :selected :submit :text ] Use the selections to either make changes to the page elements or send their values to an output area on the page. Note: Your page must have a form to use form element selectors.
Use a jQuery method to remove an element from the page.
Use a jQuery plugin to add functionality to your page. be sure to use something that creates a noticeable change to your page.
Suggested plugins:
jQuery UI DatePickerLinks to an external site.
jQuery UI Fold EffectLinks to an external site.
jQuery UI AutocompleteLinks to an external site.
Check the JS Console for errors in your code.
Notes:

All HTML should validateLinks to an external site..
All CSS should validateLinks to an external site..
Use the JS Console to check for errors in your code. If your page crashes, there will be a 50% penalty.
Each file must contain a header block comment.
All CSS and JavaScript must be stored in external files.
Be sure that the page has finished loading before using JavaScript or jQuery to access page elements.
Be sure that the jQuery library is loaded before attempting to use jQuery.
Be sure that plugin libraries are loaded after the jQuery library and before the code that calls the plugin.
All page output must be labelled clearly on the page. For example:
Results of Adding a Class: The class makes text change to red.
Filtered Selection by Tag Name: Only the even-numbered list items will turn green.
All requirements listed in the rubric below must be labelled clearly with comments in the JavaScript file. For example:
$('p').each( function()  {             // Req 10: Use the .each() method to loop through a jQuery selection.
$('p').addClass('redText');         // Req 8: Add a class to a selection
All output requirements must produce visible results on the page
A page element cannot be "changed" to its original value. The new value must be different from the original one.

https://plugins.jquery.com/ui.autocomplete <---link to the plugin
