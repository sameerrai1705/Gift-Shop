import React from "react";
import './sam.css';
import Samel from "./samel";

const Sam = (shopItem , addToCart) => {
    return (
        <>
            <section className='shop background'>
            <div className='contentWidth'>
                <div className='heading d_flex'>
                <div className='heading-left row  f_flex'>
                    <h2>Top Gifts</h2>
                </div>
                </div>
                <div className='product-content  grid1'>
                <Samel addToCart={addToCart} shopItem={shopItem} />
                </div>
            </div>
        </section>
        </>
    );
}

export default Sam;