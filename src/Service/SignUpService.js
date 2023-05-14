import axios from "axios";

const signup = async (phoneNumber) => {
    const response = await axios.post(`http://localhost:8081/api/auth/send-otp?phoneNumber=${phoneNumber}`)
    return response.data
    
}

const register = async (userDetails,otp) => {
    const response = await axios.post(`http://localhost:8081/api/auth/validate-otp-register?otp=${otp}`,userDetails)
    return response.data
    
}

const exportObject = { signup, register }

export default exportObject
