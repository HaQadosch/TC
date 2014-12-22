/*******************************************************
                        CATTDL Core
********************************************************/
<script id='gtm_CATTDLCore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict'
    if (jQ && dl) try {
        w.CATTDL = w.CATTDL || {}
        var cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            md5     : function gtm_md5(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,r,i,s,o;i=e&2147483648;s=t&2147483648;n=e&1073741824;r=t&1073741824;o=(e&1073741823)+(t&1073741823);if(n&r){return o^2147483648^i^s}if(n|r){if(o&1073741824){return o^3221225472^i^s}else{return o^1073741824^i^s}}else{return o^i^s}}function r(e,t,n){return e&t|~e&n}function i(e,t,n){return e&n|t&~n}function s(e,t,n){return e^t^n}function o(e,t,n){return t^(e|~n)}function u(e,i,s,o,u,a,f){e=n(e,n(n(r(i,s,o),u),f));return n(t(e,a),i)}function a(e,r,s,o,u,a,f){e=n(e,n(n(i(r,s,o),u),f));return n(t(e,a),r)}function f(e,r,i,o,u,a,f){e=n(e,n(n(s(r,i,o),u),f));return n(t(e,a),r)}function l(e,r,i,s,u,a,f){e=n(e,n(n(o(r,i,s),u),f));return n(t(e,a),r)}function c(e){var t;var n=e.length;var r=n+8;var i=(r-r%64)/64;var s=(i+1)*16;var o=Array(s-1);var u=0;var a=0;while(a<n){t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|e.charCodeAt(a)<<u;a++}t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|128<<u;o[s-2]=n<<3;o[s-1]=n>>>29;return o}function h(e){var t="",n="",r,i;for(i=0;i<=3;i++){r=e>>>i*8&255;n="0"+r.toString(16);t=t+n.substr(n.length-2,2)}return t}function p(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}var d=Array();var v,m,g,y,b,w,E,S,x;var T=7,N=12,C=17,k=22;var L=5,A=9,O=14,M=20;var _=4,D=11,P=16,H=23;var B=6,j=10,F=15,I=21;e=p(e);d=c(e);w=1732584193;E=4023233417;S=2562383102;x=271733878;for(v=0;v<d.length;v+=16){m=w;g=E;y=S;b=x;w=u(w,E,S,x,d[v+0],T,3614090360);x=u(x,w,E,S,d[v+1],N,3905402710);S=u(S,x,w,E,d[v+2],C,606105819);E=u(E,S,x,w,d[v+3],k,3250441966);w=u(w,E,S,x,d[v+4],T,4118548399);x=u(x,w,E,S,d[v+5],N,1200080426);S=u(S,x,w,E,d[v+6],C,2821735955);E=u(E,S,x,w,d[v+7],k,4249261313);w=u(w,E,S,x,d[v+8],T,1770035416);x=u(x,w,E,S,d[v+9],N,2336552879);S=u(S,x,w,E,d[v+10],C,4294925233);E=u(E,S,x,w,d[v+11],k,2304563134);w=u(w,E,S,x,d[v+12],T,1804603682);x=u(x,w,E,S,d[v+13],N,4254626195);S=u(S,x,w,E,d[v+14],C,2792965006);E=u(E,S,x,w,d[v+15],k,1236535329);w=a(w,E,S,x,d[v+1],L,4129170786);x=a(x,w,E,S,d[v+6],A,3225465664);S=a(S,x,w,E,d[v+11],O,643717713);E=a(E,S,x,w,d[v+0],M,3921069994);w=a(w,E,S,x,d[v+5],L,3593408605);x=a(x,w,E,S,d[v+10],A,38016083);S=a(S,x,w,E,d[v+15],O,3634488961);E=a(E,S,x,w,d[v+4],M,3889429448);w=a(w,E,S,x,d[v+9],L,568446438);x=a(x,w,E,S,d[v+14],A,3275163606);S=a(S,x,w,E,d[v+3],O,4107603335);E=a(E,S,x,w,d[v+8],M,1163531501);w=a(w,E,S,x,d[v+13],L,2850285829);x=a(x,w,E,S,d[v+2],A,4243563512);S=a(S,x,w,E,d[v+7],O,1735328473);E=a(E,S,x,w,d[v+12],M,2368359562);w=f(w,E,S,x,d[v+5],_,4294588738);x=f(x,w,E,S,d[v+8],D,2272392833);S=f(S,x,w,E,d[v+11],P,1839030562);E=f(E,S,x,w,d[v+14],H,4259657740);w=f(w,E,S,x,d[v+1],_,2763975236);x=f(x,w,E,S,d[v+4],D,1272893353);S=f(S,x,w,E,d[v+7],P,4139469664);E=f(E,S,x,w,d[v+10],H,3200236656);w=f(w,E,S,x,d[v+13],_,681279174);x=f(x,w,E,S,d[v+0],D,3936430074);S=f(S,x,w,E,d[v+3],P,3572445317);E=f(E,S,x,w,d[v+6],H,76029189);w=f(w,E,S,x,d[v+9],_,3654602809);x=f(x,w,E,S,d[v+12],D,3873151461);S=f(S,x,w,E,d[v+15],P,530742520);E=f(E,S,x,w,d[v+2],H,3299628645);w=l(w,E,S,x,d[v+0],B,4096336452);x=l(x,w,E,S,d[v+7],j,1126891415);S=l(S,x,w,E,d[v+14],F,2878612391);E=l(E,S,x,w,d[v+5],I,4237533241);w=l(w,E,S,x,d[v+12],B,1700485571);x=l(x,w,E,S,d[v+3],j,2399980690);S=l(S,x,w,E,d[v+10],F,4293915773);E=l(E,S,x,w,d[v+1],I,2240044497);w=l(w,E,S,x,d[v+8],B,1873313359);x=l(x,w,E,S,d[v+15],j,4264355552);S=l(S,x,w,E,d[v+6],F,2734768916);E=l(E,S,x,w,d[v+13],I,1309151649);w=l(w,E,S,x,d[v+4],B,4149444226);x=l(x,w,E,S,d[v+11],j,3174756917);S=l(S,x,w,E,d[v+2],F,718787259);E=l(E,S,x,w,d[v+9],I,3951481745);w=n(w,m);E=n(E,g);S=n(S,y);x=n(x,b)}var q=h(w)+h(E)+h(S)+h(x);return q.toLowerCase()},
            twlh     : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host)},
            twdc     : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
            ewdc     : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
            twls     : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search)},
            ewls     : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search)},
            gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
            gatime    : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
            ckget     : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
            ckset     : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
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
            post     : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.condor.com;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i')
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false
            },
            info     : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error     : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
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
        })

        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]})
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]})

        var sessionsrv = cdpm.cookies && cdpm.cookies.JSESSIONID && cdpm.cookies.JSESSIONID.split('-') || ''
        cdpm['sessionid'] = cdpm.sessionid || sessionsrv[0]
        cdpm['appserver'] = cdpm.appserver || sessionsrv.length && sessionsrv[1]
        cdpm['lob'] = cdpm.lob || cdpm.lineofbusiness || ''
        cdpm['holidaytype'] = cdpm.holidaytype || cdpm.typeoffers || ''

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
             || ''
        cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
            || ''
        ;
        cdpm['landingtimestamp'] = (function gtm_LPTimeStamp(){
            var tstp = ''
            if (!/tstp=/i.test(document.cookie)){
                document.cookie = 'tstp=done';
                tstp = new Date(Date.now()).toLocaleString() || ''
                tstp = /\//i.test(tstp)
                    && (/(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp) && /(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp).pop() || '') // Chrome && FFOX
                    || (/(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp) && /(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp).pop() || '') // IE
            }
            return tstp
        }())

        if (!window.CATTParams && location.pathname === '/') cdpm.pageid = 'home';

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

/*******************************************************
                        CATTDL LP
********************************************************/
<script>
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

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');

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

/*******************************************************
                        CATTDL SubSRP
********************************************************/
<script>
(function gtm_cattdlSubSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/).filter(function steps(e){return e})
            var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[0]+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');
         jQ.extend(cdl.CATTParams, newPM, keeps)

    } catch(e) {
        cdl.error('GTM CATTDL SubSRP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL SubSRP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                        CATTDL SRP
********************************************************/
<script>
(function gtm_cattdlSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[0]+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)'

        var accoms = cdpm.hotellist
        var htmlAccoms = jQ('div.location-description') || jQ([])
        var curAccom = ''
        var curReg = []
        newPM['accoms'] = []
        htmlAccoms.each(function gtm_eachAccoms(i, e){jQ(e).attr('data-pos', i+1); jQ(e).attr('data-title', (jQ(e).find('h4.title').text().replace(/\s+|&/g, '_')))});
        accoms.forEach(function gtm_forEachAccoms(e, i){
            curAccom = htmlAccoms.filter(function gtm_htmlAccomsFilter(ind, elt){return ((/\/([^\/]+)\.jpg/i.exec(e.imgHotel) || ['']).pop() || '') == ((/\/([^\/]+)\.jpg/i.exec(jQ(elt).find('p.image img').attr('src')) || ['']).pop() || '')})
            curReg = window.regionen_2 && window.regionen_2.length && window.regionen_2.filter(function gtm_regFilter(elt, ind){return (elt.split('#').length > 2 && elt.split('#')[2] || '') == (e.IDHotel || e.TopIDHotel || '')}) || []
            curReg = curReg.pop().split('#'); curReg && curReg.length > 13 || []

            var deptdate = +new Date((e.offerDate || e.TopOfferDate || curReg[13] || '0/0/0').replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || 0;
            var duration = parseInt(e.offerNight || e.TopOfferNight || 0);
            newPM.accoms.push({
                'accomname'     : e.hotelname || e.TopHotelname || e.TopIotelname || '',
                'accomguid'     : e.IDHotel || e.TopIDHotel || '',
                'accomcountry'     : curReg[7] || '',
                'accomcregion'     : curReg[7] || '',
                'accomresort'     : curReg[7] || '',
                'price'         : e.offerBestPrice || e.TopOfferBestPrice || curReg[1] || '',
                'deptdate'        : deptdate,
                'retdate'         : deptdate+(86400000 * duration),
                'deptairportcode'     : e.offerDepartureAirport || e.TopOfferDepartureAirport || '',
                'arrivalairportcode'     : e.offerArrivalAirport || e.TopOfferArrivalAirport || '',
                'location'         : curAccom.find('p.sub').text() || e.landRegionID || e.TopLandRegionID || '',
                'starrating'     : (/(\d+)/i.exec(curAccom.find('span[class|=stars]').attr('class') || '') || ['']).pop() || '',
                'duration'         : duration,
                'boardbasis'     : curAccom.find('ul.precisions li:eq(2)').text() || '',
                'roomtype'         : e.offerRoomType || e.TopOfferRoomType || '',
                'imgurl'         : e.imgHotel || e.TopImgHotel ||curAccom.find('img').attr('src') || '',
                'brand'         : '',
                'touroperator'     : e.offerTourOperator || e.TopOfferTourOperator || e.TopTourOperatorOffer || '',
                'orderDisplay'    : e.orderDisplay || e.TopOrderDisplay || 0,
                'offerid'         : e.offerID || e.TopOfferID || '',
                'position'         : curAccom.attr('data-pos')
            })
        })

        newPM['duration'] = cdpm.duration && (/(\d+)/.exec(cdpm.duration) || ['']).pop()
               || '7'
        newPM['selpage'] = cdpm.searchresultspagenbr
            || 1
        newPM['sortoption'] = cdpm.sortby
            || cdpm.sortoption
            || ""

         jQ.extend(cdl.CATTParams, newPM, keeps)

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');
    } catch(e) {
        cdl.error('GTM CATTDL SRP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL SRP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>


/*******************************************************
                        CATTDL Accom
********************************************************/
<script>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[0]+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        var errorBlock = jQ('div.alert.alert-danger#paxAlertA') || !1
        if (errorBlock && /display:\s?block/i.test(errorBlock.attr('style'))) {
            newPM['errorcode'] = errorBlock.find('p').text() || ''
            newPM['errormessage'] = (/\!(.*)/i.exec(errorBlock.text()) || ['']).pop() || ''
        }

        newPM['duration'] = cdpm.duration && (/(\d+)/.exec(cdpm.duration) || ['']).pop()
            || '0'
        keeps['accomguid'] = cdpm.accomguid
            || ""
        keeps['accomimg'] = cdpm.accomimg
            || ''
        newPM['accomtitle'] = cdpm.accomresort
            || ''
        newPM['accomname'] = cdpm.accomname
            || ''
        newPM['accomprice'] = (/(\d+)/.exec(jQ('span.pull-right.text-right:eq(2)').text().trim()) || []).pop()
            || (/(\d+)/.exec(jQ('div.src-flight-calendar div.pika-single table td.is-selected span').text()) || []).pop()
            || 0
         keeps['accomurl'] = (newPM.accomtitle && newPM.accomname && ('http://www.thomascook.de/destinations/'+(newPM.accomtitle || '').replace(/,\s*/g, '/')+'/'+(newPM.accomname || '')).replace(/\s/g, '-').replace(/í/, 'i').replace(/è/, 'e').toLowerCase())
            || cdpm.accomurl
            || ''
            if (encodeURI(keeps.accomurl) !== keeps.accomurl) keeps['accomurl'] = ''
        var dests = newPM.accomtitle && newPM.accomtitle.split(/\//)
            || []
        keeps['accomcountry'] = dests && dests.shift()
            || cdpm.destination
            || cdpm.accomcountry
            || ""
        keeps['accomregion'] = dests && dests.shift()
            ||  cdpm.accomregion
            || ""
        keeps['accomdestrest'] = dests && dests.join(',')
            || cdpm.accomdestrest
            || ""
        newPM['departureairportselected'] = jQ('div.depAirport select.form-control option:selected').attr('value')
            || (/(\w+)\s>/.exec(jQ('div.priceTicket-line:eq(1) span:eq(1)').text()) || ['']).pop()
            || ""
        newPM['destinationairportselected'] = (/>\s(\w+)/.exec(jQ('div.priceTicket-line:eq(1) span:eq(1)').text()) || []).pop()
            || (/(\w{3})/.exec(jQ('span.src-airportCode:eq(1)').text()) || []).pop()
            || ""

        newPM['retdate'] = cdpm.retdate
            || (function retdate(date){
                    'use strict'
                    var retdate = ''
                    if (date) try {
                        var x = new Date(date)
                        var m = x.getUTCMonth(); m++;
                        var d = x.getUTCDate(); d++;
                        retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
                    } catch(e) {}
                    return retdate
                }(jQ('div.containerOverflowMobile div.priceTicket-line [data-test-id=flightOutDate]').text()))
            || ''

        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        newPM['paxadultperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxadultperroom'].push(+(/(\d+)\sAdult/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxchildperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxchildperroom'] .push(+(/(\d+)\sChild/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxinfantperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxinfantperroom'].push(+(/(\d+)\sInfant/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxadult'] = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}())
        newPM['paxchild'] = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}())
        newPM['paxinfant'] = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}())
        newPM['paxtotal'] = parseInt(newPM.paxadult || 0)+parseInt(newPM.paxchild || 0)+parseInt(newPM.paxinfant || 0) || 0

        newPM['pricepp'] = (/(\d+)/i.exec(jQ('span[data-test-id="packagePrice"]').text() || '') || []).pop()
            || jQ('.amount').text()
            || ""
        newPM['rooms'] = jQ('li.src-accomRooms-listItem.clearfix.src-accomRooms-listItem_selected').size()
            || 0
        newPM['roomtype'] = []
            jQ('li.src-accomRooms-listItem.clearfix.src-accomRooms-listItem_selected').each(function(e){newPM['roomtype'].push(jQ(this).attr('data-room'))})

        newPM['starrating'] = cdpm.starrating
            || '0'

         jQ.extend(cdl.CATTParams, newPM, keeps)

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');


    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Accom'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                        CATTDL Cust
********************************************************/
<script>
(function gtm_cattdlCust(jQ, dl, cdl) {
    'use strict'
    if (jQ &&jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        keeps['accomguid'] = cdpm.searches.hotelCode
            || cdpm.searches.hotelId
            || cdpm.searches.productId
            || ck_cdpm.accomguid
            || jQ('input#hotelId').val()
            || (cdl.twls(/hotelid=/i) && (cdl.ewls(/hotelid=([^&]+)/i) || []).pop ())
            || (cdl.twls(/productId=/i) && (cdl.ewls(/productId=([^&]+)/i) || []).pop ())
            || (function gtm_accomGuid(){
                    var slct = jQ('a[href*="productId="]')
                    var pdtID = ''
                    if (slct.length) {
                        var hrf = slct.first().attr('href') || ''
                        if (hrf) {
                            pdtID = /productId=([^&]+)/i.exec(hrf) || []
                            if (pdtID.length) pdtID = pdtID.pop()
                        }
                    }
                    return pdtID
                }())
            || cdpm.accomguid
            || ""

        newPM['accomtitle'] = jQ('.hotelDetails > p:eq(0)').text().trim() && jQ('.hotelDetails > p:eq(0)').text().trim().replace(/,\s*/g, '/')
            || ''
        var dests = (cdpm.accomresort || newPM.accomtitle || '').split(/\//)
            || []
        newPM['accomprice'] = cdpm.bookingvalue
            || jQ('li.total.clearfix.cko-priceTicket-black span.amount:eq(0)').text()
            || ""
        newPM['accomcountry'] = ck_cdpm.accomcountry
            || dests && dests.shift()
            || cdpm.destination
            || ""
        newPM['accomregion'] = ck_cdpm.accomregion
            || dests && dests.shift()
            || ""
        newPM['accomdestrest'] = ck_cdpm.accomdestrest
            || dests && dests.join(',')
            || ""

        newPM['pricepp'] = (jQ('div#priceTicketId .pp span.amount') && jQ('div#priceTicketId .pp span.amount').text())
            || (jQ('div#ticketWrapper .pp span.amount') && jQ('div#ticketWrapper .pp span.amount').text())
            || (jQ('#pricePresentationAvgP') && jQ('#pricePresentationAvgP').text().replace(/\D*/g, ''))
            || ""

        newPM['retdate'] = (function retdate(date){
                    'use strict'
                    var retdate = ''
                    if (date) try {
                        var x = new Date(date)
                        var m = x.getUTCMonth(); m++;
                        var d = x.getUTCDate(); d++;
                        retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
                    } catch(e) {}
                    return retdate
                }(jQ('[data-test-id=departureInboundDate1]').text()))
            || ''

        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        newPM['roomtypes'] = (function getRoomTypes(){var x = [cdpm.room1code]; if (cdpm.room2code){x.push(cdpm.room2code); if (cdpm.room3code){x.push(cdpm.room3code); if (cdpm.room4code){x.push(cdpm.room4code); if (cdpm.room5code){x.push(cdpm.room5code); }}}} return x}())
            || (jQ('div#accommRoomContainer input:checked') || []).length && (function getRoomTypes(elt){var rtypes = []; elt && elt.each(function() {rtypes.push(jQ(this).attr('data-roomcode'))}); return rtypes}(jQ('div#accommRoomContainer input:checked')))
            || (function getRoomTypesSEO(elt){var rtypes = []; elt && elt.each(function() {rtypes.push(jQ(this).attr('id').replace(/[^_]*_[^_]*_([^_]*)_\d+_\d+/g, '$1'))}); return rtypes}(jQ('div#facetDBPaxCombination input:checked')))
            || []

        var accomDetails = jQ('dl.inc span')
            || false
        newPM['accomdetails'] = {
            roomtype     : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
            boardbasis     : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
        }

        newPM['paxadultperroom'] = []
            jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxadultperroom'].push(+(/(\d+)\sAdult/i.exec(jQ(this).text()) || []).pop())})
        newPM['paxchildperroom'] = []
            jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxchildperroom'].push(+(/(\d+)\sChild/i.exec(jQ(this).text()) || []).pop())})
        newPM['paxinfantperroom'] = []
            jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxinfantperroom'].push(+(/(\d+)\sInfant/i.exec(jQ(this).text()) || []).pop())})

        var paxadultarray = []; for (i = 0; i < jQ('div.ticket li').length; paxadultarray.push(+(/(\d+)\sx\sAdult/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
        var paxchildarray = []; for (i = 0; i < jQ('div.ticket li').length; paxchildarray.push(+(/(\d+)\sx\sChild/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
        var paxinfantarray = []; for (i = 0; i < jQ('div.ticket li').length; paxinfantarray.push(+(/(\d+)\sx\sInfant/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
        var paxadulttot1 = (function (){var total = 0; jQ.each(paxadultarray,function() {total += this;}); return total}())
        var paxadulttot2 = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}())
        var paxchildtot1 = (function (){var total = 0; jQ.each(paxchildarray,function() {total += this;}); return total}())
        var paxchildtot2 = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}())
        var paxinfanttot1 = (function (){var total = 0; jQ.each(paxinfantarray,function() {total += this;}); return total}())
        var paxinfanttot2 = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}())

        if (paxadulttot1 !== 0) {newPM['paxadult'] = paxadulttot1}
            else {if(paxadulttot2 !==0) {newPM['paxadult'] = paxadulttot2}
                else {if(cdpm.paxadult !== undefined) {newPM['paxadult'] = cdpm.paxadult}
                    else newPM['paxadult'] = 0}};
        if (paxchildtot1 !== 0) {newPM['paxchild'] = paxchildtot1}
            else {if(paxchildtot2 !==0) {newPM['paxchild'] = paxchildtot2}
                else {if(cdpm.paxchild !== undefined) {newPM['paxchild'] = cdpm.paxchild}
                    else newPM['paxchild'] = 0}};
        if (paxinfanttot1 !== 0) {newPM['paxinfant'] = paxinfanttot1}
            else {if(paxinfanttot2 !==0) {newPM['paxinfant'] = paxinfanttot2}
                else {if(cdpm.paxinfant !== undefined) {newPM['paxinfant'] = cdpm.paxinfant}
                    else newPM['paxinfant'] = 0}};

        var flightDetails = jQ('dl.horizontal.flight-details>dd')
            || false
        var fd_outbound1 = flightDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_outbound2 = flightDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound1 = flightDetails.eq(2).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound2 = flightDetails.eq(3).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []

        newPM['flightdetails'] = {
            outbound     : {
                flight     : fd_outbound1[2] || '',
                depart     : {
                    location     : fd_outbound1[0] || '',
                    date         : fd_outbound1[1] || ''
                },
                arrive     : {
                    location     : fd_outbound2[0] || '',
                    date         : fd_outbound2[1] || ''
                }
            },
            inbound        : {
                flight     : fd_inbound1[2] || '',
                depart     : {
                    location     : fd_inbound1[0] || '',
                    date         : fd_inbound1[1] || ''
                },
                arrive     : {
                    location     : fd_inbound2[0] || '',
                    date         : fd_inbound2[1] || ''
                }
            }
        }

        newPM['touroperator'] = jQ('div.brand span').text()
            || ''

         jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');


    } catch(e ){
        cdl.error('GTM CATTDL Cust: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Cust'})
    }
    return jQ &&jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                        CATTDL Pax
********************************************************/
<script>
(function gtm_cattdlPax(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['accomtitle'] = jQ('.hotelDetails > p:eq(0)').text().trim() && jQ('.hotelDetails > p:eq(0)').text().trim().replace(/,\s*/g, '/')
            || ''
        var dests = (cdpm.accomresort || newPM.accomtitle || '').split(/\//)
            || []
        newPM['accomcountry'] = ck_cdpm.accomcountry
            || dests && dests.shift()
            || cdpm.destination
            || ""
        newPM['accomregion'] = ck_cdpm.accomregion
            || dests && dests.shift()
            || ""
        newPM['accomdestrest'] = ck_cdpm.accomdestrest
            || dests && dests.join(',')
            || ""
        keeps['accomguid'] = cdpm.searches.hotelCode
            || cdpm.searches.hotelId
            || cdpm.searches.productId
            || ck_cdpm.accomguid
            || jQ('input#hotelId').val()
            || (cdl.twls(/hotelid=/i) && (cdl.ewls(/hotelid=([^&]+)/i) || []).pop ())
            || (cdl.twls(/productId=/i) && (cdl.ewls(/productId=([^&]+)/i) || []).pop ())
            || (function gtm_accomGuid(){
                    var slct = jQ('a[href*="productId="]')
                    var pdtID = ''
                    if (slct.length) {
                        var hrf = slct.first().attr('href') || ''
                        if (hrf) {
                            pdtID = /productId=([^&]+)/i.exec(hrf) || []
                            if (pdtID.length) pdtID = pdtID.pop()
                        }
                    }
                    return pdtID
                }())
            || cdpm.accomguid
            || ""
        keeps['pricepp'] = (jQ('div#priceTicketId .pp span.amount') && jQ('div#priceTicketId .pp span.amount').text())
            || (jQ('div#ticketWrapper .pp span.amount') && jQ('div#ticketWrapper .pp span.amount').text())
            || (jQ('#pricePresentationAvgP') && jQ('#pricePresentationAvgP').text().replace(/\D*/g, ''))
            || ""

        newPM['retdate'] = (function retdate(date){
                    'use strict'
                    var retdate = ''
                    if (date) try {
                        var x = new Date(date)
                        var m = x.getUTCMonth(); m++;
                        var d = x.getUTCDate(); d++;
                        retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
                    } catch(e) {}
                    return retdate
                }(jQ('[data-test-id=departureInboundDate1]').text()))
            || ''

        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        var accomDetails = jQ('dl.inc span')
            || false
        newPM['accomdetails'] = {
            roomtype     : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
            boardbasis     : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
        }
        var flightDetails = jQ('dl.horizontal.flight-details>dd')
            || false
        var fd_outbound1 = flightDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_outbound2 = flightDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound1 = flightDetails.eq(2).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound2 = flightDetails.eq(3).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        newPM['flightdetails'] = {
            outbound     : {
                flight     : fd_outbound1[2] || '',
                depart     : {
                    location     : fd_outbound1[0] || '',
                    date         : fd_outbound1[1] || ''
                },
                arrive     : {
                    location     : fd_outbound2[0] || '',
                    date         : fd_outbound2[1] || ''
                }
            },
            inbound        : {
                flight     : fd_inbound1[2] || '',
                depart     : {
                    location     : fd_inbound1[0] || '',
                    date         : fd_inbound1[1] || ''
                },
                arrive     : {
                    location     : fd_inbound2[0] || '',
                    date         : fd_inbound2[1] || ''
                }
            }
        }
         jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);

         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');


    } catch(e) {
        cdl.error('GTM CATTDL Pax: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pax'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                        CATTDL Pay
********************************************************/
<script>
(function gtm_cattdlPay(jQ, dl, cdl) {
    'use strict'
    if (jQ &&jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['retdate'] = (function retdate(date){
                    'use strict'
                    var retdate = ''
                    if (date) try {
                        var x = new Date(date)
                        var m = x.getUTCMonth(); m++;
                        var d = x.getUTCDate(); d++;
                        retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
                    } catch(e) {}
                    return retdate
                }(jQ('[data-test-id=departureInboundDate1]').text()))
            || ''

        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        newPM['accomtitle'] = jQ('.hotelDetails > p:eq(0)').text().trim() && jQ('.hotelDetails > p:eq(0)').text().trim().replace(/,\s*/g, '/')
            || ''
        var dests = (cdpm.accomresort || newPM.accomtitle || '').split(/\//)
            || []
        newPM['accomcountry'] = ck_cdpm.accomcountry
            || dests && dests.shift()
            || cdpm.destination
            || ""
        newPM['accomregion'] = ck_cdpm.accomregion
            || dests && dests.shift()
            || ""
        newPM['accomdestrest'] = ck_cdpm.accomdestrest
            || dests && dests.join(',')
            || ""
        keeps['accomguid'] = cdpm.searches.hotelCode
            || cdpm.searches.hotelId
            || cdpm.searches.productId
            || ck_cdpm.accomguid
            || jQ('input#hotelId').val()
            || (cdl.twls(/hotelid=/i) && (cdl.ewls(/hotelid=([^&]+)/i) || []).pop ())
            || (cdl.twls(/productId=/i) && (cdl.ewls(/productId=([^&]+)/i) || []).pop ())
            || (function gtm_accomGuid(){
                    var slct = jQ('a[href*="productId="]')
                    var pdtID = ''
                    if (slct.length) {
                        var hrf = slct.first().attr('href') || ''
                        if (hrf) {
                            pdtID = /productId=([^&]+)/i.exec(hrf) || []
                            if (pdtID.length) pdtID = pdtID.pop()
                        }
                    }
                    return pdtID
                }())
            || cdpm.accomguid
            || ""
        keeps['address'] = (function gtm_getPII(pl){
            var pii = {}
            if (pl){
                pii['title'] = jQ('select[name="passengerListForm[0].passengerTitle"]') && jQ('select[name="passengerListForm[0].passengerTitle"]').val()  || ''
                pii['name'] = jQ('input[name="passengerListForm[0].firstName"]') && jQ('input[name="passengerListForm[0].firstName"]').val() || ''
                pii['surname'] = jQ('input[name="passengerListForm[0].lastName"]') && jQ('input[name="passengerListForm[0].lastName"]').val() || ''
                pii['dob'] = jQ('select[name*="passengerListForm[0]"]').length > 3 && (jQ('select[name*="passengerListForm[0]"]:eq(1)').val()+' '+jQ('select[name*="passengerListForm[0]"]:eq(2)').val()+' '+jQ('select[name*="passengerListForm[0]"]:eq(3)').val()) || ''
            } else {
                var names = (/(.*)/i.exec($('div[data-test-id=room1Person1] p.paxContextDetail[data-test-id=room1Person1Details]').text().trim()) || ['','','']).pop().split(/\s/)
                pii['title'] = names[0] || ''
                pii['name'] = names[1] || ''
                pii['surname'] = names[names.length-1] || ''
                pii['yob'] = (/\s(\d{4})/i.exec(jQ('div[data-test-id=room1Person1] p.paxContextDetail[data-test-id=room1Person1Details]').text()) || []).pop() || ''
                pii['dob'] =  pii.yob || ''

            }
            return pii || {}
        }(jQ('input[name*=passengerListForm]') && jQ('input[name*=passengerListForm]').length || 0))

        jQ.extend(keeps.address, (function getPostal(lap){
            var postal = {}
            if (lap && lap.length > 6){
                postal['house'] = jQ('input#houseNameNumber') && jQ('input#houseNameNumber').val() || ''
                postal['street1'] = jQ('input#streetAddress') && jQ('input#streetAddress').val() || ''
                postal['city'] = jQ('input#city') && jQ('input#city').val() || ''
                postal['postcode'] = jQ('input#postCode') && jQ('input#postCode').val() || ''
                postal['email'] = jQ('input#contactEmail') && jQ('input#contactEmail').val() || ''
                postal['phone'] = jQ('input#contactNumber') && jQ('input#contactNumber').val() || ''
            } else {
                var jQpax = jQ('h5.paxAgeRange')
                var posts = (jQpax.filter(function(e, i){return /Address/i.test($(i).text())}).next().text().trim() || '').split(/\n/)
                postal['house'] = posts && (/^([^\s]+)/i.exec((posts[0] || '').trim()) || ['']).pop() || ''
                postal['street1'] = posts && (/^[^\s]+\s(.*)$/i.exec((posts[0] || '').trim()) || ['']).pop() || ''
                postal['city'] = posts && (posts[1] || '').trim() || ''
                postal['postcode'] = posts && (posts[posts.length-1] || '').trim() || ''
                postal['email'] = jQpax.filter(function email(e, i){return /Email/i.test($(i).text())}).next().text() || ''
                postal['phone'] = jQpax.filter(function phone(e, i){return /Phone/i.test($(i).text())}).next().text() || ''
            }
            return postal || {}
        }(jQ('[data-toggle=formTip]') || [])))

        var accomDetails = jQ('dl.inc span')
            || false
        newPM['accomdetails'] = {
            roomtype     : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
            boardbasis     : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
        }
        var flightDetails = jQ('dl.horizontal.flight-details>dd')
            || false
        var fd_outbound1 = flightDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_outbound2 = flightDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound1 = flightDetails.eq(2).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound2 = flightDetails.eq(3).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        newPM['flightdetails'] = {
            outbound     : {
                flight     : fd_outbound1[2] || '',
                depart     : {
                    location     : fd_outbound1[0] || '',
                    date         : fd_outbound1[1] || ''
                },
                arrive     : {
                    location     : fd_outbound2[0] || '',
                    date         : fd_outbound2[1] || ''
                }
            },
            inbound        : {
                flight     : fd_inbound1[2] || '',
                depart     : {
                    location     : fd_inbound1[0] || '',
                    date         : fd_inbound1[1] || ''
                },
                arrive     : {
                    location     : fd_inbound2[0] || '',
                    date         : fd_inbound2[1] || ''
                }
            }
        }

         jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
          cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');
    } catch(e) {
        cdl.error('GTM CATTDL Pay: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pay'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                        CATTDL Conf
********************************************************/
<script>
(function gtm_cattdlConf(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['retdate'] = (function retdate(date){
                    'use strict'
                    var retdate = ''
                    if (date) try {
                        var x = new Date(date)
                        var m = x.getUTCMonth(); m++;
                        var d = x.getUTCDate(); d++;
                        retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
                    } catch(e) {}
                    return retdate
                }(jQ('[data-test-id=departureInboundDate1]').text()))
            || ''

        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        newPM['cardtype'] = cdpm.cardtype
            || jQ('#payHoliday .clearfix:eq(0) div') && (jQ('#payHoliday .clearfix:eq(0) div').text() || '').replace(/\scredit\scard$/i, '')
            || ""
        newPM['voucher'] = cdpm.voucher
            || window.sessionStorage && window.sessionStorage.getItem('vch')
            || cdl.ckget && cdl.ckget('vch')
            || ''
        keeps['accomguid'] = cdpm.searches.hotelCode
            || cdpm.searches.hotelId
            || cdpm.searches.productId
            || ck_cdpm.accomguid
            || jQ('input#hotelId').val()
            || (cdl.twls(/hotelid=/i) && (cdl.ewls(/hotelid=([^&]+)/i) || []).pop ())
            || (cdl.twls(/productId=/i) && (cdl.ewls(/productId=([^&]+)/i) || []).pop ())
            || (function gtm_accomGuid(){
                    var slct = jQ('a[href*="productId="]')
                    var pdtID = ''
                    if (slct.length) {
                        var hrf = slct.first().attr('href') || ''
                        if (hrf) {
                            pdtID = /productId=([^&]+)/i.exec(hrf) || []
                            if (pdtID.length) pdtID = pdtID.pop()
                        }
                    }
                    return pdtID
                }())
            || cdpm.accomguid
            || ""

        newPM.address = {};
        var cellTitle = jQ('.cell.title .input') || []
        var addressDetails = jQ('div#addressDetails') || []
        if (cellTitle.length) {
            newPM.address['title'] = cellTitle.text() || ''
            newPM.address['name'] = jQ('.cell.firstName .input').text() || ''
            newPM.address['surname'] = jQ('.cell.surName .input').text().trim() || ''
            newPM.address['email'] = jQ('.cell.email .input').text() || ''
            newPM.address['phone'] = jQ('.cell.contactNumber .input').text() || ''
            newPM.address['dob'] = jQ('div#passengerDetails td.last:eq(0)').text() || ''
        } else {
            var names = jQ('div.contact dt').text().trim().split(/\W+/)
            newPM.address['title'] = names[0] || ''
            newPM.address['name'] = names[1] || ''
            newPM.address['surname'] = names[names.length-1] || ''
        }
        if (addressDetails.length){
            var nameInput = addressDetails.find('div.input') && addressDetails.find('div.input').text() && addressDetails.find('div.input').text().split(/\s*\n\s*/g) || []
            if (nameInput.length) nameInput = nameInput.filter(function filternameinput(i) {return i.length})
            newPM.address['title'] = nameInput.length && nameInput[0] || ''
            newPM.address['name'] = (nameInput.length > 1) && nameInput[1] || ''
            newPM.address['surname'] = (nameInput.length > 2) && nameInput[2] || ''

            var addressInput = addressDetails.find('div.addressOrder label')
            if (addressInput) addressInput = addressInput.map(function filteraddressinput(e, f){ return jQ(f).text()})
            newPM.address['house'] = addressInput.length && addressInput[0] || ''
            newPM.address['street1'] = (addressInput.length > 1) && addressInput[1] || ''
            newPM.address['street2'] = ''
            newPM.address['city'] = (addressInput.length > 2) && addressInput[2] || ''
            newPM.address['postcode'] = (addressInput.length > 3) && addressInput[3] || ''
            newPM.address['state'] = ''
        }  else {
            var jQpax = jQ('div.contact dd.gray')
            var streets = jQpax.eq(0).text().split(/\W+/)
            newPM.address['house'] = streets && streets[0] || ''
            newPM.address['street1'] = streets && streets.shift() && streets.join(' ') || ''
            var posts = jQpax.eq(1).text().split(/\W+/)
            newPM.address['city'] = posts && posts[1] || ''
            newPM.address['postcode'] = posts && posts.slice(-2).join(' ') || ''
            newPM.address['email'] = jQpax.eq(3).text() || ''
            newPM.address['phone'] = jQpax.eq(2).text() || ''
        }

         jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
         cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.condor.com');


    } catch(e) {
        cdl.error('GTM CATTDL Conf: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Conf'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

/*******************************************************
                CATTDL Attribution LP
********************************************************/
(function gtm_attribtionLP(jQ, cdl) {
    'use strict'
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams.searches
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            attrs.push([
                cdsr.gclid || '',
                cdsr.utm_medium || '',
                cdsr.utm_campaign || '',
                cdsr.utm_content || '',
                cdsr.utm_source || '',
                Date.now() || ''
            ])
        }
         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.condor.com')
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e)
    }
    return cdl
}(window.jQuery, window.CATTDL))

/*******************************************************
                CATTDL Attribution Conf
********************************************************/
(function gtm_attribution(cdl) {
    'use strict';
    if (cdl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /afflong|met|part|affdirect|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function landFilter(e){return paidChannels.test(e[1])}).filter(function channelFilter(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdl.CATTParams['attribution'] = {
                gclid             : vL[0] || '',
                utm_medium         : vL[1] || '',
                utm_campaign     : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source         : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date              : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/afflong/i).test(m)) winningCampaign = 'afflong';
            else if ((/met/i).test(m)) winningCampaign = 'affmeta';
            else if ((/affdirect|part/i).test(m)) winningCampaign = 'affdirect';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dataLayer.push({event: 'Attribution '+winningCampaign});
             cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.condor.com')
        }
    } catch(e){
        cdl.error('GTM Attr: '+e)
    }
    return cdl.CATTParams.attribution || !1
}(window.CATTDL))
