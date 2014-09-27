$(document).ready(function(){
		$('#char-count').css('display','none');
		$('button').css('display','none');
		$('.tweet-compose').click(function(){
		$('button').show();
		$('#char-count').show();
		$('.tweet-compose').css('height','66px');
		});
		$('.tweet-compose').keydown(function(){
			var charLimit = 140;
			var charTyped = $(this).val();
			var charLength = charLimit - charTyped.length;
			$('#char-count').text(charLength);
			if (charLength < 11){
				$('.tweet-compose').css('color', 'red');
			}
			if (charLength < 0){
				$('button').prop("disabled", true);
				$('#char-count').css('color', 'red');
			}
			else {
				$('button').prop("disabled", false);
				$('#char-count').css('color', 'black');	
			}		
		});
});