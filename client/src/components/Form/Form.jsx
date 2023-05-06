import { useState } from "react";
import style from "./Form.module.css"
import { validate } from "../../utils/validation";


export default function Form(props){
    const [userData, setUserData] = useState({ email: '', password: '' });

    const[errors,setErrors] = useState({ email: '', password: '' })

    
    function handleInputChange(e){
        e.preventDefault()
    setUserData({
        ...userData,
        [e.target.name]: e.target.value,
    })

    setErrors(validate({
        ...userData,
        [e.target.name]: e.target.value,
    }))
    }

    function submit(e){
        e.preventDefault()
        props.login(userData) 
        console.log(userData)
    }
    return(
        <div>
            <form type="submit">
            <div>
                <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    name="email" 
                    onChange={handleInputChange} 
                    value={userData.email}/>
                    {errors.email ? <span className={style.span}>{errors.email}</span>: null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    onChange={handleInputChange} 
                    value={userData.password}/>
                    {errors.password ? <span className={style.span}>{errors.password}</span>: null}
            </div>
                <button onClick={submit} >Login</button>
            </form>
        </div>
    )
}