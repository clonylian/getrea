(function ($) {
    ("use strict");
    // sticky menu
    var header = $(".gamfi-header-section");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
        $("section").each(function () {
            var elementTop = $(this).offset().top - $("#gamfi-header").outerHeight();
            if (scroll >= elementTop) {
                $(this).addClass("loaded");
            }
        });
    });

    // wow init
    new WOW().init();

    // Counter Up
    var gamf_counter = $(".counter");
    if (gamf_counter.length) {
        $(".counter").counterUp({
            delay: 20,
            time: 1500,
        });
    }

    // magnificPopup init
    var popupvideos = $(".video-icons");
    if (popupvideos.length) {
        $(".video-icons").magnificPopup({
            disableOn: 10,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    }

    //window load
    $(window).on("load", function () {
        $(".loader_first").delay(100).fadeOut(100);
        $(".circular-spinner").on("click", function () {
            $(".loader_first").fadeOut(100);
        });
    });

    /*---------------------------
  governance page Progress line
  ---------------------------*/
    var progress = document.querySelectorAll(".progress-done");

    Array.from(progress).forEach(function (item) {
        item.style.width = item.getAttribute("data-percent") + "%";
        item.style.opacity = 1;
    });

    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $(".sc-carousel").each(function () {
        var owlCarousel = $(this),
            loop = owlCarousel.data("loop"),
            items = owlCarousel.data("items"),
            margin = owlCarousel.data("margin"),
            stagePadding = owlCarousel.data("stage-padding"),
            autoplay = owlCarousel.data("autoplay"),
            autoplayTimeout = owlCarousel.data("autoplay-timeout"),
            smartSpeed = owlCarousel.data("smart-speed"),
            dots = owlCarousel.data("dots"),
            nav = owlCarousel.data("nav"),
            navSpeed = owlCarousel.data("nav-speed"),
            xsDevice = owlCarousel.data("mobile-device"),
            xsDeviceNav = owlCarousel.data("mobile-device-nav"),
            xsDeviceDots = owlCarousel.data("mobile-device-dots"),
            smDevice = owlCarousel.data("ipad-device"),
            smDeviceNav = owlCarousel.data("ipad-device-nav"),
            smDeviceDots = owlCarousel.data("ipad-device-dots"),
            smDevice2 = owlCarousel.data("ipad-device2"),
            smDeviceNav2 = owlCarousel.data("ipad-device-nav2"),
            smDeviceDots2 = owlCarousel.data("ipad-device-dots2"),
            mdDevice = owlCarousel.data("md-device"),
            centerMode = owlCarousel.data("center-mode"),
            HoverPause = owlCarousel.data("hoverpause"),
            mdDeviceNav = owlCarousel.data("md-device-nav"),
            mdDeviceDots = owlCarousel.data("md-device-dots");
        owlCarousel.owlCarousel({
            loop: loop ? true : false,
            items: items ? items : 4,
            lazyLoad: true,
            center: centerMode ? true : false,
            autoplayHoverPause: HoverPause ? true : false,
            margin: margin ? margin : 0,
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: autoplay ? true : false,
            autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
            smartSpeed: smartSpeed ? smartSpeed : 250,
            dots: dots ? true : false,
            nav: nav ? true : false,
            navSpeed: navSpeed ? true : false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: xsDevice ? xsDevice : 1,
                    nav: xsDeviceNav ? true : false,
                    dots: xsDeviceDots ? true : false,
                    center: false,
                },
                768: {
                    items: smDevice2 ? smDevice2 : 2,
                    nav: smDeviceNav2 ? true : false,
                    dots: smDeviceDots2 ? true : false,
                    center: false,
                },
                992: {
                    items: smDevice ? smDevice : 3,
                    nav: smDeviceNav ? true : false,
                    dots: smDeviceDots ? true : false,
                    center: false,
                },
                1025: {
                    items: mdDevice ? mdDevice : 4,
                    nav: mdDeviceNav ? true : false,
                    dots: mdDeviceDots ? true : false,
                },
            },
        });
    });

    //expeander Class
    var expeander_iteam = $(".expeander-iteam-area");
    if (expeander_iteam.length) {
        $(".expeander-iteam-area").on("click", function () {
            $(this).parent().toggleClass("expeand-bottom-content");
        });
    }

    //canvas menu
    var navexpander = $("#nav-expander");
    if (navexpander.length) {
        $("#nav-expander,  #nav-close2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-expanded");
        });
    }

    /******** Mobile Menu Start ********/
    $(".mobile-navbar-menu a").each(function () {
        var href = $(this).attr("href");
        if ((href = "#")) {
            $(this).addClass("hash");
        } else {
            $(this).removeClass("hash");
        }
    });

    $.fn.menumaker = function (options) {
        var mobile_menu = $(this),
            settings = $.extend(
                {
                    format: "dropdown",
                    sticky: false,
                },
                options
            );

        return this.each(function () {
            mobile_menu.find("li ul").parent().addClass("has-sub");
            var multiTg = function () {
                mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
                mobile_menu.find(".hash").parent().addClass("hash-has-sub");
                mobile_menu.find(".submenu-button").on("click", function () {
                    $(this).toggleClass("submenu-opened");
                    if ($(this).siblings("ul").hasClass("open-sub")) {
                        $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                        $(this).siblings("ul").hide("fadeIn");
                    } else {
                        $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                        $(this).siblings("ul").slideToggle().show("fadeIn");
                    }
                });
            };

            if (settings.format === "multitoggle") multiTg();
            else mobile_menu.addClass("dropdown");
            if (settings.sticky === true) mobile_menu.css("position", "fixed");
            var resizeFix = function () {
                if ($(window).width() > 991) {
                    mobile_menu.find("ul").show("fadeIn");
                    mobile_menu.find("ul.sub-menu").hide("fadeIn");
                }
            };
            resizeFix();
            return $(window).on("resize", resizeFix);
        });
    };

    $(document).ready(function () {
        $("#mobile-navbar-menu").menumaker({
            format: "multitoggle",
        });
    });

    var partner_Logo = $(".partnerLogo");
    if (partner_Logo.length) {
        var vox_news = 0;
        $(".partnerLogo li").each(function () {
            vox_news += $(this).outerWidth(true);
        });

        $(".partnerLogo").parent().append($(".partnerLogo").clone());
        function setupNews(w) {
            function phase1() {
                var partnerLogo = $(".partnerLogo").first(),
                    curMargin = partnerLogo.css("margin-left").replace("px", ""),
                    animSpeed = w * 20 - Math.abs(curMargin) * 20;

                partnerLogo.animate({ "margin-left": "-" + w + "px" }, animSpeed, "linear", phase2);
            }
            function phase2() {
                $(".partnerLogo").first().css({ "margin-left": "0px" });
                phase1();
            }
            $(".partnerLogo img").hover(
                function () {
                    $(".partnerLogo").stop();
                },
                function () {
                    phase1();
                }
            );
            phase1();
        }
        setupNews(vox_news);
    }

    //expeander Class

    const selectedClass = ".project-summary-menu .nav-link";
    $(selectedClass).on("click", function () {
        $(selectedClass).removeClass("active");
        $(this).addClass("active");
    });

    //woocommerce quantity style
    if (!String.prototype.getDecimals) {
        String.prototype.getDecimals = function () {
            var num = this,
                match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            if (!match) {
                return 0;
            }
            return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
        };
    }
    // Quantity "plus" and "minus" buttons
    $(document.body).on("click", ".plus, .minus", function () {
        var $qty = $(this).closest(".quantity").find(".qty"),
            currentVal = parseFloat($qty.val()),
            max = parseFloat($qty.attr("max")),
            min = parseFloat($qty.attr("min")),
            step = $qty.attr("step");

        // Format values
        if (!currentVal || currentVal === "" || currentVal === "NaN") currentVal = 0;
        if (max === "" || max === "NaN") max = "";
        if (min === "" || min === "NaN") min = 0;
        if (step === "any" || step === "" || step === undefined || parseFloat(step) === "NaN") step = 1;

        // Change the value
        if ($(this).is(".plus")) {
            if (max && currentVal >= max) {
                $qty.val(max);
            } else {
                $qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
            }
        } else {
            if (min && currentVal <= min) {
                $qty.val(min);
            } else if (currentVal > 0) {
                $qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
            }
        }

        // Trigger change event
        $qty.trigger("change");
    });

    jQuery(".bg_image").each(function () {
        var attr = $(this).attr("data-image-src");
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url(" + attr + ")");
        }
    });
    $(".flip_card_btn").on("click", function () {
        $(this).parents(".staking_flip_card").addClass("active");
    });

    $(".staking_flip_card_close_btn").on("click", function () {
        $(this).parents(".staking_flip_card").removeClass("active");
    });
})(jQuery);
