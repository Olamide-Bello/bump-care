import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import './SignUP.css'
import ExitIcon from './ExitIcon.png'
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
    const { logUser, handleUser, handleSignUpModal, handleModal, matches } = useContext(GlobalContext)
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

    const toggleModal = () => {
        handleSignUpModal()
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
        <div className={matches ? "mobile-modal-container" : 'modal-container'}>
            <div className={matches ? 'mobile-sign-up-modal' : 'sign-up-modal'}>
                <div className={matches ? 'mobile-modal-header' : 'modal-header'}>
                    <img onClick={toggleModal} src={ExitIcon} alt='exit icon' />
                </div>
                <p>Welcome To Bump Care</p>
                <h5>Create an account</h5>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className='form-group'>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name:"
                            {...register("name",
                                {
                                    required: "Username is required"
                                })
                            }
                        />
                        {errors.username && (<p className="errorMsg">{errors.username.message}</p>)}
                    </div>
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
                    <div className='form-group'>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Re-enter password:"
                            {...register("confirm_password",
                                {
                                    required: true, validate: (val) => {
                                        if (watch('password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    }
                                })
                            }
                        />
                        {errors.confirm_password?.type === "required" && (<p className="errorMsg">Re-enter password.</p>)}
                        {errors.confirm_password && (<p className="errorMsg">{errors.confirm_password.message}</p>)}
                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>SIGN UP</strong></button>
                </form>
                <p className='agree'>By clicking the button, you agree to our <a href='/policy'>Terms of use</a> and <a href='/policy'>Privacy Policy</a>.</p>
                <br />
                <div className='alt'>
                    <p>OR</p>
                    <button className='alt-login' onClick={handleGoogleSignIn}><img src={Google} alt='google icon' /> Google</button>
                    <button className='alt-login' onClick={handleFacebookSignIn}><img src={Facebook} alt='facebook icon' /> Facebook</button>
                </div>

                <p onClick={handleLogin}>Already a Member? Log in</p>
            </div>
        </div>
    )
}

export default SignUp