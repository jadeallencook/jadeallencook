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
<tr valign="middle" height="100%">
<td height="100%" width="100%" align="center" valign="middle">

<h1>TICKET</h1>

<small><i>
This form is for existing clients only. If you do not<br />
have me on retainer, please use the quote form.<br />
</i></small>

<br />

<form name="ticketForm" method="post" action="sendTicket.php">
<table>
<tr><td align="right">Name: </td>
<td><input  type="text" name="name" maxlength="50" size="30"></td></tr>
<tr><td align="right">Email: </td>
<td><input  type="text" name="email" maxlength="50" size="30"></td></tr>
<tr><td align="right">Due Date: </td>
<td><input  type="text" name="date" maxlength="50" size="30"></td></tr>
<tr><td colspan="2" align="center">
<h3>PROJECT DETAILS</h3>
<textarea  name="project" maxlength="1000" cols="30" rows="6"></textarea><br />
<input type="submit" value="Submit"> 
</td></tr>
</table>
</form>

</td></tr></table>
</center>

</body>
</html>