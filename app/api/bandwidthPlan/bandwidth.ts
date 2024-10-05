import axios from "axios"


export const bandwidthPlan = async (bandwidth: number, setMessage: React.Dispatch<React.SetStateAction<boolean>> ) => {

    try {
        const {data} = await axios.post('api/bandwidthPlan', {
            bandwidth: bandwidth
        } );

        if (data){
            setMessage(true);
        }

        console.log(data)
        
    } catch (error) {
        console.error(error); 
    }

    
}