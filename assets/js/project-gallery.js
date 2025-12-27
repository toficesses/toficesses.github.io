(function(){
  function init(){
    var gallery = document.getElementById('project-gallery');
    if(!gallery) return;
    var prefix = gallery.dataset.prefix;
    if(!prefix) return;
    // Determine the project slug from the URL path
    var segments = window.location.pathname.split('/').filter(Boolean);
    var slug = segments[segments.length-1];
    var dir = '../../assets/img/projects/' + slug + '/';
    var max = 12; // try up to 12 indexed images

    for(var i=1;i<=max;i++){
      var el = document.createElement('img');
      el.src = dir + prefix + '-' + i + '.svg';
      el.alt = prefix + ' ' + i;
      el.className = 'project-image';
      // remove broken images
      (function(img){
        img.onerror = function(){ img.remove(); };
      })(el);
      gallery.appendChild(el);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
