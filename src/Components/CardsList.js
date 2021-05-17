import React, {useEffect, useContext} from 'react'
import {fetchData} from '../api/index'
import { CountUp } from 'use-count-up'
import { covidContext } from '../Helper/context'




const CardsList = () => {
    const {covid,setCovid,search} = useContext(covidContext);

    useEffect(() => {
        async function getData() {
            const response = await fetchData(search)
           setCovid(response)          
          }
          getData();
    
    },[])

    return (
       
      <div className="row mx-1">
        {/* New Cases */}
        <div className="col-md-4 my-1">
            <div class="card text-white bg-info">
                <div class="card-header">New Cases <i class="fas fa-virus"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                              <CountUp isCounting 
                                    end={covid.todayCases}  
                                    duration={2.5} 
                                    thousandsSeparator=","/>
                            </p>     
                    </div>
            </div>
        </div>
        {/* Recovered */}
        <div className="col-md-4  my-1">
            <div class="card text-white bg-success">
                <div class="card-header">Recovered <i class="far fa-smile"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                              <CountUp isCounting 
                                end={covid.todayRecovered}  
                                duration={2.5} 
                                thousandsSeparator=","/>
                            </p>
                    </div>
            </div>
        </div>

        {/* Todays Deaths */}
        <div className="col-md-4  my-1">
            <div class="card text-white bg-danger" >
                <div class="card-header">Deaths <i class="far fa-frown"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                                  <CountUp isCounting 
                                  end={covid.todayDeaths}  
                                  duration={2.5} 
                                  thousandsSeparator=","/>
                            </p>
                    </div>
            </div>
        </div>
        
  

  
        {/* Total Cases */}
        <div className="col-md-4  my-1">
            <div class="card text-white bg-info" >
                <div class="card-header">Total Cases <i class="fas fa-virus"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                                  <CountUp isCounting 
                                  end={covid.cases}  
                                  duration={2.5} 
                                  thousandsSeparator=","/>
                            </p>
      
                    </div>
            </div>
        </div>

        {/* Total Recovered */}
        <div className="col-md-4  my-1">
            <div class="card text-white bg-success" >
                <div class="card-header">Total Recovered <i class="far fa-smile"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                                <CountUp isCounting 
                                end={covid.recovered}  
                                duration={2.5} 
                                thousandsSeparator=","/>
                            </p>     
                    </div>
            </div>
        </div>

        {/* Total Deaths */}
        <div className="col-md-4  my-1">
            <div class="card text-white bg-danger">
                <div class="card-header">New Deaths <i class="far fa-frown"></i></div>
                    <div class="card-body">
                            <p class="card-text">
                                  <CountUp isCounting 
                                  end={covid.deaths}  
                                  duration={2.5} 
                                  thousandsSeparator=","/>
                            </p>      
                    </div>
            </div>
        </div>  
        </div>           
     
     
                 
    
    )
}

export default CardsList
