const apiKey = '44774243-c5238725a8321193973133c91';

export function fetchImages(query) {
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
