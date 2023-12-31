import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './SignIn.css'
import Direct from './Direct.png'
import logo from './logo.png'
import logoMobile from './logoMobile.png'
import ExitMobile from './ExitMobile.png'
import mail from './mail.png'
import lock from './lock.png'
import ExitIcon from './Exit.png'
import Facebook from './Facebook.png'
import Google from './Google.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../../Firebase_setup/Firebase';
import { GlobalContext } from '../Context/GlobalContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignIn() {
    const { matches, prevPath } = useContext(GlobalContext)
    const { googleSignIn, facebookSignIn, setUser, logged } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignUp = () => {
        navigate('/signup')
    }

    const handleResetModal = () => {
        navigate('/reset')
    }

    const handleExit = () => {
        navigate(-1)
    }

    const OnSubmit = async (data) => {
        console.log(data)
        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)

                .then((userCredential) => {

                    const userDetails = userCredential.user;
                    setUser(userDetails)
                })
        }
        catch (error) {
            const errorMessage = error.message;
            if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
                toast.warning('User does not exist, sign up instead!')
            }
        };

    }

    const handleGoogleSignIn = async () => {
        try {
            googleSignIn()
        }
        catch (error) {
            alert(error.code)
            const errorMessage = error.message;
            console.log(errorMessage)
        }
    }
    const handleFacebookSignIn = async () => {
        try {
            facebookSignIn()
            if (logged) {
                navigate(-1)
            }
        }
        catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        }
    }
    useEffect(() => {
        const navBack = () => {
            if (logged) {
                navigate(prevPath, { replace: true })
            }

        }
        navBack()
    }, [logged, navigate, prevPath])

    console.log(prevPath)


    return (
        <div className='modal-container'>
            {!matches && <div className='modal-img'>
                <img src={Direct} alt='a pregnant woman with phone' />
                <div className='modal-img-dt'>
                    <h5>Welcome Back We're Thrilled to Support Your Journey</h5>
                </div>
            </div>}
            <div className='sign'>
                <div className='modal-header'>
                    {matches ? <img src={logoMobile} alt='logo' /> : <img src={logo} alt='logo' />}
                    {matches ? <img onClick={handleExit} className='sign-exit' src={ExitMobile} alt='exit icon' /> :
                        <img onClick={handleExit} className='sign-exit' src={ExitIcon} alt='exit icon' />}
                </div>
                <h5>Hello! Welcome back</h5>
                <div className='alt'>
                    <p>OR</p>
                    <button className='alt-login' onClick={handleGoogleSignIn}><img src={Google} alt='google icon' /> Google</button>
                    <button className='alt-login' onClick={handleFacebookSignIn}><img src={Facebook} alt='facebook icon' /> Facebook</button>
                </div>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className='form-group'>
                        <label htmlFor='name'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your mail address"
                            {...register("email",
                                {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid."
                                    }
                                })
                            }
                        />
                        <img src={mail} alt='mail' />
                        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password",
                                {
                                    required: true, minLength: {
                                        value: 6,
                                        message: "Password should be at-least 6 characters."
                                    }
                                })
                            }
                        />
                        <img src={lock} alt='lock' />
                        {errors.password?.type === "required" && (<p className="errorMsg">Password is required.</p>)}
                        {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}
                    </div>
                    <div className='forgot-alt'>
                        <div>
                            <input type='checkbox' id='agree' name='agree' />
                            <label htmlFor='agree' className='agree'>Remember me</label>
                        </div>
                        <p className='link-format' onClick={handleResetModal}>Forgot Password?</p>

                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>Sign In</strong></button>
                </form>
                <br />
                <p>Don't have an account with us? <span onClick={handleSignUp}>Sign Up here</span></p>
            </div>
        </div>
    )
}

export default SignIn