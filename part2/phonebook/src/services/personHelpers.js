import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const updatePerson = (prevObj, newObj) => {
    return axios.put(`${baseUrl}/${prevObj.id}`, newObj);
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, updatePerson, deletePerson };