
class View
{
	constructor(model)
	{
		this.model = model;

		this.Init();
	}

	Init()
	{
		this.login = 
		{
			keepCheckbox: document.getElementById("keepCheckbox")
		};
	}
}