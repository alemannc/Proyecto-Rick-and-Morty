export const addFavorite = "ADD_FAVORITE"
export const removeFavorite = "REMOVE_FAVORITE"


export const addFav= (chararcter)=>{
    return{
        type:addFavorite,
        payload:chararcter,
    }
}
export const removeFav= (id)=>{
    return{
        type: removeFavorite,
        payload:id,
    }
}