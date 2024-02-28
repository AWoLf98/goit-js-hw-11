import Render from "./js/render-functions.js";
import PixabayAPI from "./js/pixabay-api.js";

const renderInst = new Render();
const pixabayInst = new PixabayAPI();

const searchImg = document.querySelector('.form-search');

searchImg.addEventListener('submit', event => {
    event.preventDefault();
    renderInst.showLoadingMsg();
    pixabayInst.searchImg(searchImg.elements['search_string'].value.trim());
    renderInst.showLoadingMsg();
});