let offset = 0;
const sliderItem = document.querySelector('.slider__item');

document.querySelector('.btn-next').addEventListener('click', function(){
    offset += 1200;
    if (offset > 3600) {
        offset = 0;
    }
    sliderItem.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    offset -= 1200;
    if (offset < 0) {
        offset = 3600;
    }
    sliderItem.style.left = -offset + 'px';
});