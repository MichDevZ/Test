import axios from "axios";

export const AddWhiteList = async  (ip: string, action: string)  => {

    try {
        const {data} = await axios.post('api/AddWhitelist', {
                ip: ip,
                action: action
        });

        return Response.json(data)
        
    } catch (error) {
        console.error(error); 
        return 
    }

    
}