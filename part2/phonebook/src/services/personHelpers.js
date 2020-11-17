import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const updatePerson = (obj) => {
    return axios.put(`${baseUrl}/${obj.id}`, obj);
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, updatePerson, deletePerson };