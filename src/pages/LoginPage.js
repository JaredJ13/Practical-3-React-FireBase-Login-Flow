import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../img/logo.jpg'
import LoginImg from '../img/login-page-big.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './../libs/firebase/index'
import { signInWithEmailAndPassword } from 'firebase/auth'



function LoginPage(props) {
    const navigator = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const notify = (error) => toast.error(error.code, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    function onLoginRequest(e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                navigator('/dashboardpage')
                console.log(userCredential)
            })
            .catch(error => {
                notify(error)
            })
    }

    return (
        <>
            <section>
                <ToastContainer />
                <div className='inner-container'>
                    <div className='login-wrapper flex'>
                        <div className='half-1'>
                            <div class="form-wrapper">
                                <img src={Logo} alt='dog bone toy' />
                                <h1>Sign In</h1>
                                <form onSubmit={onLoginRequest}>
                                    <div className='form-item'>
                                        <label htmlFor="email"></label>
                                        <input type="email" name="email" required="required" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="password"></label>
                                        <input type="password" name="password" required="required" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                    <div className="button-panel">
                                        <input type="submit" class="button" title="Sign In" value="Sign In"></input>
                                    </div>
                                </form>
                                <div className="form-footer">
                                    <p><a href="#">Create an account</a></p>
                                    <p><a href="#">Forgot password?</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='half-2 hidden'>
                            <div className='login-content'>
                                <h2>Happy Dog</h2>
                                <p>Apparel, Toys, Beds, & More!</p>
                            </div>
                            <img src={LoginImg} alt='dog with a sweater on by a toy' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage