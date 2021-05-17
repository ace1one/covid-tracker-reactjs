import React,{useContext} from 'react'
import { covidContext } from '../Helper/context'
import {fetchData} from '../api/index'
import {fetchCountry} from '../api/country'

const Search = () => {
    const {setCovid,search,setSearch,setCountry} = useContext(covidContext);

    const handleSubmit= (e) =>{
        async function getData() {
          // You can await here
          if(search !==""){
          const response = await fetchData(search)
          const res = await fetchCountry(search)
         setCovid(response)
         setCountry(res)
          }
         
        }
        getData();
      }

    return (
      <div className="row">
        <div class="input-group mb-3 col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Type Country Name....."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div class="input-group-append">
            <button
              onClick={(e) => handleSubmit(e)}
              class="btn btn-outline-primary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
}

export default Search
