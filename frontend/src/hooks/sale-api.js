import axios from 'axios'

const BASE_URL = 'https://user-crud-app-8cr1.onrender.com';

async function getData() {
    const res = await axios.get(`${BASE_URL}/customers/`,);
    return res.data;

}

async function postData(name, lastname, address, telephone) {
    const res = await axios.post(`${BASE_URL}/customers/`, {name, lastname, address, telephone });
    return res.status;
}

async function pushData(id, name, lastname, address, telephone) {
    const res = await axios.patch(`${BASE_URL}/customers/${id}`, { name, lastname, address, telephone });
    return res.status;
}

async function deleteData(Id) {
    const res = await axios.delete(`${BASE_URL}/${Id}`);
    return res.status;
}

export { getData, postData, pushData, deleteData }