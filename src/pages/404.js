import React from "react";
import SadCorgi from '../img/sad-corgi.jpg'

function PageNotFound(props) {
    return (
        <>
            <div className="page-nf-background">
                <h1>404: Page Not Found</h1>
                <img src={SadCorgi} alt='A sad corgi breed dog' />
            </div>
        </>
    )
}

export default PageNotFound