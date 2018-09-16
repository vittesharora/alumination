$(document).ready(function(){
    $("#item_one").click(function(){
        $("#item2").css({
        	'opacity':'0'
        });
        $("#item3").css({
            'opacity':'0'
        });
         $("#item4").css({
            'opacity':'0'
        });
          $("#item5").css({
            'opacity':'0'
        });
           $("#item6").css({
            'opacity':'0'
        });
        $('#item1').css({
        	'opacity':'1',
            });
        $('#it1_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'transform':'translateY(20px)'
        });
          $('#desc_2').css({
            'animation':'fade 1.5s',
            'animation':'move .6s',
            'transform':'translateY(20px)'
        });
        $('#item1').fadeIn(1000);
        $('#item2').fadeOut(1000);
        $('#item3').fadeOut(1000);
        $('#item4').fadeOut(1000);
        $('#item5').fadeOut(1000);
        $('#item6').fadeOut(1000);   
    });
     $("#item_two").click(function(){
        $("#item1").css({
        	'opacity':'0'
        });
        $("#item3").css({
            'opacity':'0'
        });
        $("#item4").css({
            'opacity':'0'
        }); 
        $("#item5").css({
            'opacity':'0'
        });
        $("#item6").css({
            'opacity':'0'
        });
        
         $('#item2').css({
        	'opacity':'1'
        });
         $('#it2_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'margin':'20px',
            'transform':'translateY(20px)'
        });
    
      $('#item2').fadeIn(1000);
        $('#item1').fadeOut(1000);
        $('#item3').fadeOut(1000);
         $('#item4').fadeOut(1000);
        $('#item5').fadeOut(1000);
         $('#item6').fadeOut(1000);
        
});
     $("#item_three").click(function(){
        $("#item1").css({
            'opacity':'0'
        });
        $("#item2").css({
            'opacity':'0'
        });
        $("#item4").css({
            'opacity':'0'
        });
        $("#item5").css({
            'opacity':'0'
        });
        $("#item6").css({
            'opacity':'0'
        });
        $('#item3').css({
            'opacity':'1',
            });
        $('#it3_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'transform':'translateY(20px)'
        });
        
        $('#item3').fadeIn(1000);
        $('#item1').fadeOut(1000);
        $('#item2').fadeOut(1000);
        $('#item4').fadeOut(1000);
        $('#item5').fadeOut(1000);
        $('#item6').fadeOut(1000);  
    });
     $("#item_four").click(function(){
        $("#item1").css({
            'opacity':'0'
        });
        $("#item2").css({
            'opacity':'0'
        });
        $("#item3").css({
            'opacity':'0'
        });
        $("#item5").css({
            'opacity':'0'
        });
        $("#item6").css({
            'opacity':'0'
        });
        $('#item4').css({
            'opacity':'1',
            });
        $('#it4_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'transform':'translateY(20px)'
        });
        
        $('#item4').fadeIn(1000);
        $('#item1').fadeOut(1000);
        $('#item2').fadeOut(1000);
        $('#item3').fadeOut(1000);
        $('#item5').fadeOut(1000);
        $('#item6').fadeOut(1000);  
    });
     $("#item_five").click(function(){
        $("#item1").css({
            'opacity':'0'
        });
        $("#item2").css({
            'opacity':'0'
        });
        $("#item3").css({
            'opacity':'0'
        });
        $("#item4").css({
            'opacity':'0'
        });
        $("#item6").css({
            'opacity':'0'
        });
        $('#item5').css({
            'opacity':'1',
            });
        $('#it5_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'transform':'translateY(20px)'
        });
        
        $('#item5').fadeIn(1000);
        $('#item1').fadeOut(1000);
        $('#item2').fadeOut(1000);
        $('#item4').fadeOut(1000);
        $('#item3').fadeOut(1000);
        $('#item6').fadeOut(1000);  
    }); 
     $("#item_six").click(function(){
        $("#item1").css({
            'opacity':'0'
        });
        $("#item2").css({
            'opacity':'0'
        });
        $("#item3").css({
            'opacity':'0'
        });
        $("#item4").css({
            'opacity':'0'
        });
        $("#item5").css({
            'opacity':'0'
        });
        $('#item6').css({
            'opacity':'1',
            });
        $('#it6_desc').css({
            'animation':'fade 1.5s',
            'animation':'move .4s',
            'transform':'translateY(20px)'
        });
        
        $('#item6').fadeIn(1000);
        $('#item1').fadeOut(1000);
        $('#item2').fadeOut(1000);
        $('#item4').fadeOut(1000);
        $('#item5').fadeOut(1000);
        $('#item3').fadeOut(1000);  
    }); 
     });
//transition
//for loop
//translation of text
//1.5