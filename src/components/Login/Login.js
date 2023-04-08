import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import validate from '../common/LoginFormValidationRules';

export function Login() {
    const { error, onLoginSubmit } = useContext(AuthContext);
    const { values, errors, handleChange, handleSubmit } = useForm(onLoginSubmit, validate);

    return (
        <section className="page-section bg-primary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-normal mb-4">Login</h2>
                                    <form action="post" onSubmit={handleSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email"
                                                id="email"
                                                className={`input ${errors.email && 'is-invalid'} form-control`}
                                                placeholder="Email"
                                                name="email"
                                                value={values.email || ''}
                                                onChange={handleChange} />
                                            {errors.email && (
                                                <p className="text-danger">{errors.email}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password"
                                                id="password"
                                                className={`input ${errors.password && 'is-invalid'} form-control`}
                                                placeholder="Password"
                                                name="password"
                                                value={values.password || ''}
                                                onChange={handleChange} />
                                            {errors.password && (
                                                <p className="text-danger">{errors.password}</p>
                                            )}
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Login</button>
                                        {error && <p className="text-danger">{error}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}