import React from "react";

function Contact() {
  return (
    <div className="App">
            <h1 className="heading">Contact Us</h1>
            <form class="form-signin" action="/contact" method="post" autocomplete="off">
                <div class="form-floating mb-3">
                    <input 
                        type="text" 
                        id="firstName" 
                        class="form-control top" 
                        name="firstName" 
                        placeholder="First Name"
                        autocomplete="off"
                        required autofocus />
                    <label for="firstName">First Name</label>
                <div class="form-floating">
                    <input 
                        type="text" 
                        id="lastName" 
                        class="form-control" 
                        name="lastName" 
                        placeholder="Last Name"
                        autocomplete="off"
                        required autofocus />
                    <label for="lastName">Last Name</label>
                </div>
                <div class="form-floating">
                    <input 
                        type="email" 
                        id="email" 
                        class="form-control" 
                        name="email" 
                        placeholder="E-Mail" 
                        autocomplete="off"
                        required autofocus />
                    <label for="lastName">E-Mail</label>
                </div> 
                <div class="form-floating">
                    <textarea 
                        class="form-control" 
                        name="emailMessage"
                        placeholder="Leave a comment here" 
                        id="messageText"
                        style={{height: "100px"}}>
                    </textarea>
                    <label for="messageText">Message</label>
                </div> 
                    
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Send</button>
                    <p class="mt-5 mb-3 text-muted"></p>
                </div>     
            </form>

    </div>
  );
}

export default Contact;