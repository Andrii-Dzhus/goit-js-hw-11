import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const querty = event.currentTarget.elements.searchQuery.value.toLowerCase();

  if (querty === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }
  loader.style.display = 'block';
  gallery.innerHTML = '';
  fetchImages(querty)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong: ${error.message}',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
