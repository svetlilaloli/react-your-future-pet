import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword'
}

export function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: ''
    }, onRegisterSubmit);

    return (
        <section className="page-section bg-primary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-normal mb-4">Register</h2>
                                    <form action="post" onSubmit={onSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" 
                                                   id="email" 
                                                   className="form-control" 
                                                   placeholder="Email"
                                                   name={RegisterFormKeys.Email} 
                                                   value={values[RegisterFormKeys.Email]} 
                                                   onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" 
                                                   id="password" 
                                                   className="form-control" 
                                                   placeholder="Password"
                                                   name={RegisterFormKeys.Password} 
                                                   value={values[RegisterFormKeys.Password]} 
                                                   onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" 
                                                   id="repeatPasswor" 
                                                   className="form-control"  
                                                   placeholder="Repeat password"
                                                   name={RegisterFormKeys.RepeatPassword} 
                                                   value={values[RegisterFormKeys.RepeatPassword]} 
                                                   onChange={changeHandler} />
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Register</button>
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