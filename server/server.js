const express = require('express');
const fs = require('fs');
const stripe = require('stripe')('sk_test_GLcz4Yc3FRghFx6M9GnmpU0k00ne6LUnGh');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {basicCORSHeaders} = require("./util");
const {apiLimiter} = require("./limiters");
const config = require('./config')
const twitterRouter = require("./twitterRouter")(config)
const apiRouter = require('./router');
const firebase = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://gunproject-64f84.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("goatgun");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});





app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.io = io;


/**
 * Some basic io feedback.
 */
io.on('connection', function (socket) {
    io.emit('this', {will: 'be received by everyone'});

    /*  socket.on('private message', function (from, msg) {
          console.log('I received a private message by ', from, ' saying ', msg);
      });*/

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});


server.listen(config.port);
// WARNING: app.listen(80) will NOT work here!

app.set('view engine', 'ejs');
app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

   /* stripe.products.create({
  name: 'Goatgunmembership',
  type: 'service',
}, function(err, product) {
  console.log(JSON.stringify(product.id));
});  */
/* stripe.plans.create({
    
  amount: 99,
  nickname :"GoatGunMembership",
  interval: "month",
  product: "prod_FPwvtUxdmNRCer",
  currency: "usd",
}, function(err, plan) {
  // asynchronously called
  console.log(JSON.stringify(plan.id));
}); */
app.use(basicCORSHeaders);
app.post('/payme', (req, res) => {
    console.log('The body is ', req.body);
  

    stripe.customers.create({
      email:req.body.email,
      source : req.body.token
    })
    .then(customer => stripe.subscriptions.create({
      customer :customer.id,
      items :[{
        plan:"plan_FPwwyPA90WllPL",
      },]
      
    }, function(err,subscription){

      if(err) {
        throw err;
      }
      res.json({
        success : true,
        message : "Payment Done"
      })
      const usersRef = ref.child(req.body.userid);
        usersRef.set({
        email: req.body.email,
        membership: true
        });
      
    })
  );    
});



app.use("/", express.static(config.publicLocation));
app.use("/images", express.static(config.storageLocation));
app.use("/api", apiLimiter, apiRouter);
app.use('/twitter', apiLimiter, twitterRouter)

console.log("server started, listening on port:", config.port);
//console.log("---- server config ----")
//console.log(config)


