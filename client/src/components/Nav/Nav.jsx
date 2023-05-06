import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav({onSearch, onChange}){
    
    return (
        <nav className={style.navConteiner}>
            <SearchBar onSearch={onSearch} onChange={onChange}/>
            <div>

                <Link to="/About">
                    <button>About</button>
                </Link>

                <Link to="/Home" >
                    <button>Home</button>
                </Link>

                <Link to="/Favorites" >
                    <button>Favorites</button>
                </Link>

            </div>
        </nav>
    )
}