import React, { useState } from "react";

import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../libs/firebase";

import PNFDog from '../img/pnf-dog.jpg'

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        }
        else {
            setIsUser(false)
        }
    })

    return (
        <>
            <div className="page-nf-background">
                <img src={PNFDog} alt='A sad corgi breed dog' />
                <div className="pnf-box">
                    <h1>404: Page Not Found</h1>
                    <ul>
                        {
                            isUser ? <Link to='/dashboardpage' style={{ textDecoration: 'none', color: '#fff' }}><li>Back to safety</li></Link> : <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}><li>Back to safety</li></Link>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PageNotFound