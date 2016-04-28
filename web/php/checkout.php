<center>
<div id="project-container">

<h2 class="section-heading">Your Quote Has Arrived!</h2>

<?php 
	include_once('php/checkout-brains.php'); 
	include_once('php/send-quote.php'); 
?>

<h2><?php echo money_format('%n',$quote); ?> TOTAL<br />
<small><?php echo money_format('%n',$half); ?> TODAY</small></h2>

<form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_live_JwQ582yb0ZWJHMuskCNDsdYN"
    data-amount="<?php echo $half; ?>00"
    data-name="Jade Allen Cook"
    data-description="Half Down ($<?php echo $half; ?>.00)"
    data-image="http://jadeallencook.com/img/team/jadeallencook.jpg">
  </script>
</form>

<br />

<small><i>
If you are not located near <?php echo $currentTown; ?> -<br />
<b>Travel costs may apply</b><br />
(approx. +$500)
</i></small>

</div>
</center>