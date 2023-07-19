
const selector = document.getElementById("colorSelect");
const button = document.querySelector("input");

 button.addEventListener("click", listener);

function listener() 
	{
		for(let i=0;i<selector.children.length;i++)
			{
				if(selector.children[i].value === selector.value)
				{
					selector.children[i].remove();
				}
			}
	}









