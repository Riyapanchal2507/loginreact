import React, { useState } from "react";
import './Signin.css'
function Signin() {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
 
    const submitform = (e) => {
        e.preventDefault();
        const newEntry = { name: name ,  pass: pass }
        if (name.length > 0 && pass.length >= 8) {
            console.log(newEntry);
        }
        else {
            alert("your username/password is wrong");
        }
    }

    return (
        <>
            <form onSubmit={submitform}>
                <h1>Login Your Account</h1>
                <input type="text" placeholder="enter your username" autoComplete="on" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="password" placeholder="enter your password" value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
                <button type="submit">Login</button>
                <p>don't have account ? <a href="#">Create Account</a></p>
            </form>
        </>
    )
}
export default Signin

