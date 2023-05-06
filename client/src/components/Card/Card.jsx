import style from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import {addFavorite,removeFavorite} from "../../Redux/actions"
import { connect } from "react-redux";
import { useState,useEffect } from "react";

export function Card(props) {
   const navigate = useNavigate()
   const { character, onClose, addFavorite, removeFavorite, myFavorites } = props; 
   const [isFav,setIsFav]= useState(false); 
   
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   function navigateHandler(){
      navigate(`/Detail/${character.id}`)
   }

   function handleFavorite(data){
      if (isFav) {
         removeFavorite(data);
         setIsFav(false);
      } else {
         addFavorite(data);
         setIsFav(true);
      }
   }

   return (
      <div className={style.tarjeta}>
         {
         isFav ? (
            <button onClick={()=>handleFavorite(character.id)}>❤️</button>
         ) : (
            <button onClick={()=>handleFavorite(character)}>🤍</button>
         )}
         <button className={style.boton} onClick={()=>onClose(character.id)}>X</button>
         <img className={style.image} src={character.image} alt="image not found" />
         <h4 className={style.name} onClick={navigateHandler}>{character.name}</h4>
         <div className={style.text}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites,

   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card);