<?php
  // cache project data
  $json = file_get_contents('assets/json/portfolio.json');
  $projects = json_decode($json, true);
  $currentProject = 1;
  // iterate over all projects
  foreach($projects as $project):
    $tags = ['&quot;all&quot;, ', ''];
    foreach ($project['tags'] as $tag) {
      $tags[0] .= '&quot;' . $tag . '&quot;, ';
      $tags[1] .= $tag . ', ';
    }
    // remove trailing comma
    $tags[0] = rtrim($tags[0],', ');
    $tags[1] = rtrim($tags[1],', ');
?>

<div id="portfolio-<?php echo $currentProject ?>-category" class="item item-width  shuffle-item filtered" data-groups="[<?php echo $tags[0]; ?>]">
    <div class="item-wrap">
        <div class="item-inner">
          <a href="#portfolio-<?php echo $currentProject ?>" class="project-link inline-popup-trigger">
            <span class="hover-bg"></span>
            <img id="portfolio-<?php echo $currentProject ?>-image" src="<?php echo $project['image']; ?>" alt="">
            <div class="item-info text-left">
              <h3 id="portfolio-<?php echo $currentProject ?>-project"><?php echo $project['title']; ?></h3>
              <h4 id="portfolio-<?php echo $currentProject ?>-client"><?php echo $project['client']; ?></h4>
              <div class="uline"></div>
            </div>
          </a>
        </div>
        <div id="portfolio-<?php echo $currentProject ?>" class="inline-popup mfp-hide">
            <div class="inline-popup-inner">
                <div class="row">
                    <div class="col-md-8 project-main" id="portfolio-<?php echo $currentProject ?>-video-holder">
                      <?php
                        if ($project['video']) {
                          echo '<iframe width="100%" height="433" src="' . $project['video'] . '" frameborder="0" allowfullscreen></iframe>';
                        } elseif ($project['full-image']) {
                          echo '<img id="portfolio-' . $currentProject . '-full-image" src="' . $project['full-image'] . '" alt="">';
                        }
                      ?>
                    </div>
                    <div class="col-md-4 project-sidebar">
                        <div class="project-sb-widget project-client">
                            <h2>Client:</h2>
                            <p class="client-name" id="portfolio-<?php echo $currentProject; ?>-client"><?php echo $project['client']; ?></p>
                        </div>
                        <div class="project-sb-widget project-task">
                            <h2>Task:</h2>
                            <p class="task-name" id="portfolio-<?php echo $currentProject; ?>-task"><?php echo $project['task']; ?></p>
                        </div>
                        <div class="project-sb-widget project-category">
                            <h2>Category:</h2>
                            <p class="cat-name" id="portfolio-<?php echo $currentProject; ?>-category"><?php echo $tags[1]; ?></p>
                        </div>
                        <?php
                        if ($project['link']) {
                          echo '<a href="' . $project['link'] . '" id="portfolio-' . $currentProject . '-website" target="_blank" class="btn-rect btn-more">View Project</a>';
                          echo '<br /><small>Projects are displayed on my development server, so somethings might not always work correctly!</small>';
                        }
                         ?>
                      </div>
                </div>
            </div>
            <a class="inline-popup-close" href="#">
              <i class="fa fa-times"></i>
            </a>
          </div>
    </div>
</div>

<?php
  $currentProject++;
  endforeach;
?>
