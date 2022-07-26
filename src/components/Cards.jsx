import React from 'react';
import coverTwo from '../images/coverTwo.jpg'
import coverOne from '../images/coverOne.jpg'


const Cards = () => {
    return (
        <>
            <section class="main_heading my-5 bg-light py-5">
                <div class="text-center display-4">
                    <h1 class="">Upcoming Events</h1>
                    <hr class="w-25 mx-auto" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-10 col-xxl-4 mx-auto mt-5">
                            <div class="card" style={{ width: "18rem" }}>
                                <img
                                    src={coverOne}
                                    class="card-img-top"
                                    alt="card"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="/contact" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 col-xxl-4 mx-auto mt-5">
                            <div class="card" style={{ width: "18rem" }}>
                                <img
                                    src={coverTwo}
                                    class="card-img-top"
                                    alt="card"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="/contact" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 col-xxl-4 mx-auto mt-5">
                            <div class="card" style={{ width: "18rem" }}>
                                <img
                                    src={coverOne}
                                    class="card-img-top"
                                    alt="card"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="/contact" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards