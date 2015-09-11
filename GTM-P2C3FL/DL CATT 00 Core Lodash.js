<script id='GTM-P2C3FL_CATTDLcoreLodash'>
(function gtm_cattdlCore(jQ, d, w, dl, cdl) {
    'use strict';
    if ( jQ && cdl && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '')}) ) try {
        var cdpm = cdl.CATTParams || {}
        var ld = cdl._
        var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;}
        var tst = function tst(r, u){return RegExp.prototype.test.call(r, u)}
        var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u)};

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
                    if (/lob|holidaytype|pageid/i.test(key)) {n = n.toLowerCase() || 'generic'}
                    else if (/lob|holidaytype|pageid|errrocode/i.test(key)) n = ld.trunc(n, 267)
                    else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""}
                    r[key] = typeof n === 'string'?ld.trim(n):n;
                })
            )
        };
        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2];});
        cdpm.searches = {}; (d.location.href.split(/\?|&|#/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2];});

        cdpm.internalcampaignid = cdpm.searches && cdpm.searches.intcmp || w.CATTDL.twls(/intcmp=/i) && (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || "";
        cdpm.emailguid = cdpm.searches && cdpm.searches.user_id || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&]*)/i) || []).pop() || "";
        cdpm.ecircleid =  cdpm.searches && cdpm.searches.user_id || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop() || "";
        cdpm.dreamcaptureid =  cdpm.searches && cdpm.searches.dc_id || w.CATTDL.twls(/dc_id=/i) && (w.CATTDL.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop() || "";
        cdpm.abtanumber = cdpm.searches && cdpm.searches.abtaNumber || w.CATTDL.twls(/abtaNumber=/i) && (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop() || "";
        cdpm.consultantref =  cdpm.searches && cdpm.searches.consultantRef || w.CATTDL.twls(/consultantRef=/i) && (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop() || "";
        cdpm.qsearchedkeyword = cdpm.searches && cdpm.searches.q || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || "";
        cdpm.utmaguid = cdpm.utmaguid || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop() || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || "";
        cdpm.utmbguid = cdpm.utmbguid || cdpm.cookies.__utmb || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop() || "";
        cdpm.gaguid = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || "";
        cdpm.optimostcreative = window.opCreative || "";
        cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);

        if (!cdpm.pageid && /srv-search\/accom|destinations/i.test(window.location.pathname)) cdpm.pageid = 'accom';
        else if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid) cdpm.pageid = 'home';

        cdpm.errors = cdpm.errorcode || '';
        cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"") || '';
        cdpm.pagetimestamp = Date.now();
        cdpm.user = cdpm.user || {};

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e; 
        console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        var pid = window.CATTDL && window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || '';
        var core_pid = {'event': 'core_'+pid};
        if (/accom/i.test(pid)) setTimeout(function(){dl.push(core_pid)}, 500); else dl.push(core_pid);
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer, window.CATTDL));
</script>