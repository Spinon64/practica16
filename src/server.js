
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


let personRoute= require('./routes/person');
let indexRoute= require('./routes/index');
let studentRoute= require('./routes/student');
let addStudentRoute= require('./routes/addStudent');

//rutas a las que se esta llamando
app.use(personRoute);
app.use(indexRoute);
app.use(studentRoute);
app.use(addStudentRoute);
app.use('/assets', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('escuchando en el puerto 3000')
});