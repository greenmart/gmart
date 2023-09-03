/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {
	// Breakpoints.
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window), $body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function() {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Off-Canvas Navigation.

		// Navigation Panel.
		$(
			'<div id="navPanel">' +
				$('#nav').html() +
				'<a href="#navPanel" class="close"></a>' +
			'</div>'
		)
		.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left'
		});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
			$('#navPanel')
				.css('transition', 'none');

		$(function(){
			$('#agriculture').click(function(){
				$('html,body').animate({scrollTop: $('#page01').offset().top},400);
			});
		});

		$(function(){
			$('#life').click(function(){
				$('html,body').animate({scrollTop: $('#page02').offset().top},800);
			});
		});

		$(function(){
			$('#idea').click(function(){
				$('html,body').animate({scrollTop: $('#page03').offset().top},800);
			});
		});

		$(function(){
			$($('#spttabs button').eq(0).addClass('active').find('a').attr('href')).show();
		});
		
		$(function(){
			$('#spttabs button').click(function(){
				$($(this).find('a').attr('href')).show().siblings('.tabcontent').hide();
				$(this).addClass('active').siblings('.active').removeClass('active');;
			});
		});
		
		$(function(){
			$($('#diytabs button').eq(0).addClass('active').find('a').attr('href')).show();
		});
		
		$(function(){
			$('#diytabs button').click(function(){
				$($(this).find('a').attr('href')).show().siblings('.tabcontent').hide();
				$(this).addClass('active').siblings('.active').removeClass('active');
			});
		});
		
		$(function(){
			$($('#partabs button').eq(0).addClass('active').find('a').attr('href')).show();
		});
		
		$(function(){
			$('#partabs button').click(function(){
				$($(this).find('a').attr('href')).show().siblings('.tabcontent').hide();
				$(this).addClass('active').siblings('.active').removeClass('active');
			});
		});

		$(function(){
			$("#gotop").click(function(){
				jQuery("html,body").animate({
					scrollTop:0
				},1000);
			});
			$(window).scroll(function() {
				if ( $(this).scrollTop() > 300){
					$('#gotop').fadeIn("fast");
				} else {
					$('#gotop').stop().fadeOut("fast");
				}
			});
		});
	});

})(jQuery);

/* Tab Panel function */
function showTab(evt, cityName) {
	// Declare all variables
	var ii, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (ii = 0; ii < tabcontent.length; ii++) {
		tabcontent[ii].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (ii = 0; ii < tablinks.length; ii++) {
		tablinks[ii].className = tablinks[ii].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
