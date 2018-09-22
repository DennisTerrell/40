$( document ).ready(function() {

  button = $('.card__button');

  button.on('click', function clicked() {
	  $(this).addClass('card__button--triggered');
	  $(this).off('click', clicked);

    var count=1;
    var counter=setInterval(timer, 100);

    function timer(){
    count += 1;
    if (count === 41)
    {
    	clearInterval(counter);
	  	
	  	setTimeout(function(){
	  		count = 40;
	  		document.getElementById("num").innerHTML=count;
  
  			button.removeClass('card__button--triggered');
  			button.on('click', clicked);
  			
  		}, 800);
  
       return;
    }
    
    document.getElementById("num").innerHTML=count;
    window.onload = timer;
  }
 });
 
  $("#starter").addClass('card__button--triggered');

});


