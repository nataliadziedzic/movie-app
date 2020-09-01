export const selectMovie = (img, title, plot) => {
    return {
        type: "SELECT_MOVIE",
        img,
        title,
        plot
    }
}
export const loading = () => {
    return {
        type: "LOADING"
    }
}