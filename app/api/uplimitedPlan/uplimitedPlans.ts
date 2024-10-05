import axios from "axios"


export const unlimitedPlan = async (plan: number, speed: number, setMessage: React.Dispatch<React.SetStateAction<boolean>> ) => {

    try {
        const {data} = await axios.post('api/uplimitedPlan', {
            plan: plan,
            speed: speed
        } );

        if (data){
            setMessage(true);

        }
        
    } catch (error) {
        console.error(error); 
    }

    
}