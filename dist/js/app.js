/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu");
   const body = document.querySelector("body");

   function closeMenu() {
      menuIcon.classList.remove("active");
      menuBody.classList.remove("active");
      body.classList.remove("no-scroll");
   }

   if (menuIcon && menuBody) {
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            closeMenu();
         }
      });

      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            closeMenu();
         }
      });

      window.addEventListener("scroll", function () {
         if (menuBody.classList.contains("active")) {
            closeMenu();
         }
      });
   }
});



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;

         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');

      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});

/*------------------------------
Slider
---------------------------*/
const categoriesSlider = document.querySelector(".categories__slider");

if (categoriesSlider) {
   const categoriesSwiper = new Swiper(categoriesSlider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: false,
      navigation: {
         nextEl: '.categories__slider-next',
         prevEl: '.categories__slider-prev',
      },
      pagination: {
         el: '.categories__slider-pagination',
         clickable: true,
      }
   });
}

/*------------------------------
Sorting
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const sortButton = document.querySelector(".sorting__button");
   const sortItems = document.querySelector(".sorting__items");

   if (!sortButton || !sortItems) return;

   sortButton.addEventListener("click", (e) => {
      e.stopPropagation();
      sortItems.classList.toggle("show");
   });

   sortItems.addEventListener("click", (e) => {
      if (e.target.classList.contains("sorting__item")) {
         sortItems.classList.remove("show");
      }
   });

   document.addEventListener("click", (e) => {
      if (!sortItems.contains(e.target) && !sortButton.contains(e.target)) {
         sortItems.classList.remove("show");
      }
   });
});

/*------------------------------
Toggle text
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const toggleBtn = document.querySelector(".seo-text__toggle");
   const wrapper = document.querySelector(".seo-text__wrapper");

   if (toggleBtn && wrapper) {
      toggleBtn.addEventListener("click", function () {
         wrapper.classList.toggle("opened");
         toggleBtn.innerHTML = wrapper.classList.contains("opened")
            ? 'свернуть <svg><use xlink:href="#icon-arrow-left"></use></svg>'
            : 'далее <svg><use xlink:href="#icon-arrow-right"></use></svg>';
      });
   }

});


/*------------------------------
Toggle about product
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const titles = document.querySelectorAll(".product__group-title");

   titles.forEach(title => {
      const text = title.nextElementSibling;

      text.style.overflow = "hidden";

      title.classList.add("active");
      text.classList.add("active");
      text.style.maxHeight = text.scrollHeight + "px";

      title.addEventListener("click", () => {
         title.classList.toggle("active");

         if (title.classList.contains("active")) {
            text.classList.add("active");
            text.style.maxHeight = text.scrollHeight + "px";
         } else {
            text.classList.remove("active");
            text.style.maxHeight = "0px";
         }
      });
   });
});


/*------------------------------
Galery carousel
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const gallerySlider = document.querySelector(".gallery-carousel__slider");
   const galleryItems = document.querySelectorAll('[data-fancybox="slider-gallery"]');
   const articleGalleryItems = document.querySelectorAll('[data-fancybox="article-images"]');

   if (gallerySlider) {
      const gallerySwiper = new Swiper(gallerySlider, {
         loop: false,
         slidesPerView: 'auto',
         spaceBetween: 12,
         navigation: {
            nextEl: '.gallery-carousel__next',
            prevEl: '.gallery-carousel__prev',
         },
      });
   }

   if (galleryItems.length > 0) {
      Fancybox.bind('[data-fancybox="slider-gallery"]', {
         Thumbs: false,
         Toolbar: {
            display: ["zoom", "close"]
         },
         caption: (fancybox, carousel, slide) => {
            return slide.$trigger.nextElementSibling?.textContent || '';
         }
      });
   }

   if (articleGalleryItems.length > 0) {
      Fancybox.bind('[data-fancybox="article-images"]', {
         Thumbs: false,
         Toolbar: {
            display: ["zoom", "close"]
         }
      });
   }
});

})();

/******/ })()
;