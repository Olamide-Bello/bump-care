import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import './SignUP.css'
import Direct from './Direct.png'
import logo from './logo.png'
import logoMobile from './logoMobile.png'
import userLogo from './user.png'
import mail from './mail.png'
import lock from './lock.png'
import ExitIcon from './Exit.png'
import ExitMobile from './ExitMobile.png'
import Facebook from './Facebook.png'
import Google from './Google.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext, UserAuth } from '../Context/AuthContext';
import { auth, db } from '../../Firebase_setup/Firebase';
import { GlobalContext } from '../Context/GlobalContext.js';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

function SignUp() {
    const [firebaseErrmsg, setFirebaseErrmsg] = useState([])
    const { handleSignUpModal, matches } = useContext(GlobalContext)
    const { googleSignIn, facebookSignIn, user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleExit = () => {
        navigate(-1)
    }

    const OnSubmit = async (data) => {
        console.log(data)
        try {

            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = res.user;
            console.log(user)
            await updateProfile(auth.currentUser, {
                displayName: data.name,
            }).then(() => {
                handleSignUpModal()

            }).catch((error) => {
                // An error occurred
                console.log(error)
            });
            navigate('/home')
        } catch (err) {
            console.error(err);
            alert(err.message);
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         setFirebaseErrmsg(errorMessage)
            //         console.log(errorMessage)
        }

    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/home')
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFirebaseErrmsg(errorMessage)
            console.log(errorMessage)
        }
    }
    const handleFacebookSignIn = async () => {
        try {
            await facebookSignIn()
            navigate('/home')
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFirebaseErrmsg(errorMessage)
            console.log(errorMessage)
        }
    }

    return (
        <div className='modal-container'>
            {!matches && <div className='modal-img'>
                <img src={Direct} alt='a pregnant woman with phone' />
                <div className='modal-img-dt'>
                    <h5>Welcome to BumpCare</h5>
                    <h5>Your Ultimate Pregnancy Resources and Gynecologist Directory</h5>
                </div>
            </div>}
            <div className='sign'>
                <div className='modal-header'>
                    {matches ? <img src={logoMobile} alt='logo' /> : <img src={logo} alt='logo' />}
                    {matches ? <img onClick={handleExit} className='sign-exit' src={ExitMobile} alt='exit icon' /> :
                        <img onClick={handleExit} className='sign-exit' src={ExitIcon} alt='exit icon' />}
                </div>
                <h5>Create an Account to Get Started</h5>
                <div className='alt'>
                    <p>OR</p>
                    <button className='alt-login' onClick={handleGoogleSignIn}><img src={Google} alt='google icon' /> Google</button>
                    <button className='alt-login' onClick={handleFacebookSignIn}><img src={Facebook} alt='facebook icon' /> Facebook</button>
                </div>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            {...register("name",
                                {
                                    required: "Username is required"
                                })
                            }
                        />
                        <img src={userLogo} alt='user' />
                        {errors.username && (<p className="errorMsg">{errors.username.message}</p>)}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
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
                        <label htmlFor='password' >Password</label>
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
                    <div className='agree-container'>
                        <input type='checkbox' id='agree' />
                        <label htmlFor='agree' className='agree'>By clicking the button, you agree to our <a href='/policy'>Terms of use</a> and <a href='/policy'>Privacy Policy</a>.</label>
                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>Sign Up</strong></button>
                </form>
                <br />
                <p>Have an account with us? <span onClick={handleLogin}>Sign In here</span></p>
            </div>
        </div>
    )
}

export default SignUp