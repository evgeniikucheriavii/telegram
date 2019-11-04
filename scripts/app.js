
class App 
{
	constructor(model, view, controller)
	{
		this.model = model;
		this.view = view;
		this.controller = controller;
	}
}

var model = new Model();
var view = new View(model);
var controller = new Controller(model, view);

var app = new App(model, view, controller);