<script id='GTM-WN2KRH_Capture'>
  (function gtm_captureAGSelect(jQ, loc, d) {
    'use strict';
    if (jQ && loc && d) try {

      var cookieset = {
        ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
        ckset   : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
          if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
          var sExpires = ""
          if (vEnd) {
            switch (vEnd.constructor) {
              case Number:
                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd; break;
              case String:
                sExpires = "; expires=" + vEnd; break;
              case Date:
                sExpires = "; expires=" + vEnd.toUTCString(); break;
            }
          }
          document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "")
          return true
        }};

      var params = JSON.parse(cookieset.ckget('gtm_params') || '{}');
      params.agencycode = ((/loca=[^\s]+/.exec(location.search) || []).pop() || '').replace('loca=','')
      cookieset.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

    } catch(e) {
      console.error('GTM FR JT Capture Agency Selection: '+e)
    }
    return
  }(window.jQuery, window.location, window.document))
</script>
