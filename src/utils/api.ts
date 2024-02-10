import axios from 'axios';

export const getFetchQuery = async (fetchQuery: string)=>{
    const response = await axios.get(fetchQuery);
    return response.data;
      
}