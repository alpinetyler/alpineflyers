const express = require("express");
const nodemailer = require("nodemailer");
require('dotenv/config');
const path = require('path'
const massive = require('massive')
const session = require('express-session')

const app = express();
const { SERVER_PORT, GMAIL_USER, GMAIL_PASS, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// })

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('the db is now connected!')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "../src/components/contact.js");
})

app.post('/contact', (req, res) => {

  // instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let emailMessage = req.body.emailMessage;

  //console.log(`${firstName} ${lastName} ${email}`)
  var message = "<p style='font-weight:bold;'> Hi. My name is John </p>";

  // specify what the email will look like
  const mailOptions = {
    from: `${email}`,
    to: GMAIL_USER,
    subject: `${email} Requests Free consultation`,
    html: `<img style="height:200px" src="https://c8.alamy.com/comp/P67CF1/view-of-an-eclectic-home-office-P67CF1.jpg">
          <p><h1 style="display:inline">Name:</h1> <h2 style="display:inline">${firstName} ${lastName}</h2>
           <br><h1 style="display:inline">Email:</h1> <h2 style="display:inline">${email}</h2>
           <br><h1 style="display:inline">Message:</h1> <h2 style="display:inline">${emailMessage}.</h2>`

  }

  // attempt to send the Email
  smtpTrans.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.sendFile(__dirname + "/failure.html")
      //console.log("mail failed to send" + error)
    } else {
      // res.render('contact-success') // show a page indicating success
      res.sendFile(__dirname + "/success.html")
    }
  })
})

// redirect fom failure button to contact page
app.post("/failure", function (req, res) {
  res.redirect("/contact")
});


app.listen(process.env.PORT || SERVER_PORT, function () {
  console.log(`The Server is now running on port ${SERVER_PORT}`)
});