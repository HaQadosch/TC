<script id='GTM-VW2M_cattdlCore'>
    (function gtm_cattdlCore(jQ, d, w, dl, cdl, undefined) {
        'use strict';
        if (cdl && jQ && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '');}) ) try {
            var cdpm = cdl.CATTParams || {};
            var ld = cdl._;
            var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;}
            var tst = function tst(r, u){return RegExp.prototype.test(r, u);};
            var exc = function exc(r, u){return RegExp.prototype.exec(r, u);};
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
                , insertJS : function insertJS(e){if(ld.defaults(e,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0}),e.name&&e.src){var a=e.params?transpose(e.src,e.params):e.src,t="DL_"+e.name.toLowerCase(),n=function(){dl.push({event:t}),e.callback&&e.callback()};if(cdl[t]={start:(new Date).getTime(),script:a},jQ.getScript){var r=jQ.ajaxSettings;e.options&&jQ.ajaxSetup(e.options),jQ.getScript(a,function(){n()}),jQ.ajaxSetup(r)}else{var t=document.createElement("script");t.src=a,t.async=1,t.onload=t.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(n(),t.onload=t.onreadystatechange=null)};var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}}return cdl[t]}
                , insertIFrame : function insertIFrame(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),iFrame:d},e().append&&e("body").append(e("<iframe>",{src:d,style:"display:none;",alt:"",frameborder:0,id:a+"iFrame",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
                , insertImg : function insertImg(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),img:d},e().append&&e("body").append(e("<img>",{src:d,id:a+"img",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
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
            cdpm.internalcampaignid = cdpm.searches && cdpm.searches.intcmp || cdl.twls(/intcmp=/i) && (cdl.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || "";
            cdpm.emailguid = cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&]*)/i) || []).pop() || "";
            cdpm.ecircleid =  cdpm.searches && cdpm.searches.user_id || cdl.twls(/user_id=/i) && (cdl.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop() || "";
            cdpm.dreamcaptureid =  cdpm.searches && cdpm.searches.dc_id || cdl.twls(/dc_id=/i) && (cdl.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop() || "";
            cdpm.abtanumber = cdpm.searches && cdpm.searches.abtaNumber || cdl.twls(/abtaNumber=/i) && (cdl.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop() || "";
            cdpm.consultantref =  cdpm.searches && cdpm.searches.consultantRef || cdl.twls(/consultantRef=/i) && (cdl.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop() || "";
            cdpm.qsearchedkeyword = cdpm.searches && cdpm.searches.q || cdl.ewls(/[&\?]q=([^&|\s|\?]*)/i) && cdl.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || "";
            cdpm.utmaguid = cdpm.utmaguid || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop() || cdl.twdc(/_utma=/i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || "";
            cdpm.utmbguid = cdpm.utmbguid || cdpm.cookies.__utmb || cdl.twdc(/_utmb=/i) && cdl.ewdc(/_utmb=([^;%=]*)/i) && cdl.ewdc(/_utmb=([^;%=]*)/i).pop() || "";
            cdpm.gaguid = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || cdl.twdc(/_ga=/i) && (cdl.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || "";
            cdpm.optimostcreative = window.opCreative || "";
            cdpm.pageid = (/index\.jsp/i.test(location.pathname || '')?'home':'') || cdpm.pageid || 'generic';
            cdpm.errors = cdpm.errorcode || '';
            cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || '';
            cdpm.pagetimestamp = Date.now();
            cdpm.roomtype = cdpm.roomtype || jQ('p i.icon.icon-uniE663').next().text() || '';
            cdpm.duration = cdpm.duration || cdpm.retdate && cdpm.deptdate && (new Date((cdpm.retdate|| '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1'))-new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')))/(1000*60*60*24)+'' || '';
            cdpm.landingtimestamp = (function gtm_LPTimeStamp(){
                var tstp = '';
                if (!/tstp=/i.test(document.cookie)){
                    document.cookie = 'tstp=done';
                    tstp = new Date(Date.now()).toLocaleString() || '';
                    tstp = /\//i.test(tstp) && (/(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp) && /(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp).pop() || '') || (/(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp) && /(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp).pop() || '');
                }
                return tstp;
            }());
            var sessionsrv = cdpm.cookies && cdpm.cookies.JSESSIONID && cdpm.cookies.JSESSIONID.split('-') || '';
            cdpm.sessionid = cdpm.sessionid || sessionsrv[0] || '';
            cdpm.appserver = cdpm.appserver || sessionsrv.length && sessionsrv[1] || '';
            cdpm.lob = cdpm.lob || cdpm.lineofbusiness || '';
            cdpm.holidaytype = cdpm.holidaytype || cdpm.typeoffers || '';
            cdpm.language = (cdpm.language || (/\/(\w\w)\/.*/i.exec(d.location.pathname || '') || ['']).pop() || window.condorContext || '').replace(/en-us/i, 'us').replace(/en-gb/i, 'eu');

            window.CATTDL.CATTParams = cdpm;
        } catch(e) {
            var msg = 'GTM CATTDL Core: '+e; w.console && ((w.console.error)?w.console.error(msg):w.console.log(msg));
        } finally {
            dl.push({'event': 'core_'+(w.CATTDL && w.CATTDL.CATTParams && w.CATTDL.CATTParams.pageid || '')});
            dl.push({'event':'CATTDL'});
        }
        return jQ && dl && w.CATTDL;
    }(window.jQuery, window.document, window, window.dataLayer, window.CATTDL));
</script>