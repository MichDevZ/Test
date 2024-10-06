import axios from "axios";

export async function POST() {

    const apiKey = '65ytl2m8te5r82y2a6u866x85del551p'
    const url = `https://resell.lightningproxies.net/api/getlist/country_list`


    try {
        const {data} = await axios.post(url, null,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-api-key': apiKey,
            },
          }
        );


        return Response.json(data)

      } catch (error) {
        console.error(error); 
        return Response.json('Error')
      }
    

}