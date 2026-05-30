/* Rubel Pearl — interações leves em JS puro */
(function(){
  'use strict';

  // Header scroll
  var header = document.querySelector('.site-header');
  if(header){
    var onScroll = function(){
      if(window.scrollY > 30) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if(toggle && mobileNav){
    toggle.addEventListener('click', function(){
      var open = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Reveal on scroll
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-visible')});
  }

  // Newsletter / Contact submit (demo)
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var note = f.querySelector('.form-note') || f;
      note.textContent = 'Recebido! Em breve entraremos em contato.';
      f.reset();
    });
  });

  // Year
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
