/*replace wgm text to past-tense once the deed is done*/
	today = new Date();
	wedding = new Date("2014/09/13 18:30:00");
	if(today > wedding){
		$("#wgm").text("We got married!");
		$("#celebrate").text("Thanks for celebrating with us!");
	}
/*replace wgm text to past-tense once the deed is done*/
/*hide nav on click*/
	$('.navbar li a').not('.dropdown-toggle').click(function(){
		$('.navbar-collapse').collapse('hide');
	});
/*hide nav on click*/
/*initialize countdown timer*/	
	//$('.countdown').countdown({until: new Date("2014-09-13 6:30:00 PM CDT"), format: 'dHM'}); //local time, not cross-compatible
	//$('.countdown').countdown({until: new Date("2014/09/13 18:30:00"), format: 'dHM'}); //local time, IE and webkit can read this format
	if(today > wedding){
		console.log(today);
		$('.countdown').countdown({since: new Date("2014/09/13 18:30:00"), format: 'dHM'}); //local time, IE and webkit can read this format
	}else{
		console.log(today);
		$('.countdown').countdown({until: new Date("2014/09/13 18:30:00"), format: 'dHM'}); //local time, IE and webkit can read this format
	}
/*initialize countdown timer*/	
/*initialize scrollspy*/	
	$('body').scrollspy({ target: '.navbar-default' })
/*initialize scrollspy*/		
/*hide nav on click*/
	var $root = $('html, body');
	$('a').click(function() {
	var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});

	return false;
	});
/*hide nav on click*/
/*ajax form submit*/
	$("#rsvp-form").submit(function() {
	  event.preventDefault();
	    var formdata = $( this ).serialize();
		//console.log(formdata);
		var url = "rsvp.php"; // the script where you handle the form input.
		    $.ajax({
		           type: "GET",
		           url: url,
		           data: formdata,
		           success: function(data)
	           {
        	       console.log(data); // show response from the php script.
				   $("#rsvp-submit").addClass("btn-success").text("Thank you, " + $('#rsvp-firstname input').val() + '!');
	           }
         });
		
	});
/*ajax form submit*/
/*rsvp validation*/
   $('.form-control').blur(function(e) {
   	if ($.trim($(this).val()).length == 0) {
   		$(this).parent().addClass("has-error");
   	}else{
	   	$(this).parent().removeClass("has-error");
   	}
   	if($(this).attr("name") == "email"){
   		var sEmail = $(this).val();
	        /*
	        if ($.trim(sEmail).length == 0) {
	            $('#rsvp-email').addClass("has-error");
	            e.preventDefault();
	        }
	        */
	        if (validateEmail(sEmail)) {
			$('#rsvp-email').removeClass("has-error");
	        }
	        else {
			$('#rsvp-email').addClass("has-error");
	            e.preventDefault();
	        }
   	}
   	var error = false;
   	$("#rsvp-form .form-control").each(function(){
		if($(this).parent().hasClass("has-error")== true){
			error = true;
		}
		if(error == true){
			$("#rsvp-submit").attr("disabled", true).addClass("btn-danger");
		}else{
			$("#rsvp-submit").removeAttr("disabled").removeClass("btn-danger");
		}
	});
   });
   $('#rsvp-email input').blur(function(e) {
        
    });

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
       return true;
    }
    else {
        return false;
    }
}
/*rsvp validation*/