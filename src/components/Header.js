import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag} from 'react-icons/fi';

const Header = ({cartItems}) => {
  return (
    <nav>
      <Link to='/'>Products</Link>
      <Link to='/cart' className='iconLink'><FiShoppingBag className='cartIcon' />{cartItems.length}</Link>
    </nav>
  )
}

export default Header;