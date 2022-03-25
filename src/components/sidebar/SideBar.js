import React from "react";

import { IoCaretDown, IoFileTrayFullOutline, IoLogoBuffer, IoCartOutline, IoStarOutline, IoLogOutOutline, IoCashOutline, IoPeopleOutline, IoPeopleCircleOutline, IoAnalyticsOutline, IoCellularOutline, IoAppsOutline } from 'react-icons/io5'

import { auth } from "../../libs/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function SideBar(props) {
    function onLogOutRequest(e) {
        signOut(auth);
    }

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
                                    <Link to="/dashboardpage" style={{ textDecoration: 'none', color: '#fff' }}><li>View All Products</li></Link>
                                    <Link to="add" style={{ textDecoration: 'none', color: '#fff' }}><li>Add New Product</li></Link>
                                    <Link to="edit" style={{ textDecoration: 'none', color: '#fff' }}><li>Edit Product</li></Link>
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
                            <li className="sign-out-sidebar" style={{ cursor: 'pointer' }} onClick={onLogOutRequest}>
                                <div className="flex-sidebar">
                                    <IoLogOutOutline size="1.25rem" /> Sign Out
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideBar