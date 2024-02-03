import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../api/login";


const LoginLayout = ({userInfo, handleUserInfo}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate();
        
    const onButtonClick = async () => {

        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")
        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
        // Authentication calls will be made here...       
        
        const temp = await doLogin(email,password,setPasswordError);
        const {access_token} = temp;
        await handleUserInfo({
            email:email,
            jwt: access_token
        })
        navigate("/dashboard", {userInfo})
    }

    return <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={"titleContainer"}>
            <h2>Login</h2>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>
}

export default LoginLayout