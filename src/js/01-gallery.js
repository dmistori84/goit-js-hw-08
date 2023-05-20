// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const listGallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => {
    return `    <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        data-source="${item.original}"
                        src="${item.preview}" 
                        alt="${item.description}"
                    >
                </a>
            `
}).join('');

listGallery.insertAdjacentHTML('beforeend', markup);

const plaginForLibrary = new SimpleLightbox('.gallery a');