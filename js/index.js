var days, hours, minutes, seconds; // variables for time units
var countdown = document.getElementById("tiles"); // get tag element
var current_time = new Date();
var ursus_time = new Date();

function setTitle(s){
  document.getElementById("title").innerHTML = s;
}

function getUrsusTime(){
  current_time = new Date();
  ursus_time = new Date();

  setTitle("Ursus begins in");
  if (current_time.getUTCHours() < 20){
    ursus_time.setUTCHours(20,0,0,0);
  } else if ( current_time.getUTCHours() > 21){
    ursus_time.setUTCHours(20,0,0,0);
    ursus_time.setUTCDate(ursus_time.getUTCDate()+1);
  } else {
    ursus_time.setUTCHours(22,0,0,0);
    setTitle("Ursus ends in");
  }
}

getUrsusTime();
getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (ursus_time.getTime() - current_date) / 1000;
  if (seconds_left == 0){
    getUrsusTime();
    return
  }
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}