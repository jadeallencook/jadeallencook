<table class="table table-bordered">

<tr>
	<td><b>Type</b></td>
	<td><b>Description</b></td>
	<td><b>Cost</b></td>
</tr>

<?php

	setlocale(LC_MONETARY, 'en_US');
	$quote = 0;
	$videoCost = 0;
	$photoCost =0;
	$webCost = 0;
	
	$receipt = '<table border="1px" cellpadding="5px"><tr><td><b>Type</b></td><td><b>Description</b></td><td><b>Cost</b></td></tr>';
	
	// VIDEOS
	if(isset($_POST['videoType'])) {
		 echo '<tr><td>Video</td>';
		 $receipt .=  '<tr><td>Video</td>';
	}
	
	if ($_POST['videoType'] == 'commerical') {
		// COMMERCIAL 
		$quote = $quote + 1500; 
		echo '<td>Commerical Video';
		$receipt .=  '<td>Commerical Video';
		if ($_POST['videoLength'] > 3) { 
			$quote = $quote + (($_POST['videoLength'] - 3) * 500); 
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType'] == 'social') { 
		// SOCIAL MEDIA
		$quote = $quote + 1000; 
		echo '<td>Social Media Video';
		$receipt .=  '<td>Social Media Video';
		if ($_POST['videoLength'] > 2) { 
			$quote = $quote + (($_POST['videoLength'] - 2) * 500); 
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType' ]== 'instructional') {
		// INSTRUCTIONAL 
		$quote = $quote + 700; 
		echo '<td>Instructional Video';
		$receipt .=  '<td>Instructional Video';
		if ($_POST['videoLength'] > 2) {
			$quote = $quote + (($_POST['videoLength'] - 2) * 500); 
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType'] == 'event') {
		// EVENT 
		$quote = $quote + 1500; 
		echo '<td>Event Coverage';
		$receipt .=  '<td>Event Coverage';
		if ($_POST['videoLength'] > 7) {
			$quote = $quote +(($_POST['videoLength'] - 7) * 250); 
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType'] == 'wedding') { 
		// WEDDING
		$quote = $quote + 3000; 
		echo '<td>Wedding Video';
		$receipt .=  '<td>Wedding Video';
		if ($_POST['videoLength'] > 15) {
			$quote = $quote +(($_POST['videoLength'] - 15) * 300);
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType'] == 'music') { 
		// MUSIC VIDEO
		$quote = $quote + 1000; 
		echo '<td>Music Video';
		$receipt .=  '<td>Music Video';
		if ($_POST['videoLength'] > 3) {
			$quote = $quote + (($_POST['videoLength'] - 3) * 500);
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	} else  if ($_POST['videoType'] == 'modeling') {
		//MODELING 
		$quote = $quote + 500; 
		echo '<td>Promotional Modeling Video';
		$receipt .=  '<td>Promotional Modeling Video';
		if ($_POST['videoLength'] > 3) {
			$quote = $quote + (($_POST['videoLength'] - 3) * 250);
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		} else {
			echo ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
			$receipt .=  ' <i>(length of ' . $_POST['videoLength'] . ' mins)</i>';
		}
		$videoCost = $quote;
		echo '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($videoCost)) . '</td>';
	}
	if(isset($_POST['videoType'])) { echo '<tr>'; }
			 
	// WEBSITES
	if(isset($_POST['webType'])) { 
		echo '<tr><td>Web</td>'; 
		$receipt .= '<tr><td>Web</td>'; 
	}
	
	if ($_POST['webType'] == 'complete') {
		// COMPLETE
		$currentQuote = $quote;
		$quote = $quote + 2000; 
		echo '<td>Complete Website';
		$receipt .= '<td>Complete Website';
		if ($_POST['webPages'] > 4) {
			$quote = $quote + (($_POST['webPages'] - 4) * 500);
			echo ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
			$receipt .= ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
		} else {
			echo ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
			$receipt .= ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
		}
		$webCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
	} else  if ($_POST['webType'] == 'ecommerce') { 
		// ECOMMERCE
		$currentQuote = $quote;
		$quote = $quote + 3000; 
		echo '<td>Ecommerce Website';
		$receipt .= '<td>Ecommerce Website';
		if ($_POST['webPages'] > 5) {
			$quote = $quote + (($_POST['webPages'] - 5) * 500);
			echo ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
			$receipt .= ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
		} else {
			echo ' <i>(with ' . $_POST['webPages'] . ' pages)</i>';
			$receipt .= ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
		}
		$webCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
	} else  if ($_POST['webType' ]== 'redesign') {
		// REDESIGN 
		$currentQuote = $quote;
		$quote = $quote + 1500; 
		echo '<td>Website Redesign';
		$receipt .= '<td>Website Redesign';
		if ($_POST['webPages'] > 3) {
			$quote = $quote + (($_POST['webPages'] - 3) * 250);
			echo ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
			$receipt .= ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
		} else {
			echo ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
			$receipt .= ' <i>(' . $_POST['webPages'] . ' redesigned pages)</i>';
		}
		$webCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($webCost)) . '</td>';
	}
	
	if(isset($_POST['blog']) && $_POST['blog'] == 'true') { 
		$quote = $quote + 750; 
		echo '<tr><td>Web</td><td>Blog Integration</td><td align="right">' . money_format('%n', 700) . '</td>';
		$receipt .=  '<tr><td>Web</td><td>Blog Integration</td><td align="right">' . money_format('%n', 700) . '</td>';
	}
	
	if(isset($_POST['sql']) && $_POST['sql'] == 'true') {
		$quote = $quote + 1500; 
		echo '<tr><td>Web</td><td>Custom SQL Databasing</td><td align="right">' . money_format('%n', 1500) . '</td>';
		$receipt .=  '<tr><td>Web</td><td>Custom SQL Databasing</td><td align="right">' . money_format('%n', 1500) . '</td>';
	}
	
	if(isset($_POST['seo']) && $_POST['seo'] == 'true') {
		$quote = $quote + 1000; 
		echo '<tr><td>Web</td><td>SEO Updating & Integration</td><td align="right">' . money_format('%n', 1000) . '</td>';
		$receipt .= '<tr><td>Web</td><td>SEO Updating & Integration</td><td align="right">' . money_format('%n', 1000) . '</td>';
	}
	
	if(isset($_POST['content']) && $_POST['content'] == 'true') {
		$quote = $quote + 500; 
		echo '<tr><td>Web</td><td>Written Content</td><td align="right">' . money_format('%n', 500) . '</td>';
		$receipt .=  '<tr><td>Web</td><td>Written Content</td><td align="right">' . money_format('%n', 500) . '</td>';
	}
	
	// PHOTO
	if(isset($_POST['photoType'])) { 
		echo '<tr><td>Photo</td>'; 
		$receipt .= '<tr><td>Photo</td>'; 
	}
	
	if ($_POST['photoType'] == 'commerical') {
		// COMMERCIAL 
		$currentQuote = $quote;
		$quote = $quote + 500; 
		echo '<td>Commerical Shoot ';
		$receipt .=  '<td>Commerical Shoot ';
		if ($_POST['photoLength'] > 2) { 
			$quote = $quote + (($_POST['photoLength'] - 2) * 250); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	}  else  if ($_POST['photoType'] == 'products') {
		// PRODCUTS 
		$currentQuote = $quote;
		$quote = $quote + 500; 
		echo '<td>Product Photos ';
		$receipt .= '<td>Product Photos ';
		if ($_POST['photoLength'] > 5) { 
			$quote = $quote + (($_POST['photoLength'] - 5) * 150); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	} else if ($_POST['photoType'] == 'event') {
		// EVENT
		$currentQuote = $quote;
		$quote = $quote + 1500; 
		echo '<td>Event Photo Coverage ';
		$receipt .= '<td>Event Photo Coverage ';
		if ($_POST['photoLength'] > 15) { 
			$quote = $quote + (($_POST['photoLength'] - 15) * 75); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	} else if ($_POST['photoType'] == 'wedding') {
		// WEDDING
		$currentQuote = $quote;
		$quote = $quote + 2500; 
		echo '<td>Wedding Photo Coverage ';
		$receipt .= '<td>Wedding Photo Coverage ';
		if ($_POST['photoLength'] > 25) { 
			$quote = $quote + (($_POST['photoLength'] - 25) * 150); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	} else if ($_POST['photoType'] == 'music') {
		// MUSIC
		$currentQuote = $quote;
		$quote = $quote + 1000; 
		echo '<td>Band Photo Shoot ';
		$receipt .= '<td>Band Photo Shoot ';
		if ($_POST['photoLength'] > 5) { 
			$quote = $quote + (($_POST['photoLength'] - 5) * 100); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	} else if ($_POST['photoType'] == 'modeling') {
		// MODELING
		$currentQuote = $quote;
		$quote = $quote + 500; 
		echo '<td>Promotional Modeling Shoot ';
		$receipt .=  '<td>Promotional Modeling Shoot ';
		if ($_POST['photoLength'] > 10) { 
			$quote = $quote + (($_POST['photoLength'] - 10) * 100); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	} else if ($_POST['photoType'] == 'senior') {
		// SENIOR
		$currentQuote = $quote;
		$quote = $quote + 1000; 
		echo '<td>Senior Photos ';
		$receipt .= '<td>Senior Photos ';
		if ($_POST['photoLength'] > 5) { 
			$quote = $quote + (($_POST['photoLength'] - 5) * 100); 
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		} else {
			echo ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
			$receipt .= ' <i>(total of ' . $_POST['photoLength'] . ' photos)</i>';
		}
		$photoCost = $quote - $currentQuote;
		echo '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
		$receipt .= '<td align="right">' . money_format('%n', round($photoCost)) . '</td>';
	}
	if(isset($_POST['videoType'])) { echo '<tr>'; }
	
		
	// OTHER
	
	if(isset($_POST['businessCards']) && $_POST['businessCards'] == 'true') {
		$quote = $quote + 150; 
		echo '<tr><td>Other</td><td>Business Card Design</td><td align="right">' . money_format('%n', 150) . '</td>';
		$receipt .= '<tr><td>Other</td><td>Business Card Design</td><td align="right">' . money_format('%n', 150) . '</td>';
	}
	
	if(isset($_POST['fliers']) && $_POST['fliers'] == 'true') {
		$quote = $quote + 150; 
		echo '<tr><td>Other</td><td>Flier Design</td><td align="right">' . money_format('%n', 150) . '</td>';
		$receipt .= '<tr><td>Other</td><td>Flier Design</td><td align="right">' . money_format('%n', 150) . '</td>';
	}
	
	if(isset($_POST['logo']) && $_POST['logo'] == 'true') {
		$quote = $quote + 300; 
		echo '<tr><td>Other</td><td>Logo Design</td><td align="right">' . money_format('%n', 300) . '</td>';
		$receipt .= '<tr><td>Other</td><td>Logo Design</td><td align="right">' . money_format('%n', 300) . '</td>';
	}
	
	// Final Formula
	
	if ($quote >= 2000 && $quote <= 3000) {
		$quote = $quote - ($quote * .10);
		$saved = money_format('%n', $quote - ($quote + ($quote * .10)));
		echo '<tr><td>10% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
		$receipt .= '<tr><td>10% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
	} else if ($quote > 3000 && $quote <= 4000) {
		$quote = $quote - ($quote * .20);
		$saved = money_format('%n', $quote - ($quote + ($quote * .20)));
		echo '<tr><td>20% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
		$receipt .= '<tr><td>20% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
	} else if ($quote > 4000 && $quote <= 5000) {
		$quote = $quote - ($quote * .25);
		$saved = money_format('%n', $quote - ($quote + ($quote * .25)));
		echo '<tr><td>25% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
		$receipt .= '<tr><td>25% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
	} else if ($quote >= 5000) {
		$quote = $quote - ($quote * .30);
		$saved = money_format('%n', $quote - ($quote + ($quote * .30)));
		echo '<tr><td>30% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
		$receipt .= '<tr><td>30% OFF</td><td>Just because I like you!</td><td align="right">' . $saved . '</td>';
	}
	
	$quote = round($quote);
	$half = round($quote / 2);
	
	echo '<tr><td><b>Total</b></td><td>Your total project costs -</td><td align="right">' . money_format('%n', $quote) . '</td>';
	$receipt .= '<tr><td><b>Total</b></td><td>Your total project costs -</td><td align="right">' . money_format('%n', $quote) . '</td>';

?>

</table>