$(function(){

	validateForm();

})

function runValidation(){

	$('input').each(function(){
		$(this).trigger('blur');
	})

	$('.btn-group').each(function(){
		if($('.selected-rating', this).length === 0){
			$(this).addClass('incomplete');
			if($(this).next('small').length === 0){
				$(this).after('<small class="error">Please choose a rating</small>')
			}
		}else{
			$(this).removeClass('incomplete');
			$(this).next('small').remove();
		}
	});
}

function validateForm(){
	//validate review period
	$('#review_period_from').on("blur", function(){
		var value = $(this).val();
		var isNum = /^\d+$/.test(value);
		var length = value.length;
		if(length !== 4 || !isNum){
			$(this).addClass('incomplete');
			if($('#review_period_from + small').length === 0){
				$(this).after('<small class="error">Required format yyyy</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#review_period_from + small').remove();
		}	
	});

	$('#review_period_to').on("blur", function(){
		var value = $(this).val();
		var isNum = /^\d+$/.test(value);
		var length = value.length;
		if(length !== 4 || !isNum){
			$(this).addClass('incomplete');
			if($('#review_period_to + small').length === 0){
				$(this).after('<small class="error">Required format yyyy</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#review_period_to + small').remove();
		}	
	});

	// validate name
	$('#employee_name').on('blur', function(){
		var value = $(this).val();
		var isLetters = /^[a-zA-Z .]+$/.test(value);
		var length = value.length;
		if(typeof value === 'undefined' || !isLetters || length < 1){
			$(this).addClass('incomplete');
			if($('#employee_name + small').length === 0){
				$(this).after('<small class="error">Please enter a valid name.</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#employee_name + small').remove();
		}
	});

	// validate title
	$('#employee_title').on('blur', function(){
		var value = $(this).val();
		var isDigits = /^\d+$/.test(value);
		var length = value.length;
		if(typeof value === 'undefined' || isDigits || length < 2){
			$(this).addClass('incomplete');
			if($('#employee_title + small').length === 0){
				$(this).after('<small class="error">Please enter a valid title</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#employee_title + small').remove();
		}
	});

	// validate employee id
	$('#employee_id').on('blur', function(){
		var value = $(this).val();
		var isDigits = /^\d+$/.test(value);
		var length = value.length;
		if(typeof value === 'undefined' || !isDigits || length !== 10){
			$(this).addClass('incomplete');
			if($('#employee_id + small').length === 0){
				$(this).after('<small class="error">Please enter a valid id</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#employee_id + small').remove();
		}
	});

	// validate job code
	$('#job_code').on('blur', function(){
		var value = $(this).val();
		var isDigits = /^\d+$/.test(value);
		var length = value.length;
		if(typeof value === 'undefined' || !isDigits || length !== 5){
			$(this).addClass('incomplete');
			if($('#job_code + small').length === 0){
				$(this).after('<small class="error">Please enter a valid job code</small>');
			}
		}else{
			$(this).removeClass('incomplete');
			$('#job_code + small').remove();
		}
	});

	// validate text areas for job functions, dev plans and projects
	$('#essential-job-functions-container, #projects-container').on('blur', 'textarea[placeholder*="Standard"], textarea[placeholder*="Essential"], textarea[placeholder*="Special"]', function(evt){
		if($(this).val().length === 0){
			$(this).addClass('incomplete');
			if($(this).next('small').length === 0){
				$(this).after('<small class="error">Please fill in the field</small>')
			}
		}else{
			$(this).removeClass('incomplete');
			$(this).next('small').remove();
		}
	});

	// validate fields for development plans
	$("#development-plans-container").on('blur', 'textarea', function(){
		if($(this).val().length === 0){
			$(this).addClass('incomplete');
			if($(this).next('small').length === 0){
				$(this).after('<small class="error">Please fill in the field</small>')
			}
		}else{
			$(this).removeClass('incomplete');
			$(this).next('small').remove();
		}
	});

	//validate calenders for functions, projects and dev plans
	// $('#projects-container, #development-plans-container').on('blur', '.date-picker', function(){
	// 	if($(this).val().length === 0){
	// 		$(this).addClass('incomplete');
	// 		if($(this).next('small').length === 0){
	// 			$(this).after('<small class="error">Please choose a date</small>')
	// 		}
	// 	}else{
	// 		$(this).removeClass('incomplete');
	// 		$(this).next('small').remove();
	// 	}
	// });

	// validate attributes and comments for projects and job functions
	$('#essential-job-functions-container, #projects-container').on('blur', '.btn-group',function(){
		console.log($('.selected-rating', this));
		if($('.selected-rating', this).length === 1 && ($('.selected-rating', this).val() === "O" || $('.selected-rating', this).val() === "I") && $(this).parent().parent().find('textarea[placeholder*="Comments"]').val().length === 0){
			$(this).parent().parent().find('textarea[placeholder*="Comments"]').addClass('incomplete');
			if($(this).parent().parent().find('textarea[placeholder*="Comments"]').next('small').length === 0){
				$(this).parent().parent().find('textarea[placeholder*="Comments"]').after('<small class="error">Comments are required for a rating of "O" or "I"</small>');
			}
		}else{
			$(this).parent().parent().find('textarea[placeholder*="Comments"]').removeClass('incomplete');
			$(this).parent().parent().find('textarea[placeholder*="Comments"]').next('small').remove();
		}
	});

	// check comment text field on blur as well
	$('#essential-job-functions-container, #projects-container').on('blur', 'textarea[placeholder*="Comments"]', function(){
		console.log(this);
		parent = $(this).parent().parent();
		console.log(parent);
		if($('.selected-rating', parent).length !== 0){
			console.log("has rating");
			$ratingBtn = $('.selected-rating', parent);
			if(($ratingBtn.val() === 'O' || $ratingBtn.val() === 'I') && ($(this).val().length !== 0)){
				$(this).removeClass('incomplete');
				$(this).next('small').remove();
			}else if($ratingBtn.val() !== 'SP' || $ratingBtn.val() !== 'SP-' || $ratingBtn.val() !== 'SP+'){
				$(this).addClass('incomplete');
				$(this).after('<small class="error">Comments are required for a rating of "O" or "I"</small>');
			}
		}
	});


	//validate attributes and supervisors only sections
	$('#attributes-container, #supervisor-attributes-container').on('click', '.btn-group',function(){
		if($('.selected-rating', this).length === 1 && ($('.selected-rating', this).val() === "O" || $('.selected-rating', this).val() === "I") && $(this).parent().parent().find('textarea').val().length === 0){
			$(this).parent().parent().find('textarea').addClass('incomplete');
			if($(this).parent().parent().find('textarea').next('small').length === 0){
				$(this).parent().parent().find('textarea').after('<small class="error">Comments are required for a rating of "O" or "I"</small>');
			}
		}else{
			$(this).parent().parent().find('textarea').removeClass('incomplete')
			$(this).parent().parent().find('textarea').next('small').remove();
		}
	});

	//to double check after they enter a comment
	$('#attributes-container, #supervisor-attributes-container').on('blur', 'textarea', function(){
		var btnGroup = $(this).parent().parent().find('.btn-group');
		if(($('.selected-rating', btnGroup).val() === "O" || $('.selected-rating', btnGroup).val() === "I") && $(this).val().length === 0){
			$(this).addClass('incomplete');
			if($(this).next('small').length === 0){
				$(this).after('<small class="error">Comments are required for a rating of "O" or "I"</small>');
			}
		}else{
			$(this).removeClass('incomplete')
			$(this).next('small').remove();

		}
	});

	$('#overall-rating-section').on('blur', 'textarea', function(){
		if($(this).val().length === 0){
			$(this).addClass('incomplete');
			if($(this).next('small').length === 0){
				$(this).after('<small class="error">Overall rating comments are required</small>');
			}
		}else{
			$(this).removeClass('incomplete')
			$(this).next('small').remove();

		}
	})

	// // validate button groups
	// $('.rating-btn').on('click', function(){
	// 	console.log(this);
	// 	var parent = $(this).parent('.btn-group');
	// 	console.log(parent);
	// 	if($('.selected-rating', parent).length === 0){
	// 		parent.addClass('incomplete');
	// 		if(parent.next('small').length === 0){
	// 			parent.after('<small class="error">Please choose a rating</small>')
	// 		}
	// 	}else{
	// 		parent.removeClass('incomplete');
	// 		parent.next('small').remove();
	// 	}
	// });
}