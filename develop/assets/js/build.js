$(document).ready(function () {
  
   
   /* плавный скрол */
   
   if ($('#totop').length > 0) {
    
      $('#totop').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
      $(".href").on("click", function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
            top = $(id).offset().top - 40; //определим высоту от начала страницы до якоря

         $('body,html').animate({scrollTop: top}, 500); //сделаем прокрутку за 1 с
	});
      
   }
   
   /*   карусель   */
   
   if ($('.carousel__list').length) {
      $('.carousel__list').slick({
          slidesToShow: 4,
         slidesToScroll: 2,
         dots: false,
         arrows: true,
         loop: true,
         infinite: true,
         responsive: [
            {
               breakpoint: 1300,
               settings: {
                  slidesToShow: 3
               }
            },
            {
               breakpoint: 770,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
               }
            }
         ]
      })
   }
   
   /*    боковое меню    */
   const width = $(document).width();
   
   if ($('.menu__mobile').length > 0) {
      
      var menu_width;
      
      if (width < 380) {
         menu_width = width * 0.8
      } // Ширина меню зависит от размера экрана
      else if (width < 450) {
         menu_width = width * 0.8
      } else {
         menu_width = width * 0.7
      }
      
      var $mobile_trigger = $('.wrapper .menu__mobile'),
         $mobile_menu = $('.menu__mobile_container'),
         $mobile_icon = $('.menu__mobile_icon'),
         $mobile_cross = $('.menu__mobile_container .menu__mobile'),
         $blackLayer = $('#black_back');
   
      $mobile_trigger.on('click', showAsideMenu);
      
      var menu_show_style = {
         right: '-1px',
         opacity: '1'
      };
      
   }
   function showAsideMenu() {
      $blackLayer.show();
      $mobile_menu.css( 'width', menu_width);
   
      $mobile_trigger.addClass('show_aside');
      
      $mobile_menu.show().animate(menu_show_style, 7, function() {
         $mobile_trigger.fadeOut();
      });
      $mobile_cross.addClass('show_aside');
      $mobile_cross.on( 'click', hideAsideMenu);
      $blackLayer.on( 'click', hideAsideMenu);
      
      $mobile_trigger.off('click', showAsideMenu);
   }
   function hideAsideMenu() {
      $blackLayer.hide();
      $mobile_trigger.removeClass('show_aside').show();
      $mobile_cross.removeClass('show_aside');
      
      $mobile_menu.css( 'width', '0');
      $mobile_menu.hide().prop( 'style', '');
      
      $mobile_cross.off( 'click', hideAsideMenu);
      $blackLayer.off( 'click', hideAsideMenu);
      $mobile_trigger.on('click', showAsideMenu);
   }
   
 });
