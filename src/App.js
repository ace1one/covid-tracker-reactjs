import React, {useState} from 'react'
import './App.css';
import Cards from './Components/Cards';
import NewCards from './Components/NewCards';
import {covidContext} from './Helper/context'

function App() {
  const [nepal, setNepal] = useState([])
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState("nepal")

  return (
    <covidContext.Provider value={{nepal,setNepal,
      country,setCountry,
      search,setSearch
    }}>
    <div className="App">
      {
        nepal ? <h4>Covid 19 Statistics of {nepal.country} </h4> : <h4>Covid 19 Statistics</h4> 
      }
     
     {/* <Cards/> */}
     <NewCards/>
  </div>
  </covidContext.Provider>
  );
}

export default App;
