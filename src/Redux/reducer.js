import { addFavorite,removeFavorite } from "./actions";
const initialState ={
    myFavorite:[]
};


function reducer(state=initialState, {type,payload}){
switch(type){
    case addFavorite:
        return {
            ...state,
            myFavorite: [...state.myFavorite,payload]
        }
    case removeFavorite:
        
        return {
            ...state,
            myFavorite: state.myFavorite.filter((character)=> character.id !== Number(payload))
        }

    default:
        return {...state}
}
}

export default reducer;

