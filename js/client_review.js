(async () =>
  // async IIFE code for slider.
  {
    const interval = 2500, // ms
      paddingRight = 50,
      slideContainer = document.querySelector(".Client_slider_container"),
      slidesWrapper = document.querySelector(".our_client_slider"),
      slides = document.querySelectorAll(".our_client_slide"),
      delay = (ms) => new Promise((r) => setTimeout(r, ms)),
      movLeft = (el, mov) =>
        new Promise((r) => {
          el.ontransitionend = (_) => {
            el.ontransitionend = null;
            el.style.transition = "none";
            r();
          };
          el.style.transition = "2s";
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
