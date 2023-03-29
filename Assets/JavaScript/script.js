// The below code displays the current date in the header using dayjs library
const today = dayjs();

function displayCurrentDate(){
// Set the text of the element with id "currentDay" to the current date formatted using dayjs
$("#currentDay").text(today.format('dddd, MMM D YYYY'));
}

// Call the function to display the current date
displayCurrentDate();

// The below code sets a click listener for all elements with class "saveBtn". When clicked, the function saves the text entered to local storage
$(".saveBtn").on("click", function() {
// Get the value of the text entered in the sibling element with class "description"
const value = $(this).siblings(".description").val();
// Get the id of the parent element, which is a time block in the form of "hourX"
const time = $(this).parent().attr("id");
// Store the value in local storage using the time as the key
localStorage.setItem(time, value);
});

// This function manages the color coding of the time blocks based on the current time
function  timeManager() {
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
  }
  
// Get any saved items from local storage and set them to the value of the associated time block's description element
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


// Call the timeManager function to initialize the page
timeManager();
  
 // Add a click listener to the clear button to remove all items from the local storage and reset the values of the description elements to an empty string
$("#clearBtn").on("click", function () {
  localStorage.clear();
  $(".description").val("");
  });