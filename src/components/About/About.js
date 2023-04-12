import styles from './About.module.css';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h2 className={styles.h2}>We've got what you need!</h2>
                        <hr className={styles.divider} />
                        <p className={styles.text}>Dogs, cats, small animals, even birds. Our staff and our volunteers care for these lost, abandoned or injured creatures, restore them to health, bring back their confidence and rehabilitate them. It's a worthwhile and often upsetting task as some have been badly treated or seriously injured, but seeing a frightened and cowering dog change into the loving and playful creature it was born to be is a delight.</p>
                        <p className={styles.text}>Adopting an animal is a really great and rewarding way of finding your new pet as rescue animals are special and have so much love and devotion to give to a new owner. All the animals at Your Future Pet are given a full MOT before they are re-homed so they are ready to start their new life with all the advantages we, and you, can give them.
                            Vaccinated, microchipped, wormed and neutered.
                            Examined by a vet and treated as required.
                            Assessed by an experienced member of our team to determine what type of training and education they need.
                            Given an individual training plan depending on their needs.
                            Given an individual profile to help match them with their new owner.
                            We'd love you to come and see us. Visitors are welcome to walk around the site, cattery and small animal section during our animal visiting hours. We do, however, operate restricted viewing of the dogs to minimise their stress levels.</p>
                        <Link className={styles.btn} to="/catalog">Find your best friend!</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}