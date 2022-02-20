import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const makeGalleryMarkup = galleryItems.map(({ preview, original, description }) =>
  `
    <li>
    <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </li>
  `
).join('');

galleryContainer.insertAdjacentHTML('beforeend', makeGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});