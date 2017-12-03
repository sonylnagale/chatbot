document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value;

  document.getElementById('dave').innerHTML += message + "<br/>";

  respondToMessage(message);
});

function respondToMessage(chat) {
  if (chat == "Open the pod bay doors") {
    document.getElementById('hal').innerHTML += "I'm sorry Dave, I can't do that. <br/>";
  } else {
    document.getElementById('hal').innerHTML += "I'm sorry Dave, I didn't understand you. <br/>";
  }
}
