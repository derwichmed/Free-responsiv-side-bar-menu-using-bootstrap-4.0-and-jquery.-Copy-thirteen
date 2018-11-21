$(function (){ 
   $('.menu_item').click(function (){
      if($('.sub_menu_mobile_nav > div:first-child:hover').length == 1){
            $('.sub_menu_mobile_nav > div:first-child:hover').parent().parent().hide();
      }
      if($('.sub_menu_mobile_nav > div:first-child:hover').
                    parent().parent().parent().parent()
                    .parent().parent().attr('class') == "menu_item"){
                
               $(this).find('.sub_menu').hide(); 
            }
      else{     
      if($(this).find('> div > div > div > .sub_menu:visible').length == 0){
      if($(window).width() >= 500){
        $(this).find('> div > div > div > .sub_menu').animate({
            top: "0px"
        }, 30);
      if($(window).width() <= 500){
        $(this).find('> div > div > div > .sub_menu').css('left','50%');
      }
      }
      $('.sub_menu:visible').hide();
       $(this).find("> div > div > div > .sub_menu").show(); 
       if($(window).width() >= 500){
            $(this).find('> div > div > div > .sub_menu').animate({
                top: "35px"
            }, 30);
        }
        if($(window).width() <= 500){
            $(this).find('> div > div > div > .sub_menu').animate({
                left: "0"
            }, 100);
        }
    }
      }
   });
   
   $('.sub_menu_item').click(function (){
      if($(window).width() >= 500){
        $(this).find('> div > div > div > .sub_menu').animate({
            left: "0%"
        }, 30);
      }
      
      if($(window).width() <= 500){
          $(this).find('> div > div > div > .sub_menu').animate({
            left: "50%"
          }, 30);
      }
      $('.sub_menu:visible').hide();
      $(this).find("> div > div > div > .sub_menu").show();
      if($(window).width() >=500){
        $(this).find('> div > div > div > .sub_menu').animate({
            left: "110%"
        }, 30);
      }
      
      if($(window).width() <= 500){
          $(this).find('> div > div > div > .sub_menu').animate({
            left: "0%"
          }, 30);
      }
   });
   
   isMenuHidden = true;
   $('.nav_mobile img').click(function (){
        if(isMenuHidden){
            $('.menu').show();
            $('.menu').animate({
                top: "72px"
            }, 30);
            isMenuHidden = false;
        }
        else{
            $('.menu').hide();
            $('.menu').animate({
                top: "0px"
            }, 30);
            isMenuHidden = true;
        }
   });
   
   $('body').children().not('body > header').mouseover(function (){
        $('.sub_menu:visible').hide();
   });
});