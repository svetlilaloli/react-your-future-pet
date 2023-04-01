import configData from '../../config.json';
import * as request from './requester';

const host = process.env.NODE_ENV === 'development'
    ? configData.devHost
    : configData.host;
const baseUrl = `${host}/users`;

export function login(data){
    return request.post(`${baseUrl}/login`, data);
}

export function register(data){
    return request.post(`${baseUrl}/register`, data);
}

export function logout(){
    return request.get(`${baseUrl}/logout`);
}