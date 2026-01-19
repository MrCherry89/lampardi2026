
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

      if (header) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 10) {
            header.classList.add('fixed');
          } else {
            header.classList.remove('fixed');
          }
        });
      }

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

      $(".filter-btn").on("click", function(){
        $(".filter-hide-wrap").addClass("open");
        $("html, body").addClass("overflow");
      })

      $(".filter-hide-info .close").on("click", function(){
        $(".filter-hide-wrap").removeClass("open");
        $("html, body").removeClass("overflow");
      })

      $(".characteristics-click").on("click", function(){
        $(".characteristics-hide-wrap").addClass("open");
        $("html, body").addClass("overflow");
      })

      $(".characteristics-hide-info .close").on("click", function(){
        $(".characteristics-hide-wrap").removeClass("open");
        $("html, body").removeClass("overflow");
      })

      const minRange = document.getElementById('minRange');
      const maxRange = document.getElementById('maxRange');
      const range = document.querySelector('.range');
      const minVal = document.getElementById('minVal');
      const maxVal = document.getElementById('maxVal');
      
      if (minRange && maxRange && range && minVal && maxVal) {
      
        const max = parseInt(minRange.max);
        const gap = 5000;
      
        function update() {
          let min = parseInt(minRange.value);
          let maxV = parseInt(maxRange.value);
      
          if (maxV - min < gap) {
            if (this === minRange) {
              minRange.value = maxV - gap;
            } else {
              maxRange.value = min + gap;
            }
          }
      
          min = parseInt(minRange.value);
          maxV = parseInt(maxRange.value);
      
          range.style.left = (min / max) * 100 + '%';
          range.style.width = ((maxV - min) / max) * 100 + '%';
      
          minVal.value = min.toLocaleString('ru-RU');
          maxVal.value = maxV.toLocaleString('ru-RU');
        }
      
        minRange.addEventListener('input', update);
        maxRange.addEventListener('input', update);
      
        update();
      }

      $('.card-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        asNavFor: '.card-product-thumbs',
      
        nextArrow: $('.card-product-slider-wrap .slick-next'),
        prevArrow: $('.card-product-slider-wrap .slick-prev'),
      });
      
      $('.card-product-thumbs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.card-product-slider',
        focusOnSelect: true,
        arrows: false
      });

      $(".favorite-style .icon").on("click", function(){
        $(this).toggleClass("active");
      })

      document.querySelector('.text-scroll')?.addEventListener('click', e => {
        e.preventDefault();
      
        const t = document.getElementById('about-series');
        if (!t) return;
      
        const s = window.pageYOffset;
        const y = t.getBoundingClientRect().top + s - 72;
        const d = 800;
        const st = performance.now();
      
        requestAnimationFrame(function a(time) {
          const p = Math.min((time - st) / d, 1);
          window.scrollTo(0, s + (y - s) * p);
          if (p < 1) requestAnimationFrame(a);
        });
      });

      const overlay = document.querySelector('.characteristics-hide-wrap');
      const modal = document.querySelector('.characteristics-hide-info');
      
      if (overlay && modal) {
        function openModal() {
          overlay.classList.add('open');
          document.documentElement.classList.add('overflow');
          document.body.classList.add('overflow');
        }
      
        function closeModal() {
          overlay.classList.remove('open');
          document.documentElement.classList.remove('overflow');
          document.body.classList.remove('overflow');
        }
      
        overlay.addEventListener('click', closeModal);
      
        modal.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
         

});
  