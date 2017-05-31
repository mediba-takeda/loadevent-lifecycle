// handler
document.getElementById('action').addEventListener('click', function() {
  document.getElementById('placeholder').classList.add('visible');
});

// log
function log (text) {
  var $placeholder = document.getElementById('placeholder');
  $placeholder.innerHTML = $placeholder.innerHTML + text+ '<br>';
}
