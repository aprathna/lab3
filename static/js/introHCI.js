'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript is ruining my life");
		$("testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
		$("#submit").click(updateProject); 
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function updateProject(e) {
   var projectDim = $('#project').val();
   $(projectDim).animate({
      width: $('#width').val()
   });

   var newDesc = $('#description').val();
   $(projectDim + " .project-description").text(newDesc);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log("Num items:" + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).fadeToggle();
       var images = $(containingProject).find(".img");
    $(images).fadeToggle();
    }
}  