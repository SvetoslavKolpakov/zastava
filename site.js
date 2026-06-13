(function(){
  document.querySelectorAll('.nav').forEach(function(nav){
    var btn = nav.querySelector('.navtoggle');
    if(!btn) return;
    btn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.navlinks a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      });
    });
  });
})();
