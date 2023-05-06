import style from './SearchBar.module.css';


export default function SearchBar({onSearch, onChange}) {
   
   return (
      <div className={style.div}>
         <input className={style.search} type='search' onChange={onChange} />
      <button onClick={onSearch} className={style.buttonSearch} >Agregar</button>
      </div>
   );
}
