
class Controller
{
	constructor(model, view)
	{
		this.model = model;
		this.view = view;

		this.Init();
	}

	Init()
	{
		

		this.InitCheckboxes();

		//this.view.login.keepCheckbox.addEventListener("click", function (e) { obj.CheckboxClick(e.target); });
	}

	InitCheckboxes()
	{
		var obj = this;

		let checkboxes = document.getElementsByClassName("checkbox__input");

		for(var i = 0; i < checkboxes.length; i++)
		{
			obj.CheckboxClick(checkboxes[i]);
			checkboxes[i].addEventListener("change", function (e) { obj.CheckboxClick(e.target); });
		}
	}

	CheckboxClick(element)
	{
		if(element.className.startsWith("checkbox__input"))
		{
			if(element.checked)
			{
				element.parentNode.className = "checkbox__dot checkbox__dot_active";
			}
			else
			{
				element.parentNode.className = "checkbox__dot";
			}
		}
	}
}