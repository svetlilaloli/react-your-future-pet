import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { petServiceFactory } from '../services/petService';
import { DeleteModal } from '../components/Delete/DeleteModal';

export const PetContext = createContext();

export const PetProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const petService = petServiceFactory();

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, []);

    const onAddSubmit = async (data) => {
        const newPet = await petService.create(data);

        setPets(state => [...state, newPet]);

        navigate('/catalog');
    };

    const onEditSubmit = async (values) => {
        const result = await petService.edit(values._id, values);

        setPets(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };


    const deletePet = (petId) => {
        const onDeleteClick = () => {
            setShowDelete(true);
            <DeleteModal show={showDelete} onDeleteSubmit={onDeleteSubmit} onDeleteCancel={onDeleteCancel} />
        }
        const onDeleteSubmit = () => {
            const result = petService.delete(petId);
            setShowDelete(false);
            setPets(state => state.filter(pet => pet._id !== petId));
        }
        const onDeleteCancel = () => {
            setShowDelete(false);
        }
        return onDeleteClick;
    };

    const getPet = (petId) => {
        return pets.find(pet => pet._id === petId);
    };

    const context = {
        pets,
        onAddSubmit,
        onEditSubmit,
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