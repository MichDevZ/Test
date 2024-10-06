import axios from "axios"

interface proxiesInfo{
    proxies: {
        bandwidth: number,
        bandwidthLeft: number,
        password: string,
        username: string
    },
    white_list: []
}

export const getProxiesInfo = async  (handleRequest: React.Dispatch<React.SetStateAction<proxiesInfo | undefined>>): Promise<proxiesInfo | undefined> => {

    try {
        const {data} = await axios.get('api/getProxiesInfo');

        handleRequest(data)
        
        return data
        
    } catch (error) {
        console.error(error); 
        return 
    }

    
}