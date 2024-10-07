import axios from "axios";

export const AddWhiteList = async  (ip: string)  => {

    try {
        const {data} = await axios.post('api/AddWhitelist', {
                ip: ip,
        });

        return data
        
    } catch (error) {
        console.error(error); 
        return 
    }

    
}