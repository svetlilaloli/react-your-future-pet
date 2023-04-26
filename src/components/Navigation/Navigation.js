import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export function Navigation() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    function toggleNav() {
        setToggle(!toggle);
    }

    function hideNav() {
        setToggle(false);
    }

    return (
        <nav className={styles.navbar} id="mainNav">
            <div className={styles.container}>
                <Link className={styles.brand} to="/">Your Future Pet</Link>
                <button className={styles.navbarToggler} onClick={toggleNav} type="button">
                    <span className={styles.navbarTogglerIcon}></span>
                </button>
                <div className={styles.navbarCollapse} style={{ display: toggle ? 'block' : 'none' }}>
                    <ul className={styles.navbarNav}>
                        {isAuthenticated &&
                            <span className={styles.textLight}>Hi {userEmail.split("@")[0]}</span>
                        }
                        <li onClick={hideNav}><Link className={styles.navLink} to="/about">About</Link></li>
                        <li onClick={hideNav}><Link className={styles.navLink} to="/catalog">Find a pet</Link></li>
                        {!isAuthenticated &&
                            <li onClick={hideNav}><Link className={styles.navLink} to="/login">Login</Link></li>
                        }
                        {isAuthenticated &&
                            <>
                                <li onClick={hideNav}><Link className={styles.navLink} to="/register">Register</Link></li>
                                <li onClick={hideNav}><Link className={styles.navLink} to="/add">Add a new pet</Link></li>
                                <li onClick={hideNav}><Link className={styles.navLink} to="/logout">Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}