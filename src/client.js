import axios from 'axios'

const apiUrl = 'http://localhost:4000/persons';

export const getPersons = () => axios.get(apiUrl);
export const addPerson = () => axios.post(apiUrl, {});