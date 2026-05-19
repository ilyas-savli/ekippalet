function accordionClick(el) {
  var parent = el.parentNode;
  var items = parent.querySelectorAll('.accordion-item');
  items.forEach(function(item) { item.classList.remove('active'); });
  el.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // Header contact toggle
  var contactToggle = document.querySelector('.top-header-menu-toggle');
  var contactDetails = document.querySelector('.site-contact-details');
  if (contactToggle && contactDetails) {
    contactToggle.addEventListener('click', function() {
      contactDetails.classList.toggle('active');
    });
  }

  // Submenu toggles for mobile
  var hasChildren = document.querySelectorAll('.menu-item-has-children');
  hasChildren.forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        var ul = this.querySelector('ul');
        if (ul) {
          e.preventDefault();
          this.classList.toggle('open');
        }
      }
    });
  });

  // Counter animation
  var counters = document.querySelectorAll('.counter-number');
  if (counters.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'));
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 2000;
          var step = target / (duration / 16);
          var current = 0;
          var timer = setInterval(function() {
            current += step;
            if (current >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + suffix;
            }
          }, 16);
          observer.unobserve(el);
        }
      });
    });
    counters.forEach(function(c) { observer.observe(c); });
  }
});
