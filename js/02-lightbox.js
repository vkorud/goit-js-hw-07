import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const makeGalleryMarkup = createCardsMarkup (galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', makeGalleryMarkup);


function createCardsMarkup (items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li>
    <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </li>
  `;
        
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});