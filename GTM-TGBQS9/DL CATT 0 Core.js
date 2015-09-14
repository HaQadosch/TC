<script id='GTM-TGBQS9_cattdlCore'>
  (function gtm_cattdlLodash(w, d, dl) {
    'use strict';
    var cdpm;
    var cons = window.console;
    var timeStart = window.dataLayer
    .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
    .map(function dlMap(evt) {return evt['gtm.start']; })
    .pop() || 0;
    if ( w && dl && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
      w.CATTDL = w.CATTDL || {};
      var s = d.createElement('script'); s.async = true; s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min.js';
      var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
      s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
        var rdyState = s.readyState;
        if (!rdyState || /complete|loaded/i.test(s.readyState)) {
          w.CATTDL._ = w._.noConflict();
          var stampEpoch = +new Date();
          dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
          s.onload = null;
          s.onreadystatechange = null;
          (function gtm_cattdlCore(jQ, d, w, dl, cdl, undefined) {
            if (cdl && jQ && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '');}) ) try {
              cdpm = cdl.CATTParams || {};
              var ld = cdl._;
              var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;};
              var tst = function tst(r, u){return RegExp.prototype.test.call(r, u);};
              var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u);};
              ld && ld.assign && ld.assign (cdl, {
                twlh    : ld.partialRight(tst, w.location.host)
                , twdc    : ld.partialRight(tst, d.cookie)
                , twls    : ld.partialRight(tst, w.location.search)
                , ewdc    : ld.partialRight(exc, d.cookie)
                , ewls    : ld.partialRight(exc, w.location.search)
                , gadate  : function gadate(dt){var pd = new Date(dt); return (window.toLocaleDateString)?pd.toLocaleDateString():((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());}
                , gatime  : function gatime(ts){var pt = new Date(ts); return (window.toLocaletimeString)?ts.toLocaletimeString():((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));}
                , ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
                , ckset   : function ckset(e,r,t,n,a,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=1/0===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+i+(a?"; domain="+a:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}
                , info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg;}
                , error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg;}
                , insertJS : function insertJS(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var c=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(c)}else{var o=document.createElement("script");o.src=t,o.async=1,o.onload=o.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),o.onload=o.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}return cdl[e]}
                , insertIFrame : function insertIFrame(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<iframe>",{src:src,style:"display:none;",alt:"",frameborder:0,id:transpose("gtm_{name}_iFrame",{name:a.name}),width:1,height:1}));else{var d=document.createElement("iframe");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),d.style="display:none;",d.alt="",d.frameborder=0,document.body.appendChild(d),n()}}return cdl[t]}
                , insertImg : function insertImg(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<img>",{src:e,width:1,height:1,id:transpose("gtm_{name}_pixel",{name:a.name})}));else{var d=document.createElement("img");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),document.body.appendChild(d),n()}}return cdl[t]}
                , transpose : transpose
              });

              if (w.CATTParams) {
                var key = '';
                ld.assign(cdpm, ld.transform(w.CATTParams, function gtm_lowerCaseCATTParams(r, n, k){
                  key = k.toLowerCase();
                  if (/lob|holidaytype|pageid/i.test(key)) {n = n.toLowerCase() || 'generic';}
                  else if (/lob|holidaytype|pageid/i.test(key)) n = ld.trunc(n, 267);
                  else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";}
                  r[key] = typeof n === 'string'?ld.trim(n):n;
                })
                         );
              }

              cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2];});
              cdpm.searches = {}; (d.location.href.split(/\?|&|#/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2];});
              cdpm.hashes = {}; (d.location.hash.split(/\#|;/g).slice(1)).forEach(function(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.hashes[cur[1]]=cur[2];});

              ld && ld.assign && ld.assign (cdpm, {
                internalcampaignid  : cdpm.searches && cdpm.searches.intcmp || cdpm.hashes && cdpm.hashes.intcmp || cdl.twls(/intcmp=/i) && (cdl.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
                , emailguid         : cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&]*)/i) || []).pop() || ""
                , utmaguid          : cdpm.utmaguid || /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma || ['']).pop() || cdl.twdc(/_utma=/i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || ""
                , utmbguid          : cdpm.utmbguid || cdpm.cookies.__utmb || cdl.twdc(/_utmb=/i) && cdl.ewdc(/_utmb=([^;%=]*)/i) && cdl.ewdc(/_utmb=([^;%=]*)/i).pop() || ""
                , gaguid            : cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || cdl.twdc(/_ga=/i) && (cdl.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || ""
                , errors            : cdpm.errorcode || ''
                , device            : (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || ''
                , pagetimestamp     : Date.now()
                , roomtype          : cdpm.roomtype || jQ('p i.icon.icon-uniE663').next().text() || ''
                , duration          : cdpm.duration || cdpm.retdate && cdpm.deptdate && (new Date((cdpm.retdate|| '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1'))-new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')))/(1000*60*60*24)+'' || ''
                , sessionid         : cdpm.cookies && cdpm.cookies.fe_typo_user || ''
                , lob               : (function gtm_cdpmlob(locpath){return /\/flight-hotel\//i.test(locpath)?'epackage':/\/holidays\//i.test(locpath)?'holidays':/flights/i.test(locpath)?'flights':/city-breaks/i.test(locpath)?'city-breaks':/ski-holidays/i.test(locpath)?'ski-holidays':/\/cruise\//i.test(locpath)?'cruise':/\/hotels/i.test(locpath)?'hotels':(jQ('span.journeyName').text() || cdpm.lob || 'package')}(w.location.pathname || ''))
                , holidaytype       : cdpm.holidaytype || cdpm.lob || 'package'
                , pageid            : cdpm.pageid || (function gtm_cdpmpid(locpath){return /\/results/i.test(locpath)?'search':/\/checkout\/extras/i.test(locpath)?'cust':/\/checkout\/payment/i.test(locpath)?'pay':/booking/i.test(locpath)?'booking':'home'}(w.location.pathname || ''))
                , pagetimestamp     : Date.now()
                , flightdetails     : { outbound: { flight: jQ("span .flightNumber:eq(0)").text() || "", depart: { airportcode: cdpm.departureairportselected || "", date:{ utcdate: cdpm.deptdate || jQ(".basketDetail span:eq(4)").text() || "" }, location: jQ(".flightDetail span:eq(0)").text() || "" }, arrive: { date:{ utcdate:  jQ(".basketDetail span:eq(7)").text() || "" }, location: jQ(".flightDetail span:eq(4)").text() || "" } }, inbound: { flight: jQ(".flightNumber:eq(1)").text() || "", depart: { date:{ utcdate: jQ(".basketDetail span:eq(12)").text() || "" }, location: jQ(".flightDetail span:eq(7)").text() || "" }, arrive: { date:{ utcdate: cdpm.retdate || jQ(".date arrival").text()|| jQ(".basketDetail span:eq(16)").text() || "" }, location: jQ(".basketDetail span:eq(14)").text() || "" } } }
                , flightoutbound    : jQ(".flightNumber:eq(1)").text() || ""
                , flightinbound     : jQ(".flightNumber:eq(2)").text() || ""
                , bookingref        : cdpm.bookingref || jQ('.REFERENCE > .CheckoutItemContentHeader > span').text() || "empty_"+Math.random()
                , bookingvalue      : cdpm.bookingvalue || jQ('.price').first().text().replace(/^./, '') || "0"
                , accomcity         : jQ(".CheckoutBasketTable th span:eq(2)").text() || jQ("span[class='Header']").text() || ""
                , accomcode         : cdpm.accomcode || jQ('.basketPriceLine > .Header').text() || ""
                , deptdate          : cdpm.deptdate || jQ(".CheckoutBasketTable th span:eq(0)").text() || ""
                , retdate           : cdpm.retdate || jQ(".CheckoutBasketTable th span:eq(1)").text() || ""
              });

              var paxInfo = jQ(".PassengerInfoTable tbody tr");
              if (paxInfo.text().length) {
                paxInfo = function gtm_paxInfo(th){ return jQ(".PassengerInfoTable tbody tr").filter(function(e, f){ return th.test(jQ(f).find('th').text()); }).eq(0); };
                ld && ld.assign && ld.assign (cdpm, {
                  firstname           : paxInfo(/name/i).find("td span:eq(1)").text() || ""
                  , surname           : paxInfo(/name/i).find("td span:eq(2)").text() || ""
                  , address_street    : paxInfo(/address/i).find("td div:eq(2)").text() || ""
                  , address_city      : paxInfo(/address/i).find("td div:eq(3)").text() || ""
                  , address_postcode  : paxInfo(/address/i).find("td div:eq(6)").text() || ""
                  , email_address     : paxInfo(/email/i).find("td").text() || ""
                  , phone             : paxInfo(/contact\snumber/i).find("td").text() || ""
                });
              }
              cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
              if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid ) cdpm.pageid = 'home';

              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              window.CATTDL.CATTParams = cdpm;
            } catch(e) {
              var msg = 'GTM CATTDL Core: '+e; 
              cons && ((cons.error)?cons.error(msg):cons.log(msg));
            } finally {
              stampEpoch = +new Date();
              dl.push({'event': 'core_'+(cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
            }
            return jQ && dl && w.CATTDL;
          }(window.jQuery, d, w, dl, w.CATTDL));
        }
      };
    } catch(e) {
      var msg = 'GTM CATTDL lodash: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    }
    return dl && w.CATTDL;
  }(window, window.document, window.dataLayer));
</script>