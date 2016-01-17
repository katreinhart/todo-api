// var person = {
// 	name: 'Andrew', 
// 	age:21
// };
// 
// function updatePerson(obj) {
// 	obj = {
// 		name: 'Andrew',
// 		age: 24
// 	}
//
// 	obj.age = 24;
// };

// Array example

var grades = [15, 37];

function addGrade(grades) {
// this is a completely separate variable, even though it has the same name
	grades = [12, 33, 99];
	debugger;	
	grades.push(12);
}

addGrade(grades);
console.log(grades);


// 
// updatePerson(person);
// console.log(person);