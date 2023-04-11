import styles from './Add.module.css';
import { useNavigate } from 'react-router-dom';
import { usePetContext } from '../../contexts/PetContext';
import { useForm } from '../../hooks/useForm';
import validate from '../common/PetFormValidationRules';

export function Add() {
    const { error, onAddSubmit } = usePetContext();
    const { values, errors, handleChange, handleSubmit } = useForm(onAddSubmit, validate);
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.cardBody}>
                                <h2 className={styles.h2}>Add a new pet</h2>
                                <form action="post" onSubmit={handleSubmit}>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="name"
                                            className={`${errors.name && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Name"
                                            name="name"
                                            value={values.name || ''}
                                            onChange={handleChange} />
                                        {errors.name && (
                                            <p className={styles.textDanger}>{errors.name}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="breed"
                                            className={`${errors.breed && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Breed"
                                            name="breed"
                                            value={values.breed || ''}
                                            onChange={handleChange} />
                                        {errors.breed && (
                                            <p className={styles.textDanger}>{errors.breed}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="age"
                                            className={`${errors.age && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Age"
                                            name="age"
                                            value={values.age || ''}
                                            onChange={handleChange} />
                                        {errors.age && (
                                            <p className={styles.textDanger}>{errors.age}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="weight"
                                            className={`${errors.weight && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Weight"
                                            name="weight"
                                            value={values.weight || ''}
                                            onChange={handleChange} />
                                        {errors.weight && (
                                            <p className={styles.textDanger}>{errors.weight}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="image"
                                            className={`${errors.image && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Image link"
                                            name="image"
                                            value={values.image || ''}
                                            onChange={handleChange} />
                                        {errors.image && (
                                            <p className={styles.textDanger}>{errors.image}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <textarea rows="5"
                                            id="summary"
                                            className={`${errors.summary && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Summary ..."
                                            name="summary"
                                            value={values.summary || ''}
                                            onChange={handleChange} />
                                        {errors.summary && (
                                            <p className={styles.textDanger}>{errors.summary}</p>
                                        )}
                                    </div>
                                    <button className={styles.btn} type="submit">Add</button>
                                    <button className={`${styles.btn} ${styles.btnSecondary}`} type="submit" onClick={() => navigate(-1)}>Cancel</button>
                                    {error && <p className={styles.textDanger}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}