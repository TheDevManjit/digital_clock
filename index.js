let today = new Date();
const hours = today.getHours()
const minute = today.getMinutes();





// time
function currentTime() {

  today = new Date();
  let sec = today.getSeconds();


  let currentMin = today.getMinutes();

  let hr = hours


  if (hr > 12) {
    hr = hr - 12
  }

  //  DOM MANUPULATION

  $("#hrs").html(hr)
  $("#min").html(currentMin)
  $("#sec").html(sec)

  if (hr < 10) {
    $("#hrs").html("0" + hr)
  }
  if (currentMin < 10) {
    min.innerHTML = "0" + currentMin
  }
  if (sec < 10) {
    $("#sec").html("0" + sec)
  }

}




// DATE

function todayDate() {
  let date = today.getDate();
  let month = today.getMonth() ;
  let year = today.getFullYear();


  switch (month) {
    case 0:
      month = ("January");
      break;
    case 1:
       ("February");
      break;
    case 2:
      month = ("March");
      break;
    case 3:
      month = ("April");
      break;
    case 4:
      month = ("May");
      break;
    case 5:
      month = ("June");
      break;
    case 6:
      month = ("July");
      break;
    case 7:
      month = ("August");
      break;
    case 8:
      month = ("September");
      break;
    case 9:
      month = ("October");
      break;
    case 10:
      month = ("November");
      break;
    case 11:
      month = ("December");
      break;
    default:
      month = ("Invalid month number");
  }
  $('#date').html(date + "'" + month + "'" + year + "'")
  

}

// Week
function weekday() {
  let day = today.getDay();
  console.log(day)

  switch (day) {
    case 0:
      day = ("Sunday");
      break;
    case 1:
      day = ("Monday");
      break;
    case 2:
      day = ("Tuesday");
      break;
    case 3:
      day = ("Wednesday");
      break;
    case 4:
      day = ("Thursday");
      break;
    case 5:
      day = ("Friday");
      break;
    case 6:
      day = ("Saturday");
      break;

  }
  $("#day").html(day)

}

//GREETINGS

function greeting() {
  if (hours >= 1 && hours <=12) {
    $("#greeting").html("GoodMorning 😍")

  } else if (hours > 12 && hours < 15) {
    $("#greeting").html("GoodAfterNoon 😇")
  } else if (hours > 15 && hours < 20) {
    $("#greeting").html("GoodEvening 😇")

  } else if(hours>20 && hours <=23 ){
    $("#greeting").html("GoodNight 🥱")

  }
}


//am-am
let am_pm = $("#am-pm")
let  timeOp = "AM"

if (hours > 12) {
  am_pm.html("PM")
  timeOp = "PM"
} 


// alarm

let al_hr;
let al_min;
let al_am_pm;
var audio = $("#myAudio")[0];
// let stop_btn;




function checkAlarm() {
  const currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  if(currentHour>12){
    currentHour = currentHour-12
  }


  if (al_hr === currentHour  && al_min === currentMinute && al_am_pm === timeOp) {
   
    audio.play();
  
    
   
  
  }
}



// Function to set the alarm time
$("#btn").on("click", () => {
  al_hr = parseInt($("#al-hr").val());
  al_min = parseInt($("#al-min").val());
  al_am_pm = $("#al-am-pm").val();
  $("#stop").css("display","block")

  
});
$("#stop").on("click",()=> {

  audio.pause();
  timeOp = ""
  $("#stop").css("display","none")

})






// Call checkAlarm every second to continuously check the alarm
setInterval(checkAlarm, 1000);

// The rest of your code...

// FUNCTION CALLED.
setInterval(currentTime, 1000)
currentTime();
todayDate()
weekday();
greeting()








