$(document).ready(function(){
    console.log('entered ready function');
    
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
        $('.ryu-ready').show();
    })
	.mouseleave(function() {
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
        $('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
        $('.ryu-ready').show();
		
    })
    
	$(document).on('keydown', function(key) {
		if (key.keyCode === 88) {
		  $('.ryu-still').hide();
		  $('.ryu-throwing').hide();
		  $('.ryu-ready').hide();
		  $('.ryu-cool').show();
		}
	});
	
	$(document).on('keyup', function() {
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

}); // End of .ready()

    
    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

