window.addEventListener('scroll', debounce(checkScroll()));
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    
    function checkScroll(){
        if( y == 0 ){
            nav.style.height = 100 + 'vh';
        }
    }
 
window.onload = () => {
    var nav = document.getElementsByTagName('nav')[0];
    var  y = pageYOffset;
    
    
    
    
    
}
