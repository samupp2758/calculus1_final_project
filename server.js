const tcx = require("tcx-js")
const fs = require("fs")
const express = require('express');
const path = require("path");
const regression = require('regression')
var file = "52003519931.tcx"
var parser = new tcx.Parser(file);
var points = parser.activity.trackpoints;
var points_sorted = {}
var points_sorted_x_y = []
var x_points_sorted = []
var y_points_sorted = []


var map_promise = new Promise((resolve)=>{points.map((point,index)=>{
       points_sorted[index] = point.distance_meters
       points_sorted_x_y[index] = [index,point.distance_meters]
       x_points_sorted[index] = index
       y_points_sorted[index] = point.distance_meters
        resolve()
    })})

map_promise.then(()=>{
    fs.writeFile("./overview/data_x_y.json", JSON.stringify([x_points_sorted,y_points_sorted,points_sorted_x_y]), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
})

const app = express();
const port = 3000;

// sendFile will go here

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use('/files', express.static(path.join(__dirname, 'overview/')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'overview/index.html'));
});


