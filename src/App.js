import './App.css'
import { useState,useEffect } from 'react'
// import style from './App.module.css'
import Nav from './components/Nav/Nav'
import { Route,Routes, useLocation,useNavigate } from 'react-router-dom'
import About from './Views/About/About'
import Detail from './Views/Detail/Detail'
import Home from './Home/Home'
import Landing from './Views/Landing/Landing'
import favorites from './components/Favoritos/favoritos'



function App () {
  const [characters,setCharacters]=useState([]);
  const location= useLocation();

  
  function onClose(id){
    const deleted = characters.filter((charac) => charac.id !== Number(id));
    setCharacters(deleted);
  }


  function onSearch (character) {
    let found= characters.find((ele) => ele.id === Number(character) ) 
    if(!found){
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
          .then((response) => response.json())
          .then((data) => {
              if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
              } else {
                window.alert('No hay personajes con ese ID');
                }
          })
    }else{
      alert ("Esa carta ya fue agregada")
    }
    }
    
    //LOGIN
    const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(user) {
  if (user.password === password && user.email === username) {
      setAccess(true);
      navigate('/home');
  }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);


  return (
    <div className='App'>
      {/* Esto es para un componente reutilizable */}
      {/* {location.pathname !== "/" ? (<Nav onSearch ={onSearch} About={About} Home={Home}/>)
      :( <Landing/>)} */}
      {location.pathname !=="/" &&(
        <Nav onSearch ={onSearch} About={About} Home={Home}/>
      )}
      <Routes>
        <Route exact path='/' element={<Landing login={login}></Landing>}/>

        <Route path='/Home' element={<Home  onClose={onClose} characters={characters}/>}></Route>

        <Route path='/Detail/:id' element={<Detail/>}></Route>

        <Route path='/About' element={<About/>}></Route>

        <Route path='/Favorites' element={<favorites/>}></Route>

      </Routes>
      
    </div>
  )
}

export default App