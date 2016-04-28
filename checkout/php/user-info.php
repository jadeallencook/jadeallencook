<center>

<h2 class="section-heading">Let's get your project started!</h2>
<p>First of all, who do I have the pleasure of working with?</p>

<form action="index.php" method="post" id="checkout-form">
<input name="step" value="project-type" type="hidden">
<input type="text" class="form-control question-input"  name="name" placeholder="Steve Miller" required>
<input type="text" class="form-control question-input"  name="location" placeholder="Salt Lake City, UT" required>
<input type="text" class="form-control question-input"  name="phone" placeholder="(801) 876-5309" required>
<input type="text" class="form-control question-input"  name="email" placeholder="steve@stevesdiner.com" required>
<input type="text" class="form-control question-input"  name="website" placeholder="stevesdiner.com">
<input type="text" class="form-control question-input"  name="company" placeholder="Steve's Diner">
<input type="text" class="form-control question-input"  name="promo" placeholder="Promo Code">
<input type="text" class="form-control question-input"  name="message" placeholder="This is what I want to do!">

<center>
<div id="project-types">
<center>

	<!-- Video -->
	<div class="project">
		<h2>Video</h2>
		<span class="fa-stack fa-4x">
			<i class="fa fa-circle fa-stack-2x text-primary"></i>
			<i class="glyphicon glyphicon-film fa-stack-1x fa-inverse"></i>
		</span>
		<div class="switch">
			<input id="video" class="cmn-toggle cmn-toggle-round" type="checkbox" name="video" value="true">
			<label for="video"></label>
		</div>
        </div>
	
	<!-- Web Design -->
	<div class="project">
		<h2>Web</h2>
		<span class="fa-stack fa-4x">
			<i class="fa fa-circle fa-stack-2x text-primary"></i>
			<i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
		</span>
		<div class="switch">
			<input id="web" class="cmn-toggle cmn-toggle-round" type="checkbox" name="web" value="true">
			<label for="web"></label>
		</div>
	</div>
	
	<!-- Photo -->
	<div class="project">
		<h2>Photo</h2>
		<span class="fa-stack fa-4x">
			<i class="fa fa-circle fa-stack-2x text-primary"></i>
			<i class="glyphicon glyphicon-camera fa-stack-1x fa-inverse"></i>
		</span>
		<div class="switch">
			<input id="photo" class="cmn-toggle cmn-toggle-round" type="checkbox" name="photo" value="true">
			<label for="photo"></label>
		</div>
	</div>

</center>
</div>
</center>

<br />

<input type="submit" class="btn btn-default" value="Get started!">
</form>

</center>