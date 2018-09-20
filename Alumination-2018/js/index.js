$('#toggle ').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('.new_tog').click(function(){
  $('#toggle').toggleClass('active');
  $('#overlay').toggleClass('open');
});


// for not displaying interactive scroller on front page
document.getElementById("cd-vertical-nav").style.right = "-200px";
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if ( currentScrollPos>450) {
    document.getElementById("cd-vertical-nav").style.right = "2.75%";
  } else {
    document.getElementById("cd-vertical-nav").style.right = "-200px";
  }
  prevScrollpos = currentScrollPos;
}



jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    // $('.cd-scroll-down').on('click', function(event){
    //     event.preventDefault();
    //     smoothScroll($(this.hash));
    // });

    // //open-close navigation on touch devices
    // $('.touch .cd-nav-trigger').on('click', function(){
    // 	$('.touch #cd-vertical-nav').toggleClass('open');
  
    // });
    // //close navigation on touch devices when selectin an elemnt from the list
    // $('.touch #cd-vertical-nav a').on('click', function(){
    // 	$('.touch #cd-vertical-nav').removeClass('open');
    // });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

(function() {
  // Tutorial: https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);
//for events page
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
        $('#item1').fadeIn(100);
        $('#item2').fadeOut(100);
        $('#item3').fadeOut(100);
        $('#item4').fadeOut(100);
        $('#item5').fadeOut(100);
        $('#item6').fadeOut(100);   
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
    
      $('#item2').fadeIn(100);
        $('#item1').fadeOut(100);
        $('#item3').fadeOut(100);
         $('#item4').fadeOut(100);
        $('#item5').fadeOut(100);
         $('#item6').fadeOut(100);
        
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
        
        $('#item3').fadeIn(100);
        $('#item1').fadeOut(100);
        $('#item2').fadeOut(100);
        $('#item4').fadeOut(100);
        $('#item5').fadeOut(100);
        $('#item6').fadeOut(100);  
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
        
        $('#item4').fadeIn(100);
        $('#item1').fadeOut(100);
        $('#item2').fadeOut(100);
        $('#item3').fadeOut(100);
        $('#item5').fadeOut(100);
        $('#item6').fadeOut(100);  
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
        
        $('#item5').fadeIn(100);
        $('#item1').fadeOut(100);
        $('#item2').fadeOut(100);
        $('#item4').fadeOut(100);
        $('#item3').fadeOut(100);
        $('#item6').fadeOut(100);  
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
        
        $('#item6').fadeIn(100);
        $('#item1').fadeOut(100);
        $('#item2').fadeOut(100);
        $('#item4').fadeOut(100);
        $('#item5').fadeOut(100);
        $('#item3').fadeOut(100);  
    }); 
     });
//transition
//for loop
//translation of text
//1.5
