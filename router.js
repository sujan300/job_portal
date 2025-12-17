
import ContactUsPage from "./src/views/contactUs";
import PageNotFound404 from "./src/views/error_404_page_not_found";
import HomePage from "./src/views/home";
import JobAndIntern from "./src/views/job_and_inter";
import JobDescription from "./src/views/job_description";
import LoginPage from "./src/views/login";
import SignupPage from "./src/views/signup";

console.log("Routing.js Running Now ......");

const routes = {
  "/": HomePage,
  "/home": HomePage,
  "/login":LoginPage,
  "/signup":SignupPage,
  "/contact-us":ContactUsPage,
  "/job":JobAndIntern,
  "/job-description":JobDescription,
};

async function render(urlPath) {
  const appDiv = document.querySelector(".app");
  let page = "";
  if("/job-description"===urlPath){
    page = await routes[urlPath];
  }else{
    page = routes[urlPath];
  }
  if (page) {
    console.log("page ",page);
    appDiv.innerHTML = page();
  } else {
    appDiv.innerHTML = PageNotFound404();
  }
}

document.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    e.preventDefault();
    try{
      const stringUrl = e.target.href;
      const url = new URL(stringUrl);
      const pathNameOfUrl = url.pathname;
      history.pushState({}, "", url);
      render(pathNameOfUrl);
    }catch(err){
      console.log("Error");
    }

  }
});

render(window.location.pathname);
