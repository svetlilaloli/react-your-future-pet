import styles from './Login.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import validate from '../common/LoginFormValidationRules';

export function Login() {
    const { error, onLoginSubmit } = useContext(AuthContext);
    const { values, errors, handleChange, handleSubmit } = useForm(onLoginSubmit, validate);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.cardBody}>
                                <h2 className={styles.h2}>Login</h2>
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
                                    <button className={styles.btn} type="submit">Login</button>
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