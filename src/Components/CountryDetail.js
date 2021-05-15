import React,{useEffect, useState} from 'react'
import {fetchData} from '../api/country'

const CountryDetail = () => {
    const [country, setCountry] = useState([])
   useEffect(() => {
      async function getData(){
          const res = await fetchData()
          setCountry(res)
      }

      getData();
       
   }, [])





    return (
        <div style={{marginLeft:"5px"}}>

            <div class="list-group col-sm-12">
                <a href="#" class="list-group-item list-group-item-action active col-sm-4" aria-current="true">
                    <div class="d-flex w-100">
                    <h5 class="mb-1">{country.name}</h5><small>({country.nativeName})</small>
                    <img  class="d-flex  w-100 justify-content-end" src={country.flag} height="30" ></img>
                    </div>
                    <p class="mb-1">Country in {country.subregion}</p>
                    
                </a>
                <a href="#" class="list-group-item list-group-item-action col-sm-4">
                    <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Region : {country.region}</h6>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Capital : {country.capital}</h6>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Area : {country.area} km²</h6>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Time Zone : {country.timezones}</h6>
                    </div>
                    <div class="d-flex w-100">
                        {
                            country.languages.map(lang=>{
                                return (
                                   <div>
                                    <h6 class="mb-1">Language:{}</h6> &nbsp;
                                    <small>({lang.nativeName})</small>
                                   </div>
                                )
                            })
                          } 
                    </div>

                    
                   
                </a>
</div>
           
        </div>
    )
}

export default CountryDetail
