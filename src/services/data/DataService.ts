import axios from 'axios';

const API_URL = "http://localhost:31/sites"
export default class DataService {
    constructor() {

    }
    find(id: any) {
        return axios.get(`${API_URL}?minara_id=${id}`)
    }
    search(term: string) {
        return axios.get(`${API_URL}?q=${term}`);
    }
}