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
