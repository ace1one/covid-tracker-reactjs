import axios from 'axios'

const url = 'https://disease.sh/v3/covid-19/countries/Nepal'

 export const fetchData= async ()=>{
    try {
        const res = await axios.get(url)
       

        const getData ={
             deaths:res.data.deaths,
             todayDeaths:res.data.todayDeaths,
             recovered:res.data.recovered,
             todayRecovered:res.data.todayRecovered,
             cases:res.data.cases,
             todayCases:res.data.todayCases,
             country:res.data.country

        }
     
       
        return getData
       
    } catch (error) {
        
    }
}