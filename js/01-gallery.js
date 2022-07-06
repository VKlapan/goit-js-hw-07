import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkupMaker = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.description}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
        </a>
        </li>
        `;
    })
    .join("");

  return `<ul class=gallery> ${itemLiMarkup} </ul>`;
};

const modalWindowShow = (event) => {
  event.preventDefault();
  const selectedImgSource = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${selectedImgSource}">`);
  instance.show();
};

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupMaker(galleryItems));

galleryEl.addEventListener("click", modalWindowShow);

//console.log(galleryMarkupMaker(galleryItems));
