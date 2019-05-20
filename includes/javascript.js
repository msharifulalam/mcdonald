//**********************************************************************************************************************
/**
* COMPANY: Zipline Interactive
* EMAIL: info@gozipline.com
* PHONE: 509-321-2849
* DESCRIPTION: This document contains programming required for the website templates.  Requires the jQuery library.
*/
//***********************************************************************************************************************


//***********************************************************************************************************************
//ON DOCUMENT READY FUNCTIONS
//***********************************************************************************************************************
(function () {

/* owl-family */
$('.owl-carousel-family').owlCarousel({
    loop:true,
    margin:10,
    items: 3,
	navigation: true,
	pagination: false,
    itemsDesktop      : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsTablet       : [768,2],
	itemsMobile       : [479,1],
	navigationText: ['<i class="fa fa-angle-left">', '</i><i class="fa fa-angle-right"></i>'],
});
/* owl-family */

/** MOBILE MENU PLUGIN **/
var $mobileBar	= $('.mobile-bar > a'),
	$menuArea	= $('.mobile-menu'), 
	$mob 		= $('.mobile-menu > ul > li'),
	$mod		= $('.sub-menu'),
	$supSub		= $('.super-sub'),
	$modCur		= $mod.children('li');

$menuArea.hide();
$mobileBar.on('click', function(e){
	$(this).find('i').toggleClass('fa-bars fa-remove');
	$menuArea.slideToggle().next('.head-bottom-contents').toggleClass('invisible');
	e.preventDefault();
});

$mob.each(function(){
	if($(this).has('ul')){
		$(this).find('ul').siblings('a').wrapInner('<span class="spant"></span>');
	}
});

$mod.hide();
$supSub.hide();
$mob.children('a').on('click', function(e){
	var $this = $(this);
	if($this.siblings('ul').length){
		$this.siblings('ul').slideToggle();
		e.preventDefault();
	}
});

$modCur.children('a').on('click', function(event){
	var $this = $(this);
	if($this.siblings('ul').length){
		$this.parent('li').toggleClass('sup');
		$this.siblings('ul').slideToggle();
		event.preventDefault();
	}
});
/** MOBILE MENU PLUGIN **/
/* MEGA MENU */
var megaWidth 	= $('.mega-menu').width(),
	megaUl		= $('.mega-menu > ul').width(),
	constWidth	= (megaWidth - megaUl),
	subMega		= $('.sup-mega-menu');
// alert(megaWidth);
$(window).on('resize', function(){
	subMega.css('width', constWidth + 'px');
}).resize();

/* MEGA MENU */

// OWL VERSION 2
var sync1 = $("#sync1");
var sync2 = $("#sync2");
 
sync1.owlCarousel({
	singleItem : true,
	slideSpeed : 1000,
	pagination:false,
    loop: true,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
});
 
sync2.owlCarousel({
	items : 5,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall : [979,4],
    itemsTablet       : [768,4],
    itemsMobile       : [767,3],
    pagination:false,
	navigation: true,
	margin: 10,
	loop: false,
	navigationText: ["<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"],
    loop: true,
    responsiveRefreshRate : 200,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
});
 
function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
    	.find(".owl-item")
    	.removeClass("synced")
    	.eq(current)
    	.addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
    	center(current)
    }
}
 
$("#sync2").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).data("owlItem");
	sync1.trigger("owl.goTo",number);
});
 
function center(number){
	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	var num = number;
	var found = false;
	for(var i in sync2visible){
		if(num === sync2visible[i]){
        	var found = true;
		}
	}
 
    if(found===false){
      	if(num>sync2visible[sync2visible.length-1]){
        	sync2.trigger("owl.goTo", num - sync2visible.length+2)
      	}else{
        	if(num - 1 === -1){
          		num = 0;
        	}
        	sync2.trigger("owl.goTo", num);
      	}
    }else if(num === sync2visible[sync2visible.length-1]){
    	sync2.trigger("owl.goTo", sync2visible[1])
    }else if(num === sync2visible[0]){
    	sync2.trigger("owl.goTo", num-1)
    }
    
}
// OWL VERSION 2

/* pagination */
$('.pagi-menu li:first-child').addClass('previus'); 
$('.pagi-menu li:last-child').addClass('nexts');
$('.gapft > a').removeAttr('href');
$('.currentpg > a').removeAttr('href');
/* pagination */ 


})();