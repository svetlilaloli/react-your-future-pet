import styles from './Register.module.css';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import validate from '../common/LoginFormValidationRules';

export function Register() {
    const { error, onRegisterSubmit } = useContext(AuthContext);
    const { values, errors, handleChange, handleSubmit } = useForm(onRegisterSubmit, validate);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.cardBody}>
                                <h2 className={styles.h2}>Register</h2>
                                <form action="post" onSubmit={handleSubmit}>
                                    <div className={styles.mb4}>
                                        <input type="text"
                                            id="email"
                                            className={`${errors.email && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Email"
                                            name="email"
                                            value={values.email || ''}
                                            onChange={handleChange} />
                                        {errors.email && (
                                            <p className={styles.textDanger}>{errors.email}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="password"
                                            id="password"
                                            className={`${errors.password && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Password"
                                            name="password"
                                            value={values.password || ''}
                                            onChange={handleChange} />
                                        {errors.password && (
                                            <p className={styles.textDanger}>{errors.password}</p>
                                        )}
                                    </div>
                                    <div className={styles.mb4}>
                                        <input type="password"
                                            id="repeatPasswor"
                                            className={`${errors.repeatPassword && styles.isInvalid} ${styles.formControl}`}
                                            placeholder="Repeat password"
                                            name="repeatPassword"
                                            value={values.repeatPassword || ''}
                                            onChange={handleChange} />
                                        {errors.repeatPassword && (
                                            <p className={styles.textDanger}>{errors.repeatPassword}</p>
                                        )}
                                    </div>
                                    <button className={styles.btn} type="submit">Register</button>
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