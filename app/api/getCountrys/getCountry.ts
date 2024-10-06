import axios from "axios";
import { ICountry2 } from "../interface/proxiesInfo";



export const getCountrys = async  (handleRequest: React.Dispatch<React.SetStateAction<ICountry2 | undefined>>) => {

    try {
        const {data} = await axios.post('api/getCountrys');
        
        handleRequest(data)

        return data
        
    } catch (error) {
        console.log(error); 
        return 
    }

}

    