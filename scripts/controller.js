
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
		this.InitSelects();

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

	InitSelects()
	{
		var obj = this;

		let selects = document.getElementsByClassName("input-block_select");

		for(var i = 0; i < selects.length; i++)
		{
			var element = selects[i];
			selects[i].addEventListener("click", function (e) {  obj.SelectClick(element, e.target); });
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

	SelectClick(element, target)
	{
		var options = element.children[0].children[2];
		var val = element.children[0].children[0];
		if(!target.className.startsWith("input-block__option"))
		{
			if(options.className.endsWith("_hidden"))
			{
				options.className = "input-block__options";
			}
			else
			{
				options.className = "input-block__options input-block__options_hidden";
			}
		}
		else if(target.className.startsWith("input-block__option"))
		{
			if(target.className == "input-block__option")
			{
				val.innerHTML = target.innerHTML;
			}

			val.className = "input-block__value";
			options.className = "input-block__options input-block__options_hidden"; 
		}
	}
}