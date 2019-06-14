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

	if (){
		$('#response').html();
	}

	else if (){
		$('#response').html()
	}

    else if (){
		$('#response').html()
	}

	else if (){
		$('#response').html()
    }
    else if (){
        $('#response').html()
    }
    else {
        $('#response').html()
    }
    console.log(number);
    $("#8ball").fadeOut(300);
    $('#answer').delay(300).fadeIn(200)
}

function reset8ball() {
   // a function to reset our 8ball 
}
