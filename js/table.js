var rows = document.getElementsByClassName("tablerow"); 
var timeInterval;

function addRow (){
   console.log(rows);
   rows.push();
   //for (i =){
//
   //};
    alert("Adding A Last Row!");
};

function removeRow () {
 //
 alert("Removing Last Row!");
};


function removeFirstRow() {
  //for (var i = 0; .length; i++) {
//
  //};
  alert("Removing First Row Randomly!");
 
 //Need Timer

};

document.getElementsByClassName("tablerow")[0].addEventListener("click", addRow);


document.getElementsByClassName("remove1")[0].addEventListener("click", removeRow);
document.getElementsByClassName("removeRandom")[0].addEventListener("click", removeFirstRow);