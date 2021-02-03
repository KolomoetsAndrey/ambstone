// Button
$(document).ready(function() {
    var getSwitch = $('#flexCheckDefault');
    var getBtn = $("#send");

    $("#flexCheckDefault").click(function() {
		if (getSwitch.is(":checked")) {
			getBtn.removeAttr("disabled");
		} else {
			getBtn.attr("disabled", "disabled");
		};
	});
});

// FilterJS
$(document).ready(function() {

	var newSelection = "";
	
	$("#flavor-nav a").click(function(){
	
	    $("#all-flavors").fadeTo(200, 0.10);
	
		$("#flavor-nav a").removeClass("current");
		$(this).addClass("current");
		
		newSelection = $(this).attr("rel");
		
		$(".flavor").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
		
	    $("#all-flavors").fadeTo(600, 1);
		
	});
	
});

// GlideJS
var options = {
    type: 'slider',
    gap: 70,
    perView: 3,
    peek: -window.innerWidth*0.6,
    startAt: 0,
    focusAt: 'center'
}

var instructions = {
	type: 'slider',
    gap: 70,
    perView: 3,
    peek: -window.innerWidth*0.6,
    startAt: 0,
    focusAt: 'center'
}

var glide = new Glide('.glide', options).mount();
var glide = new Glide('.mobile_stages', instructions).mount();
  