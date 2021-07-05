import React from "react";

function Login() {
  return (
    <div className="App">
        <h1 className="heading">Login</h1>
        <form action="/#">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" autocomplete="off" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                
                <button type="submit" class="btn btn-primary">Logoon2</button>
            </div>
        </form>
        
    </div>
  );
}

export default Login;