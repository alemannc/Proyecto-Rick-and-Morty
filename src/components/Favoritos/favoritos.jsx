import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../Card/Card"
import style from "../Card/Card.module.css"

const favorites = (props)=>{
    const {myFavorites} = props;
    return(
        <div>
            <Link to="/Home">
                <span>To Home</span>
            </Link>
            {myFavorites.map((character)=>{
                return <Card>
         <img className={style.image} src={character.image} alt="image not found" />
         <h4 className={style.name} >{character.name}</h4>
         <div className={style.text}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            </div>
                </Card>
            })}
        </div>
    ) 
    
}
const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}
export default connect(mapStateToProps,null)(favorites);

