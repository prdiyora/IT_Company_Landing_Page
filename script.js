// script.js — small JS for nav toggle and contact demo
// We keep JS minimal; the goal is CSS learning. This file just improves UX.

// Update footer year
document.addEventListener('DOMContentLoaded', function(){
  var year = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = year;

  // Nav toggle for small screens
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      // Toggle visibility and update ARIA for accessibility
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if(isOpen){
        nav.style.display = 'none';
        toggle.setAttribute('aria-expanded','false');
      } else {
        nav.style.display = 'flex';
        toggle.setAttribute('aria-expanded','true');
      }
    });
  }

  // Prevent real submission in demo contact form
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Form submission prevented in demo. In real projects, send data to server.');
      form.reset();
    });
  }
});