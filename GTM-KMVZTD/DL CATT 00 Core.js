<script id='GTM-KMVZTD_cattdlCore'>
  (function gtm_cattdlCore(w, d, dl) {
    'use strict';
    var cdpm = '';
    var cons = w.console;
    var timeStart = window.dataLayer
        .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
        .map(function dlMap(evt) {return evt['gtm.start']; })
        .pop() || 0;
    if ( w && dl && !dl.some(function(a){return /lodash/i.test(a && a.event || '');}) ) try {
      w.CATTDL = w.CATTDL || {};
      var s = d.createElement('script'); s.async = true; s.src = 'https://scdn.thomascook.com/js/lodash.min.js';
      var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
      s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
        var rdyState = s.readyState;
        if (!rdyState || /complete|loaded/i.test(s.readyState)) {
          s.onload = null;
          s.onreadystatechange = null;
          w.CATTDL._ = w._.noConflict();
          var stampEpoch = +new Date();

          dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});

          var gtm_cattdlCore = function gtm_cattdlCore(jQ, d, w, dl, cdl) {
            if ( jQ && !dl.some(function(a){return /core_/i.test(a && a.event || ''); }) ) try {
              cdpm = cdl.CATTParams || {};
              var ld = cdl._;
              var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;};
              var tst = function tst(r, u){return RegExp.prototype.test.call(r, u); };
              var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u); };

              ld && ld.assign && ld.assign (cdl, {
                twlh    : ld.partialRight(tst, w.location.host)
                , twdc    : ld.partialRight(tst, d.cookie)
                , twls    : ld.partialRight(tst, w.location.search)
                , ewdc    : ld.partialRight(exc, d.cookie)
                , ewls    : ld.partialRight(exc, w.location.search)
                , gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());}
                , gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));}
                , ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
                , ckset   : function ckset(e,r,t,n,a,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=1/0===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+i+(a?"; domain="+a:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}
                , info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg;}
                , error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg;}
                , insertJS : function(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-dl[0]["gtm.start"],s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var o=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(o)}else{var c=document.createElement("script");c.src=t,c.async=1,c.onload=c.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),c.onload=c.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(c,i)}}return cdl[e]}
                , insertIFrame : function insertIFrame(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),iFrame:d},e().append&&e("body").append(e("<iframe>",{src:d,style:"display:none;",alt:"",frameborder:0,id:a+"iFrame",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
                , insertImg : function insertImg(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),img:d},e().append&&e("body").append(e("<img>",{src:d,id:a+"img",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
                , transpose : transpose
              });

              var key = '';
              if (w.tagManageribe) {
                ld.assign(cdpm, ld.transform(w.tagManageribe[0], function gtm_lowerCasetagManagerIBE(r, n, k){
                  key = k.toLowerCase();
                  if (n) {
                    if (/lob|holidaytype/i.test(key)) {n = n.toLowerCase() || 'generic'; }
                    else if (/destination|boardbasis/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""; }
                    else if (/LineOfBusiness/i.test(key)) {n = n.replace(/[^_]+_([^_]+)_?.*/, '$1').toLowerCase() || "generic"; key = 'holidaytype'; }
                    else if (/typeoffers/i.test(key)) {n = n.toLowerCase() || "generic"; key = 'lob'; }
                    else if (/pageid/i.test(key)) {n = n.toLowerCase() || "generic"; }
                    else if (/errorcode/i.test(key)) {n = ld.trunc(n || '', 267).replace(/-/, '') || ""; }
                    else if (/nbrstars|srchstars/i.test(key)) { r.starrating = n || ''; }
                    else if (/DeptDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
                    else if (/RetDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
                    else if (/EndDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
                    else if (/price/i.test(key)) {key = 'bookingvalue'; n = (''+n).replace(/\D*(\d+\.\d\d).*/, '$1') || '0'; }
                    else if (/DepartureDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || '0'; key = 'deptdate'; }
                    r[key] = typeof n === 'string'?ld.trim(n):n;
                  }
                }));
              }

              cdpm.cookies = {}; var prms = {}; ld.map(ld.words(d.cookie, /[^;\s?]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.cookies[prms[0]] = prms[1];});
              cdpm.searches = {}; prms = {}; ld.map(ld.words(d.location.search, /[^?&]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.searches[prms[0]] = prms[1];});
              cdpm.hashes = {}; prms = {}; ld.map(ld.words(d.location.hash, /[^#]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.searches[prms[0]] = prms[1];});

              if (ld && ld.assign) ld.assign(cdpm, {
                  internalcampaignid: cdpm.searches && cdpm.searches.intcmp || cdpm.hashes && cdpm.hashes.intcmp || cdl.twls(/intcmp=/i) && (cdl.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
                , emailguid         : cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&]*)/i) || []).pop() || ""
                , utmaguid          : cdpm.utmaguid || (/^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma || ['']) || ['']).pop() || cdl.twdc(/_utma=/i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || ""
                , utmbguid          : cdpm.utmbguid || cdpm.cookies.__utmb || cdl.twdc(/_utmb=/i) && cdl.ewdc(/_utmb=([^;%=]*)/i) && cdl.ewdc(/_utmb=([^;%=]*)/i).pop() || ""
                , gaguid            : cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || cdl.twdc(/_ga=/i) && (cdl.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || ""
                , errors            : cdpm.errorcode || ''
                , device            : (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || ''
                , pagetimestamp     : Date.now()
                , holidaytype       : cdpm.holidaytype || 'epackage'
                , lob               : (function gtm_cdpmlob(locpath){return cdpm.lob || (/\/flight-hotel\//i.test(locpath)?'epackage':/\/holidays\//i.test(locpath)?'holidays':/flights/i.test(locpath)?'flights':/city-breaks/i.test(locpath)?'city-breaks':/ski-holidays/i.test(locpath)?'ski-holidays':/\/cruise\//i.test(locpath)?'cruise':/\/hotels/i.test(locpath)?'hotels':'epackage');}(w.location.pathname || ''))
                , pageid            : (function gtm_cdpmpid(locpath){return cdpm.pageid || (/default\/authentication\/login/i.test(locpath)?'login':/\//i.test(locpath)?'search':/\/checkout\/extras/i.test(locpath)?'quote':/\/checkout\/payment/i.test(locpath)?'pay':/booking/i.test(locpath)?'booking':'home');}(w.location.pathname || ''))
                , sessionid         : cdpm.cookies && cdpm.cookies.fe_typo_user || ''
                , timestart         : timeStart
              });

              cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);

              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              window.CATTDL.CATTParams = cdpm;
            } catch(e) {
              var msg = 'GTM CATTDL Core: '+e;
              cons && ((cons.error)?cons.error(msg):cons.log(msg));
            } finally {
              stampEpoch = +new Date();
              dl.push({'event': 'core_'+cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
            }
            return w.CATTDL;
          };

           if (typeof window.jQuery === 'undefined') {
             var ss = d.createElement('script'); ss.async = true; ss.src = 'https://code.jquery.com/jquery-1.11.3.min.js';
             var ee = d.getElementsByTagName('script')[0]; ee.parentNode.insertBefore(ss, ee);
             ss.onload = ss.onreadystatechange = function gtm_jQOnLoad(){
               var rdyState = ss.readyState;
               if (!rdyState || /complete|loaded/i.test(ss.readyState)) {
                 w.CATTDL.$ = w.jQuery.noConflict();
                 ss.onload = null;
                 ss.onreadystatechange = null;
                 var stampEpoch = +new Date();
                 dl.push({'event': 'addjQ', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
                 gtm_cattdlCore(window.jQuery || (!w.CATTDL?!1:w.CATTDL.$), d, w, dl, w.CATTDL);
               }
             };
           } else gtm_cattdlCore(window.jQuery || (!w.CATTDL?!1:w.CATTDL.$), d, w, dl, w.CATTDL);
        }
      };
    } catch(e) {
      var msg = 'GTM CATTDL lodash: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    }
    return dl && w.CATTDL;
  }(window, window.document, window.dataLayer));
</script>