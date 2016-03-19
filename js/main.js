$(document).ready(function(){
	$(".button").on("click", function(e){
		e.preventDefault();
		showThumbnailList(this);
	});

});


var showThumbnailList = function(item){
	var clickedItem = item;	
	var classToShow = $(clickedItem).data("target");

	$(".thumbnailList").removeClass("visible");	
	$("." + classToShow).addClass("visible");
};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fadeDuration': 100,
      "positionFromTop": 400,
      "showImageNumberLabel": false
    });