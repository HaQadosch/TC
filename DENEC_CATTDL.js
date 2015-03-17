<script id='gtm_cattdlCore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    if ( jQ && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '')}) ) try {
        w.CATTDL = w.CATTDL || {};
        var cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            md5     : function gtm_md5(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,r,i,s,o;i=e&2147483648;s=t&2147483648;n=e&1073741824;r=t&1073741824;o=(e&1073741823)+(t&1073741823);if(n&r){return o^2147483648^i^s}if(n|r){if(o&1073741824){return o^3221225472^i^s}else{return o^1073741824^i^s}}else{return o^i^s}}function r(e,t,n){return e&t|~e&n}function i(e,t,n){return e&n|t&~n}function s(e,t,n){return e^t^n}function o(e,t,n){return t^(e|~n)}function u(e,i,s,o,u,a,f){e=n(e,n(n(r(i,s,o),u),f));return n(t(e,a),i)}function a(e,r,s,o,u,a,f){e=n(e,n(n(i(r,s,o),u),f));return n(t(e,a),r)}function f(e,r,i,o,u,a,f){e=n(e,n(n(s(r,i,o),u),f));return n(t(e,a),r)}function l(e,r,i,s,u,a,f){e=n(e,n(n(o(r,i,s),u),f));return n(t(e,a),r)}function c(e){var t;var n=e.length;var r=n+8;var i=(r-r%64)/64;var s=(i+1)*16;var o=Array(s-1);var u=0;var a=0;while(a<n){t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|e.charCodeAt(a)<<u;a++}t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|128<<u;o[s-2]=n<<3;o[s-1]=n>>>29;return o}function h(e){var t="",n="",r,i;for(i=0;i<=3;i++){r=e>>>i*8&255;n="0"+r.toString(16);t=t+n.substr(n.length-2,2)}return t}function p(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}var d=Array();var v,m,g,y,b,w,E,S,x;var T=7,N=12,C=17,k=22;var L=5,A=9,O=14,M=20;var _=4,D=11,P=16,H=23;var B=6,j=10,F=15,I=21;e=p(e);d=c(e);w=1732584193;E=4023233417;S=2562383102;x=271733878;for(v=0;v<d.length;v+=16){m=w;g=E;y=S;b=x;w=u(w,E,S,x,d[v+0],T,3614090360);x=u(x,w,E,S,d[v+1],N,3905402710);S=u(S,x,w,E,d[v+2],C,606105819);E=u(E,S,x,w,d[v+3],k,3250441966);w=u(w,E,S,x,d[v+4],T,4118548399);x=u(x,w,E,S,d[v+5],N,1200080426);S=u(S,x,w,E,d[v+6],C,2821735955);E=u(E,S,x,w,d[v+7],k,4249261313);w=u(w,E,S,x,d[v+8],T,1770035416);x=u(x,w,E,S,d[v+9],N,2336552879);S=u(S,x,w,E,d[v+10],C,4294925233);E=u(E,S,x,w,d[v+11],k,2304563134);w=u(w,E,S,x,d[v+12],T,1804603682);x=u(x,w,E,S,d[v+13],N,4254626195);S=u(S,x,w,E,d[v+14],C,2792965006);E=u(E,S,x,w,d[v+15],k,1236535329);w=a(w,E,S,x,d[v+1],L,4129170786);x=a(x,w,E,S,d[v+6],A,3225465664);S=a(S,x,w,E,d[v+11],O,643717713);E=a(E,S,x,w,d[v+0],M,3921069994);w=a(w,E,S,x,d[v+5],L,3593408605);x=a(x,w,E,S,d[v+10],A,38016083);S=a(S,x,w,E,d[v+15],O,3634488961);E=a(E,S,x,w,d[v+4],M,3889429448);w=a(w,E,S,x,d[v+9],L,568446438);x=a(x,w,E,S,d[v+14],A,3275163606);S=a(S,x,w,E,d[v+3],O,4107603335);E=a(E,S,x,w,d[v+8],M,1163531501);w=a(w,E,S,x,d[v+13],L,2850285829);x=a(x,w,E,S,d[v+2],A,4243563512);S=a(S,x,w,E,d[v+7],O,1735328473);E=a(E,S,x,w,d[v+12],M,2368359562);w=f(w,E,S,x,d[v+5],_,4294588738);x=f(x,w,E,S,d[v+8],D,2272392833);S=f(S,x,w,E,d[v+11],P,1839030562);E=f(E,S,x,w,d[v+14],H,4259657740);w=f(w,E,S,x,d[v+1],_,2763975236);x=f(x,w,E,S,d[v+4],D,1272893353);S=f(S,x,w,E,d[v+7],P,4139469664);E=f(E,S,x,w,d[v+10],H,3200236656);w=f(w,E,S,x,d[v+13],_,681279174);x=f(x,w,E,S,d[v+0],D,3936430074);S=f(S,x,w,E,d[v+3],P,3572445317);E=f(E,S,x,w,d[v+6],H,76029189);w=f(w,E,S,x,d[v+9],_,3654602809);x=f(x,w,E,S,d[v+12],D,3873151461);S=f(S,x,w,E,d[v+15],P,530742520);E=f(E,S,x,w,d[v+2],H,3299628645);w=l(w,E,S,x,d[v+0],B,4096336452);x=l(x,w,E,S,d[v+7],j,1126891415);S=l(S,x,w,E,d[v+14],F,2878612391);E=l(E,S,x,w,d[v+5],I,4237533241);w=l(w,E,S,x,d[v+12],B,1700485571);x=l(x,w,E,S,d[v+3],j,2399980690);S=l(S,x,w,E,d[v+10],F,4293915773);E=l(E,S,x,w,d[v+1],I,2240044497);w=l(w,E,S,x,d[v+8],B,1873313359);x=l(x,w,E,S,d[v+15],j,4264355552);S=l(S,x,w,E,d[v+6],F,2734768916);E=l(E,S,x,w,d[v+13],I,1309151649);w=l(w,E,S,x,d[v+4],B,4149444226);x=l(x,w,E,S,d[v+11],j,3174756917);S=l(S,x,w,E,d[v+2],F,718787259);E=l(E,S,x,w,d[v+9],I,3951481745);w=n(w,m);E=n(E,g);S=n(S,y);x=n(x,b)}var q=h(w)+h(E)+h(S)+h(x);return q.toLowerCase()},
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
            post    : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.neckermann-reisen.de;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i');
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || ['']).pop();
            },
            info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
        };

        w.CATTParams && jQ.each(w.CATTParams, function gtm_eachCATTParam(pP){
            var pp = pP.toLowerCase();
            var checked = "";
            if (!cdpm[pp] || cdpm[pp] !== w.CATTParams[pP]){
                checked = w.CATTParams[pP];
                if (/string/i.test(typeof checked)) checked = checked.trim();
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270) || "";
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });
        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
        cdpm.searches = {}; (d.location.href.split(/\?|&|#/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});

        cdpm['internalcampaignid'] = cdpm.searches && cdpm.searches.intcmp
            || w.CATTDL.twls(/intcmp=/i) && (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['emailguid'] = cdpm.searches && cdpm.searches.user_id
            || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&]*)/i) || []).pop()
            || "";
        cdpm['ecircleid'] =  cdpm.searches && cdpm.searches.user_id
            || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['dreamcaptureid'] =  cdpm.searches && cdpm.searches.dc_id
            || w.CATTDL.twls(/dc_id=/i) && (w.CATTDL.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['abtanumber'] = cdpm.searches && cdpm.searches.abtaNumber
            || w.CATTDL.twls(/abtaNumber=/i) && (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['consultantref'] =  cdpm.searches && cdpm.searches.consultantRef
            || w.CATTDL.twls(/consultantRef=/i) && (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['qsearchedkeyword'] = cdpm.searches && cdpm.searches.q
            || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop()
            || "";

        cdpm['utmaguid'] = cdpm.utmaguid
            || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop()
            || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop()
            || "";
        cdpm['utmbguid'] = cdpm.utmbguid
            || cdpm.cookies.__utmb
            || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop()
            || "";
        cdpm['gaguid'] = cdpm.gaguid
            || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop()
            || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop()
            || "";
        cdpm['optimostcreative'] = window.opCreative
            || "";

        cdpm['pageid'] = cdpm.pageid
            || /^\/$/i.test(location.pathname || '')?'home':''
            || 'generic';

        cdpm['errors'] = cdpm.errorcode
            || '';
        cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
            || ''
        ;cdpm['pagetimestamp'] = Date.now()

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e; console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'core_'+(w.CATTDL && w.CATTDL.CATTParams && w.CATTDL.CATTParams.pageid || '')});
    }
    return jQ && dl && w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer))
</script>
