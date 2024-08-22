      $(document).ready(function () { 
            window.test = $('.fltrPkgType').SumoSelect({ 
				okCancelInMulti: true, 
				captionFormatAllSelected: "Yeah, OK, so everything.",
				csvDispCount: 6 });
            $('[data-toggle="popover"]').popover();
			
			$('.SumoSelect').mouseenter(function() {
				$( this ).addClass('open');
			  })
			  .mouseleave(function() {
				$( this ).removeClass('open');
			  });
			  
			  $('.SumoSelect .MultiControls p').click(function(){
				  $('.SumoSelect').removeClass('open');
			  });
			  
			  $('.filter-dropdown').mouseenter(function() {
				$( this ).addClass('open');
			  })
			  .mouseleave(function() {
				$( this ).removeClass('open');
			  });
        });
		
     //open and close tab menu
        $('.nav-tabs-dropdown')
            .on("click", "li:not('.active') a", function (event) {
                $(this).closest('ul').removeClass("open");
            })
            .on("click", "li.active a", function (event) {
                $(this).closest('ul').toggleClass("open");
            });		
			
        var slider = document.getElementById('slider');

         noUiSlider.create(slider, {
            start: [4, 4000],
            connect: true,
            snap: true,
            range: {
                'min': 4,
                '5%': 20,
                '10%': 40,
                '15%': 60,
                '20%': 100,
                '25%': 140,
                '30%': 200,
                '35%': 300,
                '40%': 400,
                '45%': 600,
                '50%': 800,
                '55%': 1000,
                '60%': 1200,
                '65%': 1400,
                '70%': 1600,
                '75%': 1800,
                '80%': 2000,
                '85%': 2500,
                '90%': 3000,
                '95%': 3500,
                'max': 4000
            },
        });

        var skipValues = [
            document.getElementById('skip-value-lower'),
            document.getElementById('skip-value-upper')
        ];
		var skipValues2 = [
            document.getElementById('skip-value-lower2'),
            document.getElementById('skip-value-upper2')
        ];

        slider.noUiSlider.on('update', function (values, handle) {
            skipValues[handle].innerHTML = Math.round(values[handle]);
            skipValues2[handle].innerHTML = Math.round(values[handle]);
        });

        $(document).ready(function () {
			$('#dropdownMenu1').append('<span class="placeholder" style="font-size:13px"> Data Bundle</span>');
			$('#dropdownMenu1').css('font-size','0');
			//$('#skip-value-upper').addClass('hide');
			
			$('.filters .MultiControls .btnOk').click(function(){
				filterClick();
				restbody();
			});
			
			
			var itm=1;
			$('.SumoSelect:nth-child(2) ul li').each(function(){
				$(this).find('label').append('<span class="item-no">'+itm+'</span>');
				itm++;
			});
			/* // for new filter
			$('.SumoSelect:nth-child(2) .btnOk').click(function(){
				if($.trim($(this).parent().parent().parent().find('p.SelectBox').text()) !== 'Price Range'){
					$('.result-sec').removeClass('show-main-price-row');
					$('.result-sec').addClass('hide-main-price-row');
					$('.SumoSelect:nth-child(2) ul li.selected').each(function(){
						$('.range-'+$(this).find('.item-no').text()).addClass('show-main-price-row');
						$('.range-'+$(this).find('.item-no').text()).removeClass('hide-main-price-row');
					});
				}else{
					$('.result-sec').removeClass('hide-main-price-row');
					$('.result-sec').removeClass('show-main-price-row');
				}
				filterClick();
				restbody();
			}); */
			
function filterClick(){
	var timeVar = $('.SumoSelect:nth-child(3)').find('.CaptionCont span').text();
				var dataTypevar = $('.SumoSelect:nth-child(4)').find('.CaptionCont span').text();
				
				var d4g = '';
				var adsl = '';
				var fibre = '';
				var fiber1gbps = '';
				
				// 4G, ADSL, Fibre , Fibre 1 Gbps

				var str =$.trim(timeVar);
				var resTime = str.split(",");
				
				var strdT =$.trim(dataTypevar);
				var resdt = strdT.split(",");
				
					$('.filter-bundle-items').addClass('filter-hide');
					$('.filter-bundle-items').removeClass('filter-show');
					$('.card-wrapp').addClass('card-wrapp-hide');
					$.each(resTime, function(index, value) { 
					
						if(value === 'Anytime'){
							
							if(resdt[0] !=='Connection Type' || resdt[0] !== 'Yeah'){
								$.each(resdt, function(index, valuedt) { 
								valuedt = $.trim(valuedt);
								console.log(valuedt); 
									if(valuedt === '4G'){
										d4g = '.4g';
										$('.filter-bundle-items.any-time.4g').addClass('filter-show');
										$('.filter-bundle-items.any-time.4g').removeClass('filter-hide');
									}else if(valuedt === 'ADSL'){
										adsl = '.adsl';
										$('.filter-bundle-items.any-time.adsl').addClass('filter-show');
										$('.filter-bundle-items.any-time.adsl').removeClass('filter-hide');
									}else if(valuedt === 'Fibre'){
										fibre = '.fibre';
										$('.filter-bundle-items.any-time.fibre').addClass('filter-show');
										$('.filter-bundle-items.any-time.fibre').removeClass('filter-hide');
									}else if(valuedt === 'Fibre 1 Gbps*'){
										fiber1gbps = '.fiber-1gbps';
										$('.filter-bundle-items.any-time.fiber-1gbps').addClass('filter-show');
										$('.filter-bundle-items.any-time.fiber-1gbps').removeClass('filter-hide');
									}else{
										$('.filter-bundle-items.any-time').addClass('filter-show');
										$('.filter-bundle-items.any-time').removeClass('filter-hide');
									}
								});
							}else{
								$('.filter-bundle-items.any-time').addClass('filter-show');
								$('.filter-bundle-items.any-time').removeClass('filter-hide');
							}
							
							$('.card-wrapp.any-time').addClass('card-wrapp-show');
							$('.card-wrapp.any-time').removeClass('card-wrapp-hide');
							
						}else if(value === 'Time Based' ){
							
							if(resdt[0] !=='Connection Type' || resdt[0] !== 'Yeah'){
								$.each(resdt, function(index, valuedt) { 
								valuedt = $.trim(valuedt);
							
									if(valuedt === '4G'){
										d4g = '.4g';
										$('.filter-bundle-items.time-base.4g').addClass('filter-show');
										$('.filter-bundle-items.time-base.4g').removeClass('filter-hide');
									}else if(valuedt === 'ADSL'){
										adsl = '.adsl';
										$('.filter-bundle-items.time-base.adsl').addClass('filter-show');
										$('.filter-bundle-items.time-base.adsl').removeClass('filter-hide');
									}else if(valuedt === 'Fibre'){
										fibre = '.fibre';
										$('.filter-bundle-items.time-base.fibre').addClass('filter-show');
										$('.filter-bundle-items.time-base.fibre').removeClass('filter-hide');
									}else if(valuedt === 'Fibre 1 Gbps*'){
										fiber1gbps = '.fiber-1gbps';
										$('.filter-bundle-items.time-base.fiber-1gbps').addClass('filter-show');
										$('.filter-bundle-items.time-base.fiber-1gbps').removeClass('filter-hide');
									}else{
										$('.filter-bundle-items.time-base').addClass('filter-show');
										$('.filter-bundle-items.time-base').removeClass('filter-hide');
									}
								});
							}else{
								$('.filter-bundle-items.time-base').addClass('filter-show');
								$('.filter-bundle-items.time-base').removeClass('filter-hide');
							}
							
							$('.card-wrapp.time-base').addClass('card-wrapp-show');
							$('.card-wrapp.time-base').removeClass('card-wrapp-hide');
						}else if(value === 'Unlimited' ){
							
							if(resdt[0] !=='Connection Type' || resdt[0] !== 'Yeah'){
								$.each(resdt, function(index, valuedt) { 
								valuedt = $.trim(valuedt);
							
									if(valuedt === '4G'){
										d4g = '.4g';
										$('.filter-bundle-items.unlimited.4g').addClass('filter-show');
										$('.filter-bundle-items.unlimited.4g').removeClass('filter-hide');
									}else if(valuedt === 'ADSL'){
										adsl = '.adsl';
										$('.filter-bundle-items.unlimited.adsl').addClass('filter-show');
										$('.filter-bundle-items.unlimited.adsl').removeClass('filter-hide');
									}else if(valuedt === 'Fibre'){
										fibre = '.fibre';
										$('.filter-bundle-items.unlimited.fibre').addClass('filter-show');
										$('.filter-bundle-items.unlimited.fibre').removeClass('filter-hide');
									}else if(valuedt === 'Fibre 1 Gbps*'){
										fiber1gbps = '.fiber-1gbps';
										$('.filter-bundle-items.unlimited.fiber-1gbps').addClass('filter-show');
										$('.filter-bundle-items.unlimited.fiber-1gbps').removeClass('filter-hide');
									}else{
										$('.filter-bundle-items.unlimited').addClass('filter-show');
										$('.filter-bundle-items.unlimited').removeClass('filter-hide');
									}
								});
							}else{
								$('.filter-bundle-items.unlimited').addClass('filter-show');
								$('.filter-bundle-items.unlimited').removeClass('filter-hide');
							}
							
							$('.card-wrapp.unlimited').addClass('card-wrapp-show');
							$('.card-wrapp.unlimited').removeClass('card-wrapp-hide');
						}else{
							if(resdt[0] !=='Connection Type' || resdt[0] !== 'Yeah'){
								$.each(resdt, function(index, valuedt) { 
								valuedt = $.trim(valuedt);
							
									if(valuedt === '4G'){
										d4g = '.4g';
										$('.filter-bundle-items.4g').addClass('filter-show');
										$('.filter-bundle-items.4g').removeClass('filter-hide');
									}else if(valuedt === 'ADSL'){
										adsl = '.adsl';
										$('.filter-bundle-items.adsl').addClass('filter-show');
										$('.filter-bundle-items.adsl').removeClass('filter-hide');
									}else if(valuedt === 'Fibre'){
										fibre = '.fibre';
										$('.filter-bundle-items.fibre').addClass('filter-show');
										$('.filter-bundle-items.fibre').removeClass('filter-hide');
									}else if(valuedt === 'Fibre 1 Gbps*'){
										fiber1gbps = '.fiber-1gbps';
										$('.filter-bundle-items.fiber-1gbps').addClass('filter-show');
										$('.filter-bundle-items.fiber-1gbps').removeClass('filter-hide');
									}else{
										$('.filter-bundle-items').addClass('filter-show');
										$('.filter-bundle-items').removeClass('filter-hide');
									}
								});
							}else{
								$('.filter-bundle-items').addClass('filter-show');
								$('.filter-bundle-items').removeClass('filter-hide');
							}
							$('.card-wrapp').addClass('card-wrapp-show');
							$('.card-wrapp').removeClass('card-wrapp-hide');
						}
						
					});
					
	var ConType = $('.SumoSelect:nth-child(2)').find('.optWrapper ul li.selected').text();
	if($.trim(ConType).length > 0){
		
		$('.result-sec').addClass('hide-con-type');
		
		$('.SumoSelect:nth-child(2)').find('.optWrapper ul li').each(function(){
			//alert($(this).find('label span').text());
			if($(this).hasClass('selected')){
				if($.trim($(this).find('label span').text()) === '1'){
					$('.result-sec.full').removeClass('hide-con-type');
				}
				if($.trim($(this).find('label span').text()) === '2'){
					$('.result-sec.data').removeClass('hide-con-type');
				}
			}
		});
	}else{
		$('.result-sec').removeClass('hide-con-type');
	}
//	alert(ConType);
					
}			

function dataSlider(){
		$('.filter-bundle-items').removeClass('range-hide');
				$('.filter-bundle-items').removeClass('range-show');
				
				var minGb = parseInt($('#skip-value-lower').text());
				var maxGb = parseInt($('#skip-value-upper').text());
				$('.filter-bundle-items').each(function(){
					var thisVal = parseInt($(this).find('.data-val-amount').text());
					if (minGb < thisVal && thisVal <= maxGb){
						$(this).addClass('range-show');
					}else{
						$(this).addClass('range-hide');
					}
				});
				
				if(minGb === 0.00 && maxGb === 100.00){
					$('#dropdownMenu1').css('font-size','0');
					$('#dropdownMenu1 .placeholder').css('font-size','13px');
				}else{
					$('#dropdownMenu1').css('font-size','13px');
					$('#dropdownMenu1 .placeholder').css('font-size','0');
				}
}

$("body").on('DOMSubtreeModified', ".example-val", function() {

		//	$('body').click(function(e){


			dataSlider();
				
			restbody();
			

			});
			
			//$('.clear-selectors').click(function(){
			$('.clear-selectors').on('click',function(){
			slider.noUiSlider.reset();
				$('.result-sec').removeClass('hide-main-price-row');
				$('.result-sec').removeClass('show-main-price-row');
				$('.card-wrapp').removeClass('card-wrapp-hide');
				$('.filter-bundle-items').removeClass('filter-hide');
				$('.bundle-item').removeClass('range-hide'); 
				$('.result-sec').removeClass('hide-con-type');
				$('.if-no-package').hide();
				
				$('.filter-bundle-items').addClass('filter-show');
				$('.card-wrapp').addClass('card-wrapp-show');
				
				
				 $('select.fltrPkgType')[0].sumo.unSelectAll();
				$('select.fltrPkgType')[1].sumo.unSelectAll();
				$('select.fltrPkgType')[2].sumo.unSelectAll();
				 
			});
			
			function restbody(){
				
				$('.card-wrapp').removeClass('card-wrapp-show');
				$('.card-wrapp').removeClass('card-wrapp-hide');
				
				
				$('.card-wrapp').each(function(){
					var thisHide = false;
					$(this).find('.filter-bundle-items').each(function(){
						$(this).parent().parent().parent().parent().removeClass('card-wrapp-hide');
						//if($(this).height() > 0){
							if($(this).hasClass('filter-hide') || $(this).height() < 1){
							$(this).parent().parent().parent().parent().addClass('card-wrapp-hide');
						}else{
							
							$(this).parent().parent().parent().parent().addClass('card-wrapp-show');
							return false;
						}
					});
					
					$('.slide-x').each(function(){
					if(!$(this).find('.card-wrapp-show').text()){
						$(this).find('.if-no-package').show();
					}else{
						$(this).find('.if-no-package').hide();
					}
				});
					
				});
			}
        });			