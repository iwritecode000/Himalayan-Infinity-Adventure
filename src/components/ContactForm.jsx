import React from 'react'

const ContactForm = () => {
  return (
    <>
     <section class="main_heading my-5">
                <div class="text-center display-4">
                    <h1>Contact Us</h1>
                    <hr class="w-25 mx-auto" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-md-8 mx-auto">
                            <form action="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"
                                    >Email address</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"
                                    >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder=""
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"
                                    >Example textarea</label
                                    >
                                    <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="" class="pr-4">Gender</label>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="option1"
                                        />
                                        <label class="form-check-label" for="inlineRadio1"
                                        >Male</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="option2"
                                        />
                                        <label class="form-check-label" for="inlineRadio2"
                                        >Female</label
                                        >
                                    </div>
                                    <div class="mt-3">
                                        <label for="exampleDataList" class="form-label"
                                        >Select Destination</label
                                        >
                                        <input
                                            class="form-control"
                                            list="datalistOptions"
                                            id="exampleDataList"
                                            placeholder="Type to search..."
                                        />
                                        <datalist id="datalistOptions">
                                            <option value="San Francisco"></option>
                                            <option value="New York"></option>
                                            <option value="Seattle"></option>
                                            <option value="Los Angeles"></option>
                                            <option value="Chicago"></option>
                                        </datalist>
                                    </div>
                                </div>
                                <div class="mt-4 form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label for="exampleCheck1" class="gorm-check-lebel"
                                    >Check me out</label
                                    >
                                </div>
                                <button type="button" class="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ContactForm