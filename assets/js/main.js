document.addEventListener('DOMContentLoaded', function() {
    const floatingBox1 = document.getElementById('floatingBox1');
    const about_1 = document.querySelector('.about_1');
    const floatingBox2 = document.getElementById('floatingBox2');
    const about_2 = document.querySelector('.about_2');
    const floatingBox3 = document.getElementById('floatingBox3');
	const about_3 = document.querySelector('.about_3');
	const floatingBox4 = document.getElementById('floatingBox4');
	const about_4 = document.querySelector('.about_4');
    const closeBtn = document.querySelector('.row .col-lg-6');
    let isFloatingBox1Visible = false;
    let isFloatingBox2Visible = false;
    let isFloatingBox3Visible = false;
    let isFloatingBox4Visible = false;

    about_1.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!isFloatingBox1Visible) {
            floatingBox1.style.display = 'block';
            floatingBox2.style.display = 'none';
            floatingBox3.style.display = 'none';
            floatingBox4.style.display = 'none';
            isFloatingBox1Visible = true;
            isFloatingBox2Visible = false;
            isFloatingBox3Visible = false;
            isFloatingBox4Visible = false;
        } else {
            floatingBox1.style.display = 'none';
            isFloatingBox1Visible = false;
        }
    });

    about_2.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!isFloatingBox2Visible) {
            floatingBox2.style.display = 'block';
            floatingBox1.style.display = 'none';
            floatingBox3.style.display = 'none';
            floatingBox4.style.display = 'none';
            isFloatingBox2Visible = true;
            isFloatingBox1Visible = false;
            isFloatingBox3Visible = false;
            isFloatingBox4Visible = false;
        } else {
            floatingBox2.style.display = 'none';
            isFloatingBox2Visible = false;
        }
    });
	
	about_3.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!isFloatingBox3Visible) {
            floatingBox3.style.display = 'block';
            floatingBox1.style.display = 'none';
            floatingBox2.style.display = 'none';
            floatingBox4.style.display = 'none';
            isFloatingBox3Visible = true;
            isFloatingBox1Visible = false;
            isFloatingBox2Visible = false;
            isFloatingBox4Visible = false;
        } else {
            floatingBox3.style.display = 'none';
            isFloatingBox3Visible = false;
        }
    });
	
	about_4.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!isFloatingBox4Visible) {
            floatingBox4.style.display = 'block';
            floatingBox1.style.display = 'none';
            floatingBox2.style.display = 'none';
            floatingBox3.style.display = 'none';
            isFloatingBox4Visible = true;
            isFloatingBox1Visible = false;
            isFloatingBox2Visible = false;
            isFloatingBox3Visible = false;
        } else {
            floatingBox4.style.display = 'none';
            isFloatingBox4Visible = false;
        }
    });

    document.addEventListener('click', function(event) {
        if (!floatingBox1.contains(event.target) && isFloatingBox1Visible) {
            floatingBox1.style.display = 'none';
            isFloatingBox1Visible = false;
        }
        if (!floatingBox2.contains(event.target) && isFloatingBox2Visible) {
            floatingBox2.style.display = 'none';
            isFloatingBox2Visible = false;
        }
		if (!floatingBox3.contains(event.target) && isFloatingBox3Visible) {
            floatingBox3.style.display = 'none';
            isFloatingBox3Visible = false;
        }
		if (!floatingBox4.contains(event.target) && isFloatingBox4Visible) {
            floatingBox4.style.display = 'none';
            isFloatingBox4Visible = false;
        }
    });

    about_1.querySelector('button').addEventListener('click', function(event) {
        event.stopPropagation();
        floatingBox1.style.display = 'none';
        isFloatingBox1Visible = false;
    });

    about_2.querySelector('button').addEventListener('click', function(event) {
        event.stopPropagation();
        floatingBox2.style.display = 'none';
        isFloatingBox2Visible = false;
    });
	
	about_3.querySelector('button').addEventListener('click', function(event) {
        event.stopPropagation();
        floatingBox3.style.display = 'none';
        isFloatingBox3Visible = false;
    });
	
	about_4.querySelector('button').addEventListener('click', function(event) {
        event.stopPropagation();
        floatingBox4.style.display = 'none';
        isFloatingBox4Visible = false;
    });

    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        if (isFloatingBox1Visible || isFloatingBox2Visible || isFloatingBox3Visible || isFloatingBox4Visible) {
            floatingBox1.style.display = 'none';
            floatingBox2.style.display = 'none';
            floatingBox3.style.display = 'none';
            floatingBox4.style.display = 'none';
            isFloatingBox1Visible = false;
            isFloatingBox2Visible = false;
            isFloatingBox3Visible = false;
            isFloatingBox4Visible = false;
        }
    });
});

fetch('https://raw.githubusercontent.com/growkingscripts/growkingscripts.github.io/refs/heads/main/assets/json/resellers.json')
    .then(response => response.json())
    .then(data => {
		const resellerList = document.getElementById('resellerList');

		data.datas.forEach(reseller => {
			let div = document.createElement("div");
			div.classList.add("numbered-item");
			div.innerHTML = 'Username [Discord ID]: ' + reseller.username + ' [' + reseller.userid + ']';
			resellerList.appendChild(div);
		});
	});	

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let productContainer = select('.product-container');
    if (productContainer) {
      let productIsotope = new Isotope(productContainer, {
        itemSelector: '.product-item'
      });

      let productFilters = select('#product-flters li', true);

      on('click', '#product-flters li', function(e) {
        e.preventDefault();
        productFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        productIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate product lightbox 
   */
  const productLightbox = GLightbox({
    selector: '.product-lightbox'
  });

  /**
   * Product details slider
   */
  new Swiper('.product-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
