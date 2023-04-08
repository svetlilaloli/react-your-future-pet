import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { petServiceFactory } from '../services/petService';

export const PetContext = createContext();

export const PetProvider = ({
    children,
}) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const petService = petServiceFactory();

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, []);

    const onAddSubmit = async (data) => {
        try {
            const newPet = await petService.create(data);
            setPets(state => [...state, newPet]);
            navigate('/catalog');
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const onEditSubmit = async (values) => {
        try {
            const result = await petService.edit(values._id, values);
            setPets(state => state.map(x => x._id === values._id ? result : x))
            navigate(`/catalog/${values._id}`);
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const onDeleteSubmit = (petId) => {
        try {
            petService.delete(petId);
            setPets(state => state.filter(pet => pet._id !== petId));
            navigate('/catalog');
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    }

    const getPet = (petId) => {
        try {
            return pets.find(pet => pet._id === petId);
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const context = {
        pets,
        error,
        onAddSubmit,
        onEditSubmit,
        onDeleteSubmit,
        getPet,
    };

    return (
        <PetContext.Provider value={context}>
            {children}
        </PetContext.Provider>
    );
};

export const usePetContext = () => {
    const context = useContext(PetContext);

    return context;
};