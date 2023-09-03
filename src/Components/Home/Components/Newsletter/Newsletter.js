import React, { useContext } from 'react'
import './Newsletter.css'
import Letters from './Letters.png'
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../../../../Firebase_setup/Firebase'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

function Newsletter() {
    const navigate = useNavigate()
    const {logged} = useContext(AuthContext)

    const subscribe = async () => {
        
        try {
            const user = auth.currentUser
            console.log(logged)
            if (!logged) {
                navigate('/login')
                toast.info('You must log in first!')
            } else {
                const db = getDatabase();
                let uid = user.uid;
                set(ref(db, 'users/' + uid), {
                    subscribed: true
                })
                .then(() => {
                    toast.success('Subscription successful!')
                }).catch((error) => {
                    toast.error(`${error.message}`)
                    console.log(error)
                });
            }
        } catch (err) {
            toast.error(`${err.message}`)
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
                    <p>For information on how we process your data, see our <a href='/policy'>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter