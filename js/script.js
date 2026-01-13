
  $(document).ready(function () {

    $('.popular-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      
        prevArrow: $('.popular-arrows .arrow-prev'),
        nextArrow: $('.popular-arrows .arrow-next'),
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
              arrows: false,
              autoplay: true,
              speed: 800,
              autoplaySpeed: 2000,
              infinite: true
            }
          }
        ]
      });

    $('.bestsellers-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      
        prevArrow: $('.bestsellers-arrows .arrow-prev'),
        nextArrow: $('.bestsellers-arrows .arrow-next'),
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
              arrows: false,
              autoplay: true,
              speed: 800,
              autoplaySpeed: 2000,
              infinite: true
            }
          }
        ]
      });

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        fade: true,     
        cssEase: 'ease-in-out', 
        speed: 800,  
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
              autoplay: true,
              speed: 800,
              autoplaySpeed: 2000,
            }
          }
        ]
      });
      
      $('.favorite-icon').on('click', function () {
        $(this).toggleClass('active');
      });

      $(".drop-menu").on("click", function () {
        $(this).toggleClass("is-active");
        $(".menu-wrap").toggleClass("open");
        $("body, html").toggleClass("overflow");
      })

      const header = document.querySelector('.header');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });

      const catalogBtn = document.querySelector('.catalog-btn');
      const menuWrap = document.querySelector('.menu-wrap');
      
      let closeTimeout;
      
      function openMenu() {
        clearTimeout(closeTimeout);
        menuWrap.classList.add('open');
      }
      
      function scheduleClose() {
        closeTimeout = setTimeout(() => {
          menuWrap.classList.remove('open');
        }, 200); // 👈 время на «спуск» мыши
      }
      
      catalogBtn.addEventListener('mouseenter', openMenu);
      catalogBtn.addEventListener('mouseleave', scheduleClose);
      
      menuWrap.addEventListener('mouseenter', openMenu);
      menuWrap.addEventListener('mouseleave', scheduleClose);

});
  