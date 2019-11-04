
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
		var obj = this;

		this.view.login.keepCheckbox.addEventListener("click", function (e) { obj.CheckboxClick(e.target); });
	}

	CheckboxClick(element)
	{
		if(element.className.startsWith("checkbox__dot"))
		{
			if(element.className == "checkbox__dot checkbox__dot_active")
			{
				element.className = "checkbox__dot";
				element.children[0].setAttribute("checked", "false");
			}
			else if(element.className == "checkbox__dot")
			{
				element.className = "checkbox__dot checkbox__dot_active";
				element.children[0].setAttribute("checked", "true");
			}
		}
	}
}