// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/msg-styles.css';

export default class Render {
  #loadingMsg;

  constructor(loadingMsg = 'loader-section') {
    this.#loadingMsg = loadingMsg;
  }

  showGalery(objData, gallery) {
    gallery.innerHTML = objData.hits.reduce((accumulator, currentValue) => {
      return accumulator + 
      `<li>
            <a href="${currentValue.largeImageURL}">
              <img src="${currentValue.webformatURL}" alt="${currentValue.tags}"/>
            </a>
            <ul class="img-description">
            <li>
              <span data-header>
                Likes
              </span>
              <span data-count>
                ${currentValue.likes}
              </span>
            </li>
            <li>
              <span data-header>
                Views
              </span>
              <span data-count>
                ${currentValue.views}
              </span>
            </li>
            <li>
              <span data-header>
                Comments
              </span>
              <span data-count>
                ${currentValue.comments}
              </span>
            </li>
            <li>
              <span data-header>
                Downloads
              </span>
              <span data-count>
                ${currentValue.downloads}
              </span>
            </li>
          </ul>
        </li>`;
    }, '');

    var lightbox = new SimpleLightbox('.gallery a');
    lightbox.show();
  }

  toggleLoadingMsg() {
    document
      .querySelector(`.${this.#loadingMsg}`)
      .classList.toggle('visually-hidden');
  }

  showFalseRenderMsg() {
    console.log('showFalseRenderMsg');
    iziToast.show({
      class: 'error-msg',
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      messageColor: '#FAFAFB',
      messageSize: '16',
      messageLineHeight: '24',
      theme: 'dark',
      color: '#EF4040',
      iconText: 'Close',
      iconColor: '#FAFAFB',
      iconUrl: '../img/button-x.svg',
      maxWidth: '432',
      zindex: 999,
      close: true,
      closeOnEscape: true,
      displayMode: 2,
      position: 'topRight',
      timeout: 50000,
      animateInside: false,
      drag: false,
      progressBarColor: '#B51B1B',
    });
  }
}
