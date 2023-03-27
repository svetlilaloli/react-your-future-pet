async function request(method, token, url, data) {
    const options = {}
    options.method = method;

    if (data) {
        options.headers = {
            'content-type': 'application/json'
        };
        options.body = JSON.stringify(data)
    }
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }
    const response = await fetch(url, options);

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return {};
    }
}
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const remove = request.bind(null, 'DELETE');
