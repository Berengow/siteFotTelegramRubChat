
document.querySelector("button").onclick = function() {
  let message = document.querySelector(".input_field").value
  let url = "https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage?chat_id=-666992676&text="
  let xhttp = new XMLHttpRequest();
xhttp.open("GET", url + message, true);
xhttp.send()
}


//#"https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage?chat_id=-1001338764387&text="#
// настоящая група

function fre(){
  let URL = "https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/getChatMembersCount?chat_id=-666992676"
  var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", URL, false);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
      
    }
   let k = fre()["result"]
   document.getElementById("counter_var").innerHTML = k;