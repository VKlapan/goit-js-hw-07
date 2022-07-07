import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.description}9">
        <img class="gallery__image" src="${item.preview}"
        alt="${item.description}"
        data-source="${item.original}">
        </a>
        </li>
        `;
    })
    .join("");

  return `<ul class=gallery> ${itemLiMarkup} </ul>`;
};
const closeModalWindow = (event) => {
  if (event.code != "Escape") {
    return;
  }
  removeKeyboardListener();
  instance.close();
};

const addKeyboardListener = () => {
  document.addEventListener("keydown", closeModalWindow);
};

const removeKeyboardListener = () => {
  document.removeEventListener("keydown", closeModalWindow);
};

const instance = basicLightbox.create(`<img src="">`);

const modalWindowShow = (event) => {
  event.preventDefault();
  const selectedImgSource = event.target.dataset.source;
  instance.element().querySelector("img").src = selectedImgSource;
  instance.show();
  addKeyboardListener();
};

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryEl.addEventListener("click", modalWindowShow);
