import React, {useEffect, useState} from 'react'
import {fetchData} from '../api/index'
import dateFormat from 'dateformat'
import { CountUp } from 'use-count-up'
import CountryDetail from './CountryDetail'

const Cards = () => { 
   const [nepal, setNepal] = useState([])


    useEffect(() => {
        async function getData() {
            // You can await here
            const response = await fetchData()
           setNepal(response)
          }
          getData();
    
    },[])

    return (
        // {dateFormat(nepal.updated, "fullDate")}
      <div className="container mt-5">
         
        <div class="row">
          <div
            class="card text-white bg-info mx-3"
            style={{ width: "200px" }}
          >
            <div class="card-header">New Cases <i class="fas fa-virus"></i></div>
            <div class="card-body">
              <h5 class="card-title"></h5> 
              <p class="card-text">
              <CountUp isCounting end={nepal.todayCases}  duration={2.5} separator=","/>
                  </p>
              
            </div>
          </div>
          <div
            class="card text-white bg-success mx-3"
            style={{ width: "200px" }}
          >
            <div class="card-header">Recovered <i class="far fa-smile"></i></div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                  <CountUp isCounting end={nepal.todayRecovered}  duration={2.5} separator=","/>
                  </p>
            </div>
          </div>
          <div
            class="card text-white bg-danger mx-3"
            style={{ width: "200px" }}
          >
            <div class="card-header">Deaths <i class="far fa-frown"></i></div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
              <CountUp isCounting end={nepal.todayDeaths}  duration={2.5} separator=","/>
                  </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="card text-white bg-info mx-3 my-3"
            style={{ width: "200px" }}
          >
            <div class="card-header">Total Cases</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
              <CountUp isCounting end= {nepal.cases}  duration={2.5} separator=","/>
                 </p>
             
            </div>
          </div>
          <div
            class="card text-white bg-success mx-3 my-3"
            style={{ width: "200px" }}
          >
            <div class="card-header"> Total Recovered</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
              <CountUp isCounting end={nepal.recovered}  duration={2.5} separator=","/>
                  </p>
            </div>
          </div>
          <div
            class="card text-white bg-danger mx-3 my-3"
            style={{ width: "200px" }}
          >
            <div class="card-header">Total Deaths</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
              <CountUp isCounting end={nepal.deaths}  duration={2.5} separator=","/>
              </p>
            </div>
          </div>
        </div>
      <div className="div2">
        <div className="vl">
            <CountryDetail/>
        </div>
        
    </div>

       <div class="alert alert-primary" role="alert" style={{width:"662px", textAlign:"center"}}>
         *Updated At: {dateFormat(nepal.updated, "fullDate")}
        
        </div>
      </div>
    );
}

export default Cards
