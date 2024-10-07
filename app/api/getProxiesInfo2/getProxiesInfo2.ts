import axios from "axios"

interface proxiesInfo{
    whitelist: [],
    expiration_date: string,
    created_date: string,
    time_left: string;
}

export const getProxiesInfo2 = async  (handleRequest: React.Dispatch<React.SetStateAction<proxiesInfo | undefined>>): Promise<proxiesInfo | undefined> => {

    try {
        const {data} = await axios.get('api/getProxiesInfo2');

        handleRequest(data)
        
        return data
        
    } catch (error) {
        console.log(error); 
        return 
    }

    
}