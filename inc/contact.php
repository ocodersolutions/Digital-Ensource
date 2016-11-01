<style type="text/css">

	#contactTitle {
		margin-top: 30px;
		text-align: center;
	    font-size: 125px;
	    font-family: "bebas_neueregular", Arial;
	    letter-spacing: 30px;
	    width: 100%;
	}
	.contact-form{
        margin-top: 40px;
        width: 100%;
	}

	.input-contact{
		height: 30px;
		border: 3px solid #fff; 
		margin-top: 15px;
		color: white;  
		background-color: rgba(255, 255, 255, 0); 
		width: 350px; 
		display: block; 
		
		font-family: 'bebas_neuebold';
	    padding-left: 10px;
	}
	#v-mobile .input-contact{
		margin-top: 0px;
		margin-bottom: 15px;
	}
	::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    white;
	}
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    white;
	   opacity:  1;
	}
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    white;
	   opacity:  1;
	}
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
	   color:    white;
	}
	#submit{
		color: black;
    	background: white;
    	font-family: "GT-Walsheim-Medium";
    	font-size: 18px;
    	width: 150px;
	    border: 2px solid white;
	    border-radius: 5px;
        display: block;
    	margin: 15px auto;
    	cursor: pointer;
	}	
	#v-mobile #submit{
		width: 80%;
	}
	#v-desktop .contact-block{
		float: left;
		font-size: 20px;
		margin: 0px 90px;
		margin-left: 85px;
    	margin-bottom: 10px;
	}
	#v-desktop .contact-block .title{
		font-family: "GT-Walsheim-Bold";
	}
	#v-mobile .contact-block .title{
		font-size: 16px;
		font-family: "GT-Walsheim-Bold";
	}
	#v-desktop .contact-block .info{
		font-size: 16px;
		font-family: "GT-Walsheim-Medium";
	}
	#v-mobile .contact-block .info{
		font-size: 13px;
		word-break: break-all;
		font-family: "GT-Walsheim-Medium";
		padding-right: 20px;
	}
	#v-desktop #contactHolder{
		/*width: 100% !important;*/
	}
	#v-desktop #contactHolder .left-contact{
		width: 50%;
		float: left;
		margin-top: 40px;
	}
	#v-desktop #contactHolder .right-contact{
		width: 50%;
		float: left;
	}
	.notice{
		text-align: center;
		font-family: 'GT-Walsheim-Medium';
		font-size: 17px; 
		width: 75%;
	}
	#v-mobile .notice{
		font-size: 10px; 
		margin: 0 auto;
	}
	#success{
		color: #009688; 
	}
	#error{
		color: red;
	}
	
</style>

<div id="contactHolder">
	<div id="contactName">DIGITAL ENSOURCE</div>
	<div class="left-contact">
		<div class="contact-block"> <div class="title">Phone:</div><div class="info"> Sales: 1888-831-4148<br/>Support: 1877-854-8879</div></div>
		<div class="contact-block"> <div class="title">Address:</div><div class="info"> 30-70 E Beaver Creek Road Richmond Hill ON L4B 3B2</div></div>
		<div class="contact-block"> <div class="title">Email:</div><div class="info"> sales@digitalensource.com<br/>247support@digitalensource.com</div></div>
	</div>
	
	<div class="right-contact">
		<form class="contact-form" method="post">
			<input required type="text" name="name" class="input-contact" align="center" placeholder="Full Name"/>
			<input required type="email" name="email" class="input-contact" align="center" placeholder="Email" />
			<textarea  required class="input-contact" name="message" type="text" placeholder="Message" style="height:80px; width: 350px; display: block;"></textarea>
			<button id="submit" type="submit" >Submit</button> 
			<div><img id="loading" style="width: 150px;margin: -70px auto; display: none;" src="img/ajax-load.gif"></div>
		</form>

		<p id="success" style="display:none;" class="notice"> Email Sent. Thanks for your contact !</p>
	    <p id="error" style="display:none;" class="notice"> An error occurred</p>
	</div>





	<div class="clear"></div>

</div>
<style type="text/css">
</style>
<div id="stageHolder" style="z-index: -9;">
	
	<div id="contactTitle" class="title-page">Contact</div>
	<div id="projectsStageHolder"></div>
	<div id="navigationProjects"></div>
	<div id="navigationPhotos"></div>

</div>

<script type="text/javascript">
$( "form.contact-form" ).submit(function( event ) {
	$('.notice').css('display','none');
	$('#loading').css('display','block');
	form = $(this).serialize();
	$.ajax({
        url : "mailer.php",
        type : "post",
        dataType:"text",
        data : {
            'form' : form,
        },
        success: function (result){
        	$('#loading').css('display','none');
        	if(result == 1){
        		$('#success').fadeIn();
        	}else{
        		$('#error').fadeIn();
        	}
        }
    });
	event.preventDefault();
});

// $( document ).ready(function() {
//     $("#contactTitle").css('display', 'block');
// 			var $all_msg = $('#contactTitle');
// 			  //get a list of letters from the welcome text
// 			  var $wordList = $('#contactTitle').text().split("");
// 			  //clear the welcome text msg
// 			  $('#contactTitle').text("");
// 			  //loop through the letters in the $wordList array
// 			  $.each($wordList, function(idx, elem) {
// 			    //create a span for the letter and set opacity to 0
// 			    var newEL = $("<span/>").text(elem).css({
// 			      opacity: 0
// 			    });
// 			    //append it to the welcome message
// 			    newEL.appendTo($all_msg);
// 			    //set the delay on the animation for this element
// 			    newEL.delay(idx * 70);
// 			    //animate the opacity back to full 1
// 			    newEL.animate({
// 			      opacity: 1
// 			    }, 1100);
// 			  });
// });
</script>