import React from 'react';
import coverTwo from '../images/coverTwo.jpg';
import coverOne from '../images/coverOne.jpg';


const Gallery = () => {
  return (
    <>
      <section class="main_heading my-5 py-5">
        <div class="text-center display-4">
          <h1 class="">Gallery</h1>
          <hr class="w-25 mx-auto" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverOne}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverTwo}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverOne}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverTwo}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverOne}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverTwo}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverOne}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverTwo}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-4 col-10 col-xxl-4 mx-auto">
              <figure>
                <img
                  src={coverOne}
                  alt="gallery"
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery