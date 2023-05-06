import { ADD_FAVORITE, REMOVE_FAVORITE,} from "./actions";

const initialState = {myFavorites : [], allcharacters:[]}


function reducer(state=initialState, action){

    switch (action.type) {

        // case ADD_FAVORITE:
        //     const added = [...state.myFavorites, action.payload]
        //     return {
        //         ...state,
        //         myFavorites: [...added],
        //         allcharacters: [...added],
        //     }
        
        case ADD_FAVORITE:
        return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        // case REMOVE_FAVORITE:
        //     const remove = state.myFavorites.filter(
        //         (character) => character.id !== action.payload)
        //     return {
        //         ...state,
        //         myFavorites: [...remove],
        //         allcharacters: [...remove],
        //     }
        case REMOVE_FAVORITE:
        return { ...state, myFavorites: action.payload };

        case 'FILTER':
            const filterByGender = [...state.allcharacters].filter(
                (char) => char.gender === action.payload
            );
            return {
                ...state,
                myFavorites: filterByGender,
            };
        case 'ORDER':
            let orden = [...state.allcharacters];

            let orderedChars = orden.sort((a, b) => {
                if (a.id > b.id) { //a.id = 5 b.id = 3  => b,a
                    return action.payload === 'Ascendente' ? 1 : -1
                }
                else if (a.id < b.id) { // a.id = 6 b.id = 9 => b,a
                    return action.payload === 'Descendente' ? 1 : -1
                }
                else return 0;
            });
            return { ...state, myFavorites: orderedChars };
        default:
            return state
    }
}

export default reducer;

