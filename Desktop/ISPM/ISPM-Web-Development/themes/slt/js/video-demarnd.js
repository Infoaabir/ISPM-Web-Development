jQuery(document).ready(function($) {
    $("ul.peo-tv-vdo-demand li:first-child").addClass('last-item');
    $('ul.peo-tv-vdo-demand li').addClass('run');

    var myVar;
        function selectorCreate() {
        var charitem;
        var charArray = [];

        $('ul.peo-tv-vdo-demand li').each(function() {
            var covertitle = $(this).find('.cover-title').text();
            charitem = covertitle.charAt(0).toLowerCase();
            charArray[charitem] = charitem;
        });

        $('#demoFour-nav a').each(function() {
            if (!$(this).hasClass('all')) {
                var thisText = $(this).text().toLowerCase();
                if (thisText !== charArray[thisText]) {
                    $(this).addClass('ln-disabled');
                }
            }
        });
    }
    selectorCreate();
    
    function loadSlider() {
        var newHtmls = '';
        var isBusy = true;
        var i = 0;
        var ln = 0;
        
        if ($('ul.peo-tv-vdo-demand li.run').hasClass('last-item')) {

            $('ul.peo-tv-vdo-demand li.run').each(function() {
                ln++;
                if ($(this).hasClass('last-item')) {
                    isBusy = false;
                    i = 0;
                    $("ul.peo-tv-vdo-demand li").removeClass('last-item');
                    if (ln !== 1) {
                        var nln = ln / 12;
                        nln = nln + 1;

                        $("#peo-tv-slider .clr ul li").removeClass('active');
                        $("#peo-tv-slider .clr ul li:nth-child(" + nln + ")").addClass('active');
                    }
                }
                if (!isBusy) {
                    if (i < 12) {
                        newHtmls += '<div class="sllider-item">' + $(this).html() + '</div>';
                    } else {
                        $("ul.peo-tv-vdo-demand li.run:nth-child(" + i + ")").addClass('last-item');
                        return false;
                    }
                    i++;
                }
            });

            $('#peo-tv-slider .slide-container .slide-sections:first-child').addClass('old-item');
            $('#peo-tv-slider .slide-container').append('<div class="slide-sections new-section">' + newHtmls + '</div>');
            $('#peo-tv-slider .slide-sections').width($('#peo-tv-slider').width());

            $('#peo-tv-slider .slide-container .slide-sections:first-child').animate({
                marginLeft: '-' + $('#peo-tv-slider').width()
            }, 2000, function() {
                $('#peo-tv-slider .slide-container .slide-sections.old-item').remove();
                $('#peo-tv-slider .slide-container').removeClass('new-section');
            });

        } else {
            $("ul.peo-tv-vdo-demand li.run:first-child").addClass('last-item');
            $('#peo-tv-slider .clr ul li').removeClass('active');
            $('#peo-tv-slider .clr ul li:first-child').addClass('active');

            loadSlider();
            return false;
        }
        heightfn();
        myVar = setTimeout(function() {
          //  loadSlider(); del..
        }, 15000);
        
                        $('#peo-tv-slider .sllider-item').hover(
                function() {
                    if($(window).width() > 768){
                        var left = $(this).offset().left;
                        var screanWidth =$(window).width();
                        var liParent =  $(this).width();
                        $(this).find('.popup').show();
                        var tabWidth = $(this).find('.popup').width();                    
                        tabWidth = tabWidth +liParent;
                        var tabMargin = tabWidth +left + 120;
                  
                        if(screanWidth < tabMargin){
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('left');
                        } else {
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('right');
                        }
                    }

                    }, function() {
                       $('#peo-tv-slider .sllider-item .popup').hide().removeClass('right').removeClass('left');
                    }
                );
    }


    // first time load


    function firstLoad() {
        $('ul.peo-tv-vdo-demand li').removeClass('last-item');
        $('ul.peo-tv-vdo-demand .run:first-child').addClass('last-item');
//        $('ul.peo-tv-vdo-demand li.run:first:child').addClass('last-item');
        var newHtmls = '';
        var isBusy = true;
        var i = 0;
        var ln = 0;
        if ($('ul.peo-tv-vdo-demand li.run').hasClass('last-item')) {

            $('ul.peo-tv-vdo-demand li.run').each(function() {
                ln++;
                if ($(this).hasClass('last-item')) {
                    isBusy = false;
                    i = 0;
                    $("ul.peo-tv-vdo-demand li").removeClass('last-item');
                    if (ln !== 1) {
                        var nln = ln / 12;
                        nln = nln + 1;

                        $("#peo-tv-slider .clr ul li").removeClass('active');
                        $("#peo-tv-slider .clr ul li:nth-child(" + nln + ")").addClass('active');
                    }
                }
                if (!isBusy) {
                    if (i < 12) {
                        newHtmls += '<div class="sllider-item">' + $(this).html() + '</div>';
                    } else {
                        $("ul.peo-tv-vdo-demand li:nth-child(" + i + ")").addClass('last-item');
                        return false;
                    }
                    i++;
                }
            });

            $('#peo-tv-slider .slide-container .slide-sections:first-child').addClass('old-item');
            $('#peo-tv-slider .slide-container').html('<div class="slide-sections new-section">' + newHtmls + '</div>');
            $('#peo-tv-slider .slide-sections').width($('#peo-tv-slider').width());

        }
        heightfn();
        myVar = setTimeout(function() {
           // loadSlider(); del..
        }, 15000);
        
        
                // selctor create.... 
        var listCount = $('ul.peo-tv-vdo-demand li.run').size();
        listCount = listCount / 12;
        listCount = Math.ceil(listCount);

        var a;
        var switchSlide = '';
        for (a = 0; a < listCount; a++) {
            switchSlide += '<li class="select-slide">' + a + '</li>';
        }
        $('#peo-tv-slider .clr ul').html(switchSlide);
        $('#peo-tv-slider .clr ul li:first-child').addClass('active');

        // selector create end.... 
        
                $('#peo-tv-slider .sllider-item').hover(
                function() {
                    if($(window).width() > 768){
                        var left = $(this).offset().left;
                        var screanWidth =$(window).width();
                        var liParent =  $(this).width();
                        $(this).find('.popup').show();
                        var tabWidth = $(this).find('.popup').width();                    
                        tabWidth = tabWidth +liParent;
                        var tabMargin = tabWidth +left + 120;
                  
                        if(screanWidth < tabMargin){
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('left');
                        } else {
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('right');
                        }
                    }

                    }, function() {
                       $('#peo-tv-slider .sllider-item .popup').hide().removeClass('right').removeClass('left');
                    }
                );
    }
    firstLoad();



    function heightfn() {
        $('.slide-sections .sllider-item:first-child img').height('auto');
        $('.slide-sections .sllider-item .footer').height('auto');
       var getImgh = 0;
        $('.slide-sections .sllider-item img').each(function(){
          if($(this).height() > getImgh){
              getImgh = $(this).height();
          }
        });
        //var getImgh = $('.slide-sections .sllider-item:first-child img').height();
        var fheight = 0;
        $('.slide-sections .sllider-item .footer').each(function() {
            if ($(this).height() > fheight) {
                fheight = $(this).height();
            }
        });
        var divHeight = getImgh; // + fheight;
        $('.slide-sections .sllider-item').height(divHeight);
    }



    // filter area .......... 

    $('#demoFour-nav a').click(function() {
        if (!$(this).hasClass('ln-disabled')) {
            $('#demoFour-nav a').removeClass('ln-selected');
            $(this).addClass('ln-selected');

            var selectChar = $(this).text().toLowerCase();

            if (!$(this).hasClass('all')) {
                $('ul.peo-tv-vdo-demand li').removeClass('run');
                $('ul.peo-tv-vdo-demand li').removeClass('last-item');
                var id=0;
                $('ul.peo-tv-vdo-demand li').each(function() {
                    var firstChar = $(this).find('.cover-title').text();
                    firstChar = firstChar.charAt(0).toLowerCase();
                    if (selectChar === firstChar) {
                        $(this).addClass('run');
                        if(id===0){
                             $(this).addClass('last-item');
                        }
                        id++;
                    }

                });
            } else {
                $('ul.peo-tv-vdo-demand li').addClass('run');
                $('ul.peo-tv-vdo-demand li:first-child').addClass('last-item');
            }
            clearTimeout(myVar);
           
             var newHtmls = '';
        var i = 0;
        var ln = 0;
            
            if ($('ul.peo-tv-vdo-demand li.run').hasClass('last-item')) {

            $('ul.peo-tv-vdo-demand li.run').each(function() {
                ln++;
                if ($(this).hasClass('last-item')) {
                    isBusy = false;
                    i = 0;
                    $("ul.peo-tv-vdo-demand li").removeClass('last-item');
                    if (ln !== 1) {
                        var nln = ln / 12;
                        nln = nln + 1;

                        $("#peo-tv-slider .clr ul li").removeClass('active');
                        $("#peo-tv-slider .clr ul li:nth-child(" + nln + ")").addClass('active');
                    }
                }
                if (!isBusy) {
                    if (i < 12) {
                        newHtmls += '<div class="sllider-item">' + $(this).html() + '</div>';
                    } else {
                        $("ul.peo-tv-vdo-demand li:nth-child(" + i + ")").addClass('last-item');
                        return false;
                    }
                    i++;
                }
            });

            $('#peo-tv-slider .slide-container .slide-sections:first-child').addClass('old-item');
            $('#peo-tv-slider .slide-container').html('<div class="slide-sections new-section">' + newHtmls + '</div>');
            $('#peo-tv-slider .slide-sections').width($('#peo-tv-slider').width());

        }
        heightfn();
        

        
                        // selctor create.... 
        var listCount = $('ul.peo-tv-vdo-demand li.run').size();
        listCount = listCount / 12;
        listCount = Math.ceil(listCount);

        var a;
        var switchSlide = '';
        for (a = 0; a < listCount; a++) {
            switchSlide += '<li class="select-slide">' + a + '</li>';
        }
        $('#peo-tv-slider .clr ul').html(switchSlide);
        $('#peo-tv-slider .clr ul li:first-child').addClass('active');
        
        if($('ul.peo-tv-vdo-demand li.run').size() > 12){
                myVar = setTimeout(function() {
           // loadSlider(); del..
        }, 5000);
    }
        // selector click start .. 
    $('#peo-tv-slider .clr ul li').click(function() {
        if (!$(this).hasClass('active')) {
            $("ul.peo-tv-vdo-demand li").removeClass('last-item');
            var step = $(this).text() * 12;
            if ($(this).text() === '0') {
                $("ul.peo-tv-vdo-demand li:first-child").addClass('last-item');
                $('#peo-tv-slider .clr ul li').removeClass();
                $(this).addClass('active');
            } else {
                $("ul.peo-tv-vdo-demand li:nth-child(" + step + ")").addClass('last-item');
            }
            clearTimeout(myVar);
            loadSlider();
        }
    });
    
    
    
    // mouse hoover
            $('#peo-tv-slider .sllider-item').hover(
                function() { 
                    if($(window).width() > 768){
                        var left = $(this).offset().left;
                        var screanWidth =$(window).width();
                        var liParent =  $(this).width();
                        $(this).find('.popup').show();
                        var tabWidth = $(this).find('.popup').width();                    
                        tabWidth = tabWidth +liParent;
                        var tabMargin = tabWidth +left + 120;
                  
                        if(screanWidth < tabMargin){
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('left');
                        } else {
                            $(this).find('.popup').removeClass('right').removeClass('left').addClass('right');
                        }
                    }

                    }, function() {
                       $('#peo-tv-slider .sllider-item .popup').hide().removeClass('right').removeClass('left');
                    }
                );
        }
    });
    
    
    // selector click start .. 
    $('#peo-tv-slider .clr ul li').click(function() {
        if (!$(this).hasClass('active')) {
            $("ul.peo-tv-vdo-demand li").removeClass('last-item');
            var step = $(this).text() * 12;
            if ($(this).text() === '0') {
                $("ul.peo-tv-vdo-demand li:first-child").addClass('last-item');
                $('#peo-tv-slider .clr ul li').removeClass();
                $(this).addClass('active');
            } else {
                $("ul.peo-tv-vdo-demand li:nth-child(" + step + ")").addClass('last-item');
            }
            clearTimeout(myVar);
            loadSlider();
        }
    });
    // selector click end.... 

    $(window).resize(function() {
        clearTimeout(myVar);
        firstLoad();
        heightfn();
        $('#peo-tv-slider .slide-sections').width($('#peo-tv-slider').width());
    });
    
  

});