import { Link } from "react-router-dom";
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../Redux/actions"

export default function Favorites() {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.myFavorites);
    const handlerOrder = (e) => {
        dispatch(orderCards(e.target.value));
    }
    const handlerFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }
    return (
        <div>
            <Link to="/Home">
                <span>To Home</span>
            </Link>
            <div>
                <select name="order" onChange={handlerOrder}>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select name="filter" onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value='all'>All</option>
                </select>
            </div>
            <Cards characters={favorites} />

        </div>
    )

}


// import Cards from "../Cards/Cards";
// import { useSelector,useDispatch } from "react-redux"
// import { orderCards, filterCards } from "../../Redux/actions"

// export default function Favorites  (){
//     const dispatch = useDispatch();
//     const favorites = useSelector(state => state.myFavorites);

//     const handlerOrder = (e) => {
//         dispatch(orderCards(e.target.value));
//     }
//     const handlerFilter = (e) => {
//         dispatch(filterCards(e.target.value));
//     }
//     return(
//         <div>
//                 <div>
//                 <select name="order" onChange={handlerOrder}>
//                     <option value='Ascendente'>Ascendente</option>
//                     <option value='Descendente'>Descendente</option>
//                 </select>
//                 <select name="filter" onChange={handlerFilter}>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Genderless">Genderless</option>
//                     <option value="unknown">Unknown</option>
//                     <option value='all'>All</option>
//                 </select>
//             </div>
//             <Cards characters={favorites}/>
//         </div>
//     )

// }