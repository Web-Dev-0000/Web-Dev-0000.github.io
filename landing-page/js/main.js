// Выпадающий текст:


// $(function(){
//   $('.questions__item-title').on('click', function(){
//     $('.questions__item').removeClass('questions__item--active');
//   $(this).parent().addClass('questions__item--active'); 
//  });
// });

document.querySelectorAll('.questions__item-title').forEach((item) => {
  
  item.addEventListener('click', () => {
    if(item.parentNode.classList.contains('questions__item--active')) {
      item.parentNode.classList.remove('questions__item--active')
    } else {
      document.querySelectorAll('.questions__item').forEach((child) => {
        child.classList.remove('questions__item--active')
      })
      
      item.parentNode.classList.add('questions__item--active')
    }
  })
})

// Кнопка меню хедера:


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// Скролл:

const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 40ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
// updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);
  
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () =>{
  updateDashoffset();

 if (getTop() > offset) {
   scrollUp.classList.add('scroll-up--active');
 } else {
    scrollUp.classList.remove('scroll-up--active');
   }
 

});

// click

scrollUp.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'

  });
});