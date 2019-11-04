
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
		
		this.InitInputs();
		this.InitCheckboxes();

		//this.view.login.keepCheckbox.addEventListener("click", function (e) { obj.CheckboxClick(e.target); });
	}

	InitInputs()
	{
		var obj = this;

		let inputs = document.getElementsByClassName("input-block__text");

		for(var i = 0; i < inputs.length; i++)
		{
			inputs[i].addEventListener("focus", function (e) { obj.InputFocus(e.target); });
			inputs[i].addEventListener("blur", function (e) { obj.InputBlur(e.target); });
		}
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
				element.nextSibling.className = "checkbox__dot-img checkbox__dot-img_active";
			}
			else
			{
				element.parentNode.className = "checkbox__dot";
				element.nextSibling.className = "checkbox__dot-img";
			}
		}
	}

	InputFocus(element)
	{
		element.parentNode.parentNode.className = "input-block input-block_focus";
	}

	InputBlur(element)
	{
		element.parentNode.parentNode.className = "input-block";
	}
}