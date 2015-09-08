//<script id='gtm_cattdlCore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    var cdpm = {};
    if (jQ && dl) try {
        w.CATTDL = w.CATTDL || {};
        cdpm = w.CATTDL.CATTParams || {};
        if (!String.prototype.trim) {String.prototype.trim=function trim() {return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            twlh     : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host)},
            twdc     : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
            ewdc     : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
            twls     : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search)},
            ewls     : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search)},
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
            post     : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.hotels4u.com;"},
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
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270) || "";
                else if (/accomcode|accomresort|accomname|destination|boardbasis/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });
        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function eachcookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function eachsearches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});

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
        cdpm['landingtimestamp'] = (function gtm_LPTimeStamp(){
            var tstp = '';
            if (!/tstp=/i.test(document.cookie)){
                document.cookie = 'tstp=done';
                tstp = new Date(Date.now()).toLocaleString() || '';
                tstp = /\//i.test(tstp)
                    && (/(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp) && /(\d\d\/\d?\d\/\d\d\d?\d?\s\d\d\:\d?\d\:\d\d)/i.exec(tstp).pop() || '') // Chrome && FFOX
                    || (/(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp) && /(\d?\d\s\w+\s\d\d\d\d\s\d\d:\d?\d:\d\d)/i.exec(tstp).pop() || ''); // IE
            }
            return tstp;
        }());


        if (/^\/$/i.test(window.location.pathname)) cdpm.pageid = 'home';
        else if (/^\/search\//i.test(window.location.pathname)) cdpm.pageid = 'search';
        else if (/^\/hotel\//i.test(window.location.pathname) && !/accom/i.test(cdpm.pageid)) cdpm.pageid = 'search';
        else if (/^\/hotelinfo\.aspx/i.test(window.location.pathname)) cdpm.pageid = 'accom';
        else if (/^\/summaryhotel\.aspx/i.test(window.location.pathname)) cdpm.pageid = 'paxpay';
        else if (/^\/bookingdetails\.aspx/i.test(window.location.pathname)) cdpm.pageid = 'booking';
        else if (!cdpm.pageid) cdpm.pageid = 'generic';

         cdpm['errors'] = cdpm.errorcode
             || '';

         window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e;
        console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'core_'+cdpm.pageid});
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer))
//</script>


//<script id='gtm_cattdlConf'>
(function gtm_cattdlConf(jQ, dl, cdl) {
    'use strict';
    if (jQ &&jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams || '';
        var keeps = {};

        cdpm['bookingref'] = cdpm.bookingref
            || jQ('#ctl00_cp1_hdnBookingRef').val()
            || '';

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/).filter(function steps(e){return e});
            var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop());
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')';
            else
                lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
            keeps['trailingsteps'] = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps;
        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        var hdnParams = jQ('#body-container-body') || [];
        cdpm['fclid'] = cdpm.fclid
            || hdnParams.find('input[id$=hdnFclid]').val()
            || "";
        cdpm['accomguid'] = cdpm.accomguid
            || cdpm.accomcode
            || hdnParams.find('input[id$=hdnHotelRef]').val()
            || "";
        cdpm['city'] = cdpm.city
            || hdnParams.find('input[id$=hdnCity]').val()
            || "";
        cdpm['country'] = cdpm.country
            || hdnParams.find('input[id$=hdnHotelCountry]').val()
            || "";
        cdpm['currency'] = cdpm.currency
            || hdnParams.find('input[id$=hdnCurrency]').val()
            || jQ('button.btn#selectedCurrencyCodeButton').text()
            || "";

        cdpm['bookingvalue'] = ''+Math.max(cdpm.bookingvalue || '', (jQ('div.section.section-price b:eq(0)').text() || '').replace('GBP', ''))

        cdpm['starrating'] = cdpm.starrating
            || hdnParams.find('input[id$=hdnStarRating]').val()
            || "";
        cdpm['depdate'] = cdpm.depdate
            || hdnParams.find('input[id$=hdnCheckin]').val()
            || "";
        cdpm['retdate'] = cdpm.retdate
            || hdnParams.find('input[id$=hdnCheckout]').val()
            || "";
        cdpm['accomname'] = cdpm.accomname
            || hdnParams.find('input[id$=hdnHotelName]').val()
            || "";

        jQ.extend(cdpm, keeps);
        jQ.extend(ck_cdpm, keeps);
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.hotels4u.com');

    } catch(e) {
        cdl.error('GTM CATTDL Conf: '+e);
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Conf'});
    }
    return jQ &&jQ.extend && cdl;
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
