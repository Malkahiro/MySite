import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return ( <div id="nav-bar">
        <h1>Malka Tahiro</h1>
        <ul id='links'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/portfolio'>Portfolio</Link>
        </ul>
    </div> );
}
 
export default Navbar;