$(function () {
	$(window).scroll(function() {
	    $(' .my_skills_title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.coding').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+250) {
	            $(this).addClass("animate__backInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.design').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+250) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.footer_logo').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+250) {
	            $(this).addClass("animate__backInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.footer_social').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+250) {
	            $(this).addClass("animate__backInUp");
	        }
	    });
	});
})