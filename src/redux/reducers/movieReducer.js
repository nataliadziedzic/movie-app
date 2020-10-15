/* eslint-disable no-param-reassign */
const movieReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return (state = {
        img: action.img,
        title: action.title,
        plot: action.plot,
      });
    default:
      return state;
  }
};

export default movieReducer;
