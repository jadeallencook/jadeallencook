<!DOCTYPE html>
<html lang="en">

<head>

<?php include_once("php/meta.php"); ?>

</head>

<body id="page-top" class="index">

<?php include_once("../lib/googleAnalytics.php"); ?>

  <!-- Checkout Content Jade Allen Cook 7/20/15  -->
  <div id="questions">
  
<?php 

	if(isset($_POST["send"]) == "true") {
		include_once("php/send.php");
	} else {
		include_once("php/user-info.php");
	}
	
?>
  
</div><div id="right-section"></div>

</body>

</html>
