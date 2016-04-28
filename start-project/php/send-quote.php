<?php

	// multiple recipients
	$to  = 'jadeallencook@gmail.com';
	
	// subject
	$subject = 'Their Final Quote';

	// message
	$message = '<html><head><title>Jade Allen Cook Quote Receipt</title></head><body>'; 
	$message .= $receipt;
	$message .= '</body></html>';

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Additional headers
	$headers .= 'From: Your Faithful Web Monitor<webmonitor@jadeallencook.com>' . "\r\n";

	// Mail it
	mail($to, $subject, $message, $headers);
	
?>
