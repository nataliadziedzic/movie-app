export const selectMovie = (img, title, plot) => ({
  type: 'SELECT_MOVIE',
  img,
  title,
  plot,
});
export const loading = () => ({
  type: 'LOADING',
});
