import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className='product_group'>
            <Link to="/product">
                <div className='product_body'>
                    <img className='product_img' src="https://product.hstatic.net/200000278317/product/-banh-nike-zoom-mercurial-superfly-9-academy-tf-dj5629-780-vang-hong-1_4e5cadae556240b482d76a7cba5d7b42_master.jpg" alt="" />
                </div>
                <div className='product_footer'>
                    <div className='product_divTop'>
                        <span className='product_category'>Nike</span>
                        <h3 className='product_title'>Mercurial</h3>
                    </div>
                </div>
            </Link>
            <div className='cart_otherDiv'>
                <div className='cart_quantityDiv'>
                    <button className='cart_minus'>-</button>
                    <span className='cart_quantity'>1</span>
                    <button className='cart_plus'>+</button>
                </div>
                <button className='cart_button'>
                    <span className='wish_span'>DELETE</span>
                </button>
            </div>

        </div>
    )
}

export default CartItem