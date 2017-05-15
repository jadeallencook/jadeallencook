<section id="portfolio">
    <div class="section-padding">
        <!-- Portfolio Section Header -->
        <header class="container section-header text-center">
            <h2 class="wow fadeInDown" id="portfolio-title">WORK I'VE DONE</h2>
            <p class="wow fadeInUp" id="portfolio-description">Please have a look at my portfolio items to learn more about the type of work that I have done in the past. I am pleased to have worked with these professional clients and I will offer the same level of dedication for your project
                as well.</p>
        </header>
        <!-- / END Portfolio Section Header -->
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Portfolio Category -->
                    <ul id="filter">
                        <li><a class="active" href="#" data-group="all">All</a></li>
                        <li><a href="#" data-group="web">Web</a></li>
                        <li><a href="#" data-group="photo">Photo</a></li>
                        <li><a href="#" data-group="video">Video</a></li>
                        <li><a href="#" data-group="design">Design</a></li>
                    </ul>
                    <!-- / END Portfolio Category -->
                </div>
            </div>
        </div>
        <div class="container-fluid padding-zero">
            <div class="container-fluid padding-zero">
                <div class="row">
                    <div class="col-sm-12 padding-zero">
                        <!-- All Portfolio Items -->
                        <div id="pfolio-content" class="shuffle" style="height: 1040px; transition: height 250ms ease-out;">
                          <?php include_once('partials/projects.php'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
