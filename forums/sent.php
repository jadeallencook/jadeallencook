<!DOCTYPE HTML>

<html>

<head>
<?php include("css.php"); ?>
<?php include("../lib/info.php"); ?>
<title><?php echo $title; ?></title>
</head>

<body>

<center>
<table width="100%" height="100%" align="center">
<tr><td height="100%" width="100%" align="center" valign="middle">
<?php
   $to = "jadeallencook@gmail.com";
   $subject = "Ticket From: " . $_POST["name"];
   $message = "Name: " . $_POST["name"] . "\nEmail: " . $_POST["email"] . "\nDate: " . $_POST["date"] . "\n\nProject: " . $_POST["project"];
   $retval = mail ($to,$subject,$message);
   if( $retval == true )
   {
      echo "Your Message Was Sent!";
   }
   else
   {
      echo "Something Wasn't Right, Please Retry!";
   }
?>
</td></tr></table>
</center>

</body>
</html>