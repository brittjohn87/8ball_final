$("#8ball").click(function(){
    prompt("Ask Me Anything?");
    eightBall();
    reset8ball();
});

function eightBall(){

    /**
     * Answer Key
     * 1-10 = 
     * 11-20 = 
     * 21-30 = 
     * 31-40 = 
     * 41-50 = 
     * 51-60 = 
     */

    /**
     * Phrases
     * Signs Point To Yes
     * Without A Doubt
     * Reply Hazy, Try Again Later
     * Concentrate And Ask Again
     * My Sources Say No
     * Don't Count On It
     */

    var number = Math.floor(Math.random() * 60) + 1;

	if (number <= 10){
		$('#response').html("Signs Point To Yes");
	}

	else if (number >= 11 && number <= 20 ){
		$('#response').html("Without A Doubt")
	}

    else if (number >= 21 && number <= 30){
		$('#response').html("Reply Hazy, Try Again Later")
	}

	else if (number >= 31 && number <= 40){
		$('#response').html("Concentrate And Ask Again")
    }
    else if (number >= 41 && number <= 50){
        $('#response').html("My Sources Say No")
    }
    else {
        $('#response').html("Don't Count On It")
    }
    console.log(number);
    $("#8ball").fadeOut(300);
    $('#answer').delay(300).fadeIn(200)
}

function reset8ball() {
   // a function to reset our 8ball 
   $("#answer").click(function(){
       $("#answer").fadeOut(300)
       $("#8ball").fadeIn(300)
   })
}
