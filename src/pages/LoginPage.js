import React from 'react'
import Logo from '../img/logo.jpg'
import LoginImg from '../img/login-page-big.jpg'
import { Link } from "react-router-dom"


function LoginPage(props) {
    return (
        <>
            <section>
                <div className='inner-container'>
                    <div className='login-wrapper flex'>
                        <div className='half-1'>
                            <div class="form-wrapper">
                                <img src={Logo} alt='dog bone toy' />
                                <h1>Sign In</h1>
                                <form>
                                    <div className='form-item'>
                                        <label htmlFor="email"></label>
                                        <input type="email" name="email" required="required" placeholder="Email Address"></input>
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="password"></label>
                                        <input type="password" name="password" required="required" placeholder="Password"></input>
                                    </div>
                                    <div className="button-panel">
                                        <Link to="/DashBoardPage"><input type="submit" class="button" title="Sign In" value="Sign In"></input></Link>
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