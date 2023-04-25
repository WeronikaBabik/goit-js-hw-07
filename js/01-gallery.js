import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");
galleryItems.forEach((image) => {
  const item = document.createElement("li");
  item.innerHTML = `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
  ul.append(item);
});
ul.addEventListener("click", selectImage);
function selectImage(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  ul.onclick = () => {
    const imageSrc = event.target.dataset.source;
    basicLightbox
      .create(`<img width="1400" height="900" src="${imageSrc}">`)
      .show();
  };
}
