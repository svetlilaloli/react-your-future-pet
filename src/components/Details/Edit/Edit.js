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
        <section className="page-section bg-primary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-normal mb-4">Edit</h2>
                                    <form action="post" onSubmit={handleSubmit}>
                                        <img className="card-img-top" src={values.image} alt="edit-pet" />
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={values.name || ''}
                                                onChange={handleChange} />
                                                {errors.name && (
                                                <p className="text-danger">{errors.name}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="breed">Breed</label>
                                            <input type="text"
                                                className="form-control"
                                                id="breed"
                                                name="breed"
                                                value={values.breed || ''}
                                                onChange={handleChange} />
                                                {errors.breed && (
                                                <p className="text-danger">{errors.breed}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="breed">Age</label>
                                            <input type="text"
                                                className="form-control"
                                                id="age"
                                                name="age"
                                                value={values.age || ''}
                                                onChange={handleChange} />
                                                {errors.age && (
                                                <p className="text-danger">{errors.age}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="weight">Weight</label>
                                            <input type="text"
                                                className="form-control"
                                                id="weight"
                                                name="weight"
                                                value={values.weight || ''}
                                                onChange={handleChange} />
                                                {errors.weight && (
                                                <p className="text-danger">{errors.weight}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="image">Image</label>
                                            <input type="text"
                                                className="form-control"
                                                id="image"
                                                name="image"
                                                value={values.image || ''}
                                                onChange={handleChange} />
                                                {errors.image && (
                                                <p className="text-danger">{errors.image}</p>
                                            )}
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="summary">Summary</label>
                                            <textarea rows="5" className="form-control"
                                                id="summary"
                                                name="summary"
                                                value={values.summary || ''}
                                                onChange={handleChange} />
                                                {errors.summary && (
                                                <p className="text-danger">{errors.summary}</p>
                                            )}
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Edit</button>
                                        <button className="btn btn-secondary btn-xl" type="submit" onClick={() => navigate(-1)}>Cancel</button>
                                        {error && <p className="text-danger">{error}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}