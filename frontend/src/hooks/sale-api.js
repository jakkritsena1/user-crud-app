import axios from 'axios'

const BASE_URL = 'https://user-crud-app-8cr1.onrender.com';

async function getData(Name, LName, Id, Address, Tel) {
    const res = await axios.get(`${BASE_URL}/customers/`, { params: { Name, LName, Id, Address, Tel } });
    return res.data;

}

async function postData(Name, LName, Id, Address, Tel) {
    const res = await axios.post(`${BASE_URL}/customers/`, {Name, LName, Id, Address, Tel });
    return res.status;
}

async function pushData(Id, Name, LName, Address, Tel) {
    const res = await axios.patch(`${BASE_URL}/customers/${Id}`, { Name, LName, Address, Tel });
    return res.status;
}

async function deleteData(Id) {
    const res = await axios.delete(`${BASE_URL}/${Id}`);
    return res.status;
}

export { getData, postData, pushData, deleteData }