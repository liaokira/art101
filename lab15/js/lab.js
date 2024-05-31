// syd young
// wes modes: art 101 - coding for artists
// may 26 2024

const URL = "https://icanhazdadjoke.com/";
// create a button listener
$("#myButton").click(function(){
    // call ajax
    $.ajax(ajaxObj);
  })
  
  // setup ajax object
  const ajaxObj = {
    url: URL,
    // data: {},
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
  }
  
  // create ajax success callback (named)
  function ajaxSuccess(data) {
    // console.log("Data:", data);
    // parse json
    const joke = data.joke;
  
    // put joke in output div
    $("#output").html(joke);
    
  }
  
  
  // create ajax error callback
  function ajaxError(request,error){
        console.log("Oops:", request, error);
  }
  