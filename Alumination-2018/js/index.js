$('#toggle ').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('.new_tog').click(function(){
  $('#toggle').toggleClass('active');
  $('#overlay').toggleClass('open');
});

