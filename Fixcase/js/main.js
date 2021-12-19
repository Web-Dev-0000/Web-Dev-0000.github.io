// Переключение по городам
const defaultSelect = () => {
  const element = document.querySelector('.header__adres');
  const cloices = new Choices(element, {
    searchEnabled: false,
  });
};
defaultSelect();


// Верхний слайдер
$(function(){
  $('.banners-section__slider').slick({
    arrows: false,
    dots: true,
  });


// По табам (не работает...?)
  $('.tab').on('click', function(e){
    e.preventDefault();

    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });
  $('.product_item-favorite').on('click', function(){
    $('.product_item-favorite').toggleClass('product_item-favorite--active')
  })

});

// Смена значка корзины
const basket = document.querySelectorAll('.banners-section__product_item-basket-img');

basket.forEach(basketItem => {
  basketItem.addEventListener('click', () =>  {  
    basketItem.classList.toggle('in-basket');
  });

})

// Cмена значка сердца
// const favorite = document.querySelectorAll('.banners-section__product_item-basket-img');

// favorite.forEach(favtItem => {
//   favoriteItem.addEventListener('click', () =>  {  
//     favoriteItem.classList.toggle('in-fav-active');
//   });

// })

// Кнопка хэдера
$('.menu-btn').on('click', function () {
  $('.menu__list').toggleClass('active');
});
