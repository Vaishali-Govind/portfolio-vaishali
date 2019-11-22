$(document).ready(function(){

    let $btns = $(".project-area .button-group button");
    $btns.click(function(e){
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add('active');

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter:selector
        });
        return false;
    })
    $(".project-area .button-group #btn1").trigger("click")

    $(".project-area .grid .test-popup-link").magnificPopup({
        type:'image',
        gallery:{enabled:true}
        
    });

    $(".site-main .client-area .owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                            items:1,
                            // nav:true
                        },
                        600:{
                            items:1,
                            // nav:false
                        },
            544:{
                items:2
            }
        }
    })
//     loop:true,
//      margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:1,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })

    let nav_offset_top = $(".header_area").height() + 50;
    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll>= nav_offset_top){
                   $('.header_area .main-menu').addClass("navbar_fixed");
                }else{
                   $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }
    navbarFixed();
}) 

