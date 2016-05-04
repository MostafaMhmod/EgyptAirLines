var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var dburl = 'mongodb://localhost:27017/egyptair';
var assert = require('assert');
var DB = null;

exports.connect = function(cb)
{
    MongoClient.connect(dburl, function(err, db) 
    {
        DB = db;
        if(db != null)
        {
          console.log("Connected To DB");
          cb(true);
        }
        if(err != null)
        {
          console.log("Error Connecting To DB");
          console.log(err);
          cb(false);
        }
    });
}

exports.seed = function(collectionName,data)
{
  DB.collection(collectionName).insert(data, function(err, doc) {
        console.log("Data Seeded!");
    if(err) throw err;
  });
}

exports.getFlights = function(cb) {
    var Flights = DB.collection('flights').find().toArray(function(err, docs) {
        var intCount = docs.length;
        console.log("Found : " + intCount + " Flights");
        if (intCount == 0)
        {
          console.log("Database Empty");
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"_id": "' + docs[i]._id + '","aircraftid": "' + docs[i].aircraftid + '","departuredate": "' + docs[i].departuredate + '","duration": "' + docs[i].duration + '","arrivaldate": "' + docs[i].arrivaldate + '","originid": "' + docs[i].originid + '","destinationid": "' + docs[i].destinationid + '","seatmap": "' + docs[i].seatmap + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Flights Retrived from DB");
        }
    });
}

exports.searchFlights = function(org,dest,dDate,rDate,cb) {
    var Flights = DB.collection('flights').find({originid: org, destinationid: dest}).toArray(function(err, docs) {
        var intCount = docs.length;
        console.log("Found : " + intCount + " Flights");
        if (intCount == 0)
        {
          console.log("Database Empty");
          cb(false);
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"_id": "' + docs[i]._id + '","aircraftid": "' + docs[i].aircraftid + '","departuredate": "' + docs[i].departuredate + '","duration": "' + docs[i].duration + '","arrivaldate": "' + docs[i].arrivaldate + '","originid": "' + docs[i].originid + '","destinationid": "' + docs[i].destinationid + '","seatmap": "' + docs[i].seatmap + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Flights Retrived from DB");
        }
    });
}

exports.getAirports = function(cb) {
    var airports = DB.collection('airport').find().toArray(function(err, docs) {
        var intCount = docs.length;
        console.log("Found : " + intCount + " Airports");
        if (intCount == 0)
        {
          console.log("Database Empty");
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"_id": "' + docs[i]._id + '","name": "' + docs[i].name + '","status": "' + docs[i].status + '","country": "' + docs[i].country + '","continent": "' + docs[i].continent + '","lon": "' + docs[i].lon + '","lat": "' + docs[i].lat + '","type": "' + docs[i].type + '","size": "' + docs[i].size + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Airports Retrived from DB");
        }
    });
}

exports.getAirplanes = function(cb) {
    var airplanes = DB.collection('airplane').find().toArray(function(err, docs) {
        var intCount = docs.length;
        console.log("Found : " + intCount + " Airplanes");
        if (intCount == 0)
        {
          console.log("Database Empty");
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"_id": "' + docs[i]._id + '","model": "' + docs[i].model + '","capacity": "' + docs[i].capacity + '","company": "' + docs[i].company + '","lon": "' + docs[i].lon + '","lat": "' + docs[i].lat + '","status": "' + docs[i].status + '","seatmap": "' + docs[i].seatmap + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Airplanes Retrived from DB");
        }
    });
}

exports.getBookings = function(cb) {
    var bookings = DB.collection('booking').find().toArray(function(err, docs) {
        var intCount = docs.length;
        console.log("Found : " + intCount + " Bookings");
        if (intCount == 0)
        {
          console.log("Database Empty");
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"_id": "' + docs[i]._id + '","flightid": "' + docs[i].flightid + '","firstName": "' + docs[i].firstName + '","lastName": "' + docs[i].lastName + '","passport": "' + docs[i].passport + '","issuedate": "' + docs[i].issuedate + '","expirydate": "' + docs[i].expirydate + '","receiptnumber": "' + docs[i].receiptnumber + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Bookings Retrived from DB");
        }
    });
}

exports.db = function() 
{
  if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};

exports.clearDB = function(done) 
{
    DB.listCollections().toArray().then(function (collections) 
    {
      collections.forEach(function (c) 
      {
         DB.collection(c.name).removeMany();   
      });
      done();
    }).catch(done);
};
