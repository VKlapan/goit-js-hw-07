import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = (galleryItems) => {
  const itemLiMarkup = galleryItems
    .map((item) => {
      return `
        <a class="gallery__item" href="${item.original}">
            <img  class="gallery__image"
                src="${item.preview}"
                alt="${item.description}">
        </a>
        `;
    })
    .join("");

  return `<ul class=gallery> ${itemLiMarkup} </ul>`;
};

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox");
