const ContactUsPage = ()=>{
    return`
        <div class="contact-us bg-light py-5">
            <div class="container">
                <h1 class="mb-5 mt-2 text-center display-4 fw-bold">Contact Us</h1>
                <div class="row">
                
                <iframe class="col-lg-6 col-md-12 mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6868.3084413585775!2d85.35260277782098!3d27.683490018726516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c8d6a0639%3A0x99903dada8289577!2sTinkune%20Park!5e1!3m2!1sen!2snp!4v1765218444548!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                <div class="col-lg-6 mb-3">
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fs-4"
                        >Full Name</label
                    >
                    <input
                        type="text"
                        class="form-control fs-4"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Name"
                    />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fs-4"
                        >Email address</label
                    >
                    <input
                        type="email"
                        class="form-control fs-4"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fs-4"
                        >Contact Number</label
                    >
                    <input
                        type="text"
                        class="form-control fs-4"
                        id="exampleFormControlInput1"
                        placeholder="9779845674021"
                    />
                    </div>


                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label fs-4"
                        >Example textarea</label
                    >
                    <textarea
                        class="form-control fs-4"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Type Your Message"
                    ></textarea>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-danger fs-4">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    `
}

export default ContactUsPage;