


export const SAVE_FAVORITE_LIST = 'SAVE_FAVORITE_LIST'


export const saveFavoriteList = likedItemsArr => dispatch => {
    console.log("LIKED ITEMS", likedItemsArr)
    dispatch({ type: SAVE_FAVORITE_LIST, payload: likedItemsArr })
}