document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value;

  document.getElementById('dave').innerHTML += message + "<br/>";
});
