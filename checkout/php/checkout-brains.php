<?php

	$quote = 0;
	
	// VIDEOS

	if(isset($_POST['commericalVideo']) && $_POST['commericalVideo'] == 'true') {
		echo '<p>Commercial Video</p>';
		if(isset($_POST['commericalVideoLength']) && is_numeric($_POST['commericalVideoLength']) && $_POST['commericalVideoLength'] > 3) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1500; }}
	
	if(isset($_POST['weddingVideo']) && $_POST['weddingVideo'] == 'true') {
		echo '<p>Wedding Video</p>';
		if(isset($_POST['weddingVideoLength']) && is_numeric($_POST['weddingVideoLength']) && $_POST['weddingVideoLength'] > 15) {
			$quote = $quote + 3000; } 
		else { $quote = $quote + 2000; }}
	
	if(isset($_POST['musicVideo']) && $_POST['musicVideo'] == 'true') {
		echo '<p>Music Video</p>';
		if(isset($_POST['musicVideoLength']) && is_numeric($_POST['musicVideoLength']) && $_POST['musicVideoLength'] > 3) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1500; }}
	
	if(isset($_POST['modelingVideo']) && $_POST['modelingVideo'] == 'true') {
		echo '<p>Modeling Video</p>';
		if(isset($_POST['modelingVideoLength']) && is_numeric($_POST['modelingVideoLength']) && $_POST['modelingVideoLength'] > 3) {
			$quote = $quote + 750; }
			 else { $quote = $quote + 400; }}
			 
	// WEBSITES
	
	if(isset($_POST['webdesign']) && $_POST['webdesign'] == 'true') {
		echo '<p>Complete Website</p>';
		if(isset($_POST['websitePages']) && is_numeric($_POST['websitePages']) && $_POST['websitePages'] > 5) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1500; }}
	
	if(isset($_POST['webRedesign']) && $_POST['webRedesign'] == 'true') {
		echo '<p>Website Redesign</p>';
		if(isset($_POST['exisitingPages']) && is_numeric($_POST['exisitingPages']) && $_POST['exisitingPages'] > 5) {
			$quote = $quote + 1500; } 
		else { $quote = $quote + 1000; }}
	
	if(isset($_POST['webStore']) && $_POST['webStore'] == 'true') {
		echo '<p>Online Webstore</p>';
		if(isset($_POST['storeItems']) && is_numeric($_POST['storeItems']) && $_POST['storeItems'] > 10) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1000; }}
	
	if(isset($_POST['webStore']) && $_POST['webRedesign'] == 'true') {
		if(isset($_POST['storeItems']) && is_numeric($_POST['storeItems']) && $_POST['storeItems'] > 10) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1000; }}
	
	if(isset($_POST['blog']) && $_POST['blog'] == 'true') { echo '<p>Wordpress or API Blog</p>';  $quote = $quote + 750; }
	
	if(isset($_POST['sql']) && $_POST['sql'] == 'true') { echo '<p>Custom SQL Databasing</p>'; $quote = $quote + 1500; }
	
	if(isset($_POST['seo']) && $_POST['seo'] == 'true') { echo '<p>SEO Updating & Integration</p>'; $quote = $quote + 1000; }
	
	if(isset($_POST['content']) && $_POST['content'] == 'true') { echo '<p>Written Content For Site, Social Media, & Blog</p>'; $quote = $quote + 500; }
	
	// PHOTO
	
	if(isset($_POST['commericalPhoto']) && $_POST['commericalPhoto'] == 'true') {
		echo '<p>Commerical Photoshoot</p>';
		if(isset($_POST['commercialNumber']) && is_numeric($_POST['commercialNumber']) && $_POST['commercialNumber'] > 5) {
			$quote = $quote + 2000; } 
		else { $quote = $quote + 1000; }}
		
	if(isset($_POST['weddingPhoto']) && $_POST['weddingPhoto'] == 'true') {
		echo '<p>Wedding Photoshoot</p>';
		if(isset($_POST['weddingNumber']) && is_numeric($_POST['weddingNumber']) && $_POST['weddingNumber'] > 25) {
			$quote = $quote + 2500; } 
		else { $quote = $quote + 2000; }}
		
	if(isset($_POST['musicPhoto']) && $_POST['musicPhoto'] == 'true') {
		echo '<p>Band Photoshoot</p>';
		if(isset($_POST['musicNumber']) && is_numeric($_POST['musicNumber']) && $_POST['musicNumber'] > 5) {
			$quote = $quote + 1500; } 
		else { $quote = $quote + 800; }}
		
	if(isset($_POST['modelingPhoto']) && $_POST['modelingPhoto'] == 'true') {
		echo '<p>Modeling Photoshoot</p>';
		if(isset($_POST['modelingNumber']) && is_numeric($_POST['modelingNumber']) && $_POST['modelingNumber'] > 10) {
			$quote = $quote + 1000; } 
		else { $quote = $quote + 500; }}
		
	// OTHER
	
	if(isset($_POST['businessCards']) && $_POST['businessCards'] == 'true') { echo '<p>Business Card Design</p>'; $quote = $quote + 150; }
	
	if(isset($_POST['fliers']) && $_POST['fliers'] == 'true') { echo '<p>Flier Design</p>'; $quote = $quote + 150; }
	
	if(isset($_POST['logo']) && $_POST['logo'] == 'true') { echo '<p>Logo Design</p>'; $quote = $quote + 500; }
	
	// Final Formula
	
	if ($quote > 2000 && $quote < 3000) {
		$quote = $quote - ($quote * .10);
	} else if ($quote > 3000 && $quote < 4000) {
		$quote = $quote - ($quote * .20);
	} else if ($quote > 4000 && $quote < 5000) {
		$quote = $quote - ($quote * .25);
	} else if ($quote > 5000) {
		$quote = $quote - ($quote * .30);
	}
	
	$quote = round($quote);

?>