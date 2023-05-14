
import axios from "axios";

const login = async (loginCredentials) => {
    const response = await axios.post(`http://localhost:8081/api/auth/login`, loginCredentials)
    window.localStorage.setItem('BearerToken', JSON.stringify(response.data.token))
    return response.data
    
}

export default {login};