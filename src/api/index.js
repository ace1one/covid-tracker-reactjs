import axios from 'axios'

const url = 'https://disease.sh/v3/covid-19/countries'

var config = {headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};

 export const fetchData= async (search)=>{
    try {
        const res = await axios.get(`${url}/${search}`, config)

        const getData ={
             deaths:res.data.deaths,
             todayDeaths:res.data.todayDeaths,
             recovered:res.data.recovered,
             todayRecovered:res.data.todayRecovered,
             cases:res.data.cases,
             todayCases:res.data.todayCases,
             country:res.data.country,
             updated:res.data.updated
            

        }
       
     
       
        return getData
       
    } catch (error) {
       const errorr = "WOW"
       console.log(errorr)
        
    }
}