import { usePetContext } from '../../contexts/PetContext';
import { useForm } from '../../hooks/useForm';
import validate from '../common/PetFormValidationRules';

export function Add() {
    const { error, onAddSubmit } = usePetContext();
    const { values, errors, handleChange, handleSubmit } = useForm(onAddSubmit, validate);
    
    return (
        <section className="page-section bg-primary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light">
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-normal mb-4">Add a new pet</h2>
                                    <form action="post" onSubmit={handleSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="name"
                                                className={`input ${errors.name && 'is-invalid'} form-control`}
                                                placeholder="Name"
                                                name="name"
                                                value={values.name || ''}
                                                onChange={handleChange} />
                                                {errors.name && (
                                                <p className="text-danger">{errors.name}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="breed"
                                                className={`input ${errors.breed && 'is-invalid'} form-control`}
                                                placeholder="Breed"
                                                name="breed"
                                                value={values.breed || ''}
                                                onChange={handleChange} />
                                                {errors.breed && (
                                                <p className="text-danger">{errors.breed}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="age"
                                                className={`input ${errors.age && 'is-invalid'} form-control`}
                                                placeholder="Age"
                                                name="age"
                                                value={values.age || ''}
                                                onChange={handleChange} />
                                                {errors.age && (
                                                <p className="text-danger">{errors.age}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="weight"
                                                className={`input ${errors.weight && 'is-invalid'} form-control`}
                                                placeholder="Weight"
                                                name="weight"
                                                value={values.weight || ''}
                                                onChange={handleChange} />
                                                {errors.weight && (
                                                <p className="text-danger">{errors.weight}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="image"
                                                className={`input ${errors.image && 'is-invalid'} form-control`}
                                                placeholder="Image link"
                                                name="image"
                                                value={values.image || ''}
                                                onChange={handleChange} />
                                                {errors.image && (
                                                <p className="text-danger">{errors.image}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <textarea rows="5"
                                                id="summary"
                                                className={`input ${errors.summary && 'is-invalid'} form-control`}
                                                placeholder="Summary ..."
                                                name="summary"
                                                value={values.summary || ''}
                                                onChange={handleChange} />
                                                {errors.summary && (
                                                <p className="text-danger">{errors.summary}</p>
                                            )}
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Add</button>
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