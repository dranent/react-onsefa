/*---------------------------------------------------------------

	PC SP 共通設定

---------------------------------------------------------------*/
$(function () {
	/*contents common*/
	/*---------------------------------------------------------------
		tel
  ---------------------------------------------------------------*/
	var telnum = "0667868681";
	$('.callbtn').each(function () {
		var str = $(this).html();
		$(this).html('<a href="tel:' + telnum + '">' + str + '</a>');
		//goog
		//$(this).html('<a href="javascript:void(0)" class="noScroll" onClick="gtag_report_conversion(\'tel:' + telnum + '\'); yahoo_report_conversion(\'tel:' + telnum + '\');return false;">' + str + '</a>');
		//goog yahoo new
		//$(this).html('<a href="tel:' + telnum + '" class="noScroll" onClick="yahoo_report_conversion(undefined); goog_report_conversion(\'tel:' + telnum + '\'); return false;">' + str + '</a>');
	});

/*---------------------------------------------------------------
	drawer menu
---------------------------------------------------------------*/
	var state = false;
	var scrollpos;
	var drawerMenu = $('.drawer-menu');
	var drawerBack = $('.drawer-menu_back');
	var drawerButton = $('.drawer-menu-button');
	var clickObj = $('.drawer-menu-button,.drawer-menu_back,.drawer-menu a, .drawer-close');
	clickObj.on('click', function(){
		drawerMenu.scrollTop(0);

		if(state === false) {
			scrollpos = $(window).scrollTop();
			$('body').addClass('body-fixed').css({'top': -scrollpos});
			drawerMenu.addClass('open');
			drawerBack.addClass('open');
			drawerButton.addClass('is-close');
			state = true;
		} else {
			$('body').removeClass('body-fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			drawerMenu.removeClass('open');
			drawerBack.removeClass('open');
			drawerButton.removeClass('is-close');
			state = false;
		}
	});
	$(".drawer-menu_list_child .is-button").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass('is-close');
	});

	/*---------------------------------------------------------------
		scrolltop
	---------------------------------------------------------------*/
	$(window).on('load scroll.is-scroll-show', function () {
		var winTop = $(this).scrollTop();
		var obj = $('.footer-fixed-button,.pagetop');
		if (winTop >= 200) {
			obj.addClass('is-show');
		} else {
			obj.removeClass('is-show');
		}
	});
  /*---------------------------------------------------------------
		popup
	---------------------------------------------------------------*/
  $('.popup-line').addClass('is-show');
  $('.popup-line .close-button').on("click", function() {
    $(this).parent().remove();
	});
	/*---------------------------------------------------------------
		accordion
	---------------------------------------------------------------*/
	$(".js-accordion_button").on("click", function() {
		$(this).next().slideToggle();
		$('.icon-slide',this).toggleClass('is-close');
	});
  $(".p-emergency-info_title").on("click", function() {
		$(this).next().slideToggle();
		$('.icon-slide',this).toggleClass('is-close');
	});

	/*---------------------------------------------------------------
		tab
	---------------------------------------------------------------*/
	$(".tab_label").on("click",function(){
		var $th = $(this).index();
		$(".tab_label").removeClass("is-active");
		$(".tab_panel").removeClass("is-active");
		$(this).addClass("is-active");
		$(".tab_panel").eq($th).addClass("is-active");
	});
  /*---------------------------------------------------------------
		more button
	---------------------------------------------------------------*/
  $('.js-more-button').prev().hide();
  $('.js-more-button').on("click", function() {
    if ($(this).prev().is(':hidden')) {
      $(this).prev().slideDown();
      $("span",this).text('×症例写真を閉じる').addClass('is-close');
    } else {
      $(this).prev().slideUp();
      $("span",this).text('症例写真をもっと見る').removeClass('is-close');
    }
  });
});
/*---------------------------------------------------------------

	PC SP 個別設定

---------------------------------------------------------------*/
//breakboint.js
$(function () {
	$(window).setBreakpoints({
		distinct: true,
		breakpoints: [1, 768]
	});
	/*---------------------------------------------------------------
		PC
	---------------------------------------------------------------*/
	$(window).bind('enterBreakpoint768', function () {
		$('.sp-img').each(function () {
			$(this).attr('src', $(this).attr('src').replace('_sp', '_pc'));
		});
		/*$('.footer-fix-button').hide();
		$(window).off('scroll.is-scroll');*/
		//pageScroll
		pageScroll(0);
	});
	/*---------------------------------------------------------------
		SP
	---------------------------------------------------------------*/
	$(window).bind('enterBreakpoint1', function () {
		$('.sp-img').each(function () {
			$(this).attr('src', $(this).attr('src').replace('_pc', '_sp'));
		});
		/*$(window).on('scroll.is-scroll', function () {

		});*/
		//pageScroll
		pageScroll(0);
	});
});

/*---------------------------------------------------------------

	FUNCTION

---------------------------------------------------------------*/
function pageScroll(sclollFix) {
	//var sTop = $("#header").offset().top;
	// ナビの高さを取得
	//var sHeight = $("#header").outerHeight();
	var sHeight = sclollFix;
	$('a[href*="#"],area[href*="#"]').not('.noScroll, .callbtn').click(function (e) {
		//自ページの場合
		var urlStg = window.location.href.split('#'); //url.slice(0)
		var hrefStg = $(this).attr("href").split('#'); //href.slice(0)
    var navId;
		if (urlStg[0].indexOf(hrefStg[0]) !== -1) {
			//デレクトリ名を含むアンカーの場合
			navId = '#' + hrefStg[1];
		} else {
			navId = $(this).attr("href");
		}

		$("html, body").animate({
			scrollTop: ($(navId).offset().top - sHeight) + "px"
		}, 300);
		e.preventDefault();
	});
	//他ページの場合
	var n = window.location.href.split('#');
	var anc = '#' + n[1];
	if ($(anc).length) {
		var pos = $(anc).offset().top - sHeight;
		$('html,body').animate({
			scrollTop: pos + "px"
		}, 'fast');
		return false;
	}
}
