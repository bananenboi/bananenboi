document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-button');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          var targetId = link.getAttribute('href');
          var targetElement = document.querySelector(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });
});