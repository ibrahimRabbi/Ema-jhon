import './header.css'
import logo from '../assets/images/Logo.svg'
export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                
                <img src={logo} alt="" srcSet="" />

                <ul className='ulList'>
                    <li> <a href="/">Order</a></li>
                    <li> <a href="/">Order Review</a></li>
                    <li> <a href="/">Manage inventory</a></li>
                    <li> <a href="/">Login</a></li>
                </ul>
            </nav>
         </header>
    )
}