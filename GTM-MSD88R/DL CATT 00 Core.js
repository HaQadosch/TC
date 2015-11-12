<script id='GTM-P2C3FL_CATTDLcorejQLodash'>
  (function gtm_cattdlCore(d, w, dl) {
    'use strict';
    var cdpm;
    var cons = window.console;
    var timeStart = dl
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
          w.CATTDL._ = w._.noConflict();
          var stampEpoch = +new Date();
          dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
          s.onload = null;
          s.onreadystatechange = null;
          (function gtm_cattdlCore(d, w, dl, cdl) {
            cdpm = cdl.CATTParams || {};
            if (!dl.some(function(a){ return /core_/i.test(a && a.event || ''); }) ) try {
              var s = d.createElement('script'); s.async = true; s.src = 'https://scdn.thomascook.com/js/jquery-1.11.3.min.js';
              var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
              s.onload = s.onreadystatechange = function gtm_jQueryOnLoad(){
                var rdyState = s.readyState;
                if (!rdyState || /complete|loaded/i.test(s.readyState)) {
                  w.CATTDL.jQ = window.jQuery.noConflict(true);
                  var stampEpoch = +new Date();
                  dl.push({'event': 'jQuery', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
                  s.onload = null;
                  s.onreadystatechange = null;
                  (function gtm_cattdlCorejQ(d, w, dl, cdl) {
                    try {
                      cdpm = cdl.CATTParams || {};
                      var ld = cdl._;
                      var jQ = cdl.jQ;
                      var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;};
                      var tst = function tst(r, u){return RegExp.prototype.test.call(r, u); };
                      var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u); };

                      if (ld && ld.assign) ld.assign (cdl, {
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
                        , insertJS : function insertJS(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:dl}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var c=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(c)}else{var o=document.createElement("script");o.src=t,o.async=1,o.onload=o.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),o.onload=o.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}return cdl[e]}
                        , insertIFrame : function insertIFrame(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:dl}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<iframe>",{src:src,style:"display:none;",alt:"",frameborder:0,id:transpose("gtm_{name}_iFrame",{name:a.name}),width:1,height:1}));else{var d=document.createElement("iframe");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),d.style="display:none;",d.alt="",d.frameborder=0,document.body.appendChild(d),n()}}return cdl[t]}
                        , insertImg : function insertImg(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:dl}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<img>",{src:e,width:1,height:1,id:transpose("gtm_{name}_pixel",{name:a.name})}));else{var d=document.createElement("img");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),document.body.appendChild(d),n()}}return cdl[t]}
                        , transpose : transpose
                      });

                      if (w.CATTParams) {
                        var key = '';
                        if (ld && ld.assign) ld.assign(cdpm, ld.transform(w.CATTParams, function gtm_lowerCaseCATTParams(r, n, k){
                          key = k.toLowerCase();
                          if (/lob|holidaytype|pageid/i.test(key)) {n = n.toLowerCase() || 'generic';}
                          else if (/errorcode/i.test(key)) { n = n && ld.trunc(n, 267) ;}
                          else if (/totalprice/i.test(key)) { r.bookingvalue = n ;}
                          else if (/deptdate/i.test(key)) { n = n && +new Date(n.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/i, '$2 $1 $3')) ;}
                          else if (/retdate/i.test(key)) { n = n && +new Date(n.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/i, '$2 $1 $3')) ;}
                          else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";}
                          r[key] = typeof n === 'string'?ld.trim(n):n;
                        }));
                      }

                      cdpm.cookies = {}; var prms = {}; ld.map(ld.words(d.cookie, /[^;\s?]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.cookies[prms[0]] = prms[1];});
                      cdpm.searches = {}; prms = {}; ld.map(ld.words(d.location.search, /[^?&]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.searches[prms[0]] = prms[1];});
                      cdpm.hashes = {}; prms = {}; ld.map(ld.words(d.location.hash, /[^#]+/g), function(e){prms = ld.words(e, /[^=]+/g);cdpm.searches[prms[0]] = prms[1];});

                      if (ld && ld.assign) ld.assign(cdpm, {
                          internalcampaignid: cdpm.searches && cdpm.searches.intcmp || cdpm.hashes && cdpm.hashes.intcmp || cdl.twls(/intcmp=/i) && (cdl.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
                        , emailguid         : cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&]*)/i) || []).pop() || ""
                        , ecircleid         : cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&]*)/i) || []).pop() || ""
                        , dreamcaptureid    : cdpm.searches && cdpm.searches.dc_id || cdl.twls(/dc_id=/i) && (cdl.ewls(/dc_id=([^&]*)/i) || []).pop() || ""
                        , abtanumber        : cdpm.searches && cdpm.searches.abtaNumber || w.CATTDL.twls(/abtaNumber=/i) && (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop() || ""
                        , consultantref     : cdpm.searches && cdpm.searches.consultantRef || w.CATTDL.twls(/consultantRef=/i) && (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop() || ""
                        , qsearchedkeyword  : cdpm.searches && cdpm.searches.q || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || ""
                        , utmaguid          : cdpm.utmaguid || (/^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma || ['']) || ['']).pop() || cdl.twdc(/_utma=/i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || ""
                        , utmbguid          : cdpm.utmbguid || cdpm.cookies.__utmb || cdl.twdc(/_utmb=/i) && cdl.ewdc(/_utmb=([^;%=]*)/i) && cdl.ewdc(/_utmb=([^;%=]*)/i).pop() || ""
                        , gaguid            : cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || cdl.twdc(/_ga=/i) && (cdl.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || ""
                        , optimostcreative  : window.opCreative || ""
                        , errors            : cdpm.errorcode || ''
                        , device            : (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || ''
                        , pagetimestamp     : Date.now()
                        , holidaytype       : cdpm.holidaytype || 'epackage'
                        , lob               : (function gtm_cdpmlob(locpath){return cdpm.lob || (/\/flight-hotel\//i.test(locpath)?'epackage':/\/holidays\//i.test(locpath)?'holidays':/flights/i.test(locpath)?'flights':/city-breaks/i.test(locpath)?'city-breaks':/ski-holidays/i.test(locpath)?'ski-holidays':/\/cruise\//i.test(locpath)?'cruise':/\/hotels/i.test(locpath)?'hotels':'epackage');}(w.location.pathname || ''))
                        , pageid            : (function gtm_cdpmpid(locpath){return cdpm.pageid || (/\/results/i.test(locpath)?'search':/\/checkout\/extras/i.test(locpath)?'quote':/\/checkout\/payment/i.test(locpath)?'pay':/booking/i.test(locpath)?'booking':'home');}(w.location.pathname || ''))
                        , sessionid         : cdpm.cookies && cdpm.cookies.fe_typo_user || ''
                        , timestart         : timeStart
                      });

                      cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
                      cdpm.user = cdpm.user || {};

                      if (!cdpm.pageid && /srv-search\/accom|destinations/i.test(window.location.pathname)) cdpm.pageid = 'accom';
                      else if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid) cdpm.pageid = 'home';
                      cdpm.cookiedomain = ({
                        'thomascook'        :'thomascook.com',
                        'airtours'          :'airtours.co.uk',
                        'club18-30'         :'club18-30.com',
                        'eceit'             :'staging.eceit.net',
                        'directholidays'    :'directholidays.co.uk',
                        'uk.staging'        :'uk.staging.thomascook.io',
                        'uk.qa'             :'uk.qa.thomascook.io',
                        'uk.integration'    :'uk.integration.thomascook.io',
                        'uk.int'            :'uk.int.thomascook.io'
                      })[((/([^\.]*).co.uk|([^\.]*).com|([^\.]*).net|(.+)\.thomascook\.io/i.exec(w.location.hostname) || []).filter(function hostname(e){return e}) || ['thomascook']).pop()];

                      window.CATTDL = cdl;
                      window.CATTDL.CATTParams = cdpm;
                      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    } catch(e) {
                      var msg = 'GTM CATTDL Core jQ: '+e;
                      cons && ((cons.error)?cons.error(msg):cons.log(msg));
                    } finally {
                      stampEpoch = +new Date();
                      dl.push({'event': 'core_'+cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
                    }
                    return w.CATTDL;
                  }(d, w, dl, cdl));
                }
              };
              return w.CATTDL;
            } catch(e) {
              var msg = 'GTM CATTDL Core: '+e;
              cons && ((cons.error)?cons.error(msg):cons.log(msg));
            } finally {
              stampEpoch = +new Date();
              dl.push({'event': 'corejQ_'+cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
            }
          }(d, w, dl, w.CATTDL));
        }
      };
    } catch(e) {
      var msg = 'GTM CATTDL lodash: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    }
    return dl && w.CATTDL;
  }(window.document, window, window.dataLayer_MSD88R));
</script>