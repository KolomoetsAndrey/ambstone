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

// Isotope
$(document).ready(function() {

	if ($(window).width() <= '991') {
		var initial_items = 3;
	} else {
		var initial_items = 100;
	}

	var next_items = 3;
	var $grid = $('#grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'masonry',
		stamp: '.element-item--static'
	});

	$('.button-group-home').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter: filterValue});
		updateFilterCounts();
	});

	function updateFilterCounts() {
		var itemElems = $grid.isotope('getFilteredItemElements');
		var count_items = $(itemElems).length;
	
		if (count_items > initial_items) {
			$('#showMore').show();
		}
		else {
			$('#showMore').hide();
		}
		if ($('.element-item').hasClass('visible_item')) {
			$('.element-item').removeClass('visible_item');
		}
		var index = 0;

		$(itemElems).each(function () {
			if (index >= initial_items) {
				$(this).addClass('visible_item');
			}
			index++;
		});
		$grid.isotope('layout');
	}

	$('.button-group-home').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});

	function showNextItems(pagination) {
		var itemsMax = $('.visible_item').length;
		var itemsCount = 0;
		$('.visible_item').each(function () {
			if (itemsCount < pagination) {
				$(this).removeClass('visible_item');
				itemsCount++;
			}
		});
		if (itemsCount >= itemsMax) {
			$('#showMore').hide();
		}
		$grid.isotope('layout');
	}

	function hideItems(pagination) {
		var itemsMax = $('.element-item').length;
		var itemsCount = 0;
		$('.element-item').each(function () {
			if (itemsCount >= pagination) {
				$(this).addClass('visible_item');
			}
			itemsCount++;
		});
		if (itemsCount < itemsMax || initial_items >= itemsMax) {
			$('#showMore').hide();
		}
		$grid.isotope('layout');
	}
	$('#showMore').on('click', function (e) {
		e.preventDefault();
		showNextItems(next_items);
	});
	hideItems(initial_items);
});

// Slick
$('.mobile_stages').slick({
	centerMode: false,
	centerPadding: '50px',
	arrows: false,
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				centerMode: true,
				arrows: false,
				centerPadding: '50px',
				slidesToShow: 1
			}
		}, 
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				arrows: false,
				centerPadding: '50px',
				slidesToShow: 1
			}
		}
	]
});

$('.slick').slick({
	centerMode: true,
	arrows: false,
	centerPadding: '150px',
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				centerMode: true,
				arrows: false,
				centerPadding: '50px',
				slidesToShow: 1
			}
		}, 
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				arrows: false,
				centerPadding: '50px',
				slidesToShow: 1
			}
		}
	]
});

// Hmaburger & NavbarMobile
$(document).ready(function() {
	$('.hamburger').click(function() {

		$mobileNav = $('#menu');

		if ($(this).hasClass('open')) {
			$mobileNav.css({"width": "0"});
		}
		else {
			$mobileNav.css({"width": "80%"});
		}

		$(this).toggleClass('open');
	});
});

// Inputs
$(document).ready(function() {
	$('.form_group .name').focus(function() {
		$('.lable_name').css('display', 'block');
	});
	$('.form_group .phone').focus(function() {
		$('.lable_phone').css('display', 'block');
	});
	$('.form_group .email').focus(function() {
		$('.lable_email').css('display', 'block');
	});
	$('.form_group .country').focus(function() {
		$('.lable_country').css('display', 'block');
	});
});
