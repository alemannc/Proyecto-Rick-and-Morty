import { useState } from 'react';
import style from './SearchBar.module.css';


export default function SearchBar(props) {
   const {onSearch} = props
   const [character,setCharacter] = useState("")
   const handleInputChange = (event)=>{
      const value = event.target.value
      setCharacter(value)
   }
   return (
      <div className={style.div}>
         <input className={style.search} onChange={handleInputChange} />
      <button onClick={() => onSearch(character)} className={style.buttonSearch} >Agregar</button>
      </div>
   );
}
