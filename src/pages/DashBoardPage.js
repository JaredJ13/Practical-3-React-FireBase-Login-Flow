import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../libs/firebase";

import AppBar from "../components/appbar/AppBar";
import SideBar from "../components/sidebar/SideBar";

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        }
        else {
            setIsUser(false)
            navigator('/')
        }
    })

    if (isUser) {
        return (
            <>
                <AppBar />
                <div className="flex">
                    <SideBar />
                    <Outlet />
                </div>
            </>
        )
    } else {
        return null
    }


}

export { DashBoardPage }