function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=19220688-570d8444e3e62b8d826a97ca4&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error(`Нет картинок с названием ${name}`));
  });
}
const api = { fetchImages };
export default api;
