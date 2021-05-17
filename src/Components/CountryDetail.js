import React,{useContext,useEffect} from 'react'
import { covidContext } from '../Helper/context'
import {fetchData} from '../api/index'
import {fetchCountry} from '../api/country'
import { CountUp } from 'use-count-up'

const CountryDetail = (props) => {
    const {search,setSearch, country,setCountry} = useContext(covidContext);

   useEffect(() => {
      async function getData(){
          const res = await fetchCountry(search)
          setCountry(res)   
      }
      getData();
   }, [])

    return (
        <div style={{marginLeft:"5px"}}>

           {
               country ? 
               <div class="list-group col-sm-12">
               <a href="#" class="list-group-item list-group-item-action active col-sm-4" aria-current="true">
                   <div class="d-flex w-100">
                   <h5 class="mb-1">{country.name}</h5><small>({country.nativeName})</small>
                   <div class="d-flex  w-100 justify-content-end" style={{height:"20px",width:"30px"}}>
                      <img class="d-flex  w-100 justify-content-end"  src={country.flag} ></img>
                   </div>
                 
                   </div>
                   <p class="mb-1">Country in {country.subregion}</p>
                   
               </a>
               <a href="#" class="list-group-item list-group-item-action col-sm-4">
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Region : </h6>
                   <h6 class="mb-1">{country.region}</h6>
                   </div>
                   <hr></hr>

                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Capital :</h6>
                   <h6 class="mb-1"> {country.capital}</h6>
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Language: </h6>   
                   <h6 class="mb-1">{country.languages_name} ({country.languages_nativeName}) </h6>   
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Dialing code: </h6>   
                   <h6 class="mb-1">+{country.callingCodes} </h6>   
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Population: </h6>  
                  
                 
                   <h6 class="mb-1"> <CountUp isCounting end={country.population}  duration={2.5} thousandsSeparator=","/></h6>   
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Area : </h6>
                   <h6 class="mb-1">  <CountUp isCounting end={country.area}  duration={2.5} thousandsSeparator=","/> km²</h6>
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Time Zone : </h6>
                   <h6 class="mb-1">{country.timezones}</h6>
                   </div>
                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Currency: </h6>   
                   <h6 class="mb-1">{country.currencies_name} ({country.currencies_code}) ({country.currencies_symbol}) </h6>
                   </div>
                   <hr></hr>
                   
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">Boaders: </h6> 
                   <h6 class="mb-1">{country.borders_chi} - {country.borders_ind} </h6>   
                   </div>

                   <hr></hr>
                   <div class="d-flex w-100 justify-content-between">
                   <h6 class="mb-1">latitude/longitude : </h6>
                   <h6 class="mb-1"> {country.lat}/{country.lng} </h6>
                   </div>

                   
                  
               </a>
           </div>:
            <div class="list-group col-sm-12">
            <a href="#" class="list-group-item list-group-item-action active col-sm-4" aria-current="true">
                <div class="d-flex w-100">
                <h5 class="mb-1">Not Found</h5>
                <div class="d-flex  w-100 justify-content-end" style={{height:"20px",width:"30px"}}>
                   <img class="d-flex  w-100 justify-content-end"  src="" ></img>
                </div>
              
                </div>
                <p class="mb-1"></p>
                
            </a>
            </div>
           }
           
        </div>
    )
}

export default CountryDetail
