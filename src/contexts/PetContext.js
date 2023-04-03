import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { petServiceFactory } from '../services/petService';

export const PetContext = createContext();

export const PetProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const petService = petServiceFactory();

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, []);

    const onCreatePetSubmit = async (data) => {
        const newPet = await petService.create(data);

        setPets(state => [...state, newPet]);

        navigate('/catalog');
    };

    const onPetEditSubmit = async (values) => {
        const result = await petService.edit(values._id, values);

        setPets(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deletePet = (petId) => {
        setPets(state => state.filter(pet => pet._id !== petId));
    };

    const getPet = (petId) => {
        return pets.find(pet => pet._id === petId);
    };

    const context = {
        pets,
        onCreatePetSubmit,
        onPetEditSubmit,
        deletePet,
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