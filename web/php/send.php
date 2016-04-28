<center>

<h2 class="section-heading">Sending it off -</h2>
<p>I'll be following up shortly with a quote for your custom website!</p>

<a href="http://jadeallencook.com">Click here to return to the homepage</a>

</center>

<?php

	function clean($value) {
		return filter_var($value, FILTER_SANITIZE_STRING);
	}

	// multiple recipients
	$to  = 'jadeallencook@gmail.com';
	
	// subject
	$subject = 'Website Quote Request';

	// message
	$message = '<html><head><title>Website Quote Request</title></head><body>'; 
	
	if(isset($_POST['name']) && $_POST['name'] !== '') { $message .= '<p>' . clean($_POST['name']) . ' would like to start a web project.</p>' ; }
	if(isset($_POST['location']) && $_POST['location'] !== '') { $message .= '<p>' . clean($_POST['location']) . ' is where he/she is located.</p>' ; }
	if(isset($_POST['phone']) && $_POST['phone'] !== '') { $message .= '<p>You can call him/her  at: ' . clean($_POST['phone']) . '</p>' ; }
	if(isset($_POST['email']) && $_POST['email'] !== '') { $message .= '<p>Or send him/her an email at: ' . clean($_POST['email']) . '</p>' ; }
	if(isset($_POST['website']) && $_POST['website'] !== '') { $message .= '<p>His/her exsisting website is:' . clean($_POST['website']) . '</p>' ; }
	if(isset($_POST['company']) && $_POST['company'] !== '') { $message .= '<p>And ' . clean($_POST['company']) . ' is the company name.</p>' ; }
	
	$message .= '<br />';
	
	if(isset($_POST['facebook']) || isset($_POST['twitter']) || isset($_POST['instagram']) || isset($_POST['tumblr'])) { 
		$message .= '<p>All of their social media links -';
	}
	
	if(isset($_POST['facebook']) && $_POST['facebook'] !== '') { $message .= '<p>' . clean($_POST['facebook']) . '</p>' ; }
	if(isset($_POST['twitter']) && $_POST['twitter'] !== '') { $message .= '<p>' . clean($_POST['twitter']) . '</p>' ; }
	if(isset($_POST['instagram']) && $_POST['instagram'] !== '') { $message .= '<p>' . clean($_POST['instagram']) . '</p>' ; }
	if(isset($_POST['tumblr']) && $_POST['tumblr'] !== '') { $message .= '<p>' . clean($_POST['tumblr']) . '</p>' ; }
	
	$message .= '<br />';
	
	if(isset($_POST['other1']) || isset($_POST['other2']) || isset($_POST['other3']) || isset($_POST['other4'])) { 
		$message .= '<p>Sites that they like -';
	}
	
	if(isset($_POST['other1']) && $_POST['other1'] !== '') { $message .= '<p>' . clean($_POST['other1']) . '</p>' ; }
	if(isset($_POST['other2']) && $_POST['other2'] !== '') { $message .= '<p>' . clean($_POST['other2']) . '</p>' ; }
	if(isset($_POST['other3']) && $_POST['other3'] !== '') { $message .= '<p>' . clean($_POST['other3']) . '</p>' ; }
	if(isset($_POST['other4']) && $_POST['other4'] !== '') { $message .= '<p>' . clean($_POST['other4']) . '</p>' ; }
	
	$message .= '<br />';
	
	if(isset($_POST['adj1']) || isset($_POST['adj2']) || isset($_POST['adj3']) || isset($_POST['adj4'])) { 
		$message .= '<p>Adjectives to describe their site -';
	}
	
	if(isset($_POST['adj1']) && $_POST['adj1'] !== '') { $message .= '<p>' . clean($_POST['adj1']) . '</p>' ; }
	if(isset($_POST['adj2']) && $_POST['adj2'] !== '') { $message .= '<p>' . clean($_POST['adj2']) . '</p>' ; }
	if(isset($_POST['adj3']) && $_POST['adj3'] !== '') { $message .= '<p>' . clean($_POST['adj3']) . '</p>' ; }
	if(isset($_POST['adj4']) && $_POST['adj4'] !== '') { $message .= '<p>' . clean($_POST['adj4']) . '</p>' ; }
	
	$message .= '<br />';
	
	if(isset($_POST['color1']) || isset($_POST['color2']) || isset($_POST['color3']) || isset($_POST['color4'])) { 
		$message .= '<p>Colors they want to use -';
	}
	
	if(isset($_POST['color1']) && $_POST['color1'] !== '') { $message .= '<p>' . clean($_POST['color1']) . '</p>' ; }
	if(isset($_POST['color2']) && $_POST['color2'] !== '') { $message .= '<p>' . clean($_POST['color2']) . '</p>' ; }
	if(isset($_POST['color3']) && $_POST['color3'] !== '') { $message .= '<p>' . clean($_POST['color3']) . '</p>' ; }
	if(isset($_POST['color4']) && $_POST['color4'] !== '') { $message .= '<p>' . clean($_POST['color4']) . '</p>' ; }
	
	$message .= '</body></html>';

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Additional headers
	$headers .= 'From: Your Faithful Web Monitor<webmonitor@jadeallencook.com>' . "\r\n";

	// Mail it
	mail($to, $subject, $message, $headers);
	
?>
