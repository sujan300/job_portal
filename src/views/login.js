const LoginPage = ()=>{
    return `
        <div class="login mt-5">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5 col-sm-12">
                    <form class="bg-light p-3">
                    <h3 class="fs-2 fw-bold display-2 ">Login Form</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label fs-4"
                        >Email address</label
                        >
                        <input
                        type="email"
                        class="form-control fs-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your Email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label fs-4"
                        >Password</label
                        >
                        <input
                        type="password"
                        class="form-control fs-4"
                        id="exampleInputPassword1"
                        placeholder="Enter Password"
                        />
                    </div>
                    <div class="mt-1 mb-1">
                        <a href="" class="fs-4">Forget Password ?</a>
                    </div>
                    <button type="submit" class="btn btn-danger fs-4 mt-3">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    `
}

export default LoginPage