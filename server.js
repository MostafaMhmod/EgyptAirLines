// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();
    var bodyParser     = require('body-parser');
    var methodOverride = require('method-override');
    // create our app w/ express
    
    // configuration =================
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

    // routes ======================================================================
    require('./routes.js')(app); // configure our routes
    
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("EgyptAir App listening on port 8080");

    //for the deployment
   
    /**
    app.listen(80, function(){
    console.log("EgyptAir App listening on port 8080");
   });

   **/
 

    // expose app           
    exports = module.exports = app; 