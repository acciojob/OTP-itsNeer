//your JS code here. If required.
let Code= document.querySelector(".code");
Code.forEach((input ,index)=>{
	input.addEventListener("input", ()=>{
		if(input.value.length==1 && index <= input.length)
	{
	 Code[index+1].focus();
	}

		if(input.value=="" && index>0)
		{
			Code[index-1].focus();
		}
})
	input.addEventListener("keydown", (e)=>{
		if(e.key=="Backspace" && input.value="" && index>0)
		{
			Code[index-1].focus();
		}
	})
})