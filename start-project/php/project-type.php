<center>
<div id="project-container">

<form method="post" action="index.php">

<?php
	// multiple recipients
	$to  = 'jadeallencook@gmail.com';

	// subject
	$subject = "Someone Wants To Start A Project!";
	
	// Clean Inputs
	$name = strip_tags($_POST['name']);
	$email = strip_tags($_POST['email']);
	$phone = strip_tags($_POST['phone']);
	$company = strip_tags($_POST['company']);
	$website = strip_tags($_POST['website']);
	$location = strip_tags($_POST['location']);

	// message
	$message = '<html><head><title>Jade Allen Cook Website Quote</title></head><body>'; 
	if(isset($_POST['name']) && strlen($name) > 2) { $message .= '<p>' . $name . ' is interested in starting a project with you.</p>';}
	if(isset($_POST['email']) && strlen($email) > 2) { $message .=  '<p>You can reach him/her at this email: ' .  $email . '</p>';}
	if(isset($_POST['phone']) && strlen($phone) > 2) { $message .= '<p>This is thier phone number as well: ' .  $phone . '</p>';}
	if(isset($_POST['company']) && strlen($company) > 2) { $message .= '<p>The company name is "' .  $company . '"<p>';}
	if(isset($_POST['website']) && strlen($name) > 2) { $message .= '<p>Also, they have an existing site you can find here: ' .  $website . '</p>';}
	if(isset($_POST['video']) && $_POST['video'] == 'true') {$message .= '<p>Interested in video -</p>';}
	if(isset($_POST['photo']) && $_POST['photo'] == 'true') {$message .= '<p>Interested in photos -</p>';}
	if(isset($_POST['web']) && $_POST['web'] == 'true') {$message .= '<p>Interested in web design -</p>';}
	if(isset($_POST['location']) && strlen($location) > 2) { $message .= '<p>' .  $location . ' is where they are located.</p>';}
	$message .= '<br /><br /><p>Good luck sir -</p><p>Your Faithful Web Monitor ' . date("Y/m/d");
	$message .= '</body></html>';

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Additional headers
	$headers .= 'From: Your Faithful Web Monitor<webmonitor@jadeallencook.com>' . "\r\n";

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
