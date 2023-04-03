import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export const petServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const pets = Object.values(result);
    
        return pets;
    };
    
    const getOne = async (petId) => {
        const result = await request.get(`${baseUrl}/${petId}`);
    
        return result;
    };
    
    const create = async (petData) => {
        const result = await request.post(baseUrl, petData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (petId, data) => request.put(`${baseUrl}/${petId}`, data);

    const deletepet = (petId) => request.delete(`${baseUrl}/${petId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletepet,
    };
}