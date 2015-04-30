//<script id='gtm_core'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    if (jQ && dl) try {
        w.CATTDL = w.CATTDL || {};
        var cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            twlh     : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host)},
            twdc     : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
            ewdc     : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
            twls     : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search)},
            ewls     : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search)},
            gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
            gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
            ckget     : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
            ckset     : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
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
            post     : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i');
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false;
            },
            info     : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error     : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
        };

        w.CATTParams && jQ.each(w.CATTParams, function gtm_eachCATTParam(pP){
            var pp = pP.toLowerCase();
            var checked = "";
            if (!cdpm[pp] || cdpm[pp] !== w.CATTParams[pP]){
                checked = w.CATTParams[pP];
                if (/string/i.test(typeof checked)) checked = checked.trim();
                if (/accomcode/i.test(pp)) checked = checked.toLowerCase().replace(/\|/g, '-') || "generic";
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase().replace(/accommodation/, 'hotel') || "generic";
                if (/holidaytype/i.test(pp)) checked = checked.toLowerCase().replace(/accommodation/, 'hotel') || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270) || "";
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });

        var pn = location.pathname || '';
        var dr = document.referrer || '';
        var lh = location.href || '';
        if (/thomascook.com\/hotels\//i.test(dr) || /accom\/Results/i.test(pn)) {
            cdpm.lob = 'hotel';
            cdpm.holidaytype = 'hotel';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'hotel|hotel', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/flights\//i.test(dr) || /flights\/Results/i.test(pn)) {
            cdpm.lob = 'flight';
            cdpm.holidaytype = 'flight';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'flight|flight', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/holidays\/city-breaks\//i.test(dr) || /blended\/Results\.html\?resort=/i.test(lh) || /city-breaks\/Results\.html/i.test(lh)) {
            cdpm.lob = 'epackage';
            cdpm.holidaytype = 'citybreaks';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'epackage|citybreaks', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/holidays\/flight-hotel\//i.test(dr) || /blended\/Results\.html\?resort[^=]/i.test(lh) || /blended\/Results\.html\?arrival_point/i.test(lh)) {
            cdpm.lob = 'epackage';
            cdpm.holidaytype = 'epackage';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'epackage|epackage', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/eurostar\//i.test(dr) || /eurostar\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'eurostar';
            cdpm.holidaytype = 'eurostar';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'eurostar|eurostar', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/eurostar-hotel\//i.test(dr) || /eurostar-hotel\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'epackage';
            cdpm.holidaytype = 'eurostar';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'epackage|eurostar', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/fly-cruise\//i.test(dr) || /fly-cruise\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'epackage';
            cdpm.holidaytype = 'flycruise';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'epackage|flycruise', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/ski\//i.test(dr) || /ski\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'epackage';
            cdpm.holidaytype = 'ski';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'epackage|ski', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/carhire\//i.test(dr) || /carhire\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'carhire';
            cdpm.holidaytype = 'carhire';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'carhire|carhire', null, '/', '.thomascook.com');
        } else if (/thomascook.com\/transfers\//i.test(dr) || /transfers\/N?o?Results.html/i.test(pn)) {
            cdpm.lob = 'transfers';
            cdpm.holidaytype = 'transfers';
            cdpm.pageid = 'search';
            CATTDL.ckset('multicom_orig', 'transfers|transfers', null, '/', '.thomascook.com');
        } else if (!/checkout/i.test(pn)) {
            CATTDL.ckset('multicom_orig', (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''), null, '/', '.thomascook.com');
        } else if (/checkout/i.test(pn)) {
            var cv = CATTDL.ckget('multicom_orig') || '';
            cv = cv.split('|');
            cdpm.lob = cv[0];
            cdpm.holidaytype = cv.length > 1 && cv[1] || cdpm.holidaytype || 'generic';
            cdpm.pageid = /UpsellPage/i.test(pn)?'cust':(/PassengerDetails/i.test(pn)?'paxpay':cdpm.pageid);
        } else if (/accom\/Results\.html/i.test(location.pathname)) {
            cdpm.lob = 'hotel';
            cdpm.holidaytype = 'hotel';
        }

        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});

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

        if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid ) cdpm.pageid = 'home';

         cdpm['errors'] = cdpm.errorcode
             || '';
        cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
            || '';

        cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');

         window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e; console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'core_'+cdpm.pageid});
    }
    return jQ && dl && w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer))
</script>
