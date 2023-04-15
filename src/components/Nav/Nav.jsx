import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav(props){
    
    return (
        <nav className={style.navConteiner}>
            <   SearchBar onSearch={props.onSearch}/>
            <div>

                <Link to="/About">
                    <button>About</button>
                </Link>

                <Link to="/Home" >
                    <button>Home</button>
                </Link>

                <Link to="/Favorites" >
                    <button>Favorite</button>
                </Link>

            </div>
        </nav>
    )
}