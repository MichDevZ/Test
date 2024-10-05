import axios from "axios";


export async function POST(req: Request) {

    const {plan, speed} = await req.json();
    const apiKey = '65ytl2m8te5r82y2a6u866x85del551p'
    const url = 'https://resell.lightningproxies.net/api/getplan/ipv6'

    const formData = new FormData();
    formData.append('plan', plan.toString());
    formData.append('speed', speed.toString());

    try {
        const {data} = await axios.post(url, formData,
          {
            headers: {
              'x-api-key': apiKey,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

    
        return Response.json(data)

      } catch (error) {
        console.error(error); 
        return Response.json('Error')
      }
    

}