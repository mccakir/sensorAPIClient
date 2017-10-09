var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    data: { sensorType: "humidity", sensorValue: 22},
    headers: { "Content-Type": "application/json"}
};

client.post("http://52.57.228.166:3005/sensors",args, function(data, response){
    console.log(data);
    console.log(response);
});

//registering remote methods
/*client.registerMethod("postMethod","http://52.57.228.166:3005/sensors", "POST");

client.methods.postMethod(args, function(data, response){
    console.log(data);
    console.log(response);
});
*/