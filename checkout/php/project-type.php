<center>
<div id="project-container">

<form method="post" action="index.php">

<?php
	// multiple recipients
	$to  = 'jadeallencook@gmail.com';

	// subject
	$subject = date("Y/m/d") . ' - ';
	if(isset($_POST['name'])) { $subject .= strip_tags($_POST['name']) . ' - '; }
	$subject .= 'Quote Form';

	// message
	$message = '<html><head><title>Jade Allen Cook Website Quote</title></head><body>'; 
	if(isset($_POST['name'])) { $message .= '<p>' . strip_tags($_POST['name']) . ' is interested in starting a project with you.</p>';}
	if(isset($_POST['email'])) { $message .=  '<p>You can reach him/her at this email: ' .  strip_tags($_POST['email']) . '</p>';}
	if(isset($_POST['phone'])) { $message .= '<p>This is thier phone number as well: ' .  strip_tags($_POST['phone']) . '</p>';}
	if(isset($_POST['company'])) { $message .= '<p>The company name is "' .  strip_tags($_POST['company']) . '"<p>';}
	if(isset($_POST['website'])) { $message .= '<p>Also, they have an existing site you can find here: ' .  strip_tags($_POST['website']) . '</p>';}
	if(isset($_POST['video']) && $_POST['video'] == 'true') {$message .= '<p>Interested in video -</p>';}
	if(isset($_POST['photo']) && $_POST['photo'] == 'true') {$message .= '<p>Interested in photos -</p>';}
	if(isset($_POST['web']) && $_POST['web'] == 'true') {$message .= '<p>Interested in web design -</p>';}
	if(isset($_POST['location'])) { $message .= '<p>' .  strip_tags($_POST['location']) . ' is where they are located.</p>';}
	$message .= '<br /><br /><p>Good luck sir -</p><p>Your Faithful Web Monitor';
	$message .= '</body></html>';

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Additional headers
	$headers .= 'To: Jade Allen Cook <jadeallencook@gmail.com' . "\r\n";
	$headers .= 'From: Quote Request<quote@jadeallencook.com>' . "\r\n";

	// Mail it
	mail($to, $subject, $message, $headers);
	
	//  Load modules
	
	if(isset($_POST["video"]) && $_POST["video"] == "true") {
		include_once("php/video.php");
		echo '<br /><br /><br />';
	}
	
	if(isset($_POST["web"]) && $_POST["web"] == "true") {
		include_once("php/web.php");
		echo '<br /><br /><br />';
	}
		
	if(isset($_POST["photo"]) && $_POST["photo"] == "true") {
		include_once("php/photo.php");
		echo '<br /><br /><br />';
	}
	
	include_once("php/etc.php");
	echo '<br /><br /><br />';
	
?>
	
	<input name="step" value="checkout" type="hidden">
	<input type="submit" class="btn btn-default get-my-quote" value="Get my quote!">
</form>
		
</div>
</center>
