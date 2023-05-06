// Store
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import reducer  from "./reducer";


export const store= createStore(reducer,applyMiddleware(thunk));





// actions

export const nombreDeLaAction = "la accion que le va llegar al reducer"

let param= "lo que le va llegar al payload"

export const action= (param)=>{
    return{
        type:nombreDeLaAction,
        payload:param,
    }
}

// reducer
//Pimero importas las actions que son variables. Estara comentado ya que no hace falta importarlo porque esta en el mismo archivo
// import nombreDeLaAction from "./"
//Ahora creamos ele stado inicial y hacemos el reducer

const initialState= { }

function reducer (state=initialState,{type,payload}){
switch(type){
    
    default:
        return {...state}
}
}


/// mapDispatchToProps Es una funcion la cual nos permite llevar las acciones para que al momento de conectar el estado global con nuestro componente podamos acceder a las acciones a travez de las props

const mapDispatchToProps = (dispatch)=>{
    return
}

// Conectar el componente con el dipatch y el estado

export default connect (null, mapDispatchToProps)(Card);

//El primer parametro es el mapStateToProps y el segundo el dispatchToProps. Luego en los parentesis de afuera ponemos el componente al que queremos que estan conectadas ambas cosas por props