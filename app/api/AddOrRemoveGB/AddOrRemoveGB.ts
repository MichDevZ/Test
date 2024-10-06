import axios from "axios";

export const AddOrRemoveGB = async  (action: string, GB: number)  => {

    try {
        const {data} = await axios.post('api/AddOrRemoveGB', {
                action: action,
                GB: GB
        });


        return data
        
    } catch (error) {
        console.error(error); 
        return 
    }

    
}