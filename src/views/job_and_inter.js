const JobAndIntern = () => {
  return `
    <div class="container mt-5">

      <div class="row">
        <div class="col-lg-3">
          <div class="filter-box">
            <!-- Top Section -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h4 class="fw-bold m-0">Search Filter</h4>
              <button class="btn btn-sm btn-danger">Clear All</button>
            </div>

            <div class="separator"></div>

            <!-- Job Categories -->
            <div class="filter-section">
              <div class="d-flex justify-content-between align-items-center">
                <p class="filter-title mb-0">Job Categories</p>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="collapse"
                  data-bs-target="#catCollapse"
                >
                  ▼
                </button>
              </div>

              <div class="collapse show mt-2" id="catCollapse">
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> IT Manager (20)
                </label>
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> React JS (20)
                </label>
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> Python Django
                  (20)
                </label>
              </div>
            </div>

            <div class="separator"></div>

            <!-- Job Locations -->
            <div class="filter-section">
              <div class="d-flex justify-content-between align-items-center">
                <p class="filter-title mb-0">Job Locations</p>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="collapse"
                  data-bs-target="#locCollapse"
                >
                  ▼
                </button>
              </div>

              <div class="collapse show mt-2" id="locCollapse">
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> Kathmandu
                </label>
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> Pokhara
                </label>
                <label class="d-flex align-items-center mb-2">
                  <input type="checkbox" class="checkbox-big" /> Lalitpur
                </label>
              </div>
            </div>

            <div class="separator"></div>

            <!-- Skills -->
            <div class="filter-section">
              <p class="filter-title">Skills</p>
              <input
                type="text"
                class="form-control"
                placeholder="Search skills..."
              />
            </div>

            <div class="separator"></div>

            <!-- Radius -->
            <div class="filter-section">
              <p class="filter-title">Radius in Miles</p>
              <input type="range" class="form-range" min="0" max="200" />
            </div>

            <div class="separator"></div>

            <!-- Experience -->
            <div class="filter-section">
              <p class="filter-title">Experience</p>

              <label
                ><input type="checkbox" class="checkbox-big" /> Beginner
                (54)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 1+ Year
                (32)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 2 Year
                (09)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 3+ Year
                (16)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 4+ Year
                (17)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 5+ Year
                (22)</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> 10+ Year
                (32)</label
              ><br />
            </div>

            <div class="separator"></div>

            <!-- Job Type -->
            <div class="filter-section">
              <p class="filter-title">Job Type</p>

              <label
                ><input type="checkbox" class="checkbox-big" /> Full time</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Part Time</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Contract
                Base</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" />
                Internship</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Regular</label
              ><br />
            </div>

            <div class="separator"></div>

            <!-- Job Level -->
            <div class="filter-section">
              <p class="filter-title">Job Level</p>

              <label
                ><input type="checkbox" class="checkbox-big" /> Team
                Leader</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Manager</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Junior</label
              ><br />
              <label
                ><input type="checkbox" class="checkbox-big" /> Senior</label
              ><br />
            </div>
            <div class="d-flex align-items-center mt-5">
              <button class="btn btn-danger w-100">Search Job</button>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="container my-3">
            <div class="card shadow-sm">
              <div class="card-body">
                <!-- TOP SECTION -->
                <div class="row align-items-center g-3">
                  <!-- LEFT -->
                  <div class="col-12 col-md-8">
                    <div class="d-flex align-items-center gap-3">
                      <!-- LOGO -->
                      <img
                        src="../images/image.png"
                        class="company-logo"
                        alt="Company Logo"
                      />

                      <!-- COMPANY INFO -->
                      <div>
                        <h5 class="mb-1 fs-3 fw-bolder">Mern Stack</h5>
                        <p class="text-muted fs-5">Company name</p>
                        <div class="d-flex flex-wrap gap-3 small text-muted">
                          <span>
                            <i class="fa-solid fa-map-location me-1 fs-3"></i> <span class="fs-5">Kathmandu</span>
                          </span>
                          <span>
                            <i class="fa-solid fa-user-doctor me-1 fs-3"></i> <span class="fs-5">Full
                            Time</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- RIGHT BUTTON -->
                  <div class="col-12 col-md-4 text-md-end">
                    <a class="btn btn-danger w-md-auto fs-4" href="/job-description">
                      View & Apply
                    </a>
                  </div>
                </div>

                <hr />

                <!-- BOTTOM INFO -->
                <div class="row text-center text-md-start g-3">
                  <div class="col-6 col-md-3">
                    <i class="fa-solid fa-money-bill-1-wave me-1 fs-3"></i><span class="fs-4"> Rs 15000</span>
                  </div>
                  <div class="col-6 col-md-3">
                    <i class="fa-solid fa-briefcase me-1 fs-3"></i><span class="fs-4">1+ Year</span>
                  </div>
                  <div class="col-6 col-md-3">
                    <i class="fa-solid fa-clock me-1 fs-3"></i> <span class="fs-4">Full Time</span>
                  </div>
                  <div class="col-6 col-md-3">
                    <i class="fa-solid fa-location-dot me-1 fs-3"></i> <span class="fs-4">Nepal</span>
                  </div>
                </div>
                <hr />
                <div class="text row g-3 mt-3">
                  <p class="text-muted fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, provident. Id nobis temporibus quos praesentium
                    minima! Delectus reprehenderit excepturi rem nemo laboriosam
                    et libero ducimus fugit, animi deleniti amet hic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    `;
};

export default JobAndIntern;
