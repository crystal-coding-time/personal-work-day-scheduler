// The below code displays the clock in the header
var today = dayjs();

function time(){
$("#currentDay").text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
}

time();

// The belowe code is the saveBtn click listener which saves the text entered to local storage 
$(".saveBtn").on("click", function () {
  var text = $(this).siblings("description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
})


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

console.log(timeBlock);
timeManager();
  })
});

