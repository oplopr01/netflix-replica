
import { useNavigate, Link, useLocation } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { firebaseConfig } from "./firebaseConfig"
import { useState } from "react"


const Login = () => {
    initializeApp(firebaseConfig)
    const navigate = useNavigate()
    const location = useLocation()
    const page= location.pathname ==='/login'  //page will carry true always if path is set to "/login".  yha prop pass krne ke jgah browser path se hi condition check kr le rhe hai
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isUserExist, setUserExist] = useState(false)   //to show error msg if user not exist after submitting
    const auth = getAuth()
    const onSignInClickHandler = (e) => {
        e.preventDefault() //default me button ko disable banane k liy
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                if (auth) {
                    navigate('/dashboard')
                }
            }).catch(() => setUserExist(true))
    }

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="login">
            <div className="holder">
                <h1 className="text-white"> {page ? "Sign in" : "register" }</h1>  {/*conditionally adds h1 value: Sign in for "/login" and register for other */}
                <br />
                <form>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={emailOnChangeHandler}
                        placeholder="Email" />
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>
                    {page ? "Sign in" : "Register" }
                    </button>
                    <br />
                    {page &&  <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div> }
                 
                </form>
                <br />
                <br />
                {isUserExist && <p className="text-danger">User does not exist</p>}  {/*it will conditionaly show error message*/}

                <div className="login-form-other">
                    <div className="login-signup-now">  { page ? 'New to Netflix?' : 'Existing User'} &nbsp; {/* nbsp: no brack space */}
            <Link className=" " to={page ? '/register' : '/login'}>
              { page ? 'Sign up now' : 'Sign In'} </Link>
                </div>
            </div></div>
            <div className="shadow"></div>
            <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
    )

}
export default Login