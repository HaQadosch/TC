<script id="gtm_monetate">
(function MonetateLP(jQ, dl) {
  'use strict';
    try {
      //Get Date
			var monetateT = new Date().getTime();
      //AJAX
      jQ.getScript("https://sb.monetate.net/js/1/a-d4f809fc/p/thomascook.com/" + Math.floor((monetateT + 1825276) / 3600000) + "/g");
      jQ.getScript("https://se.monetate.net/js/2/a-d4f809fc/p/thomascook.com/entry.js");
			//Queue
			window.monetateQ = window.monetateQ || [];
  } catch (err){
    console.table?console.table("GTM Monetate: " + err) : console.log("GTM Monetate: " + err);
  }
  finally {
    window.monetateQ.push(["setPageType", "home"]);
    window.monetateQ.push(["trackData"]);
  }
}(window.CATTDL?window.CATTDL.jQ:!1, window.dataLayer_K83N5Q || window.dataLayer));
</script>
