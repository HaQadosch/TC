<script id='GTM-WN2KRH_jQuery'>
  (function jQueryfy(dl, st, cdl){
    'use strict'
    if (dl && !cdl) try {
      var doit = /nonAvailableOnDom/i.test((st && st.getItem)?(st.getItem('jQuery') || ''):document.cookie);
      setTimeout(function jQfy(){
        if (typeof $ !== 'undefined' && doit) {
          window.jQuery = window.jQuery || $;
          if (window.jQuery) dl.push({'event':'jQueryReady'})
            } else {
              var f=document.getElementsByTagName('script')[0]; var j=document.createElement('script'); j.src='//code.jquery.com/jquery-1.11.1.min.js'; f.parentNode.insertBefore(j,f);
              setTimeout(function getjQ(){dl.push({'event':'jQueryReady'})}, 500)
              window.jQ = window.jQuery.noConflict(true);
            }
        st && st.removeItem && st.removeItem('jQuery') || (document.cookie='jQuery=done');
      }, 1000)
    } catch(e) {
      console && console.log('GTM jQueryfy: '+e)
    }
    return dl && !cdl
  }(dataLayer, window.sessionStorage, window.CATTDL))
</script>
