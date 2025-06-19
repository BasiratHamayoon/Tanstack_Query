import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
export const fetchApi = async(pageNo) => {
    const res = await api.get(`/posts?_start=${pageNo}&_limit=3`);
    return res.status === 200? res.data.slice(0, 4) : []
}

export const fetchDetailPost = async (id) => {
    const res = await api.get(`posts/${id}`);
    return res.status === 200? res.data : []
}