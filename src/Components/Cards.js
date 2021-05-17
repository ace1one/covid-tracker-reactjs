import React, {useContext} from 'react'
import CountryDetail from './CountryDetail'
import { covidContext } from '../Helper/context'
import Search from './Search'
import CardsList from './CardsList'




const Cards = () => { 
  const {covid, country,} = useContext(covidContext);
    

    return (
      <div className="container-fluid">
        <Search />
        <div className="row mb-3">
          {/* Covid Detail Components */}
          <div className="col-md-7">
            {covid ? (
              <CardsList />
            ) : (
              <div
                class="alert alert-primary"
                role="alert"
                style={{ textAlign: "center" }}
              >
                Country not found or doesn't have any cases
              </div>
            )}
          </div>

          {/* Country Detail Component */}
          <div className="col-md-5">
            {country ? (
              <CountryDetail />
            ) : (
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  <div class="d-flex w-100">
                    <h5 class="mb-1">Not Found</h5>
                    <div
                      class="d-flex  w-100 justify-content-end"
                      style={{ height: "20px", width: "30px" }}
                    >
                      <img
                        class="d-flex  w-100 justify-content-end"
                        src=""
                      ></img>
                    </div>
                  </div>
                  <p class="mb-1"></p>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Cards
