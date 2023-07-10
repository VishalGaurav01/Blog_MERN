import axios from 'axios';
const URL='http://localhost:8000'
export const createpost =async(post) =>{
    try {
    return await axios.post(`${URL}/create`,post)}
        catch(error){
            console.log('error while calling api',error);
        }
}
