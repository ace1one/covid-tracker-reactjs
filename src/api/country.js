import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2/name'

var config = {headers: {'Content-Type': 'application/json'}};
// {headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};

 export const fetchCountry= async (search)=>{
    try {
        const res = await axios.get(`${url}/${search}?fullText=true`)
            
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
             borders_chi:res.data[0].borders[0],
             borders_ind:res.data[0].borders[1],
             currencies_code:res.data[0].currencies[0].code,
             currencies_name:res.data[0].currencies[0].name,
             currencies_symbol:res.data[0].currencies[0].symbol,
             languages_name:res.data[0].languages[0].name,
             languages_nativeName:res.data[0].languages[0].nativeName,
             flag:res.data[0].flag,
             lat:res.data[0].latlng[0],
             lng:res.data[0].latlng[1]
            

        }
       
     
      
         return getData
       
    } catch (error) {
        console.log(error)
        
    }
}