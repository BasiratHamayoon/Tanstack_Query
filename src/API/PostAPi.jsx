import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
export const fetchApi = async() => {
    const res = await api.get('/posts');
    return res.status === 200? res.data.slice(0, 4) : []
}