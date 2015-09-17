<script id='GTM-P3WNBG_cattdlCore'>
  (function gtm_cattdlCore(jQ, w, dl) {
    'use strict';
    var cons = window.console;
    var timeStart = window.dataLayer
    .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
    .map(function dlMap(evt) {return evt['gtm.start']; })
    .pop() || 0;
    var stampEpoch = +new Date();
    var cdl = {};
    if (jQ) try{
      var d = w.document;
      w.CATTDL = w.CATTDL || {};
      cdl = w.CATTDL;
      w.CATTDL.SESSstore = w.CATTDL.SESSstore || {};
      var cdpm = cdl.CATTParams || {};
      cdpm.domevents = {};
      cdl._ = w._ ;
      var ld = cdl._;
      var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s; };
      var tst = function tst(r, u){return RegExp.prototype.test.call(r, u); };
      var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u); };

      if (ld && ld.assign) ld.assign (cdl, {
          twlh    : ld.partialRight(tst, w.location.host)
        , twdc    : ld.partialRight(tst, d.cookie)
        , twls    : ld.partialRight(tst, w.location.search)
        , ewdc    : ld.partialRight(exc, d.cookie)
        , ewls    : ld.partialRight(exc, w.location.search)
        , gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());}
        , gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));}
        , ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
        , ckset   : function ckset(e,r,t,n,a,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=1/0===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+i+(a?"; domain="+a:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}
        , info    : function info(msg) {cons && ((cons.info)?cons.info(msg):cons.log(msg)); return msg;}
        , error   : function error(msg) {cons && ((cons.error)?cons.error(msg):cons.log(msg)); return msg;}
        , insertJS : function insertJS(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var c=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(c)}else{var o=document.createElement("script");o.src=t,o.async=1,o.onload=o.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),o.onload=o.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}return cdl[e]}
        , insertIFrame : function insertIFrame(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<iframe>",{src:src,style:"display:none;",alt:"",frameborder:0,id:transpose("gtm_{name}_iFrame",{name:a.name}),width:1,height:1}));else{var d=document.createElement("iframe");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),d.style="display:none;",d.alt="",d.frameborder=0,document.body.appendChild(d),n()}}return cdl[t]}
        , insertImg : function insertImg(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var e=a.params?transpose(a.src,a.params):a.src,t="DL_"+a.name.toLowerCase(),r=+new Date,s=r-(cdl.CATTParams&&cdl.CATTParams.timestart||0),n=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:t,timestamp:r,"since gtm.start":s}),a.callback&&a.callback()};if(cdl[t]={start:r,src:e},jQ().append)jQ("body").append(jQ("<img>",{src:e,width:1,height:1,id:transpose("gtm_{name}_pixel",{name:a.name})}));else{var d=document.createElement("img");d.src=e,d.width=1,d.height=1,d.id=transpose("gtm_{name}_pixel",{name:a.name}),document.body.appendChild(d),n()}}return cdl[t]}
        , transpose : transpose
        , timestart : timeStart
      });

      if (jQ.subscribe) {
        var dpush = function dpush(evt){dl.push(evt); window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push(evt); };
        var cookieTestInfo = function cookieTestInfo(mess){if (w.CATTDL.twdc(/test=test/i)) cons.info(mess)};
        jQ.subscribe('updatePageData', function gtm_updatePageData(d){
          cookieTestInfo('GTM updatePageData updated', '\n', d, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData(), '\n', 'pathname is ', (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname));
          if (d && d.error) {
            dpush({'event': 'updatePageData_error'});
          } else if (d && d.errorCode && /payment/i.test(location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname)) {
            dpush({'event': 'updatePageData_errorPayment'});
          } else if (d && d.id == "pax-go-to-passenger-details-is-valid") {
            dpush({'event': 'updatePageData_addpax'});
          } else if (d && !d.carouselItems) {
            dpush({'event': 'updatePageData', 'pathname': location.pathname, 'timestamp': +new Date()});
          }
        });
        jQ.subscribe('PageView', function gtm_PageView(d) {
          cookieTestInfo('GTM PageView updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
          dpush({'event': 'PageView','pathname':(d && d.page || (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop()) || location.pathname),'timestamp':+new Date()});
        });
        jQ.subscribe('domEvent', function gtm_domEvent(d){
          cookieTestInfo('GTM domEvent updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
          cdpm = window.CATTDL.CATTParams;
          ld.assign && ld.assign(cdpm.domevents, d);
          dpush({'event': 'domEvent','id':d && d.id,'data':d && d.data,'timestamp':+new Date()});
        });
        jQ.subscribe('updateUserData', function gtm_updateUserData(d){
          cookieTestInfo('GTM updateUserData updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
          cdpm = window.CATTDL.CATTParams;
          cdpm.user = {};
          cdpm.user.action = d && d.action || "";
          cdpm.user.msg = d && d.data && (d.data.id || d.data.data && d.data.data.message || d.data.statusText) || "";
          cdpm.user.id = d && d.data && d.data.id || "";
          dpush({'event': 'updateUserData','action':""+(d && d.action || '')});
        });
        jQ.subscribe('error', function gtm_error(d){
          cookieTestInfo('GTM error updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
          dpush({'event': 'jserror'});
        });
      } else cons.log('GTM $.subsribe undefined');

      cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"") || '';
      cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
      window.CATTDL.CATTParams = cdpm;

    } catch(e) {
      var msg = 'GTM CATTDL Core: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    } finally {
      dl.push({'event': 'dl core', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.jQuery, window, window.dataLayer));
</script>