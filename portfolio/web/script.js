
/*
window.onload = function(){
    //altering elements based on the yOffset of the page.
    window.addEventListener('scroll', debounce(checkScroll));
  
    var nav = document.getElementsByTagName('nav')[0];


    function checkScroll(){
        var y = pageYOffset;
        if(y <= 15){
            nav.style.height = 100+'vh';
        }else if( y > 15){
            nav.style.height = 10+'vh';
        }
    }
    function debounce(func, wait = 10, immediate = true) {
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
    

}*/

 
