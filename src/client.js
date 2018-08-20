import axios from 'axios'

const apiUrl = 'http://localhost:5000/persons';

export const getPersons = () => axios.get(apiUrl);
export const addPerson = person => axios.post(apiUrl, person);
export const updatePerson = (person, id) => axios.put(`${apiUrl}/${id}`, person);
export const removePerson = (id) => axios.delete(`${apiUrl}/${id}`);