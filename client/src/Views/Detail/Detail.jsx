import { useState,useEffect } from "react"
import { useParams} from "react-router-dom"
import style from "../../components/Card/Card.module.css"

export default function Detail(props){
    const {id}= useParams()
    const [character,setCharacter] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(  )
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
        }, [id]);
return(
    <div className={style.tarjeta}>
    <button className={style.boton}>X</button>
    <img className={style.image} src={character.image} alt="image not found" />
    <h4 className={style.name} >{character.name}</h4>
    <div className={style.text}>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
    </div>
</div>
    )
}