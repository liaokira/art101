// syd young
// wes modes: art 101 - coding for artists
// may 26 2024

const URL = "https://api.nasa.gov/planetary/apod";
// create a button listener
$("#myButton").click(function(){
    console.log("click");
    // call ajax
    $.ajax(ajaxObj);
  })
  
  // setup ajax object
  const ajaxObj = {
    url: URL,
    data: {
      api_key: "DEMO_KEY",
      count: 1
    },
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError,
  }
  
  // create ajax success callback (named)
  function ajaxSuccess(data) {
    // console.log("Data:", data);
    // parse json
    const randomAPOD = data[0]
    const title = randomAPOD.title;
    const imageURL = randomAPOD.url;
    const description = randomAPOD.explanation;
    const date = randomAPOD.date;

    // const joke = data.joke;
  
    // put joke in output div
    $("#output").html("<h2>" + title);
    $("#output").append("<img src='"+ imageURL+ "' />")
    $("#output").append("<p class='date'>" + date);
    $("#output").append("<p class='description'>" + description);
    
  }
  
  
  // create ajax error callback
  function ajaxError(request,error){
        console.log("Oops:", error);
  }
  