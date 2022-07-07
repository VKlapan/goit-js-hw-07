import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
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

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
