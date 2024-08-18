import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        // "Authorization": `Bearer ${token}`
    },
});

export default apiClient;
