import axios from 'axios'

const BASE_URL = 'https://user-crud-app-8cr1.onrender.com';

export function getData(Name, LName, Id, Address, Tel) {
    return axios.get(`${BASE_URL}/customers/`, { params: { Name, LName, Id, Address, Tel } });

}

function postData(Name, LName, Id, Address, Tel) {
    axios.post('${BASE_URL}/', { Name, LName, Id, Address, Tel });
}

function pushData(Name, LName, Address, Tel) {
    axios.patch('${BASE_URL}/', { Name, LName, Address, Tel });
}

function deleteData(Id) {
    axios.delete(`${BASE_URL}/${Id}`);
}