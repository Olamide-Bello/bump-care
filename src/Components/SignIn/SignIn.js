import React, { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import './SignIn.css'
import ExitIcon from './ExitIcon.png'
import Facebook from './Facebook.png'
import Google from './Google.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext, UserAuth } from '../Context/AuthContext';
import { auth } from '../../Firebase_setup/Firebase';
import { GlobalContext } from '../Context/GlobalContext.js';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [firebaseErrmsg, setFirebaseErrmsg] = useState([])
    const {handleSignUpModal, handleModal, matches, handleReset } = useContext(GlobalContext)
    const { googleSignIn, facebookSignIn, user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleLogin = () => {
        handleSignUpModal()
        handleModal()
    }

    const handleResetModal = () => {
        handleModal()
        handleReset()

    }
    
    const toggleModal = () => {
        handleModal()
        handleSignUpModal()
    }

    const OnSubmit = async (data) => {
        console.log(data)
        await signInWithEmailAndPassword(auth, data.email, data.password)

            .then((userCredential) => {

                const userDetails = userCredential.user;
                setUser(userDetails)
                handleModal()
                navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseErrmsg(errorMessage)
                console.log(errorMessage)
            });

    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/home')
        }
        catch (error) {
            alert(error.code)
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
        <div className={matches ? "mobile-modal-container" : 'modal-container'}>
            <div className={matches ? 'mobile-sign-in-modal' : 'sign-in-modal'}>
                <div className={matches ? 'mobile-modal-header' : 'modal-header'}>
                    <img onClick={toggleModal} src={ExitIcon} alt='exit icon' />
                </div>
                <p>New to Bump Care? <span onClick={toggleModal} className='underline'>Join now</span></p>
                <h5>Please log in</h5>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className='form-group'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address:"
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
                        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password:"
                            {...register("password",
                                {
                                    required: true, minLength: {
                                        value: 6,
                                        message: "Password should be at-least 6 characters."
                                    }
                                })
                            }
                        />
                        {errors.password?.type === "required" && (<p className="errorMsg">Password is required.</p>)}
                        {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}
                    </div>

                    <div className='forgot-alt'>
                        <p className='link-format' onClick={handleResetModal}>Forgot Password?</p>
                        <div className='alt-alt'>
                            <span>Continue with</span>
                            <img onClick={handleGoogleSignIn} src={Google} alt='google icon' />
                            <img onClick={handleFacebookSignIn} src={Facebook} alt='facebook icon' />
                        </div>
                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>LOG IN</strong></button>
                </form>
            </div>
        </div>
    )
}

export default SignUp