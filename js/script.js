// updating date time
divdate = document.getElementById("datetime");
date = new Date();
setInterval(()=>{
daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
divdate.innerHTML = `<span>${date.getHours()}:${date.getMinutes()}</span>
<span>${daylist[date.getDay()]}</span>
<span>${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}, 1000)

// clickable startbtn
startbtn = document.getElementById("startbutton");
startmenu = document.getElementsByClassName("startmenu")[0]
startbtn.addEventListener("click", ()=>{
	if(startmenu.style.bottom== '-650px'){
		startmenu.style.bottom = '60px'
		search.style.bottom='-200px'
		notepadinput.style.bottom = '-700px'
	}else{
		startmenu.style.bottom = '-650px'
	}

})

// clickable file manager
file = document.getElementById("fileExplore");
file.addEventListener("click", ()=>{
	window.open('file:///C:');
})
files = document.getElementById("files");
files.addEventListener("click", ()=>{
	window.open('file:///C:');
})

// clickable search
search = document.getElementsByClassName("search")[0];
searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", ()=>{
	if(search.style.bottom=='-200px'){
		search.style.bottom='60px'
		startmenu.style.bottom = '-650px'
		notepadinput.style.bottom = '-700px'
	}else{
		search.style.bottom='-200px'
	}
})


// clickable calander
calander = document.getElementById("calander");
calanderinput = document.getElementById("calanderinput")
calander.addEventListener("click", ()=>{
	if(calanderinput.style.display == 'none'){
		calanderinput.style.display = 'inline'
	}else{
		calanderinput.style.display = 'none'
	}
})

// clickable notepad
notepad = document.getElementById("notepad")
notepadinput = document.getElementById("notepadinput")
notepadtaskbar = document.getElementById("notepadtaskbar");
notepad.addEventListener("click", ()=>{
	if(notepadinput.style.bottom=='-700px'){
		notepadinput.style.bottom = "70px"
		startmenu.style.bottom = '-650px'
		search.style.bottom='-200px'
		notepadtaskbar.style.display = 'inline'
	}else{
		notepadinput.style.bottom = '-700px'
	}
})
notepadtaskbar.addEventListener("click", ()=>{
	if(notepadinput.style.bottom=='-700px'){
		notepadinput.style.bottom = "70px"
		startmenu.style.bottom = '-650px'
		search.style.bottom='-200px'
		notepadtaskbar.style.display = 'inline'
	}else{
		notepadinput.style.bottom = '-700px'
	}
})


function savingnotepad(){
    var text = document.getElementById("savenote").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-note.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
