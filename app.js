const nodemailer = require('nodemailer'); 
const xoauth2 = require('xoauth2'); 

// var transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//         xoauth2: xoauth2.createXOAuth2Generator({
//             user: 'zeezoutkorrel@gmail.com',
//             clientId: '511842036637-l7a1o32n9qvq02tk2v1s1e915fegma97.apps.googleusercontent.com',
//             clientSecret: 'dyXMUTtiGnSxDhy31_11t_Ek',
//             refreshToken: '1/jtu4j3WnlF4YrNlzY-eVTTew_70FzGfKWSbqNX-ybig' 
//         })
//     }
// })

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'zeezoutkorrel@gmail.com',
      clientId: '511842036637-l7a1o32n9qvq02tk2v1s1e915fegma97.apps.googleusercontent.com',
      clientSecret: 'dyXMUTtiGnSxDhy31_11t_Ek',
      refreshToken: '1/jtu4j3WnlF4YrNlzY-eVTTew_70FzGfKWSbqNX-ybig' ,
      accessToken: 'ya29.GlslBY0Tj8lKtmsONAMMmwGrA55fYVLUDg2p6OhuA5Pi2Yk1cBCkImHlpVSLtNKxeOihmmdBIQJzb2OTayTSiBApdHFFEm1u7N3pNlStuV-2KE4oJm8HYtyIkudC'
    },
  });

var mailOptions = {
    generateTextFromHTML: true,
    from: 'LegoStore <zeezoutkorrel@gmail.com', 
    to: {this.props.user.emailAdress},
    subject: 'test', 
    html: 'Hello! Thank you for registering at the LegoStore. <br/><br/> Now that you have an account, it is easier to keep track of your purchase history and save items you might want to purchase later! Log in now! <br/><br/> The LegoStore Team'

}

transporter.sendMail(mailOptions, function (error, res) {
    if (error) {
        console.log("error"); 
    }
    else {
        console.log("Email sent");
    }
})

// var nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   secure: false,
//   port: 25,
//   auth: {
//     user: 'john@gmail.com',
//     pass: '1234'
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// let HelperOptions = {
//   from: '"John" <john@gmail.com',
//   to: 'jack@gmail.com',
//   subject: 'dd',
//   text: 'dd'
// };



//   transporter.sendMail(HelperOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("The message was sent!");
//     console.log(info);
//   });
