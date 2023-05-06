import Cards from "../components/Cards/Cards";
import style from "./Home.module.css"

export default function Home({characters,onClose}){
    return(
        <div className={style.cardContenedor}>
            <Cards 
                characters={characters}
                onClose= {onClose}/>  
        </div>
    )
}