import React from "react";
import AppBar from "../components/appbar/AppBar";
import SideBar from "../components/sidebar/SideBar";
import Panel from "../components/panels/Panel";

function DashBoardPage(props) {
    return (
        <>
            <AppBar />
            <div className="flex">
                <SideBar />
                <Panel />
            </div>
        </>
    )
}

export { DashBoardPage }