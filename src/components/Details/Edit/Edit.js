import { useService, useParams, useEffect } from 'react';
import { usePetContext } from '../../../contexts/PetContext';
import { petServiceFactory } from '../../../services/petService';
import { useForm } from '../../../hooks/useForm';

export function Edit() {
    const { onPetEditSubmit } = usePetContext();
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
    }, onPetEditSubmit);

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                updateValues(result);
            });
    }, [petId]);

    return (
        <section id="editPage">
            <form className="editForm" onSubmit={onSubmit}>
                <img src="./images/editpage-dog.jpg" alt="edit-dog" />
                <div>
                    <h2>Edit {values.name}</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" type="text" value={values.name} onChange={changeHandler} />
                    </div>
                    <div className="breed">
                        <label htmlFor="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value={values.breed} onChange={changeHandler} />
                    </div>
                    <div className="Age">
                        <label htmlFor="age">Age:</label>
                        <input name="age" id="age" type="text" value={values.age} onChange={changeHandler} />
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value={values.weight} onChange={changeHandler} />
                    </div>
                    <div className="image">
                        <label htmlFor="image">Image:</label>
                        <input name="image" id="image" type="text" value={values.image} onChange={changeHandler} />
                    </div>
                    <button className="btn" type="submit">Edit {values.name}</button>
                </div>
            </form>
        </section>
    );
}