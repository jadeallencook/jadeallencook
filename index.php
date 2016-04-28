<!DOCTYPE html>
<html lang="en">

<head>

	<!-- Meta Data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Jade Allen Cook is a traveling artist skilled in video production, photography, graphic design, and web development">
    <meta name="author" content="Jade Allen Cook">
    <?php include("lib/info.php"); ?>

    <title>Jade Allen Cook - Artist</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Theme CSS -->
    <link href="css/agency.css" rel="stylesheet">

    <!-- Google and Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Support for IE -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

	<?php include_once("lib/googleAnalytics.php"); ?>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Jade Allen Cook</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#services">Skills</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">Resume</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#team">About</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Traveling Artist</div>
                <div class="intro-heading">Currently In <?php echo $currentTown; ?></div>
                <a href="#" class="page-scroll btn btn-xl">Start A Project!</a>
            </div>
        </div>
    </header>

    <!-- Skills Section -->
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Skills</h2>
                    <br />
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="glyphicon glyphicon-film fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Video Production</h4>
                    <p class="text-muted">Coordinate videos that show off your flare to be shared and marketed via your website, social media, and television.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="glyphicon glyphicon-camera fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Photography</h4>
                    <p class="text-muted">Capture stunning photos for your portfolio, company or  products using the perfect lighting, stage and props to tell the story.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Web Design</h4>
                    <p class="text-muted">Create beautiful responsive web designs using HTML5, CSS3, PHP, Javascript & Bootstrap - Connect social media APIs, code custom blogs, and build unique checkouts/calls to action.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Grid Section -->
    <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Check out some of the projects I have worked on.</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="https://www.youtube.com/playlist?list=PLkj0Wb8QyEERMaB00_n_gzq7MMiY6jWMS" class="portfolio-link" data-toggle="modal" target="_blank">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/filming.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Film Reel</h4>
                        <p class="text-muted">Video Production</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://jadeallencook.tumblr.com/post/115345948049/old-world-antieks-photographed-by-jade-allen-cook" class="portfolio-link" data-toggle="modal" target="_blank">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/old-world.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Old World Antieks</h4>
                        <p class="text-muted">Photography</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/diib.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>diib</h4>
                        <p class="text-muted">UI/UX</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/dff.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Darn Fresh Food</h4>
                        <p class="text-muted">Web Development</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://jadeallencook.tumblr.com/post/113543776594/model-jamie-patyk-photographer-jade-allen-cook" class="portfolio-link" data-toggle="modal" target="_blank">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/jamie.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Jamie Patyk</h4>
                        <p class="text-muted">Photography</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="https://www.youtube.com/watch?v=46yrM_jc79Y" class="portfolio-link" data-toggle="modal" target="_blank">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/allegro.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Allegro Wedding</h4>
                        <p class="text-muted">Video Production</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Resume Section -->
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Resume</h2>
                    <h3 class="section-subheading text-muted">A quick overview of some of the projects  and people I have worked with.</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <ul class="timeline">
     
<?php 
	$image = "1";
	$year = "2009";
	$business = "Niko's Family Diner";
	$about = "Created a website using HTML and CSS, along with creating and maintaining the site, I shot a short commercial that was integrated into the finished production and used to strategically market the diner.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "2";
	$year = "2009";
	$business = "A Clean Cigarette";
	$about = "Before the e-cig trend started booming, I helped a local entrepreneur market his “clean cigarette” by shooting video testimonials and designing graphics that were used for online and in print. Soon after, the market and awareness began to increase, and he went from a small kiosk in the mall to owning a total of twelve locations in Michigan!";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "3";
	$year = "2010";
	$business = "Imagine Marketing";
	$about = "Upon graduation I immediately began working with a firm in Detroit shooting promotional videos, creating graphics, and helping maintain ecommerce sites.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "4";
	$year = "2011";
	$business = "Stage Level Entertainment";
	$about = "Along with producing music videos, I also made productions for up coming events, rosters, and viral Facebook marketing clips!";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "5";
	$year = "2012";
	$business = "Wysong";
	$about = "Created user friendly websites for pet products using HTML/CSS/JS/PHP/FLASH in Adobe Dreamweaver and Fireworks. At the same time I also began acquiring knowledge for HTACCESS, and building my corporate networking skills. Infomercials were also part of my position, along with designing graphics and product photography.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "6";
	$year = "2013";
	$business = "Denver Electric & Lighting";
	$about = "Developed a new site using HTML/CSS/JS/PHP and the Twitter Bootstrap framework, I also managed to redirect all of their existing blog posts from their current hierarchy and integrate them into the fresh design to save metadata. An electrical how-to video was also produced for YouTube to help market them on social media networks.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "7";
	$year = "2013";
	$business = "Jay Wayne";
	$about = "Filmed a music video for this christian rapper which included a backstory and a large crew that I directed, and edited in Adobe Premiere to get the final production.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "8";
	$year = "2014";
	$business = "Zef’s Coney Island";
	$about = "Produced multiple video productions for social media marketing, and developed a custom website using HTML/CSS/PHP. On the site I also integrated Google Maps, their menu, and a Facebook comment/like section.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "9";
	$year = "2014";
	$business = "Le Ando’s Cafe";
	$about = "Shot food photography to implement into Facebook promotional graphics edited in Photoshop, I also produced an online marketing video.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "10";
	$year = "2014";
	$business = "GetRoFit";
	$about = "Created a high quality video production for a fitness guru looking to expand his clientele.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "11";
	$year = "2014";
	$business = "Easy Growin'";
	$about = "Coded a fully functional Paypal e-commerce website with hundreds of aquatic flowers using HTML/CSS/PHP, Paypal, and FaceBook. Each plant had several rows of information such as name, type, color, and description. The graphics were supplied from the plant identification tags that were scanned and then cropped.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "12";
	$year = "2014";
	$business = "Old Town Tattoo";
	$about = "Developed a trendy viral video used on social media for the artist Cobra Kai.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "13";
	$year = "2014";
	$business = "Smokin' Vapor";
	$about = "Produced two commercials, and designed a new site using HTML/CSS/PHP/JS & the Twitter Bootstrap framework. The site also included a Facebook like/comment section, photo carousel, and a custom carousel to view/read about all of their e-cigs.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "14";
	$year = "2015";
	$business = "Peacock Park Design";
	$about = "Craft videos were shot to market on Facebook, Tumblr, and Pinterest. Traveled to Texas, Atlanta, Pennsylvania and Michigan capturing footage for a reality show pilot. Had the chance to meet Rachel Ashwell (the founder of “shabby chic”) along with Amie, Janie & Jolie Sikes from the “Junk Gypsies” in Round Top Texas. Shot thousands of product shots and designed graphic ads for magazine articles in such national subscriptions like “Where Women Create”. Redesigned their current site using HTML/CSS/PHP & Photoshop, created email templates for email marketing, shot for and edited a coffee table book, designed products, blogged articles, and also began acquiring vast knowledge in art, design, history, and architecture.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "15";
	$year = "2015";
	$business = "The Rendezvous";
	$about = "Created new custom site using HTML/CSS/PHP & Photoshop to market and sell spots for upcoming classes, designed fliers, and shot a reality show pilot.";
		include("projects/project-right.php"); 
?>
                        
<?php 
	$image = "16";
	$year = "2015";
	$business = "Two Friends Grooming";
	$about = "Coded a HTML/CSS/PHP & Photoshop website, shot a professional commercial, and took photos to be integrated in the site design.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "17";
	$year = "2015";
	$business = "Bay Auto Brokers";
	$about = "Designed both a Facebook & YouTube page with custom graphics, then marketed the page with online promotional videos and marketing material relevant to the client’s business.";
		include("projects/project-right.php"); 
?>

<?php 
	$image = "dff";
	$year = "2015";
	$business = "Darn Fresh Food";
	$about = "Developed a unquie and easy to use website that accepts payments. The user enters their zipcode, selects an event, and then adds the food they want to their basket. Also redesigned the logo, implemented a custom WordPress blog, and constructed social media images to match the new brand.";
		include("projects/project-left.php"); 
?>

<?php 
	$image = "diib";
	$year = "2015";
	$business = "diib";
	$about = "Redesigned current site for clean call to action and slack like signup process using BootStrap, PHP, and some AngularJS. Also developed a WordPress blog and theme to match main website. These are some of the few other various duties that I carried out - designed email templates, produced instructional & promotional videos, marketed using BuzzBundle across social media platforms, and gave the dashboard a UI/UX facelift.";
		include("projects/project-right.php"); 
?>
                        
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>Be Part
                                    <br>Of My
                                    <br>Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="team" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">About</h2><br />
                </div>
            </div>
                <div class="col-sm-4">
                    <div class="team-member">
                        <img src="https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xat1/t31.0-8/12120130_914623935292979_5713169685124688128_o.jpg" class="img-responsive img-circle" alt="">
                        <h4>Jade Allen Cook</h4>
                        <p class="text-muted">Artist</p>
                        <ul class="list-inline social-buttons">
                            <li><a href="http://www.twitter.com/jadeallencook" target="_blank"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="http://www.facebook.com/jadeallencook" target="_blank"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="http://jadeallencook.tumblr.com" target="_blank"><i class="fa fa-tumblr"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-8">
                	<p class="large text-muted">Creative, ambitious, and hungry to learn visual artist with 6+ years of experience developing and designing under my belt. Let me know what I can do to help you!</p>
                    <hr />
                    <p class="large text-muted"><b>Advanced</b><br /><i>HTML5, CSS3, UI/UX, SEO, Photography, Photo Editing, Graphic Design, Logo Development, Video Production, Marketing, Project Management, BASH & BASH scripting, Bootstrap,  Social Media, Customer Relations, Event Coordination, and French Shabby Chic Design.</i></p>
                     <p class="large text-muted"><b>Moderate</b><br /><i>Ruby, Javascript, PHP, MySQL, HTACCESS, Music Production, Pentesting, Network Security, 3D Rendering, Script Writing, Animation, and Special Effects.</i></p>
                     <p class="large text-muted"><b>Intermediate</b><br /><i>Ruby on Rails, C++, Java, and Mobile Apps.</i></p>
            </div>
    </section>

    <!-- Clients Aside -->
    <aside class="clients">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <a href="#">
                        <img src="img/logos/canon.jpg" class="img-responsive img-centered" alt="">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="#">
                        <img src="img/logos/web.jpg" class="img-responsive img-centered" alt="">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="#">
                        <img src="img/logos/adobe.jpg" class="img-responsive img-centered" alt="">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="#">
                        <img src="img/logos/wordpress.jpg" class="img-responsive img-centered" alt="">
                    </a>
                </div>
            </div>
        </div>
    </aside>
    
    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Contact</h2>
                    <h3 class="section-subheading text-muted">What project would you like to get started?</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" class="btn btn-xl">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    
	<!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <span class="copyright">Copyright &copy; Jade Allen Cook 2009 - <?php echo date("Y"); ?></span>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <li><a href="http://www.twitter.com/jadeallencook" target="_blank"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="http://www.facebook.com/jadeallencook" target="_blank"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="http://jadeallencook.tumblr.com" target="_blank"><i class="fa fa-tumblr"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                        <li><a href="#">Privacy Policy</a>
                        </li>
                        <li><a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Portfolio Modals -->
    <!-- Use the modals below to showcase details about your portfolio projects! -->

	 <!-- diib -->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>diib</h2>
                            <p class="item-intro text-muted">Web Development, Graphic Design, and Photography.</p>
                            <img class="img-responsive img-centered" src="img/portfolio/diib-preview.png" alt="">
                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Darn Fresh Food -->
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>Darn Fresh Food</h2>
                            <p class="item-intro text-muted">Web and Graphic Design</p>
                            <img class="img-responsive img-centered" src="img/portfolio/dff.png" alt="">
                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/agency.js"></script>

</body>

</html>
