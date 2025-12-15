const JobDescription = ()=>{
    return`
        <div class="container my-5">
            <div class="card shadow-sm">
            <div class="card-body">
                <div class="row g-4">

                <!-- LEFT SECTION -->
                <div class="col-lg-8 col-md-7">
                    <!-- Header -->
                    <div class="d-flex align-items-center gap-3 mb-3">
                    <div class="img-logo">
                        <img
                        src="./jobFrontEnd/src/images/image2.png"
                        alt="GR IT Logo"
                        class="img-fluid"
                        />
                    </div>
                    <div>
                        <h5 class="mb-1 fs-4">React JS Internship</h5>
                        <small class="text-muted">GR IT · Office Based</small>
                    </div>
                    </div>

                    <!-- Job Info -->
                    <div class="job-info d-flex flex-wrap gap-4 mb-3 fs-4">
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Internship</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 fs-4">
                        <i class="fa-solid fa-user-graduate"></i>
                        <span>Experience: 1+</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 fs-4">
                        <i class="fa-solid fa-money-bill-wave"></i>
                        <span>Stipend: Negotiable</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 fs-4">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Deadline: 2026-01-24</span>
                    </div>
                    </div>

                    <hr />
                    

                    <!-- Description -->
                    <h6 class="fs-4">Description</h6>
                    <p class="job-description fs-4">
                    We are seeking a passionate React.js intern eager to learn and grow in a
                    real-world development environment. As a React.js intern, you’ll work
                    closely with our front-end team to design, build, and optimize user
                    interfaces for modern web applications.
                    </p>

                    <p class="job-description fs-4">
                    This is an excellent opportunity to gain hands-on experience with one
                    of the most in-demand JavaScript frameworks in the tech industry.
                    </p>

                    <!-- Job Responsibilities -->
                    <h6 class="mt-3 fs-4">Job Description</h6>
                    <ul class="job-description fs-4">
                    <li>Assist in developing responsive and user-friendly interfaces using React.js</li>
                    <li>Collaborate with designers and backend developers to integrate APIs</li>
                    <li>Write clean, maintainable, and reusable code</li>
                    <li>Participate in code reviews and follow best practices</li>
                    <li>Debug and troubleshoot application issues</li>
                    <li>Stay updated with React and JavaScript trends</li>
                    </ul>

                    <!-- Extra Info -->
                    <p class="job-description fs-4"><strong>Vacancy Category:</strong> Web Development</p>
                    <p class="job-description fs-4">
                    <strong class="fs-4">Perks & Benefits:</strong> Opportunity to work on scalable and high-impact projects
                    </p>
                    <p class="job-description fs-4">
                    <strong>Tags:</strong> Internship, React Developer, IT
                    </p>

                    <!-- Who Can Apply -->
                    <h6 class="mt-3 fs-4">Who Can Apply</h6>
                    <ul class="job-description fs-4">
                    <li>Students or fresh graduates interested in front-end development</li>
                    <li>Basic understanding of HTML, CSS, JavaScript, and React.js</li>
                    <li>Familiar with version control systems (Git)</li>
                    <li>Eager to learn, proactive, and a team player</li>
                    <li>React courses or personal projects are preferred</li>
                    </ul>
                </div>

                <!-- RIGHT ACTION SECTION -->
                <div class="col-lg-4 col-md-5">
                    <div class="action-box h-100 d-flex flex-column justify-content-between text-center">
                    <div>
                        <span class="badge bg-danger text-white mb-3 fs-4">Internship</span>
                        <p class="text-muted small fs-4">Application Deadline</p>
                        <p class="fw-bold fs-4">24 January 2026</p>
                    </div>

                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-secondary fs-4">
                        <i class="fa-solid fa-share"></i> Share
                        </button>
                        <button class="btn btn-danger fs-4">
                        <i class="fa-solid fa-paper-plane"></i> Apply Now
                        </button>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>
    
    `;
}

export default JobDescription;