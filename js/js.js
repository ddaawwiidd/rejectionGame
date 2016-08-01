//variables to hold data
var qAccepted = [];
var qRejected = [];
var score= [];

//function to load values saved in local storage to the page
function get(){
	if(localStorage.getItem("qAccSave") !==null && localStorage.getItem("qRejSave") !==null && localStorage.getItem("points") !==null){
		//loads local storage variables and parse it from JSON
		//to an array
		qAccepted = JSON.parse(localStorage.getItem("qAccSave"));
		qRejected = JSON.parse(localStorage.getItem("qRejSave"));
		score.push(parseInt(localStorage.getItem("points")));
		document.getElementById("acceptedQ").innerHTML = qAccepted.join("<br/>");
		document.getElementById("rejectedQ").innerHTML = qRejected.join("<br/>");
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0);
	} else {
		document.getElementById("points").innerHTML = 0;
	}
	
}

//function to store accepted question
//add 1 point to the score array
//print the question to the page
function storeAccepted(){
	//adds new question value from the input field to qAccepted array
	if(document.getElementById("question").value != ''){
		//adds new score to score array
		score.push(1);
		qAccepted.push(document.getElementById("question").value);
		//prints array qAccepted to the page
		document.getElementById("acceptedQ").innerHTML = qAccepted.join("<br/>");
		//prints sum of scores from array score
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0);
		save();
	} else {
		document.getElementById("acceptedQ").innerHTML = qAccepted.join("<br/>");
	}
	
}

//function to store rejected question
//add 10 point to the score array
//print the question to the page
function storeRejected(){
	if(document.getElementById("question").value != ''){
		//adds new score to score array
		score.push(10);
		//adds new question value from the input field to qAccepted array
		qRejected.push(document.getElementById("question").value);
		//prints array qRejected to the page
		document.getElementById("rejectedQ").innerHTML = qRejected.join("<br/>");
		//prints sum of scores from array score
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0);
		save();
	} else {
		document.getElementById("rejectedQ").innerHTML = qRejected.join("<br/>");
	}
}

//function to save data in local storage
function save(){
	//saves score from score array in local storage
	var pointsResult = score.reduce((a, b) => a + b, 0);
	localStorage.setItem("points", pointsResult);
	//saves values of questions in assigned local storage
	//before saving transforms array elements into JSON
	//local storage can store only strings
	localStorage.setItem("qAccSave",JSON.stringify(qAccepted));
	localStorage.setItem("qRejSave",JSON.stringify(qRejected));
}
//function clears local storage and reloads current page
function clearStorage(){
	localStorage.clear();
	location.reload();
}