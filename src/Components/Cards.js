import React, {useEffect, useState} from 'react'
import {fetchData} from '../api/index'

const Cards = () => { 
   const [nepal, setNepal] = useState([])

    useEffect(async () => {
     const xx = await fetchData()
      setNepal(xx)
    },[])

    return (
        <div className="container">
        <div class="card text-white bg-secondary mb-3" style={{maxWidth:"12rem", maxHeight:"150px"}}>
            <div class="card-header">New Cases</div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">{nepal.todayCases}</p>
                    </div>
        </div>
        <div class="card text-white bg-secondary mb-3" style={{maxWidth:"12rem", maxHeight:"150px"}}>
            <div class="card-header">New Cases</div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">{nepal.todayCases}</p>
                    </div>
        </div>
        <div class="card text-white bg-secondary mb-3" style={{maxWidth:"12rem", maxHeight:"150px"}}>
            <div class="card-header">New Cases</div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">{nepal.todayCases}</p>
                    </div>
        </div>
        <div class="card text-white bg-secondary mb-3" style={{maxWidth:"12rem", maxHeight:"150px"}}>
            <div class="card-header">New Cases</div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">{nepal.todayCases}</p>
                    </div>
        </div>
      </div>
    )
}

export default Cards
