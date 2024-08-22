$(document).ready(function() {
/*
    // ie 8/7 add class

    if (navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/8/)) {
        $('body').addClass('ie-8');
    }
    if (navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/7/)) {
        $('body').addClass('ie-7');
    }

    // top menu .... add wrapper .........................
    $('.top-header #top_nav li a').wrapInner("<span></span>");

    $('.mainmenu-outer #menu ul li .sub-level').addClass('mob-inactive');
    $('.mainmenu-outer #menu ul li span.dd-status').click(function() {
        if ($(this).parent('li').children('.sub-level').hasClass('mob-active')) {
            $('.mainmenu-outer #menu ul li').removeClass('mob-active-wrap');
            $(this).parent('li').children('.sub-level').slideUp(500, function() {
                $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
            });
        } else {
            $('.mainmenu-outer #menu ul li').removeClass('mob-active-wrap');
            $('.mainmenu-outer #menu ul li .sub-level').addClass('mob-inactive');
            $('.mainmenu-outer #menu ul li .sub-level.mob-inactive').hide();
            $(this).parent('li').children('.sub-level').removeClass('mob-inactive');
            $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
            $(this).parent('li').addClass('mob-active-wrap');
            $(this).parent('li').children('.sub-level').slideDown(500, function() {
                $(this).parent('li').children('.sub-level').addClass('mob-active');
            });
        }
    });


// if main link empty.. 
$('.mainmenu-outer #menu .content > ul li').each(function(){
    var menLink = $(this).children('a').attr('href');
    if(menLink ==='/slt/' || menLink === '/' || menLink === ''){
        $(this).children('a').attr('href','#');
    }
});

    $('.mainmenu-outer #menu .content > ul li > a').click(function() {

        if ($(this).attr('href') === '#') {

            if ($(this).parent('li').children('.sub-level').hasClass('mob-active')) {
                $('.mainmenu-outer #menu ul li').removeClass('mob-active-wrap');
                $(this).parent('li').children('.sub-level').slideUp(500, function() {
                    $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
                });
            } else {
                $('.mainmenu-outer #menu ul li').removeClass('mob-active-wrap');
                $('.mainmenu-outer #menu ul li .sub-level').addClass('mob-inactive');
                $('.mainmenu-outer #menu ul li .sub-level.mob-inactive').hide();
                $(this).parent('li').children('.sub-level').removeClass('mob-inactive');
                $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
                $(this).parent('li').addClass('mob-active-wrap');
                $(this).parent('li').children('.sub-level').slideDown(500, function() {
                    $(this).parent('li').children('.sub-level').addClass('mob-active');
                });
            }

        }
    });


*/


//main menu drop down end....... 


//Main Menu Mobile css

/*
    $('.mainmenu-outer #menu .content > ul > li').each(function() {
        if ($(this).children('a.active').text() !== '') {
            $(this).addClass('active');
        }
    });
    $('.mainmenu-outer #menu').hide();
 //   meinmenuAddclas();
    $('.mainmenu-outer #menu .content > ul > li').mouseover(function() {
        if ($('body').hasClass('ie-8') || $('body').hasClass('ie-7')) {
            $('.mainmenu-outer #menu ul div').addClass('hide-link');
            $('.mainmenu-outer #menu ul div').removeClass('display-link');
            $(this).children('.sub-level').removeClass('hide-link');
            $(this).addClass('display-link');
        } else {
            if ($(window).width() > 767) {
                $('.mainmenu-outer #menu ul div').addClass('hide-link');
                $('.mainmenu-outer #menu ul div').removeClass('display-link');
                $(this).children('.sub-level').removeClass('hide-link');
                $(this).addClass('display-link');
                
                $(this).parent().children().removeClass('active-hide');
                if(!$(this).hasClass('active')){
                    $(this).parent().children('.active').addClass('active-hide');
                }
            }
        }

    }).mouseleave(function() {
        $(this).removeClass('display-link');
        $('.mainmenu-outer #menu ul div').removeClass('hide-link');
         $('.mainmenu-outer #menu ul li').removeClass('active-hide');
    });
    // main menu end...

    var mainMenuDefalt = true;
    $('.mainmenu-outer #menu .content > ul > li').each(function() {
        if ($(this).hasClass('active')) {
            mainMenuDefalt = false;
        }
    });
    if (mainMenuDefalt) {
        $('.mainmenu-outer #menu .content > ul > li:first-child').addClass("active");
    }
*/
// serarch show hide link start.....
    $('.search-outer a.icon-search').click(function() {
        if ($('.mainmenu-outer').hasClass('open-mob-menu')) {
            $('.search-outer #block-search-form').hide();
            $('.mainmenu-outer').animate({
                marginTop: "0"
            }, 300, function() {
                $('.mainmenu-outer').removeClass('open-mob-menu');
            });
        } else {
            $('.mainmenu-outer').animate({
                marginTop: "50"
            }, 300, function() {
                $('.mainmenu-outer').addClass('open-mob-menu');
                $('.search-outer #block-search-form').fadeIn(200, function() {

                });
            });
        }
    });
    // serarch show hide link end.....

    // SLT - footer menu query start...
    var i = 1;
    $('#footer-outer-block #footer-link-area .block-menu .col-xs-3').each(function() {
        $(this).addClass('ftr-menu-item-' + i);
        if (i === 1) {
            $(this).find('.col-md-3').show();
        }
        i++;
    });
    i = 1;
    $('#footer-outer-block #footer-link-area .mm-cattab-outer ul li').each(function() {
        $(this).attr('id', 'ftr-menu-item-' + i);
        i++;
    });

    $('#footer-outer-block #footer-link-area .mm-cattab-outer ul li').click(function() {
        $('#footer-outer-block #footer-link-area .mm-cattab-outer ul li').removeClass();
        $(this).addClass('active');
        var getIds = $(this).attr('id');
        $('#footer-outer-block #footer-link-area .block-menu .col-md-3').hide();
        $('#footer-outer-block #footer-link-area .block-menu .col-xs-3.' + getIds + '.col-md-3').show();

    });

    function footerResize() {
        if ($('body').hasClass('ie-8') || $('body').hasClass('ie-7')) {
            $('.mainmenu-outer #menu').show();
            $('.mainmenu-outer').removeClass('mm-show');
        } else {
            if ($(window).width() > 768) {
                $('#footer-outer-block #footer-link-area .block-menu .col-md-3').show();
            } else {
                $('#footer-outer-block #footer-link-area .block-menu .col-md-3').hide();
                $('#footer-outer-block #footer-link-area .block-menu .col-md-3.ftr-menu-item-1').show();
                $('#footer-outer-block #footer-link-area .mm-cattab-outer ul li').removeClass();
                $('#footer-outer-block #footer-link-area .mm-cattab-outer ul li:first-child').addClass('active');
            }
        }
    }
    footerResize();
    // SLT - footer menu query end...

//main menu drop down start....... 
/*
    function menuResize() {
        if ($('body').hasClass('ie-8') || $('body').hasClass('ie-7')) {
            $('.mainmenu-outer #menu').show();
            $('.mainmenu-outer').removeClass('mm-show');
        } else {
            if ($(window).width() > 768) {
                $('.mainmenu-outer #menu').show();
                $('.mainmenu-outer').removeClass('mm-show');
            } else {
              //  $('.mainmenu-outer #menu').hide();
                $('.mainmenu-outer').removeClass('mm-show');
                $('.mainmenu-outer').addClass('mm-hide');
                $('.mainmenu-outer #menu ul li .sub-level').removeClass('display-link');
            }
        }
    }
    function submenuResize() {
        if ($('body').hasClass('ie-8') || $('body').hasClass('ie-7')) {
            $('.mainmenu-outer #menu ul li .sub-level').removeProp('style');
            $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
            $('.mainmenu-outer #menu ul li .sub-level').addClass('mob-inactive');
        } else {
            if ($(window).width() > 768) {
                $('.mainmenu-outer #menu ul li .sub-level').removeProp('style');
                $('.mainmenu-outer #menu ul li .sub-level').removeClass('mob-active');
                $('.mainmenu-outer #menu ul li .sub-level').addClass('mob-inactive');
            } else {
               // $('.mainmenu-outer #menu').hide();
            }
        }
    }
    menuResize();
    submenuResize(); */
    // ..... main links dopdown... 
  /*  $('.mm-block a.icon-mobile-menu').click(function() {
        if ($('.mainmenu-outer').hasClass('mm-hide')) {
            $('.mainmenu-outer #menu').slideDown(500, function() {
                $('.mainmenu-outer').removeClass('mm-hide');
                $('.mainmenu-outer').addClass('mm-show');
            });
        } else {
            $('.mainmenu-outer #menu').slideUp(500, function() {
                $('.mainmenu-outer').removeClass('mm-show');
                $('.mainmenu-outer').addClass('mm-hide');
            });
        }
    });
*/
    // ...... sub links dorp down....


    // language selector
    $('.language-block .language-selcetor-active').text($('ul.language_selector li a.active').text());
    //var activeCls = $('ul.language_selector li a.active').parent().attr('class').split(" ")[0];
   // $('.language-block .language-selcetor-active').addClass(activeCls);


    $('ul.language_selector li').each(function() {
        if ($(this).children('a').hasClass('active')) {

        } else {
            $('.first-text-language').append($(this));
        }
    });
    $('ul.language_selector').hide();
    $("ul.first-text-language").hide();
    $(".language-block .language-selcetor-active").click(function() {
        $("ul.first-text-language").slideToggle();
    });

// inner left menu start.... 
    $('a#icon-up-arrow').parent("h3").click(function() {
        if ($(window).width() < 769) {
          //  alert($(this).position().top);
            
            
            if ($('.inner-left-main').hasClass('mob-show')) {
                if ($('.inner-left-main').hasClass('mob-show-active')) {
                    
                    $('body').animate({
                        marginTop: '0'
                    }, 500, function() {
                        $('.inner-left-main').slideUp(1000, function() {
                        $('.inner-left-main').removeClass('mob-show-active');
                        $('body').removeClass('mob-left-menu-start');
                    });
                        
                    });
                } else {
                    $('.inner-left-main.mob-show').css("top",$(this).position().top+$(this).height()+ $('.breadcrumb').height()- 92);
                    $('body').animate({
                        marginTop: '-90'
                    }, 500, function() {
                        var menuHeight = $(window).height();
                    $('.inner-left-main').height(menuHeight - 90);
                    $('body').addClass('mob-left-menu-start');
                    $('.inner-left-main.mob-show').css("top",30+$('a#icon-up-arrow').parent("h3").position().top+$('a#icon-up-arrow').parent("h3").height());
                        $('.inner-left-main').slideDown(1000, function() {
                        $('.inner-left-main').addClass('mob-show-active');
                         
                    });
                       
                    });
                    
                    

                }
            }
            $('.inner-left-main').addClass('mob-show');
        }
    });
    

    function mobLeftMenu() {
        if ($(window).width() > 768) {
            $('.inner-left-main').removeClass('mob-show');
            $('.inner-left-main').show();
            $('body').css({'margin-top': '0px'});
        } else {
            if ($('body').hasClass('ie-8') || $('body').hasClass('ie-7')) {

            } else {
                $('.inner-left-main').addClass('mob-show');
                if ($('.inner-left-main').hasClass('mob-show-active')) {
                    $('body').css({'margin-top': '-90px'}).addClass('mob-left-menu-start');
                    var menuHeight = $(window).height();
                    $('.inner-left-main').height(menuHeight - 120);
                } else {
                    $('.inner-left-main').hide();
                    $('body').css({'margin-top': '0px'}).removeClass('mob-left-menu-start');
                }
            }
            if($('.inner-left-main').hasClass('mob-show')){
                $('.inner-left-main.mob-show').css("top",32+$('a#icon-up-arrow').parent("h3").position().top+$('a#icon-up-arrow').parent("h3").height());
            }
    }
    }
    mobLeftMenu();
// inner left menu start.... 


		
		// resize functions..
    $(window).resize(function() {
     //   meinmenuAddclas();
        //menuResize();
       // submenuResize();
        footerResize();
        mobLeftMenu();



    });
    $('.table-block-scrool-wrap').wrap('<div class="table-content-area-wrap"></div>')
    $('.table-content-area-wrap').append('<div class="scroler-btn"><span class="left-scrol"><a href="javascript:void(0)" data-icon="&#xe009;"></a></span> <span class="right-scrol"> <a href="javascript:void(0)" data-icon="&#xe00a;"></a></span></div>');
            
    $('.table-content-area-wrap span.left-scrol a').click(function(){         
            $(this).parent().parent().parent().find('.table-block-scrool-wrap').animate({
                'scrollLeft' : 0
            },200, function() {
                    $(this).parent().find('.left-scrol').hide();
                    $(this).parent().find('.right-scrol').show();
            });
    });
        $('.table-content-area-wrap span.right-scrol a').click(function(){  
            $(this).parent().parent().parent().find('.table-block-scrool-wrap').animate({
                'scrollLeft' : $('.table-scroll-cont').outerWidth()
            },400, function() {
            $(this).parent().find('.left-scrol').show();
            $(this).parent().find('.right-scrol').hide();
        });
    });


    $('.table-block-scrool-wrap').scroll(function() {
     var maxScroll = ($(this).find('.table-scroll-cont').width() - $(this).scrollLeft()) - $(this).width();
                if ($(this).scrollLeft() === 0) {          
                    
                     $(this).parent().find('.left-scrol').hide();
                      $(this).parent().find('.right-scrol').show();
                     
                } else if(2 >= maxScroll ){
                    
                   $(this).parent().find('.left-scrol').show();
                   $(this).parent().find('.right-scrol').hide();
                   
                }else{
                    $(this).parent().find('.left-scrol').show();
                   $(this).parent().find('.right-scrol').show();
                }
    });

var ua = navigator.userAgent;
if( ua.indexOf("Android") >= 0 )
{
  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
  if (androidversion < 2.9)
  {
     $('.table-block').addClass('jscrol-block');
     $('.inner-left-main.mob-show').addClass('inner-mob-jscroller');
  }
  if(androidversion < 4.4){
      $("body").addClass('android-old');
  }
}

//$(".jscrol-block").niceScroll();
//$(".inner-mob-jscroller").niceScroll();




// only for 130

	$('img').each(function(){
		var getSrc= $(this).attr('src');
                if(getSrc){
		var res = getSrc.split("/"); 
		//alert(res[1]);
		if(res[1]==='sites'){
		//	$(this).attr('src','/sltv3'+getSrc)
		}
            }
	});
    
});

//---------------- SLT V3 Script --------------------------------------------------------------
 function togglescroll() {
            $('body').on('touchstart', function (e) {
                if ($('body').hasClass('noscroll')) {
                    e.preventDefault();
                }
            });
        }

        //Site Map
        $(document).ready(function () {
            togglescroll()
            $(".icon-map").click(function () {
                $(".mobilenav").animate({
                    width: 'toggle'
                }); //fadeToggle(500);
                $(".top-menu").toggleClass("top-animate");
                $("body").toggleClass("noscroll");
                $(".mid-menu").toggleClass("mid-animate");
                $(".bottom-menu").toggleClass("bottom-animate");
            });
            // site map re-arrange 
            var eTel = $('.site-map-menus .site-map-box-menu').first().find('.map-col-block:nth-child(3)').find('ul').html();
            var MySlt = $('.site-map-menus .site-map-box-menu').first().find('.map-col-block:nth-child(4)').find('ul').html();
            var contact = $('.site-map-menus .site-map-box-menu-menu-slt-navigation .map-col-block:nth-child(6)').html();
            $('.site-map-menus .site-map-box-menu-menu-slt-navigation .map-col-block:nth-child(3) ul').html(eTel);
            $('.site-map-menus .site-map-box-menu-menu-slt-navigation .map-col-block:nth-child(4) ul').html(MySlt);
             $('.site-map-menus .site-map-box-menu-menu-slt-navigation .map-col-block:nth-child(3)').append(contact);
             $('.site-map-menus .site-map-box-menu-menu-slt-navigation .map-col-block:nth-child(6)').hide();
           
            
        });
        
        
        //Top Search
        $(document).ready(function () {
            togglescroll()
            $(".search-icon").click(function () {
                $(".topsearch").animate({
                    width: 'toggle'
                });
            });
        });

        // PUSH ESC KEY TO EXIT

        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $(".mobilenav").fadeOut(500);
                $(".top-menu").removeClass("top-animate");
                $("body").removeClass("noscroll");
                $(".mid-menu").removeClass("mid-animate");
                $(".bottom-menu").removeClass("bottom-animate");
            }
        });
/*
$(document).ready(function () {

 //   var nice = $(".mobilenav").niceScroll(); // The document div (body)

    $("#boxscroll4").niceScroll("#boxscroll4 .wrapper", {
        boxzoom: true
    }); // hw acceleration enabled when using wrapper

}); */
        
//Sticky-header js 
$(function () {
    $('#header_nav').data('size', 'big');
});

/**$(window).scroll(function () {
    if ($(window).width() > 979) {
        if ($(document).scrollTop() > 0) {
            if ($('#header_nav').data('size') == 'big') {
                $('#header_nav').data('size', 'small');
                $('#header_nav').removeClass('big-cls');
                $('#header_nav').addClass('small-cls');
                $('#header_nav').stop().animate({
                    height: '80px'
                }, 600);
            }
        } else {
            if ($('#header_nav').data('size') == 'small') {
                $('#header_nav').data('size', 'big');
                $('#header_nav').removeClass('small-cls');
                $('#header_nav').addClass('big-cls');
                $('#header_nav').stop().animate({
                    height: '123px'
                }, 600);
            }
        }
    }
});**/
// heder somall. 
/**function hederStick() {
    if ($(window).width() < 980) {
        if ($('#header_nav').data('size') == 'small') {
            $('#header_nav').data('size', 'big');
            $('#header_nav').removeClass('small-cls');
            $('#header_nav').addClass('big-cls');
            $('#header_nav').stop().animate({
                height: '123px'
            }, 600);
        }
    }
}
$(window).resize(function () {
    hederStick();
});
**/
/*
$(document).ready(function () {
   // hederStick();

    // mobile menu drop down.. 

    $('.mm-icon a').click(function () {
        $(".mobile-mainmenu-outer").toggle("slow", function () {
            // Animation complete.
        });

        if ($('#header_nav').hasClass('open-m-menu')) {
            $('#header_nav').removeClass('open-m-menu');
        } else {
            $('#header_nav').addClass('open-m-menu');
        }
    });

    $('#mobile-menu .mob-menu-nav').click(function () {
        $(this).parent().find('.sub-level').toggle("slow", function () {
            // Animation complete.
        });
        if ($(this).hasClass('sub-menu-collapse')) {
            $(this).removeClass('sub-menu-collapse');
        } else {
            $('#mobile-menu .sub-menu-collapse').parent().find('.sub-level').toggle("slow", function () {
            // Animation complete.
        });
            $('#mobile-menu .sub-menu-collapse').removeClass('sub-menu-collapse');
            $(this).addClass('sub-menu-collapse');
        }

    });
}); */
function eqHeight(){
    $('.col-eq-height').height('auto');
        $(".row-eq-height").each(function() {
        var heights = $(this).find(".col-eq-height").map(function() {
            return $(this).outerHeight();
        }).get(), maxHeight = Math.max.apply(null, heights);

        $(this).find(".col-eq-height").outerHeight(maxHeight);
    });
}
    
    $(document).ready(function() {
        eqHeight();
});
 $(window).resize(function() {
     eqHeight();
    });
    
// $(document).ready(function() {  
// $(".uc_out_of_stock_html").each(function(e){
//        console.log($(this).html());
//   if($(this).html()==''){
//   //$(this).css('display','none');
// 
//      //  $(".uc_out_of_stock_html:eq("+e+")").css('display','none');
//    }
// });
// });
  
//---------------- SLT V3 Script End --------------------------------------------------------------

// Drupal 9 Main Menu JS start
 
$("document").ready(function() {
	if($('ul.mainMenu > li.active-trail-1').text() !== ''){
		$('.mainLev a.nav-link.dropdown-toggle.show').removeClass('show');
		let personLink = $("ul.mainMenu > li.active-trail-1 > a");
	  personLink.attr("aria-expanded", true);
	  personLink.addClass("show");
	  personLink.next().addClass("show");
//	  $('ul.mainMenu > li.active-trail-1').addClass("activelink");
	  
	}else{
		
	  let personLink = $("ul.mainMenu > li:first-child > a");
	  personLink.attr("aria-expanded", true);
	  personLink.addClass("show");
	  personLink.next().addClass("show");
	} 
});

//$("ul.mainMenu > li:not(:first-child) > a").on("click", function(){
$("ul.mainMenu > li > a").on("click", function(){
	//alert('bbbb');
	let personLink = $("ul.navbar-nav > li:first-child > a");
	personLink.attr("aria-expanded", false);
	personLink.removeClass("show");
	personLink.next().removeClass("show"); 
}); 

$("ul.mainMenu > li").click(function(){
	$("ul.mainMenu > li").removeClass('activelink');
	$("ul.mainMenu > li").removeClass('show');
	$("ul.mainMenu > li > a").removeClass('show');
	$("ul.mainMenu > li").children().next().removeClass('show');
	
	$(this).children().first().addClass('show');
	$(this).children().next().addClass('show');
	$(this).children().children().next().addClass('show');
	$(this).addClass('activelink'); 
});

//$(document).click(function(event) {
$(document).on("click", function(event) {
    if (!$(event.target).closest("ul.mainMenu > li").length) {
		
        $("ul.mainMenu > li.activelink").children().first().addClass('show');
        $("ul.mainMenu > li.activelink").children().next().addClass('show');
    } 
});

$('.clickmenubtn').click(function (){
	if($('ul.mainMenu > li.active-trail-1').text() === ''){
	$('.mainMenu').children().first().children().first().addClass('show');
	$('.mainMenu').children().first().children().first().next().addClass('show');

	$('.mainMenu').children().first().children().first().next().children().first().children().first().addClass('menuExpand');
	$('.mainMenu').children().first().children().first().next().children().first().children().first().next().addClass('show'); 
	}
});

$('.mainLev > a').on('click',function (){
	 //$(this).next().first().children().first().children().first().addClass('menuExpand');
	$(this).find('a.lev-1-item').addClass('menuExpand');
	//$(this).next().first().children().first().children().first().next().addClass('show');
	$(this).find('a.lev-1-item').next().addClass('show'); 
});

$('.submenuRelease.hasarrow a.lev-1-item').on('click',function(event){ 
	if ($(this).next().hasClass("show")){
		$(this).removeClass('menuExpand');
		$(this).next().removeClass("show");
	}else{
		$('.submenuRelease a.lev-1-item').removeClass('menuExpand');
		$('.submenuRelease a.lev-1-item').next().removeClass('show');
		$(this).addClass('menuExpand');
		$(this).next().addClass("show");
	}
	$(this).parent().parent().addClass('show-item'); 
	$(this).parent().parent().parent().find('.nav-link.dropdown-toggle').addClass('show'); 
});

$('.megamenuCols').each(function(){ 
	var menuco = $(this).find('.menuCo').size();
	if(menuco > 5){
		$(this).find('.menuCo:nth-child(5)').after('<div class="menu-seperator"></div>');
	}
	//$(this).addClass('countitem-'+menuco);last-child
	$(this).find('.menuCo:last-child').css('border','none');
	$(this).find('.menuCo:nth-child(5)').css('border','none');
})
$('.menu-arro-icon').click(function(e){
	 e.preventDefault();
	 e.stopPropagation();
	  $(this).parent().parent().children('.submenu').slideToggle(function() {
	 // alert( "First handler for .toggle() called." );
	}, function() {
		if( $(this).parent().children('a.menuExpand').text() !==''){
			$(this).parent().children('a.menuExpand').removeClass('menuExpand');
		}else{
			$(this).parent().children('a').addClass('menuExpand');
		}
	}); 
	// alert('aaaaaaaa');
})

// Drupal 9 Main Menu JS End


