// Booking steps
<script id='gtm_DLCore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict'
    if (jQ && dl) try {
        w.CATTDL = w.CATTDL || {}
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
            },
            post    : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.neckermann-reisen.at;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i')
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false
            },
            info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
        }

        w.CATTParams && jQ.each(w.CATTParams, function gtm_eachCATTParam(pP){
            var pp = pP && pP.toLowerCase()
            var checked = ""
            if (!cdpm[pp] || cdpm[pp] !== w.CATTParams[pP]){
                checked = w.CATTParams[pP]
                if (/string/i.test(typeof checked)) checked = checked.trim()
                if (/lob|holidaytype/i.test(pp)) checked = checked && checked.toLowerCase() || "generic"
                else if (/pageid/i.test(pp)) checked = checked && checked.toLowerCase() || "generic"
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270).replace(/-/, '') || ""
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""

                if (checked) cdpm[pp] = checked
            }
        });
        cdpm.retdate = cdpm.enddate || 0;
        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]})
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]})

        cdpm['sessionid'] = cdpm.cookies && cdpm.cookies.fe_typo_user || ''

        cdpm['internalcampaignid'] = cdpm.searches && cdpm.searches.intcmp
            || w.CATTDL.twls(/intcmp=/i) && (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop()
            || ""
        cdpm['utmaguid'] = cdpm.utmaguid
            || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop()
            || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop()
            || ""
        cdpm['utmbguid'] = cdpm.utmbguid
            || cdpm.cookies.__utmb
            || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop()
            || ""
        cdpm['gaguid'] = cdpm.gaguid
            || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop()
            || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop()
            || ""
        cdpm['errors'] = cdpm.errorcode
            || '';
        cdpm['pageid'] = cdpm.pageid
            || 'home';
        cdpm['pagetimestamp'] = Date.now();


        cdpm.lob && w.CATTDL.ckset && w.CATTDL.ckset('gtm_lob', cdpm.lob || '', Infinity, '/', '.neckermann-reisen.at');

        window.CATTDL.CATTParams = cdpm
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e;
        console && ((console.error)?console.error(msg):console.log(msg))
    } finally {
        dl.push({'event': 'core_'+cdpm.pageid});
    }
    return jQ && dl && w.CATTDL
}(window.jQuery, window.document, window, window.dataLayer))
</script>

// LP
<script id='gtm_CATTDLLP'>
(function gtm_cattdlLP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = cdpm.pageid+'(1)';
            keeps['trailingsteps'] = lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.neckermann-reisen.at');

         jQ.extend(cdl.CATTParams, newPM, keeps)

    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL LP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

// Attribution LP
<script id='gtm_attr'>
(function gtm_attribtionLP(jQ, cdl) {
    'use strict'
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams && cdl.CATTParams.searches || ''
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            var attribution = [
                cdsr.gclid || '',
                cdsr.utm_medium || '',
                cdsr.utm_campaign || '',
                cdsr.utm_content || '',
                cdsr.utm_source || '',
                Date.now() || ''
            ]
            attrs.push(attribution)
        }
         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.neckermann-reisen.at')
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e)
    }
    return jQ && cdl
}(window.jQuery, window.CATTDL))
</script>

// Attribution Conf page
<script id='gtm_Attribution'>
(function gtm_attribution(dl, cdl){
    'use strict';
    if (dl && cdl) try {
        var cdpm = cdl.CATTParams || {}
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdpm['attribution'] = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = 'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display '+ (cdpm.attribution && cdpm.attribution.source || '');
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dl.push({event: 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.neckermann-reisen.at')
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && dl && cdpm && cdpm.attribution
}(window.dataLayer, window.CATTDL))
</script>

// Affilinet
<script id='gtm_affilinateAff'>
(function gtm_affilinateAffDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;

        if (/hotel/i.test(cdpm.lob || '')){
            cdl.DL_attr_aff = {
                ltype       : "2",
                articlenb     : cdpm.accomcode || "1",
                productname : "Hotel Booking",
                category     : 'Hotels',
                quantity     : 1,
                singlePrice : cdpm.bookingvalue || '',
                brand         : cdpm.touroperator || '',
                property1     : cdpm.accomname && cdpm.accomname.replace('&', ' and ') || '',
                property2     : cdpm.destination || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.starrating || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 11836,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            };
        } else if (/flight/i.test(cdpm.lob || '')){
            cdl.DL_attr_aff = {
                ltype       : "1",
                articlenb     : cdpm.accomcode || "1",
                productname : "Flights",
                category     : 'Flights',
                quantity     : 1,
                singlePrice : cdpm.bookingvalue || '',
                brand         : cdpm.touroperator || '',
                property1     : cdpm.departureairportselected || '',
                property2     : cdpm.destinationairportselected || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.carrier || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 11836,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            };
        } else {
            cdl.DL_attr_aff = {
                ltype       : "3",
                articlenb     : cdpm.accomcode || "1",
                productname : "Package booking for "+(cdpm.paxadult || '')+" Adults and "+(cdpm.paxchild || '')+" Children",
                category     : 'Package > '+(cdpm.destinationairportselected || ''),
                quantity     : 1,
                singlePrice : cdpm.bookingvalue || '',
                brand         : cdpm.touroperator || '',
                property1     : cdpm.departureairportselected || '',
                property2     : cdpm.destinationairportselected || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.boardbasis || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 11836,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            };
        }
    } catch(e){
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && cdl.DL_attr_aff;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAff(cdl, jQ, afdl) {
    'use strict';
    if (cdl && jQ) try {
        var article = "ArticleNb="+(afdl.articlenb || '')+
            "&ProductName="+(afdl.productname || '')+
            "&Category="+(afdl.category || '')+
            "&Quantity="+(afdl.quantity || '')+
            "&SinglePrice="+(afdl.singlePrice || '')+
            "&Brand="+(afdl.brand || '')+
            "&Property1="+(afdl.property1 || '')+
            "&Property2="+(afdl.property2 || '')+
            "&Property3="+(afdl.property3 || '')+
            "&Property4="+(afdl.property4 || '')+
            "&Property5="+(afdl.property5 || '')+
            unescape("%0D%0A");
        var src = 'https://partners.webmasterplan.com/registersale.asp?mode=ppl&ltype='+(afdl.ltype || '')+'&site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        };
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_aff))
</script>


<script id='gtm_mediaScale'>
(function gtm_mediaScaleDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_mediascale = {
           tid      : 1199,
            sid     : 20370,
            type    : 'html',
            orderid : cdpm.bookingref || '',
            itemno  : cdpm.accomcode || '',
            price   : 0.00,
            total   : cdpm.bookingvalue || '',
            descr   : '',
            quantity: 1,
            iFrame  : {
                src     : 'https://ad3.adfarm1.adition.com/track?',
                status  : 'not fired'
            }
        };
    } catch(e){
        cdl.error('GTM Mediascale DL: '+e);
    }
    return cdl && jQ && cdl.DL_mediascale;
}(window.CATTDL, window.jQuery));

(function gtm_mediascale(cdl, jQ, msdl) {
    'use strict';
    if (cdl && jQ && msdl) try {
        var src = (msdl.iFrame && msdl.iFrame.src || '//')+
            "&tid="+(msdl.tid || '')+
            "&sid="+(msdl.sid || '')+
            "&type="+(msdl.type || '')+
            "&orderid="+(msdl.orderid || '')+
            "&itemno="+(msdl.itemno || '')+
            "&descr="+(msdl.descr || '')+
            "&quantity="+(msdl.quantity || '')+
            "&price="+(msdl.price || '')+
            "&total="+(msdl.total || '')

        var iFrm = jQ('<iframe allowtransparency="true" scrolling="no" frameborder="0" border="0" width="1" height="1" marginwidth="0" marginheight="0" background-color="transparent" id="mediascale">').attr('src', src);
        iFrm.appendTo('body');

        msdl.iFrame = {
            status: 'fired',
            src: src
        };
    } catch(e) {
        cdl.error('GTM MediaScale: '+e);
    }
    return cdl && jQ && msdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_mediascale))
</script>


Attribution for eSP:
xbcBANSrc && /esp/i.test(xbcBANSrc.split('|').pop()) && $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:5447704a-f668-49fb-a875-3f016def3350/e:5447ab9b-8f24-4bd9-8a09-1f076def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>');
