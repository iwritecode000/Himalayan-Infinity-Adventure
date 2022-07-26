import React from 'react';
import camping from '../icons/tent.png'
import trekking from '../icons/shoes.png'
import climbing from '../icons/carabiner.png'

const Services = () => {
  return (
    <>
     <section class="main_heading my-5  py-5">
      <div class="text-center display-4">
        <h1 class="">Our Services</h1>
        <hr class="w-25 mx-auto" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-12 col-xxl-4 mx-auto mt-5 Services">
            <div class="p-3" style={{width: "22rem"}}>
              <img
                src={camping}
                class="card-img-top"
                alt="tent"
               style= {{width:" 50px"}}
              />
              <div class="">
                <h5 class="card-title mt-2 text-transform-uppercase">Camping</h5>
                <p class="card-text mt-2">
                 Lorem ipsum dolor, sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 col-xxl-4 mx-auto mt-5 Services">
            <div class="p-3" style={{width: "22rem"}}>
              <img
                src={trekking}
                class="card-img-top mx-auto"
                alt="trekking"
                style={{width:" 50px"}}
              />
              <div class="">
                <h5 class="card-title mt-2 text-transform-uppercase">Trekking</h5>
                <p class="card-text mt-2">
                  Some quick example text to build on the card title and make up
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 col-xxl-4 mx-auto mt-5 Services">
            <div class="p-3" style={{width: "22rem"}}>
              <img
                src={climbing}
                class="card-img-top"
                alt="climbing"
                style={{width:" 50px"}} 
              />
              <div class="card-body">
                <h5 class="card-title mt-2  text-transform-uppercase">Climbing</h5>
                <p class="card-text mt-2">
                  Some quick example text to build on the card title and make 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services