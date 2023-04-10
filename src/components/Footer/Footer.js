import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>Copyright &copy; 2023 - Your Future Pets</div>
            </div>
        </footer>
    );
}