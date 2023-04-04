import configData from '../config.json';
import { requestFactory } from './requester';

const host = process.env.NODE_ENV === 'development'
    ? configData.devHost
    : configData.host;
const baseUrl = `${host}/users`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};
