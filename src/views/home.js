const HomePage = () => {
  return `
        <div class="home">
            <div class="home-hero py-5 bg-dark text-white">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10 col-sm-12 p-4">
                    <h1 class="home-heading text-center display-3 fw-bolder">
                        Find best internship and companies.
                    </h1>

                    <div class="input-group mt-3">
                        <input
                        type="text"
                        class="form-control fs-4"
                        placeholder="Search Job & Internship"
                        />
                        <span class="input-group-text">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>

                    <p class="mt-3 fs-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
                        architecto. 
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div class="helping-section bg-light py-5">
                <div class="container">
                <div class="text-center">
                    <h1 class="text-center display-4 fw-bold">How can we help</h1>
                    <p class="fs-4">Making your talent search easy</p>
                </div>
                <div class="row py-5 text-center mx-auto justify-content-center">
                    <div class="col-lg-4 col-md-6">
                    <div class="card text-dark mb-3 p-5 border rounded">
                        <div class="icon-helping-section">
                        <i class="fa-solid fa-square-plus"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title display-4 fw-bolder">Free Internship Posting</h5>
                        <p class="card-text">
                            Post an Internship of your open vacancies absolutely for free.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                    <div class="card text-dark mb-3 p-5 border rounded">
                        <div class="icon-helping-section">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title display-4 fw-bolder">All Types of Internship</h5>
                        <p class="card-text">
                            Hire from internship on multiple sectors for absolutely free.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                    <div class="card text-dark mb-3 p-5 border rounded">
                        <div class="icon-helping-section">
                        <i class="fa-solid fa-users-viewfinder"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title display-4 fw-bolder">Hire the best</h5>
                        <p class="card-text">
                            Get the best candidate for your vacancy fulfillment.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `;
};

export default HomePage;
