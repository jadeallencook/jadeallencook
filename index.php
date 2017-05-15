<!doctype html>
<?php include_once('partials/ie.php'); ?>
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![ENDif]-->

<head>
    <!-- Page Title -->
    <title>Jade Allen Cook | Digital Artist</title>
    <?php
      // seo data
      include_once('partials/metadata.php');
      // tab icons
      include_once('partials/favicon.php');
      // css includes
      include_once('partials/css.php');
    ?>
    <!-- Modernizr JS -->
    <script src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>

<body data-spy="scroll" data-target="#nav-main">
    <?php
      include_once('partials/upgrade-browser.php');
      include_once('partials/preloader.php');
    ?>
    <!-- Wrapper -->
    <div class="wrapper">
        <?php
          include_once('partials/header.php');
          include_once('partials/what-we-do.php');
          include_once('partials/exploring.php');
          include_once('partials/portfolio.php');
        ?>
        <div style="clear:both;"></div>
        <?php
          include_once('partials/subscribe.php');
          include_once('partials/blog.php');
          include_once('partials/call-to-action.php');
          include_once('partials/contact.php');
          include_once('partials/footer.php');
        ?>
    </div>
    <?php
      // js includes
      include_once('partials/js.php');
      // google analytics
      include_once('partials/ga.php');
    ?>
</body>

</html>
