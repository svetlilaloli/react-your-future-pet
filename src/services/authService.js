import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export function login(data){
    return request.post(`${baseUrl}/login`, data);
}

export function register(data){
    return request.post(`${baseUrl}/register`, data);
}

export function logout(){
    return request.get(`${baseUrl}/logout`);
}