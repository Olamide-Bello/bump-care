import React, { useState } from 'react'
import './Newsletter.css'
import Letters from './Letters.png'
import { getDatabase, ref, set, child, push, update } from "firebase/database";
import { auth } from '../../../../Firebase_setup/Firebase'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Newsletter() {
    const navigate = useNavigate()

    const subscribe = async () => {
        
        try {
            const user = auth.currentUser
            if (user === null) {
                navigate('/login')
            }
            console.log(user)
            const db = getDatabase();
            let uid = user.uid;
            set(ref(db, 'users/' + uid), {
                subscribed: true
            })
            .then(() => {
                toast.success('Subscription successful!')
            }).catch((error) => {
                alert(`${error.message}`)
                toast.error(`${error.message}`)
                console.log(error)
            });
        } catch (err) {
            toast.error(`${err.message}`)
            alert(err.message);
        }
    }
    return (
        <div className='newsletter'>
            <img src={Letters} alt='letters' />
            <div className='subscribe'>
                <p>STAY UP TO DATE</p>
                <h5>Sign up to our Newsletter</h5>
                <div className='btn-policy'>
                    <button className='subscribe-btn big-btn yellow-btn' onClick={subscribe}>Subscribe</button>
                    <p>For information on how we process your data, see our <a href='/home'>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter