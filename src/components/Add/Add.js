import { usePetContext } from '../../contexts/PetContext';
import { useForm } from '../../hooks/useForm';

export function Add() {
    const { onAddSubmit } = usePetContext();
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        breed: '',
        age: '',
        weight: '',
        image: '',
        summary: ''
    }, onAddSubmit);
    return (
        <section className="page-section bg-primary">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light">
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-normal mb-4">Add a new pet</h2>
                                    <form action="post" onSubmit={onSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                value={values.name}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="breed"
                                                className="form-control"
                                                placeholder="Breed"
                                                name="breed"
                                                value={values.breed}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="age"
                                                className="form-control"
                                                placeholder="Age"
                                                name="age"
                                                value={values.age}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="weight"
                                                className="form-control"
                                                placeholder="Weight"
                                                name="weight"
                                                value={values.weight}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text"
                                                id="image"
                                                className="form-control"
                                                placeholder="Image link"
                                                name="image"
                                                value={values.image}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <textarea rows="5"
                                                id="summary"
                                                className="form-control"
                                                placeholder="Summary ..."
                                                name="summary"
                                                value={values.summary}
                                                onChange={changeHandler} />
                                        </div>
                                        <button className="btn btn-primary btn-xl" type="submit">Add</button>
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