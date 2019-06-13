$("#8ball").click(function(){
	prompt("Ask Me Anything?");
    $("#8ball").fadeOut("fast");
    eightBall();
});

function eightBall(){

    /**
     * Answer Key
     * 1-10 = Signs Point To Yes
     * 11-20 = Reply Hazy, Try Again Later
     * 21-30 = My Sources Say No
     * 31-40 = Without A Doubt
     * 41-50 = Don't Count On It
     * 51-60 = Concentrate And Ask Again
     */

    var number = Math.floor(Math.random() * 60) + 1;

	// if (){
		$('#response').html("Signs Point To Yes!");
	}

	// else if (){
		$('#response').html("Reply Hazy, Try Again Later")
	}

	// else if (){
		$('#response').html("My Sources Say No")
	}

	// else if (){
		$('#response').html("Without A Doubt")
    }
    // else if (){
        $('#response').html("Don't Count On It")
    }
    // else {
        $('#response').html("Concentrate And Ask Again")
    }
    console.log(number);
    $('#answer').fadeIn("slow")
}

