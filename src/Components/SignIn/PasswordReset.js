import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import './SignIn.css'
import Direct from './Direct.png'
import logo from './logo.png'
import logoMobile from './logoMobile.png'
import ExitMobile from './ExitMobile.png'
import mail from './mail.png'
import ExitIcon from './Exit.png'
import Facebook from './Facebook.png'
import Google from './Google.png'
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../../Firebase_setup/Firebase';
import { GlobalContext } from '../Context/GlobalContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PasswordReset() {
    const [sent, setSent] = useState(false)
    const { matches } = useContext(GlobalContext)
    const { googleSignIn, facebookSignIn, logged } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleExit = () => {
        navigate(-1)
    }

    const OnSubmit = async (data) => {
        console.log(data)
        await sendPasswordResetEmail(auth, data.email)

            .then(() => {
                toast.info('We just sent you a password reset link, please check your email.')
                setSent(true)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleGoogleSignIn = async () => {
        try {
            googleSignIn()
            if(logged) {
                navigate(-1)
            }
        }
        catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        }
    }
    const handleFacebookSignIn = async () => {
        try {
            facebookSignIn()
            if(logged) {
                navigate(-1)
            }
        }
        catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        }
    }

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
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>{sent ? 'Resend Link' : 'Send Recovery Email'}</strong></button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset