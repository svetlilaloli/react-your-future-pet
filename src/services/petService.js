import configData from '../config.json';
import { requestFactory } from './requester';

const host = process.env.NODE_ENV === 'development'
    ? configData.devHost
    : configData.host;
const baseUrl = `${host}/data/pets`;

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
        return result;
    };
    
    const edit = (petId, data) => request.put(`${baseUrl}/${petId}`, data);

    const deletePet = (petId) => request.delete(`${baseUrl}/${petId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePet,
    };
}