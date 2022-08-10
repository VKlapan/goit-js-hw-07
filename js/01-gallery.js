import { galleryItems } from "./gallery-items.js";
// Change code below this line

// IIFE Imediately Invoked Function Expression
(function () {
  "use strict";

  const CLASS_NAME_FOR_DETECT_OPEN_PICT = "gallery__image";

  const renderGalleryItem = (className) => (item) =>
    `
  <div class="gallery__item">
    <a class="${className}" href="${item.original}">
      <img  class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            data-source="${item.original}">
    </a>
  </div>`;

  const createGalleryMarkup = (galleryItems) =>
    galleryItems
      .map(renderGalleryItem(CLASS_NAME_FOR_DETECT_OPEN_PICT))
      .join("");

  const getDOMelement = (selector) => document.querySelector(selector);

  const showModalWindow = (event) => {
    event.preventDefault();

    if (event.target.className != CLASS_NAME_FOR_DETECT_OPEN_PICT) {
      return;
    }

    const closeModalWindow = (event) => {
      if (event.code != "Escape") {
        return;
      }
      instance.close();
    };

    const addKeyboardListener = () => {
      addEventListener("keydown", closeModalWindow);
    };

    const removeKeyboardListener = () => {
      removeEventListener("keydown", closeModalWindow);
    };

    const selectedImgSource = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${selectedImgSource}">`, {
      onClose: removeKeyboardListener,
      onShow: addKeyboardListener,
    });

    instance.show();
  };

  function start() {
    const root = getDOMelement(".gallery");
    root.innerHTML = createGalleryMarkup(galleryItems);
    // galleryItems
    root.addEventListener("click", showModalWindow);
  }

  window.addEventListener("DOMContentLoaded", start);
})();
