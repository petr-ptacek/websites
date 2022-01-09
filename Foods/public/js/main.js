(function() {

  /**
   * @type {HTMLElement}
   */
  const slideshowEl = document.querySelector('.slideshow');
  let slideshowActiveItemEl = slideshowEl.querySelector('.slideshow__item--active');

  setInterval(
    () => {
      slideshowActiveItemEl.classList.remove('slideshow__item--active');

      slideshowActiveItemEl = slideshowActiveItemEl === slideshowEl.lastElementChild ?
        slideshowEl.firstElementChild :
        slideshowActiveItemEl.nextElementSibling;

      slideshowActiveItemEl.classList.add('slideshow__item--active');
    },
    2000
  );
})();