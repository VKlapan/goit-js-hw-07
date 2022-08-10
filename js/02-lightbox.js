import { galleryItems } from "./gallery-items.js";
// Change code below this line

(function () {
  const galleryEl = document.querySelector(".gallery");

  const renderGalleryElement = (item) => {
    return `<li>
        <a class="gallery__item" href="${item.original}">
            <img  class="gallery__image"
                src="${item.preview}"
                alt="${item.description}">
        </a>
      </li>
      `;
  };

  const createGalleryMarkup = (galleryItems) =>
    galleryItems.map(renderGalleryElement).join("");

  galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

  lightbox.on("show.simplelightbox");
})();
