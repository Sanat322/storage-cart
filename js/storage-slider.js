'use strict'
const images = ["img/slide_snk.jpg", "img/slide_dana.jpg", "img/slide_barni.jpg"];
const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-btn-next]");
const prevBtn = document.querySelector("[data-btn-prev]");

let currentIndex = 0;
const slideWidth = 1000;

const setupSlides = () => {
    images.forEach((slide, index) => {
        const img = document.createElement('img');
        img.src = slide;
        img.classList.add('slider__image');
        img.dataset.index = index;
        img.alt = `${slide} ${index + 1}`;

        slider.appendChild(img);
    })

    const firstClone = slider.firstElementChild.cloneNode(true);
    const lastClone = slider.lastElementChild.cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);
};

const initSlide = () => {
    slider.style.transition = ('none');
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
};

const goToPrev = () => {
    currentIndex--;
    slider.style.transition = ('translate 0.5s ease-in-out');
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
    slider.addEventListener("transitionend", () => {
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
            slider.style.transition = ('none');
            slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
        }

    },
        { once: true }
    )
}

const goToNext = () => {
    currentIndex++;
    slider.style.transition = ('translate 0.5s ease-in-out');
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;

    slider.addEventListener("transitionend", () => {
        if (currentIndex >= images.length) {
            currentIndex = 0;
            slider.style.transition = ('none');
            slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
        }
    },
        { once: true }
    )
}

prevBtn.addEventListener("click", goToPrev);
nextBtn.addEventListener("click", goToNext);

setupSlides();
initSlide();

document.querySelectorAll('.catalog__container').forEach(container => {
    const slider = container.querySelector('.categorySlider');
    const btnLeft = container.querySelector('.catalog__container-buttonLeft');
    const btnRight = container.querySelector('.catalog__container-buttonRight');

    btnLeft.addEventListener('click', () =>{
        slider.scrollBy({left: -200, behavior: "auto"});
    })
    btnRight.addEventListener('click', () =>{
        slider.scrollBy({left: 200, behavior: "smooth"});
    })
})

