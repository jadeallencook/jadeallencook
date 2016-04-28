<center>
<div id="project-types">
	
	<?php
	
		if(isset($_POST["video"]) && $_POST["video"] == "true") {
			include_once("php/video.php");
		} else if(isset($_POST["web"]) && $_POST["web"] == "true") {
			include_once("php/video.php");
		} else if(isset($_POST["photo"]) && $_POST["photo"] == "true") {
			include_once("php/video.php");
		} else {
			include_once("questions/video.php");
		}
	
	?>
		
</div>
</center>
