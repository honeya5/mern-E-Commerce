import axios from 'axios'
const API = axios.create({
    baseURL:"https://mern-e-commerce-6jyq.onrender.com"
})
API.interceptors.request.use((req)=>{
    const token=localStorage.getItem("token")
    if(token){
        req.headers.Authorization=`Bearer ${token}`
    }
    return req
})


export default API