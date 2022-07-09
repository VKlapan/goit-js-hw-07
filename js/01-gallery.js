import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img  class="gallery__image"
                  src="${item.preview}"
                  alt="${item.description}"
                  data-source="${item.original}">
          </a>
        </div>
        `;
    })
    .join("");

  return itemLiMarkup;
};

const closeModalWindow = (event) => {
  if (event.code != "Escape") {
    return;
  }
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

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryEl.addEventListener("click", modalWindowShow);
