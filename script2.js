let slideIndexAcquifishing = 1;

function showSlidesAcquifishing(n) {
    let slides = document.querySelectorAll('.slideshow-container-2 .slide');
    if (n > slides.length) {
        slideIndexAcquifishing = 1;
    }
    if (n < 1) {
        slideIndexAcquifishing = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndexAcquifishing - 1].style.display = 'block';
}

function changeSlideAcquifishing(n) {
    showSlidesAcquifishing(slideIndexAcquifishing += n);
}

showSlidesAcquifishing(slideIndexAcquifishing);