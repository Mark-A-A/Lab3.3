var deleteButtons = document.getElementsByClassName("btn-danger"); 
var timeInterval;
var tableRows = document.getElementsByClassName("tablerow")

function addRow (){
   console.log(tableRows);
   rows.push();
   //for (i =){
   //
   //};
    alert("Adding A Last Row!");
};

for(var i = 0; i < deleteButtons.length; i++) {           //Adding functionality to each button
  deleteButtons[i].addEventListener("click", removeRow);
}

function removeRow () {                                 //telling each button what to do in HTML DOM
  this.parentNode.parentNode.remove();
};


//Timer Variables
var secondsCount;
var timerInterval;
var randomTime;


setTimeout (function (){     //Want timer to do something every 10 seconds
  if (secondsCount === 0)     //
    clearInterval(timerInterval); //want 
}, 10000);

function addSeconds () {    //Counter "addSeconds"
  secondsCount++;
};



function removeFirstRow() {
  //for (var i = 0; .length; i++) {
   //
  //};
  alert("Removing First Row Randomly!");
 
 //Need Timer

};

//document.getElementsByClassName("tablerow")[0].addEventListener("click", addRow);


// document.getElementsByClassName("remove1")[0].addEventListener("click", removeRow);
// document.getElementsByClassName("removeRandom")[0].addEventListener("click", removeFirstRow);