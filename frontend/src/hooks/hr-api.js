import axios from 'axios'

const BASE_URL = 'https://user-crud-app-8cr1.onrender.com';

async function getData() {
    const res = await axios.get(`${BASE_URL}/employee/`,);
    return res.data;

}

async function postData(name, lastname, address, telephone) {
    const res = await axios.post(`${BASE_URL}/employee/`, {name, lastname, address, telephone });
    return res.status;
}

async function pushData(id, name, lastname, address, telephone) {
    const res = await axios.patch(`${BASE_URL}/employee/${id}`, { name, lastname, address, telephone });
    return res.status;
}

async function deleteData(id) {
    const res = await axios.delete(`${BASE_URL}/employee/${id}`);
    return res.status;
}

export { getData, postData, pushData, deleteData }