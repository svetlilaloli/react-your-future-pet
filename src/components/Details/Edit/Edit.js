import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { petServiceFactory } from '../../../services/petService';
import { usePetContext } from '../../../contexts/PetContext';
import { useForm } from '../../../hooks/useForm';
import { useService } from "../../../hooks/useService";

export function Edit() {
    const { onEditSubmit } = usePetContext();
    const { petId } = useParams();
    const petService = useService(petServiceFactory);
    const { values, changeHandler, onSubmit, updateValues } = useForm({
        _id: '',
        name: '',
        breed: '',
        age: '',
        weight: '',
        image: '',
        summary: '',
    }, onEditSubmit);

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
                                    <h2 className="fw-normal mb-4">Edit {values.name}</h2>
                                    <form action="post" onSubmit={onSubmit}>
                                        <img className="card-img-top" src={values.image} alt="edit-pet" />
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={values.name}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="breed">Breed</label>
                                            <input type="text"
                                                className="form-control"
                                                id="breed"
                                                name="breed"
                                                value={values.breed}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="breed">Age</label>
                                            <input type="text"
                                                className="form-control"
                                                id="age"
                                                name="age"
                                                value={values.age}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="weight">Weight</label>
                                            <input type="text"
                                                className="form-control"
                                                id="weight"
                                                name="weight"
                                                value={values.weight}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="image">Image</label>
                                            <input type="text"
                                                className="form-control"
                                                id="image"
                                                name="image"
                                                value={values.image}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="summary">Summary</label>
                                            <textarea rows="5" className="form-control"
                                                id="summary"
                                                name="summary"
                                                value={values.summary}
                                                onChange={changeHandler} />
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Edit {values.name}</button>
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