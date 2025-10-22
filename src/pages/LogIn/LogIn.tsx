import { NavLink } from "react-router-dom";
import Button from "../../../src/components/Button/Button";
import Input from "../../../src/components/Input/Input";
import "./LogIn.css";
import Navbar from "../../components/Navbar/Navbar";

const SignIn = () => {
    return (
        <>
        <Navbar/>
           
            <div className="loginContainer">
                <div className="formWrapper">
                    <h3>We missed you!</h3>
                    <p>Enter your account details to login</p>
                    <Input label="Email" type="email" aria='email' />
                    <Input label="Password" type="password" aria='password' />
                    <div className="forgotten">
                        <p>Forgotten password?</p>
                        <NavLink to={"/reset"}><button>Reset</button></NavLink>
                    </div>
                    <Button text="Log In" color="primary" type="normal2" route="/verification" />
                    <Button text="Register" color="grey" type="normal2" />
                </div>
            </div>
        </>
    )
}

export default SignIn