(async () =>
  // async IIFE code for slider.
  {
    const interval = 1500, // ms
      paddingRight = 50,
      slideContainer = document.querySelector(".Testimonial_slider_container"),
      slidesWrapper = document.querySelector(".slider"),
      slides = document.querySelectorAll(".slide"),
      testimonial_slider_dots = document.querySelectorAll(".testimonial_dot"),
      delay = (ms) => new Promise((r) => setTimeout(r, ms)),
      movLeft = (el, mov) =>
        new Promise((r) => {
          el.ontransitionend = (_) => {
            el.ontransitionend = null;
            el.style.transition = "none";
            r();
          };
          el.style.transition = "1.5s";
          el.style.transform = `translateX(${-mov}px)`;
        });

    let index = 0;

    while (true) {
      // infinite carrousel loop
      await delay(interval);
      await movLeft(slidesWrapper, slides[index].clientWidth + paddingRight);

      slidesWrapper.appendChild(slides[index]); // mov first slide to the end
      slidesWrapper.style.transform = `translateX(0)`; // rest translateX
      index = ++index % slides.length;
    }
  })();
