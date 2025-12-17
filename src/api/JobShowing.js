async function JobShowing() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/sujan300/jobsjson/master/fake_100_jobs.json");
    // console.log("Response ====>>>",response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jobs = await response.json();
    console.log("returing jobs",jobs);
    return jobs
  } catch(error) {
    console.error('Fetch error:', error.message);
  }
}

// // getJobsApi()
// getJobsApi();

export default JobShowing;
