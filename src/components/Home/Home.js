import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export function Home (){
    return (
        <header className={styles.masthead}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.colHeading}>
                        <h1 className={styles.h1}>Your Favorite Place for Adorable Buddies</h1>
                        <hr className={styles.divider} />
                    </div>
                    <div className={styles.colParagraph}>
                        <p className={styles.text}>Shelters are full!</p>
                        <p className={styles.text}>Help pets find a new home!</p>
                        <Link className={styles.btn} to="/about">Find Out More</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}