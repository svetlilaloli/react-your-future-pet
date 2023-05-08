import styles from './CatalogItem.module.css';
import { Link } from "react-router-dom";

export function CatalogItem({
    _id,
    name,
    image
}) {
    return (
        <div className={styles.col}>
            <div className={styles.card}>
                <img className={styles.cardImg} src={image} alt=""/>
                <div className={styles.cardBody}>
                    <h3 className={styles.h3}>{name}</h3>
                    <Link className={styles.btn} to={`/catalog/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
}