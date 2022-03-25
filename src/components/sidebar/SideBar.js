import React from "react";
import { IoCaretDown, IoFileTrayFullOutline, IoLogoBuffer, IoCartOutline, IoStarOutline, IoLogOutOutline, IoCashOutline, IoPeopleOutline, IoPeopleCircleOutline, IoAnalyticsOutline, IoCellularOutline, IoAppsOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";

function SideBar(props) {
    return (
        <>
            <section className="sidebar-section">
                <div className="container">
                    <div className="sidebar-wrapper">
                        <ul>
                            <li>
                                <div className="flex-sidebar">
                                    <IoAppsOutline size="1.25rem" /> DashBoard
                                </div>
                            </li>
                        </ul>
                        <ul className="shop-sidebar">
                            <li>
                                <div className="flex-sidebar">
                                    <IoFileTrayFullOutline size="1.25rem" />
                                    Categories <IoCaretDown />
                                </div>
                                <ul>
                                    <li>Play</li>
                                    <li>Walk</li>
                                    <li>Sleep</li>
                                    <li>Wear</li>
                                    <li>Eat</li>
                                    <li>Groom/Clean</li>
                                    <li>Travel</li>
                                    <li>Training</li>
                                </ul>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoLogoBuffer size="1.25rem" /> Products <IoCaretDown />
                                </div>
                                <ul>
                                    <li>Add New Product</li>
                                </ul>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoCartOutline size="1.25rem" /> Orders
                                </div>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoStarOutline size="1.25rem" /> Reviews
                                </div>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoCashOutline size="1.25rem" /> Brands
                                </div>
                            </li>
                        </ul>
                        <ul className="users-sidebar">
                            <li>
                                <div className="flex-sidebar">
                                    <IoPeopleOutline size="1.25rem" /> Users
                                </div>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoPeopleCircleOutline size="1.25rem" /> Vendors
                                </div>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoCellularOutline size="1.25rem" /> Your Account
                                </div>
                            </li>
                            <li>
                                <div className="flex-sidebar">
                                    <IoAnalyticsOutline size="1.25rem" /> Sales
                                </div>
                            </li>
                            <li className="sign-out-sidebar">
                                <Link to="/loginpage">
                                    <div className="flex-sidebar">
                                        <IoLogOutOutline size="1.25rem" /> Sign Out
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideBar