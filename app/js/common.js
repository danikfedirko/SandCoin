$(function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: "#next",
        scrollSpeed: 900
    });
    $("a[rel='m_PageScroll2id']").click(function () {
        $.magnificPopup.close();
    });
    var timer = new Timer();
    timer.start({countdown: true, precision: 'seconds', startValues: {seconds: 60 * 60 * 24 * 4}});
    timer.addEventListener('secondsUpdated', function (e) {
        $('.days').html(timer.getTimeValues().days);
        $('.hours').html(timer.getTimeValues().hours);
        $('.minutes').html(timer.getTimeValues().minutes);
        $('.seconds').html(timer.getTimeValues().seconds);
    });

    $('.lang ul').hide();
    var counter = 0;
    $('.lang-act').click(function (event) {
        if(counter==0){
            event.preventDefault();
            $('.lang ul').show();
            counter=1;
        } else {
            event.preventDefault();
            $('.lang ul').hide();
            counter=0;
        }
    });

    // $('.lang-select').click(function (event) {
    //
    // });

    // $('.lang-select').mouseenter(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').show();
    // });
    //
    // $('.lang-select').mouseleave(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').hide();
    // });
    // $('.lang-list').mouseenter(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').show();
    // });
    // $('.lang-list').mouseleave(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').hide();
    // });

    $('.popup-content').magnificPopup({
        type: 'inline',
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                $('header').addClass('blur');
                $('.parallax-mirror').css('width','100%');
                $('header .overlay').css('width','100%');
                $('html').css('marginRight','0');
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
                $('header').removeClass('blur')

            }
            // e.t.c.
        }
    });
    $('.popup-reg').magnificPopup({
        type: 'inline',
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                $('header').addClass('blur');
                $('.parallax-mirror').css('width','100%');
                $('header .overlay').css('width','100%');
                $('html').css('marginRight','0');
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
                $('header').removeClass('blur')

            }
            // e.t.c.
        }
    });
    $('.popup-login').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                $('.parallax-mirror').css('width','100%');
                $('header .overlay').css('width','100%');
                $('html').css('marginRight','0');
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
                $('header').removeClass('blur')

            }
            // e.t.c.
        }
    });
    $('.popup-reset').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
            }
            // e.t.c.
        }
    });
        $('.popup-documents').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
            }
            // e.t.c.
        }
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    $('.parallax-window').parallax({
        speed: 0.2,
        bleed: 70

    });

    $(".header_bottom h1").animated("fadeInUp", "");
    $(".header_bottom p").animated("fadeInUp", "");
    $(".header_bottom h4").animated("fadeInUp", "");
    $(".first .video").animated("fadeIn", "");
    $(".first .title").animated("fadeInUp", "");
    $(".first p").animated("fadeIn", "");
    $(".first .btn").animated("fadeIn", "");
    $(".advantages .title").animated("fadeInUp", "");
    $(".advantages .item").animated("fadeIn", "");
    $(".roadmap .title").animated("fadeInUp", "");
    $(".roadmap .subtitle").animated("fadeInUp", "");
    $(".roadmap .item").animated("fadeIn", "");
    $(".roadmap .dec").animated("fadeInUp", "");
    $(".roadmap .btn").animated("fadeInDown", "");
    $(".info .left").animated("fadeIn", "");
    $(".info .right").animated("fadeIn", "");
    $(".team .title").animated("fadeInUp", "");
    $(".team .team__item").animated("fadeInUp", "");
    $(".media .title").animated("fadeInUp", "");
    $(".media .item").animated("fadeIn", "");
    $(".option .title").animated("fadeInUp", "");
    $(".option .dec").animated("fadeInUp", "");
    $(".option .btn").animated("fadeIn", "");
    $(".contact .title").animated("fadeInUp", "");
    $(".contact .btn").animated("fadeIn", "");
    $(".contact .subtitle").animated("fadeInUp", "");
    $(".contact .email").animated("fadeIn", "");
    $(".contact .phone").animated("fadeIn", "");
    $(".contact .social-links").animated("fadeIn", "");
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    var headerH =  $("header").css('height');
    var header_topH = $(".header_top").css('height');
    var header_bottomH = $(".header_bottom").css('height');

    var margin = ((headerH.substr(0, headerH.length - 2) - header_topH.substr(0, header_topH.length - 2)) / 2) - ((header_bottomH.substr(0, header_bottomH.length - 2) / 2));
    var marginPx = margin - 20 + 'px';
  //  $(".header_top").css('margin-bottom',marginPx);
});

$(window).resize(function () {
    var headerH =  $("header").css('height');
    var header_topH = $(".header_top").css('height');
    var header_bottomH = $(".header_bottom").css('height');

    var margin = ((headerH.substr(0, headerH.length - 2) - header_topH.substr(0, header_topH.length - 2)) / 2) - ((header_bottomH.substr(0, header_bottomH.length - 2) / 2));
    var marginPx = margin - 20 + 'px';
  //  $(".header_top").css('margin-bottom',marginPx);
});

/*$(".media-row").owlCarousel({
    items : 1,
    navigation : false,
    pagination : false,
    singleItem : false,
    itemsScaleUp : true,
});




/* NEW NEW NEW NEW NEW NEW  */

$('input[type=email]').on('input',function(){
   $(this).removeClass('error_email'); 
    $('.error').fadeOut().html('')
})
$('input[type=text]').on('input',function(){
   $(this).removeClass('error_email'); 
    $('.error').fadeOut().html('')
})
$('input[type=number]').on('input',function(){
   $(this).removeClass('error_email'); 
    $('.error').fadeOut().html('')
})
$('input[type=password]').on('input',function(){
   $(this).removeClass('error_email'); 
    $('.error').fadeOut().html('')
})


$(document).on('submit', 'form', function (e){
        e.preventDefault();

        var $form = $(this);

        var $email_field = $form.find('input[type=email]');
    var $password_field = $form.find('input[type=password]');
    var $text_field = $form.find('input[type=text]');
    var $number_field = $form.find('input[type=number]');

        //var $btn = $(this).find('.btn');
        var email = $email_field.val();
         var text = $text_field.val();
         var text = $text_field.val();
         var number = $number_field.val();
         var password = $password_field.val();

        if(email !== undefined && !email.length) {
            $email_field.addClass('error_email');
            if($('body').hasClass('en')){
             $('.error').fadeIn().html('Please enter E-mail')   
            }
             else{$('.error').fadeIn().html('Пожалуйста введите E-mail')
                 }
        }
    else if(text !== undefined && !text.length){
            $text_field.addClass('error_email');
             if($('body').hasClass('en')){
                 $('.error').fadeIn().html('Please enter your name')
             }else{
                 $('.error').fadeIn().html('Пожалуйста введите имя')
                  }
            }
    else if(number !== undefined && !number.length){
            $number_field.addClass('error_email');
             if($('body').hasClass('en')){
                 $('.error').fadeIn().html('Please enter amount')
            }else{
               $('.error').fadeIn().html('Пожалуйста введите сумму') 
            }
            }
     else if(password !== undefined && !password.length){
            $password_field.addClass('error_email');
              if($('body').hasClass('en')){
                 $('.error').fadeIn().html('Please enter your password')
             }else{$('.error').fadeIn().html('Пожалуйста введите пароль')
                  }
            }
    else{
         if($('body').hasClass('en')){
            $('.login-page, .login-popup, reg-popup').html('<div class="popup__title animated fadeIn" style="margin-bottom: 0;">Data successfuly sent</div>') 
             }else{
       $('.login-page, .login-popup, reg-popup').html('<div class="popup__title animated fadeIn" style="margin-bottom: 0;">Данные успешно отправлены</div>')
             }
    }
    
})

document.getElementById("wallet_number2").value = getSavedValue("wallet_number2");
document.getElementById("wallet_number").value = getSavedValue("wallet_number");
// set the value to this input
          // set the value to this input
        /* Here you can add more inputs to set value. if it's saved */

        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }

        //get the saved value function - return the value of "v" from localStorage. 
        function getSavedValue  (v){
            if (localStorage.getItem(v) === null) {
                return "";
            }
            return localStorage.getItem(v);
        }
$('.wallet-save').on('click',function(){
    $(this).fadeIn().html('<img src="../img/edit.svg">')
})
if($('#wallet_number').val().length > 0){
    $('.wallet-save').html('<img src="img/edit.svg">')
}
if($('#wallet_number2').val().length > 0){
    $('.wallet-save2').html('<img src="img/edit.svg">')
}
