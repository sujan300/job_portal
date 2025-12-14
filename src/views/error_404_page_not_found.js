const PageNotFound404 = ()=>{
    return`
    <div class="404">
        <div class="container mt-5 py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 py-5 text-center">
                    <h1 class="h1 display-1 fw-bolder text-danger">Oops!</h1>
                    <h2 class="h2 display-3 fw-bold">404 Not Found</h2>
                    <p class="p fs-3">Sorry, an error has occurred. The requested page was not found!</p>
                    <div class="404-page-buttons">
                        <a class="btn-dark btn border rounded fs-4" href="/home">Take Me to Home</a>
                        <a class="btn-dark btn border rounded fs-4" href="/contact-us">Contact Support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
export default PageNotFound404;