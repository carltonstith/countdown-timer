function cdtd() {
	
	var xmas = new Date("December 25, 2014 00:01:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	
	if (timeDiff <= 0) {
		clearTimeout(timer);
		document.write("Merry Christmas!");
	}
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("daysValue").innerHTML = days;
	document.getElementById("hoursValue").innerHTML = hours;
	document.getElementById("minutesValue").innerHTML = minutes;
	document.getElementById("secondsValue").innerHTML = seconds;
	
	var timer = setTimeout('cdtd()',1000);
}