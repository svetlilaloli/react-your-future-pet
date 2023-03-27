import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export function Navigation() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Your Future Pets</Link>
                {/* for responsive */}
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/catalog">Find a pet</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        {isAuthenticated &&
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/add">Add a new pet</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Logout</Link></li>
                            </>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}