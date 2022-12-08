// The below code displays the clock in the header
var today = dayjs();

function time(){
$("#currentDay").text(today.format('dddd, MMM D YYYY'));
}

time();

// The below code is the saveBtn click listener which saves the text entered to local storage 

$(".saveBtn").on("click", function() {

  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value );
});


$(function  timeManager() {
// Check the current hour
  var currentTime = today.hour()
  console.log(currentTime); // testing the varible pulls the correct data

  $(".time-block").each( function () {
  
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < currentTime ) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  })
// Get item from local storage if any
  
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));

  timeManager();
});

  
 