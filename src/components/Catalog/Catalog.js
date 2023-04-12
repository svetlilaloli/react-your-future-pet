import styles from './Catalog.module.css';
import { CatalogItem } from './CatalogItem/CatalogItem';
import {usePetContext} from '../../contexts/PetContext';

export function Catalog() {
    const { pets } = usePetContext();
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Find your best friend</h2>
                <hr className={styles.divider} />
                <div className={styles.row}>
                    {pets.map((pet) => <CatalogItem key={pet._id} {...pet} />)}
                </div>
            </div>
            {pets.length === 0 &&
                <div className={styles.bgLight}>
                    <div className={styles.container}>
                        <p className={styles.text}>No pets yet</p>
                    </div>
                </div>}
        </section>
    );
}