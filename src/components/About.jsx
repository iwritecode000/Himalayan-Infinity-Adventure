import React from 'react';
import coverTwo from '../images/coverTwo.jpg'


const About = () => {
    return (
        <>
            <section class="main_heading my-5">
                <div class="text-center display-4">
                    <h1>About Us</h1>
                    <hr class="w-25 mx-auto" />
                </div>
                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-6 cl-md-6 col-12 col-xxl-6">
                            <figure>
                                <img
                                    src={coverTwo}
                                    alt="about"
                                    class="img-fluid about_img"
                                />
                            </figure>
                        </div>
                        <div class="col-lg-6 cl-md-6 col-12 col-xxl-6">
                            <h1>My Journey</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                tempora quia iste nihil corporis illum maiores, quam sit
                                distinctio necessitatibus nisi numquam ducimus perspiciatis sed
                                ipsam, autem libero delectus pariatur. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quisquam reiciendis dolorum, sint
                                laudantium velit ullam. Quia vitae rem exercitationem inventore.
                            </p>
                            <button
                                type="button"
                                class="btn btn-outline-info"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Tooltip on right"
                            >
                                Check More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About