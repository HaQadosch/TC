//<script id='gtm_CATTDLcore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    if ( jQ && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '')}) ) try {
        w.CATTDL = w.CATTDL || {};
        var cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            transpose : function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;},
            assign  : Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(Object(n)),a=0,c=o.length;c>a;a++){var i=o[a],b=Object.getOwnPropertyDescriptor(n,i);void 0!==b&&b.enumerable&&(r[i]=n[i])}}}return r;}}),
            twlh    : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host)},
            twdc    : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
            ewdc    : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
            twls    : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search)},
            ewls    : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search)},
            gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
            gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
            ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
            ckset   : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                var sExpires = "";
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
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },
            post    : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i');
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false;
            },
            info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
        };

        w.CATTDL.insertJS = function insertJS(e,t,r){return e&&t&&function(e,t,r,n,s,a,c){e[n]&&(e[n]["DL_"+s]={start:(new Date()).getTime(),script:e[n].transpose(a,c)});var i=t.getElementsByTagName(r)[0],o=t.createElement(r);return o.async=!0,o.src=a,i.parentNode.insertBefore(o,i),e[n]}(w,d,"script","CATTDL",e,t,r)};

        w.CATTParams && jQ.each(w.CATTParams, function gtm_eachCATTParam(pP){
            var pp = pP.toLowerCase();
            var checked = "";
            if (!cdpm[pp] || cdpm[pp] !== w.CATTParams[pP]){
                checked = w.CATTParams[pP];
                if (/string/i.test(typeof checked)) checked = checked.trim();
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "";
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270) || "";
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });
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
        jQ.when(jQ.ajax('/api/users/session')).done(function(a, b, x){
            cdpm.user.id = ''+(x.responseJSON && x.responseJSON.id || '');
        });

        if (jQ.subscribe){
            jQ.subscribe('updateUserData', function gtm_updateUserData(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM updateUserData updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                    cdpm = window.CATTDL && window.CATTDL.CATTParams || {};
                    cdpm.user = {};
                    cdpm.user.action = d && d.action || "";
                    cdpm.user.msg = d && d.data && (d.data.id || d.data.data && d.data.data.message || d.data && d.data.statusText) || "";
                    cdpm.user.id = d && d.data && d.data.id || "";
                    dl.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                    window.gatcDL && window.gatcDL.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                });
        }
        //UA call
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e; console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        if (/accom/i.test(window.CATTDL && window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || '')) {
            setTimeout(function(){dl.push({'event': 'core_'+cdpm.pageid})}, 500);
        } else dl.push({'event': 'core_'+(window.CATTDL && window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || '')});
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer));
//</script>
