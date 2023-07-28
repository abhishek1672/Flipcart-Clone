import axios from 'axios';

const url='http://localhost:8080';


export const authenticateSignup=async(data)=>{

    try {
        return  await axios.post(`${url}/signup`,data)
        
    } catch (error) {
        console.log("Error while Calling Signup API",error.message)
    }
}

export const authenticateLogin = async (data) => {

    try {
        return await axios.post(`${url}/login`, data)

    } catch (error) {
        console.log("Error while Calling Login API", error.message)
        return error.response; 
    }
}

export const payUsingPaytm =async (data) =>{
    try {

      let response = await axios.post(`${url}/payment`,data);
      return response.data;

        
    } catch (error) {
        console.log("Error while calling paytm api :",error)
    }
}