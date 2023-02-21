const KEY = '31422890-5e40c603f0e6080de62657891';

export const fetchGallery = ({ queryName, page }) => {
  return fetch(
    `https://pixabay.com/api/?q=${queryName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`There is no searchname ${queryName}`));
  });
};
