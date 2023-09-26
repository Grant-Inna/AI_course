$(document).ready(function () {
  
   
   /* плавный скрол */
   
   if ($('#totop').length > 0) {
    
      $('#totop').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
      $("#menu").on("click","a", function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
            top = $(id).offset().top - 40; //определим высоту от начала страницы до якоря

         $('body,html').animate({scrollTop: top}, 500); //сделаем прокрутку за 1 с
	});
      
   }
   
 });
