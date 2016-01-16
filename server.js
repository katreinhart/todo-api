var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});


app.get('/todos/:id', function (req, res){
	var todoId = req.params.id;
	var matchedTodo = _.findWhere(todos, {id: todoId});

// 	for(var i=0; i<todos.length; i++){
// 		if(todos[i].id == todoId){ // use this instead of parseInt? 
// 			matchedTodo = todos[i];
// 			res.json(matchedTodo); //is it bad to call this inside the iterator?
// 		}
// 	}
	
	if(matchedTodo){
		res.json(matchedTodo);
	} else {
		 res.status(404).send(); // if there is no match send a 404
	}

} );

// POST /todos
app.post( '/todos', function( req, res ) {
	var body = req.body;
	body.id = todoNextId++;
	
	todos.push(body);

	res.json(body);
	
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '.');
});