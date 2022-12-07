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


$(function () {


});

