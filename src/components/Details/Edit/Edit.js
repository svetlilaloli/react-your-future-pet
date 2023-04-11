import styles from './Edit.module.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { petServiceFactory } from '../../../services/petService';
import { usePetContext } from '../../../contexts/PetContext';
import { useForm } from '../../../hooks/useForm';
import { useService } from "../../../hooks/useService";
import validate from '../../common/PetFormValidationRules';

export function Edit() {
    const { error, onEditSubmit } = usePetContext();
    const { petId } = useParams();
    const petService = useService(petServiceFactory);
    const { values, errors, handleChange, handleSubmit, updateValues } = useForm(onEditSubmit, validate);
    const navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                updateValues(result);
            });
    }, [petId]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.cardBody}>
                                <h2 className={styles.h2}>Edit</h2>
                                <form action="post" onSubmit={handleSubmit}>
                                    <img className={styles.cardImgTop} src={values.image} alt="edit-pet" />
                                    <div className={styles.mb4}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                            className={styles.formControl}
                                            id="name"
                                            name="name"
                                            value={values.name || ''}
                                            onChange={handleChange} />
                                        {errors.name && (
                                            <p className={styles.textDanger}>{errors.name}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <label htmlFor="breed">Breed</label>
                                        <input type="text"
                                            className={styles.formControl}
                                            id="breed"
                                            name="breed"
                                            value={values.breed || ''}
                                            onChange={handleChange} />
                                        {errors.breed && (
                                            <p className={styles.textDanger}>{errors.breed}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <label htmlFor="breed">Age</label>
                                        <input type="text"
                                            className={styles.formControl}
                                            id="age"
                                            name="age"
                                            value={values.age || ''}
                                            onChange={handleChange} />
                                        {errors.age && (
                                            <p className={styles.textDanger}>{errors.age}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <label htmlFor="weight">Weight</label>
                                        <input type="text"
                                            className={styles.formControl}
                                            id="weight"
                                            name="weight"
                                            value={values.weight || ''}
                                            onChange={handleChange} />
                                        {errors.weight && (
                                            <p className={styles.textDanger}>{errors.weight}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <label htmlFor="image">Image</label>
                                        <input type="text"
                                            className={styles.formControl}
                                            id="image"
                                            name="image"
                                            value={values.image || ''}
                                            onChange={handleChange} />
                                        {errors.image && (
                                            <p className={styles.textDanger}>{errors.image}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <label htmlFor="summary">Summary</label>
                                        <textarea rows="5" 
                                            className={styles.formControl}
                                            id="summary"
                                            name="summary"
                                            value={values.summary || ''}
                                            onChange={handleChange} />
                                        {errors.summary && (
                                            <p className={styles.textDanger}>{errors.summary}</p>
                                        )}
                                    </div>
                                    <button className={styles.btn} type="submit">Edit</button>
                                    <button className={`${styles.btn} ${styles.btnSecondary}`} type="submit" onClick={() => navigate(-1)}>Cancel</button>
                                    {error && <p className={styles.textDanger}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}