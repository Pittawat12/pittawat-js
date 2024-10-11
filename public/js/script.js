    let slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.slider img');
        
        if (n > slides.length - 1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
    }


    /* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

document.addEventListener('DOMContentLoaded', () => {
    const letter = document.querySelectorAll('.letter');
    
    letter.forEach((letter, index) => {
      const shadowOffset = (index + 1) * 2;
      const blurRadius = (index + 1) * 5;
      letter.style.textShadow = `${shadowOffset}px ${shadowOffset}px ${blurRadius}px rgba(0, 0, 0, 0.5)`;
    });
  });

  var typed = new typed(".auto-type", {
    strings: ["Programmer", "Designer", "YouTuber"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });