import axios from 'axios'

const BASE_URL = '';

function getData() {
    axios.get('${BASE_URL}/');
}

function postData(data) {
    axios.post('${BASE_URL}/', data);
}

function pushData(id, Name, LName) {
    axios.patch('${BASE_URL}/', id, Name, LName);
}

function deleteData(id) {
    axios.delete('${BASE_URL}/', id);
}