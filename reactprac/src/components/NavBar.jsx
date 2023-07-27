// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    {/* <Link to="/">Home</Link> easier to use navlink for active links,  which knows whether a user is currently navigated to by adding a class of active to such link. */}
                </li>
                <li>
                    <NavLink to="/book">BookList</NavLink>
                </li>
                <li>
                    <NavLink to="/giphy">Giphy Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}