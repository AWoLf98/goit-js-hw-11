// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

export default class PixabayAPI {
  #parametrs;

  constructor() {
    this.#parametrs = {
      key: '13766037-6b94ce31e5d6d188a57cfe399',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    };
  }
  searchImg(q) {
    this.#parametrs['q'] = q;

    return fetch(
      `https://pixabay.com/api/?${new URLSearchParams(this.#parametrs)}`
    )
      .then(responce => responce.json())
      .catch(error => error);
  }
}
