var d = new Date(),
    i = 0;
function Check(){
	let jj = parseInt(document.forms[0].elements[0].value),
	    mm = parseInt(document.forms[0].elements[1].value),
	    yy = parseInt(document.forms[0].elements[2].value),
		a = document.getElementById('hello').style.display,
		b = document.getElementById('hey').style.display;
	if(a == "block" || b == "block")
	{
		return
	}
	else
	{
		if((jj == d.getDate()) && (mm - 1 == d.getMonth()) && (yy == d.getFullYear()))
	    {
		   document.getElementById('hello').style.display = "block";
		   document.forms[1].elements[0].style.display = "block";
	    }
	    else
	    {
		   document.getElementById('hey').style.display = "block";
		   document.forms[0].elements[4].style.display = "block";
	    }
}
}
function Res(){
	history.go(0);
}
function Coll(){
const T = ["Red","#91C92F"];
document.querySelector(".ress").style.backgroundColor = T[i % 2];
i++;
}
setInterval(Coll,500)