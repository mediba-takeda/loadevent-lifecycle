window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    log("<b>It is BFcache. ¯\\_(ツ)_/¯</b>");
  }
});
