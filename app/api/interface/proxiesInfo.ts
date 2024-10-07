export interface proxiesInfo{
    proxies: {
        bandwidth: number,
        bandwidthLeft: number,
        password: string,
        username: string
    },
    whitelist_proxies: {
        mix: []
    }
}

export interface proxiesInfo2{
    whitelist: [],
    expiration_date: string,
    created_date: string,
    time_left: string;
}


export interface ICountry {
    id: number;
    country_name: string;
    country_code: string;
    is_main: number
}

export interface ICountry2 {
    country_list: ICountry[]
}


export interface IPlanBandwidth {
    gb: number,
    price: number,
}