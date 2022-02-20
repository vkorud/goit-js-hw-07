import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = galleryItems.map(({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
        
    ).join('');

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function onGalleryClick(evt) {
    if (!evt.target.nodeName === 'IMG') {
    return;
  }
    evt.preventDefault();
    console.dir(evt.target);
    modalShow(evt.target.dataset.source);
}

galleryContainer.addEventListener("click", onGalleryClick);

function modalShow(src) {
  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscClick);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
      },
    },
  );
  instance.show();
}