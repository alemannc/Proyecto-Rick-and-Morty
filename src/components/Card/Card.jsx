import style from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import {addFav,removeFav} from "../../Redux/actions"
import { connect } from "react-redux";
import { useState,useEffect } from "react";

export function Card(props) {
   const [isFav,setIsFav]= useState(false); 
   const { character,onClose,addFav,removeFav,myFavorites } = props; 
   const navigate = useNavigate()
   
   function navigateHandler(){
      navigate(`/Detail/${character.id}`)
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(character.id)
      }else{
         setIsFav(true);
         addFav(character.id)
      }
   }

   return (
      <div className={style.tarjeta}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
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
      addFav:(character) => dispatch(addFav),
      removeFav:(id) => dispatch(removeFav)
   }
}

const mapStateToProps = (state)=>{
   return{
      myFavorites:state.myFavorites,

   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card);