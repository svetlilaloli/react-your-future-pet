import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export function Navigation() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Your Future Pet</Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        {isAuthenticated &&
                            // <li className="nav-item"><Link className="nav-link disabled">Hi {userEmail.split("@")[0]}</Link></li>
                            <span>Hi {userEmail.split("@")[0]}</span>
                        }
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/catalog">Find a pet</Link></li>
                        {!isAuthenticated &&
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        }
                        {isAuthenticated &&
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/add">Add a new pet</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}