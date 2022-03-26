import React from "react";

import ProductCard from './../productcards/ProductCard'

function ViewAllProductsPanel(props) {
    return (
        <>
            <section className="panel-section">
                <div className="panel-wrapper">
                    <h2>All Products</h2>
                    <ProductCard />
                </div>
            </section>
        </>
    )
}

export default ViewAllProductsPanel