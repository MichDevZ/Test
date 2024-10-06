import axios from "axios";

export const AddOrRemoveGB = async  (action: string, GB: number)  => {

    try {
        const {data} = await axios.post('api/AddOrRemoveGB', {
                action: action,
                GB: GB
        });

        console.log(data)

        return data
        
    } catch (error) {
        console.error(error); 
        return 
    }

    
}