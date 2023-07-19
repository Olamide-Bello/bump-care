import React, { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import './SignIn.css'
import ExitIcon from './ExitIcon.png'
import Facebook from './Facebook.png'
import Google from './Google.png'
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext, UserAuth } from '../Context/AuthContext';
import { auth } from '../../Firebase_setup/Firebase';
import { GlobalContext } from '../Context/GlobalContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PasswordReset() {
    const [firebaseErrmsg, setFirebaseErrmsg] = useState([])
    const [sent, setSent] = useState(false)
    const { handleSignUpModal, handleReset, matches } = useContext(GlobalContext)
    const { googleSignIn, facebookSignIn, user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleClose = () => {
        handleReset()
        
    }
    
    const toggleModal = () => {
        handleReset()
        handleSignUpModal()
    }

    const OnSubmit = async (data) => {
        console.log(data)
        await sendPasswordResetEmail(auth, data.email)

            .then(() => {
                toast.info('We just sent you a password reset link, please check your email.')
                setSent(true)
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
                    <img onClick={handleClose} src={ExitIcon} alt='exit icon' />
                </div>
                <p>New to Bump Care? <span onClick={toggleModal} className='underline'>Join now</span></p>
                <h5>Please enter your account email</h5>
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

                    <div className='forgot-alt'>
                        <div className='alt-alt'>
                            <span>Continue with</span>
                            <img onClick={handleGoogleSignIn} src={Google} alt='google icon' />
                            <img onClick={handleFacebookSignIn} src={Facebook} alt='facebook icon' />
                        </div>
                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>{sent? 'RESEND LINK' : 'SEND RECOVERY EMAIL'}</strong></button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset