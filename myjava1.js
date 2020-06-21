var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime= 15;
var partytime;
var evening= 18;




//Creates current time 

var showCurrentTime = function(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds= currentTime.getSeconds();
  var meridian = "AM"
   if (hours >= 12){
     meridian = "PM";
   }
   if (hours > 12){
     hours = hours-12;
   }
   if (seconds<10){
     seconds = "0"+seconds;
   }
   if (minutes<10){
     minutes = "0"+minutes;
   }

 document.getElementById('clock').innerHTML = 
 hours+":" +minutes+":"+seconds+" "+meridian;
}


//Show the required pic, message and time on site

var updateAll = function(){
   var time = new Date().getHours();
   var myImage = "beautiful day cat.png";
  
   if (time == partytime){
     myImage = "partytimecat.jpeg";
   }
   else if (time==wakeuptime){
     myImage = "wakeupcat.jpeg";
   }
   else if (time==lunchtime){
     myImage = "lunchtimecat.jpeg";
   }
   else if (time==naptime){
     myImage = "naptimecat.jpeg";
   }
   else  {
     myImage = "beautiful day cat.png";
   }
   defaultcat.src = myImage;

   showCurrentTime();
};
updateAll();
setInterval(updateAll, 1000);



//Make work the party button

var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function(){
       if (partytime < 0){
         partytime = new Date().getHours();
         partyButton.style.backgroundColor = "#F906E3";
         partyButton.innerText = "PARTY OVER!!";
       }
       else{
          partytime=-1;
          partyButton.style.backgroundColor = "#0683F9";
          partyButton.innerText = "PARTY TIME!!";
       } 
}
partyButton.addEventListener("click", partyEvent);
partyEvent();


// Get wake up time when change made
var myWakeUpTime =  document.getElementById("wakeUpTimeSelector");
var wakeFunction=function() {
  wakeuptime = myWakeUpTime.value;
  
}
myWakeUpTime.addEventListener("change",wakeFunction);

// Get lunch time when change made
var myLunchTime =  document.getElementById("lunchTimeSelector");
var lunchFunction=function() {
  lunchtime = myLunchTime.value;
  
}
myLunchTime.addEventListener("change",lunchFunction);

// Get nap time when change made
var myNapTime =  document.getElementById("napTimeSelector");
var napFunction=function() {
  naptime = myNapTime.value;
  
}
myNapTime.addEventListener("change",napFunction);


















