import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";

const SignUp = () => {
    return (
        <>
            <Navbar/>
            <div className="signupContainer">
                <div className="formWrapper">
                    <h3>Welcome to Evenza</h3>
                    <p>Complete the sign up to get started</p>
                    <Input label="Full name" type="text" aria='fullname' />
                    <Input label="Email" type="email" aria='email' />
                    <Input label="Phone number" type="number" aria="phone number" />
                    <Input label="Password" type="password" aria='password' />
                    <Input label="Confirm password" type="password" aria='confirm password' />
                    <div className="checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>By signing up, you agree to the <span>Terms of Service and Privacy Policy</span></p>
                    </div>
                    <Button text="Sign up" color="primary" type="normal2" route="/otp" />
                    <Button text="Sign in" color="grey" type="normal2" />
                </div>

            </div>
        </>
    )
}

export default SignUp