import Render from './js/render-functions.js';
import PixabayAPI from './js/pixabay-api.js';

const renderInst = new Render();
const pixabayInst = new PixabayAPI();

const searchImg = document.querySelector('.form-search');

searchImg.addEventListener('submit', event => {
  event.preventDefault();

  const gallery = document.querySelector('.gallery');

  renderInst.toggleLoadingMsg();
  pixabayInst
    .searchImg(searchImg.elements['search_string'].value.trim())
    .then(data => {
      renderInst.showGalery(data, gallery);
      renderInst.toggleLoadingMsg();
    });
  renderInst.toggleLoadingMsg();
});
