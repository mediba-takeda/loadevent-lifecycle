var $placeholder = document.getElementById('placeholder');
var strDocumentReady = 'document.readystatechange:';

log(strDocumentReady + document.readyState);

// onload
window.addEventListener('load', function(){
  log('window.onload');
});
// onpageshow
window.addEventListener('pageshow', function(event){
  var str = event.persisted ? '<b>event.persisted</b>' : ''
  log('window.onpageshow '+ str);
});
// readystatechange
document.addEventListener('readystatechange', function(){
  log(strDocumentReady + document.readyState);
});
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
  log('document.DOMContentLoaded');
});

function log (text) {
  $placeholder.innerHTML = $placeholder.innerHTML + text + '<br>';
}
