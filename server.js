var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet Mom for lunch',
	completed: false
}, {
	id: 2, 
	description: 'Go to store',
	completed: false
}, {
	id: 3,
	description: 'Come home from work',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

// get /todos/:id
app.get('/todos/:id', function (req, res){
	var todoId = req.params.id;
	var matchedTodo;
	// iterate over todos array and find match
	
	for(var i=0; i<todos.length; i++){
		if(todos[i].id == todoId){ // if this is a ===, it doesn't work. hmm.
			matchedTodo = todos[i];
			res.json(matchedTodo); //is it bad to call this inside the iterator?
		}
	}
	
	if(!matchedTodo){
		 res.status(404).send(); // if there is no match send a 404
	}
	
	//res.send('Asking for todo with id of ' + req.params.id);
	
	
} );

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '.');
});