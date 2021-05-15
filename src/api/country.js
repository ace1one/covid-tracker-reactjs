import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2/name/nepal'

var config = {headers: {'Content-Type': 'application/json'}};
// {headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};

 export const fetchData= async ()=>{
    try {
        const res = await axios.get(url)

        const getData ={
             name:res.data[0].name,
             nativeName:res.data[0].nativeName,
             callingCodes:res.data[0].callingCodes,
             capital:res.data[0].capital,
             region:res.data[0].region,
             subregion:res.data[0].subregion,
             population:res.data[0].population,
             demonym:res.data[0].demonym,
             area:res.data[0].area,
             timezones:res.data[0].timezones,
             borders:res.data[0].borders,
             currencies:res.data[0].currencies,
             languages:res.data[0].languages,
             flag:res.data[0].flag
            

        }
       
     
      
        return getData
       
    } catch (error) {
        console.log(error)
        
    }
}