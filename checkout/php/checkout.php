<center>
<div id="project-container">

<h2 class="section-heading">Your Quote Has Arrived!</h2>

<?php include_once('php/checkout-brains.php'); ?>

<h2> $<?php echo $quote; ?></h2>

<form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_live_JwQ582yb0ZWJHMuskCNDsdYN"
    data-amount="<?php echo $quote; ?>00"
    data-name="Jade Allen Cook"
    data-description="Your Project ($<?php echo $quote; ?>.00)"
    data-image="http://jadeallencook.com/img/team/jadeallencook.jpg">
  </script>
</form>

</div>
</center>