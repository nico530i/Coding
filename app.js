const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //togle nav
    burger.addEventListener('click', () => {
      document.querySelector('html').style.overflow = 'hidden';
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
          document.querySelector('html').style.overflow = 'scroll';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  };
  

  navSlide();

  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });