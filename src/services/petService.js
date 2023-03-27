import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export async function getAll() {
    const result = await request.get(baseUrl);
    const pets = Object.values(result);

    return pets;
}

export async function getOne(id) {
    const pet = await request.get(`${baseUrl}/${id}`);
    return pet;
}

export async function add(token, data) {
    const pet = await request.post(baseUrl, token, data);
    return pet;
}

export async function edit(id, data) {
    const pet = await request.patch(`${baseUrl}/${id}`, data);
    return pet;
}

export async function remove(id) {
    await request.remove(`${baseUrl}/${id}`);
}