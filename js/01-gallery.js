import { galleryItems } from "./gallery-items.js";
// Change code below this line

// "use strict"; is necessary these days
// I would wrap everything in the IIFE

// I would add DOM content loaded listener
const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      // I would extract into a function to render one element
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img  class="gallery__image"
                  src="${item.preview}"
                  alt="${item.description}"
             <!-- I wouldn't store data in DOM -->
                  data-source="${item.original}">
          </a>
        </div>
        `;
    })
    .join("");

  // There is no need to create a variable and then return it.
  // You could just remove brackets
  return itemLiMarkup;
};

const closeModalWindow = (event) => {
  // Triple equals
  if (event.code != "Escape") {
    return;
  }
  // There are a bunch of problems with this `instance`:
  // 1. Its global
  // 2. What would happen if it is not initialized yet?
  instance.close();
};

const addKeyboardListener = () => {
  //  console.log("LISTENER ADDED");
  document.addEventListener("keydown", closeModalWindow);
};

const removeKeyboardListener = () => {
  //  console.log("LISTENER CLOSED");
  document.removeEventListener("keydown", closeModalWindow);
};

let instance;

const modalWindowShow = (event) => {
  event.preventDefault();
  // Triple equals
  if (event.target.nodeName != "IMG") {
    return;
  }
  const selectedImgSource = event.target.dataset.source;
  instance = basicLightbox.create(`<img src="${selectedImgSource}">`, {
    onClose: removeKeyboardListener,
    onShow: addKeyboardListener,
  });
  instance.show();
};

// Why not just innerHTML?
galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryEl.addEventListener("click", modalWindowShow);
// I would wrap intialising in a function and then call it
