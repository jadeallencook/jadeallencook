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

<h1>QUOTE</h1>
<small><i>
If you have numerous projects per month you need fulfilled,<br />
please directly call me to set up a retainer!<br />
</i></small>

<br />

<table align="center" border="0">
<form name="quoteForm" method="post" action="sendQuote.php">

<tr><td align="right">Name: </td><td align="left">
<input  type="text" name="name" maxlength="50" size="30"></td></tr>

<tr><td align="right">Email: </td><td align="left">
<input  type="text" name="email" maxlength="50" size="30"></td></tr>

<tr><td align="right">Phone: </td><td align="left">
<input  type="text" name="phone" maxlength="50" size="30"></td></tr>

<tr><td align="right">Budget: </td><td align="left">
<input  type="text" name="budget" maxlength="50" size="30"></td></tr>

<tr><td colspan="2" align="center">
<h3>PROJECT DETAILS</h3>
<textarea name="project" maxlength="1000" cols="40" rows="6"></textarea>

<br /><br />
<input type="submit" value="SEND IT OVER!"> 

</form>
</td></tr></table>
</center>

</body>
</html>