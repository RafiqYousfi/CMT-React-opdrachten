import {Link, Outlet} from 'react-router-dom'
const Navigation = () => {
    return ( 
        <>
        <nav className="nav">
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/'>Contact Us</Link></li>               
                 <li>Contact</li>
            </ul>
        </nav>
        <Outlet/>
        </>
     );
}
 
export default Navigation;