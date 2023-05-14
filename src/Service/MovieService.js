
import axios from "axios";

const getAllMovies = async () => {
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.get(`http://localhost:8081/get-all-movie`,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
    
}

const sendReview = async (movieName,review) => {
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.post(`http://localhost:8081/send-review?movieName=${movieName}&review=${review}`,null,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
    
}

const getAllComments = async (movieName) => {
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    console.log(movieName)
    const response = await axios.get(`http://localhost:8081/get-all-review?movieName=${movieName}`,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
           })
    return response.data
    
}

const exportObject = { getAllMovies, sendReview,getAllComments }

export default exportObject
