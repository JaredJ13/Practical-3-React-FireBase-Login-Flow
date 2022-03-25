import React from "react";
import { IoSettingsOutline, IoNotificationsOutline, IoMailOutline, IoPersonCircleOutline } from 'react-icons/io5'

function AppBar(props) {
    return (
        <>
            <section className="appbar-section">
                <body>
                    <div className="inner-container">
                        <div className="appbar-wrapper flex">
                            <div className="appbar-brand">
                                <h1>Happy Dog</h1>
                                <p>Apparel, Toys, Beds, & More!</p>
                            </div>
                            <div className="appbar-icons">
                                <ul className="flex">
                                    <li>
                                        <IoNotificationsOutline size="1.25rem" />
                                    </li>
                                    <li>
                                        <IoMailOutline size="1.25rem" />
                                    </li>
                                    <li>
                                        <IoSettingsOutline size="1.25rem" />
                                    </li>
                                    <li>
                                        <IoPersonCircleOutline size="1.25rem" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </body>
            </section>
        </>
    )
}

export default AppBar