<script id='GTM-P2C3FL_delayCoreTrigger'>
  (function gtm_delayCoreTrigger(dl){
    'use strict';
    var cons = window.console;
    try{
      if (window.triggerCount) {
        if (window.triggerCount > 0) {
          if (/accom/i.test(window.location.pathname)) {
            setTimeout(function(){dl.push({'event':'Trigger'}); }, 500);
          }  else {
            dl.push({'event':'Trigger'}) ;
          }
        } else {
          window.triggerCount = window.triggerCount+1;
        }
      } else {
        window.triggerCount = 1;
      }
    } catch(e){
      var msg = 'GTM Delay Core Trigger Errors: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    }
    return window.triggerCount;
  }(window.dataLayer));
</script>
