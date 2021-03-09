import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers = {
    "Authorization": "Bearer " + localStorage.getItem('token')
}

export const user = async () => await (await axios.get('user')).data;
export const login = async (data: any) => await axios.post('login', data);
export const register = async (data: any) => await axios.post('register', data);
export const students = async () => await (await axios.get('students')).data;
export const parent = async () => await (await axios.get('parent')).data;
export const updateUser = async (data: any) => await axios.put('users', data);