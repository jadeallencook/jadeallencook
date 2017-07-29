$(function () {
    // using tabletop to get gDoc
    function tabletop(doc) {
        Tabletop.init({
            key: doc,
            callback: insertDoc,
            simpleSheet: false
        });
    }
    // after gDoc loads
    function insertDoc(data, tabletop) {
        // everything for the banner
        var banner = data.banner.elements[0];
        $('h1#banner-location').empty().append('<span id="banner-title"></span><br />' + banner.location);
        $('span#banner-title').empty().append(banner.title);
        $('p#banner-desc').empty().append(banner.description);
        $('a#banner-call').empty().append(banner.call).attr('href', banner.callLink);
        $('#welcome, #phone-banner').css({
            backgroundImage: 'url(' + banner.image + ')',
            backgroundSize: 'cover'
        });
        // about section 
        var about = data.about.elements[0];
        $('h2#work-title').empty().append(about.title);
        $('p#work-desc').empty().append(about.description);
        // looping over all skills 
        var skills = data.about.elements;
        var skillI = 1;
        skills.forEach(function (skill) {
            if (skillI == 1 || skillI == 2) {
                if (skillI == 1) $('#skills').append('<div class="col-md-6" id="skill-set-1"></div>');
                var id = "div#skill-set-1";
            }
            if (skillI == 3 || skillI == 4) {
                if (skillI == 3) $('#skills').append('<div class="col-md-6" id="skill-set-2"></div>');
                var id = "div#skill-set-2";
            }
            $(id).append(
                '<a href="start" style="color: unset;"><div class="box box-wide wow slideInLeft">' +
                '<i class="fa fa-' + skill.icon + '"></i>' +
                '<div class="box-wide-inner">' +
                '<h3>' + skill.skill + '</h3>' +
                '<div class="uline"></div>' +
                '<p>' + skill.about + '</p>' +
                '</div></div></a>'
            );
            skillI++;
        });
        // call to action
        var call = data.call.elements[0];
        $('#call-title').empty().append(call.title);
        $('#call-desc').empty().append(call.description);
        $('#call-btn').empty().append(call.call).attr('href', call.link);
        // portfolio section
        var portfolio = data.portfolio.elements[0];
        $('h2#portfolio-title').empty().append(portfolio.title);
        $('p#portfolio-description').empty().append(portfolio.description);
        // append work 
        var work = data.portfolio.elements;
        var workID = 1;
        work.forEach(function (job) {
            var id = '#portfolio-' + workID;
            $('div' + id + '-category').attr('data-groups', '[' + job.category + ']');
            $('img' + id + '-image').attr('src', job.image);
            if (job.video != '') {
                $('img' + id + '-full-image').hide();
                $('div' + id + '-video-holder').append('<iframe width="100%" height="433" src="https://www.youtube.com/embed/' + job.video + '" frameborder="0" allowfullscreen></iframe>');
            } else {
                $('img' + id + '-full-image').attr('src', job.fullImage);
            }
            $('img' + id + '-full-image').attr('src', job.fullImage);
            $('h3' + id + '-project').append(job.project);
            $('h4' + id + '-client').append(job.client);
            $('p' + id + '-client').append(job.client);
            $('p' + id + '-task').append(job.task);
            $('p' + id + '-category').append(job.category.replace(/\"/g, ""));
            if (job.website != '') $('a' + id + '-website').attr('href', job.website);
            else $('a' + id + '-website').hide();
            workID++;
        });
        // subscribe section
        var subscribe = data.subscribe.elements[0];
        $('h2#subscribe-title').empty().append(subscribe.title);
        $('p#subscribe-description').empty().append(subscribe.description);
        $('button#subscribe-button').empty().append(subscribe.button);
        // blog section 
        var blog = data.blog.elements[0];
        var blog2 = data.blog.elements[1];
        function buildBlog(id, data) {
            id = '#blog-' + id + '-';
            $(id + 'image').css({
                backgroundImage: 'url("' + data.blogImage + '")'
            });
            $(id + 'title h2').empty().append(data.blogTitle);
            $(id + 'title').attr('href', data.blogLink);
            $(id + 'location').empty().append(data.blogLocation);
            $(id + 'location').attr('href', data.blogLink);
            $(id + 'about').empty().append(data.blogAbout);
            $(id + 'date').empty().append(data.blogDate);
        }
        $('#blog-title').empty().append(blog.title);
        $('#blog-about').empty().append(blog.description);
        buildBlog(1, blog);
        buildBlog(2, blog2);
        // second call to action
        var secondCall = data.call.elements[0];
        $('#second-call-title').empty().append(secondCall.secondTitle);
        $('#second-call-link').empty().append(secondCall.secondBtn);
        $('a#second-call-link').attr('href', secondCall.secondLink);
        // footer section
        var footer = data.footer.elements[0];
        $('#footer-title').empty().append(footer.title);
        $('#footer-about').empty().append(footer.description);
        $('#footer-message').empty().append(footer.message);
        $('#footer-btn').empty().append(footer.mailBtn);
        console.log(JSON.stringify(footer));
    }
    // calling and appending gDoc info
    tabletop('1s4gh4wHXZ3BufiETuOnro_wvq6qNwtH6vm8_0w6mSNg');
});