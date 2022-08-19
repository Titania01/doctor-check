import axios from "axios"

const url ='https://jsonplaceholder.typicode.com/users'

export const getDoctors = async () => {
   const {data} = await axios.get(url)
   return data

}
export const addDoctors = async (doctorData:any) => {
    const {data} = await axios.post(url, doctorData)
    return data
 
 }