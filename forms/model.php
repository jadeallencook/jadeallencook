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

<h1>MODELS</h1>
<small><i>
Whether you're new to the industry, or have an extensive portfolio,<br />
please be sure to submit links to your portfolio! I am always looking<br />
for new models for both just for fun, and paid shoots!<br />
</i></small>

<br />

<table align="center" border="0">
<form name="ticketForm" method="post" action="sendModel.php">

<tr><td align="right">Name: </td><td align="left">
<input  type="text" name="name" maxlength="50" size="30"></td></tr>

<tr><td align="right">Email: </td><td align="left">
<input  type="text" name="email" maxlength="50" size="30"></td></tr>

<tr><td align="right">Phone: </td><td align="left">
<input  type="text" name="phone" maxlength="50" size="30"></td></tr>

<tr><td colspan="2" align="center">
<h3>PORTFOLIO LINKS</h3>
</td></tr>

<tr><td align="right">Link 1: </td><td align="left">
<input  type="text" name="link1" maxlength="200" size="30"></td></tr>

<tr><td align="right">Link 2: </td><td align="left">
<input  type="text" name="link2" maxlength="200" size="30"></td></tr>

<tr><td align="right">Link 3: </td><td align="left">
<input  type="text" name="link3" maxlength="200" size="30"></td></tr>

<tr><td colspan="2" align="center">
<h3>COMMENTS</h3>
<textarea name="comments" maxlength="1000" cols="40" rows="6"></textarea>

<br /><br />
<input type="submit" value="SEND IT OVER!"> 

</form>
</td></tr></table>
</center>

</body>
</html>