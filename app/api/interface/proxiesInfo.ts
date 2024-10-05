export interface proxiesInfo{
    proxies: {
        bandwidth: number,
        bandwidthLeft: number,
        password: string,
        username: string
    },
    white_list: []
}

export interface proxiesInfo2{
    whitelist: [],
    expiration_date: string,
    created_date: string,
    time_left: string;
}
