import {Link, Outlet} from 'react-router-dom'
const Navigation = () => {
    return ( 
        <>
        <nav className="nav">
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/contact'>Contact Us</Link></li>               
                <li> <Link to='/about'>About</Link></li>  
            </ul>
        </nav>
        <Outlet/>
        </>
     );
}
 
export default Navigation;