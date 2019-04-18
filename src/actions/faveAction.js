


export const SAVE_FAVORITE_LIST = 'SAVE_FAVORITE_LIST'


export const saveFavoriteList = likedItemsArr => dispatch => {
    dispatch({ type: SAVE_FAVORITE_LIST, payload: likedItemsArr })
}