<script id='GTM-M7TVWV_cattdllodash'>
  (function gtm_cattdlLodash(w, d, dl) {
    'use strict';
    var cdpm;
    var cons = window.console;
    var timeStart = window.dataLayer
      .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
      .map(function dlMap(evt) {return evt['gtm.start']; })
      .pop() || 0;
    if ( w && dl && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
      w.CATTDL = w.CATTDL || {}
      var s = d.createElement('script'); s.async = true; s.src = 'https://scdn.thomascook.com/js/lodash.min.js'
      var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
      s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
        var rdyState = s.readyState;
        if (!rdyState || /complete|loaded/i.test(s.readyState)) {
          w.CATTDL._ = w._.noConflict();
          var stampEpoch = +new Date();
          dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
          s.onload = null;
          s.onreadystatechange = null;
          (function gtm_cattdlCore(jQ, w, dl, loc, cdl, d) {
            if (jQ && cdl) try{
              var cdpm = cdl.CATTParams || {}
              var ld = cdl._
              var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;}
              var tst = function tst(r, u){return RegExp.prototype.test.call(r, u)}
              var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u)};
              cdpm.domevents = {};

              if (ld && ld.assign) ld.assign (cdl, {
                  twlh    : ld.partialRight(tst, w.location.host)
                , twdc    : ld.partialRight(tst, d.cookie)
                , twls    : ld.partialRight(tst, w.location.search)
                , ewdc    : ld.partialRight(exc, d.cookie)
                , ewls    : ld.partialRight(exc, w.location.search)
                , md5     : function gtm_md5(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,r,i,s,o;i=e&2147483648;s=t&2147483648;n=e&1073741824;r=t&1073741824;o=(e&1073741823)+(t&1073741823);if(n&r){return o^2147483648^i^s}if(n|r){if(o&1073741824){return o^3221225472^i^s}else{return o^1073741824^i^s}}else{return o^i^s}}function r(e,t,n){return e&t|~e&n}function i(e,t,n){return e&n|t&~n}function s(e,t,n){return e^t^n}function o(e,t,n){return t^(e|~n)}function u(e,i,s,o,u,a,f){e=n(e,n(n(r(i,s,o),u),f));return n(t(e,a),i)}function a(e,r,s,o,u,a,f){e=n(e,n(n(i(r,s,o),u),f));return n(t(e,a),r)}function f(e,r,i,o,u,a,f){e=n(e,n(n(s(r,i,o),u),f));return n(t(e,a),r)}function l(e,r,i,s,u,a,f){e=n(e,n(n(o(r,i,s),u),f));return n(t(e,a),r)}function c(e){var t;var n=e.length;var r=n+8;var i=(r-r%64)/64;var s=(i+1)*16;var o=Array(s-1);var u=0;var a=0;while(a<n){t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|e.charCodeAt(a)<<u;a++}t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|128<<u;o[s-2]=n<<3;o[s-1]=n>>>29;return o}function h(e){var t="",n="",r,i;for(i=0;i<=3;i++){r=e>>>i*8&255;n="0"+r.toString(16);t=t+n.substr(n.length-2,2)}return t}function p(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}var d=Array();var v,m,g,y,b,w,E,S,x;var T=7,N=12,C=17,k=22;var L=5,A=9,O=14,M=20;var _=4,D=11,P=16,H=23;var B=6,j=10,F=15,I=21;e=p(e);d=c(e);w=1732584193;E=4023233417;S=2562383102;x=271733878;for(v=0;v<d.length;v+=16){m=w;g=E;y=S;b=x;w=u(w,E,S,x,d[v+0],T,3614090360);x=u(x,w,E,S,d[v+1],N,3905402710);S=u(S,x,w,E,d[v+2],C,606105819);E=u(E,S,x,w,d[v+3],k,3250441966);w=u(w,E,S,x,d[v+4],T,4118548399);x=u(x,w,E,S,d[v+5],N,1200080426);S=u(S,x,w,E,d[v+6],C,2821735955);E=u(E,S,x,w,d[v+7],k,4249261313);w=u(w,E,S,x,d[v+8],T,1770035416);x=u(x,w,E,S,d[v+9],N,2336552879);S=u(S,x,w,E,d[v+10],C,4294925233);E=u(E,S,x,w,d[v+11],k,2304563134);w=u(w,E,S,x,d[v+12],T,1804603682);x=u(x,w,E,S,d[v+13],N,4254626195);S=u(S,x,w,E,d[v+14],C,2792965006);E=u(E,S,x,w,d[v+15],k,1236535329);w=a(w,E,S,x,d[v+1],L,4129170786);x=a(x,w,E,S,d[v+6],A,3225465664);S=a(S,x,w,E,d[v+11],O,643717713);E=a(E,S,x,w,d[v+0],M,3921069994);w=a(w,E,S,x,d[v+5],L,3593408605);x=a(x,w,E,S,d[v+10],A,38016083);S=a(S,x,w,E,d[v+15],O,3634488961);E=a(E,S,x,w,d[v+4],M,3889429448);w=a(w,E,S,x,d[v+9],L,568446438);x=a(x,w,E,S,d[v+14],A,3275163606);S=a(S,x,w,E,d[v+3],O,4107603335);E=a(E,S,x,w,d[v+8],M,1163531501);w=a(w,E,S,x,d[v+13],L,2850285829);x=a(x,w,E,S,d[v+2],A,4243563512);S=a(S,x,w,E,d[v+7],O,1735328473);E=a(E,S,x,w,d[v+12],M,2368359562);w=f(w,E,S,x,d[v+5],_,4294588738);x=f(x,w,E,S,d[v+8],D,2272392833);S=f(S,x,w,E,d[v+11],P,1839030562);E=f(E,S,x,w,d[v+14],H,4259657740);w=f(w,E,S,x,d[v+1],_,2763975236);x=f(x,w,E,S,d[v+4],D,1272893353);S=f(S,x,w,E,d[v+7],P,4139469664);E=f(E,S,x,w,d[v+10],H,3200236656);w=f(w,E,S,x,d[v+13],_,681279174);x=f(x,w,E,S,d[v+0],D,3936430074);S=f(S,x,w,E,d[v+3],P,3572445317);E=f(E,S,x,w,d[v+6],H,76029189);w=f(w,E,S,x,d[v+9],_,3654602809);x=f(x,w,E,S,d[v+12],D,3873151461);S=f(S,x,w,E,d[v+15],P,530742520);E=f(E,S,x,w,d[v+2],H,3299628645);w=l(w,E,S,x,d[v+0],B,4096336452);x=l(x,w,E,S,d[v+7],j,1126891415);S=l(S,x,w,E,d[v+14],F,2878612391);E=l(E,S,x,w,d[v+5],I,4237533241);w=l(w,E,S,x,d[v+12],B,1700485571);x=l(x,w,E,S,d[v+3],j,2399980690);S=l(S,x,w,E,d[v+10],F,4293915773);E=l(E,S,x,w,d[v+1],I,2240044497);w=l(w,E,S,x,d[v+8],B,1873313359);x=l(x,w,E,S,d[v+15],j,4264355552);S=l(S,x,w,E,d[v+6],F,2734768916);E=l(E,S,x,w,d[v+13],I,1309151649);w=l(w,E,S,x,d[v+4],B,4149444226);x=l(x,w,E,S,d[v+11],j,3174756917);S=l(S,x,w,E,d[v+2],F,718787259);E=l(E,S,x,w,d[v+9],I,3951481745);w=n(w,m);E=n(E,g);S=n(S,y);x=n(x,b)}var q=h(w)+h(E)+h(S)+h(x);return q.toLowerCase()}
                , gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());}
                , gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));}
                , ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
                , ckset   : function ckset(e,r,t,n,a,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=1/0===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+i+(a?"; domain="+a:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}
                , info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg;}
                , error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg;}
                , insertJS : function insertJS(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var c=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(c)}else{var o=document.createElement("script");o.src=t,o.async=1,o.onload=o.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),o.onload=o.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}return cdl[e]}
                , insertIFrame : function insertIFrame(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<iframe>",{src:src,style:"display:none;",alt:"",frameborder:0,id:transpose("gtm_{name}_iFrame",{name:a.name}),width:1,height:1}));else{var d=document.createElement("iframe");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),d.style="display:none;",d.alt="",d.frameborder=0,document.body.appendChild(d),n()}}return cdl[t]}
                , insertImg : function insertImg(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<img>",{src:e,width:1,height:1,id:transpose("gtm_{name}_pixel",{name:a.name})}));else{var d=document.createElement("img");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),document.body.appendChild(d),n()}}return cdl[t]}
                , transpose : transpose
              });

              if (w.tagManageribe) {
                var key = '';
                ld.assign(cdpm, ld.transform(w.tagManageribe[0], function gtm_lowerCasetagManagerIBE(r, n, k){
                  key = k.toLowerCase();
                  if (/lob|holidaytype/i.test(key)) {n = n & n.toLowerCase() || 'generic'}
                  else if (/lob|holidaytype|pageid/i.test(key)) n = ld.trunc(n || '', 267)
                  else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n && n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""}
                  else if (/LineOfBusiness/i.test(key)) {n = n && n.replace(/[^_]+_([^_]+)_?.*/, '$1').toLowerCase() || "generic"; key = 'holidaytype'}
                  else if (/typeoffers/i.test(key)) {n = n && n.toLowerCase() || "generic"; key = 'lob'}
                  else if (/pageid/i.test(key)) {n = n && n.replace(/REGION/i, 'subsrch').toLowerCase() || "generic"}
                  else if (/errorcode/i.test(key)) {n = ld.trunc(n || '', 267).replace(/-/, '') || ""}
                  else if (/nbrstars/i.test(key)) { r.starrating = n || ''}
                  else if (/DeptDate/i.test(key)) { n = n && +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
                  else if (/RetDate/i.test(key)) { n = n && +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
                  else if (/EndDate/i.test(key)) {n = n && +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
                  else if (/price/i.test(key)) {n = n && n.replace(/\D*(\d+\.\d\d).*/, '$1') || '0'}
                  else if (/DepartureDate/i.test(key)) {n = n && +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || '0'; key = 'deptdate'}
                  r[key] = typeof n === 'string'?ld.trim(n):n;
                })
                         )
              }
              if (w.CATTParams) {
                var key = '';
                ld.assign(cdpm, ld.transform(w.CATTParams, function gtm_lowerCaseCATTParams(r, n, k){
                  key = k.toLowerCase();
                  if (/lob|holidaytype|pageid/i.test(key)) {n = n.toLowerCase() || 'generic'}
                  else if (/lob|holidaytype|pageid|errorcode/i.test(key)) { n = ld.trunc(n, 267) }
                  else if (/totalprice/i.test(key)) { r.bookingvalue = n }
                  else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""}
                  r[key] = typeof n === 'string'?ld.trim(n):n;
                })
                         )
              }

              cdpm.retdate = cdpm.enddate || 0;
              cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
              cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});
              cdpm.hashes = {}; (d.location.hash.split(/\#|&/g).slice(1)).forEach(function hashes(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.hashes[cur[1]]=cur[2]});

              cdpm.sessionid = cdpm.cookies && cdpm.cookies.fe_typo_user || '';
              cdpm.internalcampaignid = cdpm.searches && cdpm.searches.intcmp || cdpm.hashes && cdpm.hashes.intcmp || "";
              cdpm.utmaguid = cdpm.utmaguid || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop() || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || "";
              cdpm.utmbguid = cdpm.utmbguid || cdpm.cookies.__utmb || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop() || "";
              cdpm.gaguid = cdpm.gagui || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || "";
              cdpm.bookingvalue = cdpm.bookingvalue || cdpm.totalprice || "";

              var pat = location.pathname;
              if ((!cdpm.pageid || !/^home$|^subsrch$|^search$|^accom$|^pax$|^pay$|^conf$|^confirmation$|^booking$/i.test(cdpm.pageid)) && cdpm.searches && cdpm.searches.detail) {
                var det = cdpm.searches && cdpm.searches.detail || '';
                cdpm.pageid = (/depart-immediat/i.test(pat)?'lastminute':(/derniere-minute/i.test(pat)?'lastminute':(/zielgebiet/i.test(det)?'subsrch':(/hotel/i.test(det)?'search':(/termine/i.test(det)?'accom':(/buchung/i.test(det)?'pax':(/zahlung/i.test(det)?'pay':(/[^secure\.jettours\.com]/.test(location.hostname) && /[^thomascook_fr2]/.test(pat) && /danke/.test(det)?'secure':'home'))))))));
              } else if (!cdpm.searches.detail) {cdpm.pageid = /depart-immediat/i.test(pat)?'lastminute':(/derniere-minute/i.test(pat)?'lastminute':'home');
                                                } else if (cdpm.pageid && cdpm.pageid == 'confirmation') {
                                                  cdpm.pageid = cdpm.typepayment || 'home';
                                                }

              cdpm.errors = cdpm.errorcode || '';
              cdpm.pagetimestamp = Date.now();

              cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")|| '';
              cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
              window.CATTDL.CATTParams = cdpm;

              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(w,d,'script','//www.google-analytics.com/analytics.js','ga');

            } catch(e) {
              var msg = 'GTM CATTDL Core: '+e;
              console && ((console.error)?console.error(msg):console.log(msg))
            } finally {
              dl.push({'event': 'core_'+(w.CATTDL && w.CATTDL.CATTParams && w.CATTDL.CATTParams.pageid || '')});
            }
            return w.CATTDL;
          }(window.jQuery, w, dl, document.location, window.CATTDL, d));
        }
      }
    } catch(e) {
      var msg = 'GTM CATTDL lodash: '+e; cons && ((cons.error)?cons.error(msg):cons.log(msg));
    }
    return dl && w.CATTDL;
  }(window, window.document, window.dataLayer));
</script>
