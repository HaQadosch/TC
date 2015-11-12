//<script id='gtm_CATTDLcore'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    if ( jQ && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '');}) ) {
        try {
            w.CATTDL = w.CATTDL || {};
            var cdpm = w.CATTDL.CATTParams || {};
            if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};}

            w.CATTDL = {
                twlh    : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host);},
                twdc    : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie);},
                ewdc    : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie);},
                twls    : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search);},
                ewls    : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search);},
                gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());},
                gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));},
                ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;},
                ckset   : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) { return false; }
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
                post    : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;";},
                get     : function get(key) {
                    var regKey = new RegExp(key+'=([^;]*)', 'i');
                    return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false;
                },
                info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg;},
                error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg;}
            };

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
            cdpm.poolcontrol = cdpm.poolcontrol || !((cdpm && cdpm.utmaguid || 1)%20);

            if (!cdpm.pageid && /srv-search\/accom|destinations/i.test(window.location.pathname)) cdpm.pageid = 'accom';
            else if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid) cdpm.pageid = 'home';

            cdpm.errors = cdpm.errorcode || '';
            cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || '';
              cdpm.pagetimestamp = Date.now();

            if (jQ.subscribe){
                jQ.subscribe('updateUserData', function gtm_updateUserData(d){
                        if (/test=test/i.test(document.cookie)) console.info('GTM updateUserData updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                        cdpm = window.CATTDL && window.CATTDL.CATTParams || {};
                        cdpm.user = {};
                        cdpm.user.action = d && d.action || "";
                        cdpm.user.msg = d && d.data && d.data.id || d.data && d.data.data || "";
                        dl && dl.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                        window.gatcDL && window.gatcDL.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                    });
            }
            window.CATTDL.CATTParams = cdpm;
        } catch(e) {
            var msg = 'GTM CATTDL Core: '+e; console && ((console.error)?console.error(msg):console.log(msg));
        } finally {
            if (/accom/i.test(window.CATTDL && window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || '')) {
                setTimeout(function(){dl.push({'event': 'core_'+cdpm.pageid});}, 500);
            } else
              dl.push({'event': 'core_'+(window.CATTDL && window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || '')});
        }
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer));
//</script>




<script id='gtm_cattdlCore'>
(function gtm_cattdlCore(jQ, w, dl, loc) {
    'use strict';
    setTimeout(function(){
        if (jQ) try{
            w.CATTDL = w.CATTDL || {}
            var cdpm = w.CATTDL.CATTParams || {};
            cdpm.domevents = {};

            w.CATTDL = {
                twlh     : function twlh(rg) {return RegExp.prototype.test.call(rg, loc.host)},
                twdc     : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
                ewdc     : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
                twls     : function twls(rg) {return RegExp.prototype.test.call(rg, loc.search)},
                ewls     : function ewls(rg) {return RegExp.prototype.exec.call(rg, loc.search)},
                gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
                gatime    : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
                ckget     : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
                ckset     : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                    var sExpires = ""
                    if (vEnd) {switch (vEnd.constructor) {
                            case Number: sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd; break;
                            case String: sExpires = "; expires=" + vEnd; break;
                            case Date: sExpires = "; expires=" + vEnd.toUTCString(); break;
                            }}
                    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "")
                    return true
                },
                post     : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;"},
                get     : function get(key) {
                    var regKey = new RegExp(key+'=([^;]*)', 'i')
                    return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false
                },
                info     : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
                error     : function error(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg}
            };

            if ($.subscribe) {
                $.subscribe('updatePageData', function gtm_updatePageData(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM updatePageData updated', '\n', d, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData(), '\n', 'pathname is ', (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname));
                    if (d && d.error) {
                        dataLayer.push({'event': 'updatePageData_error'})
                        gatcDL.push({'event': 'updatePageData_error'})
                    } else if (d && d.errorCode && /payment/i.test(location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname)) {
                        dataLayer.push({'event': 'updatePageData_errorPayment'})
                        gatcDL.push({'event': 'updatePageData_errorPayment'})
                    } else if (d && d.id == "pax-go-to-passenger-details-is-valid") {
                        dataLayer.push({'event': 'updatePageData_addpax'})
                        gatcDL.push({'event': 'updatePageData_addpax'})
                    } else if (d && !d.carouselItems) {
                        dataLayer.push({'event': 'updatePageData'})
                        gatcDL.push({'event': 'updatePageData'})
                    }
                });
                $.subscribe('PageView', function gtm_PageView(d) {
                       if (/test=test/i.test(document.cookie)) console.info('GTM PageView updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                       dataLayer.push({'event': 'PageView'+"_"+(d && d.page || (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop()) || loc.pathname)});
                       gatcDL.push({'event': 'PageView'+"_"+(d && d.page || (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop()) || location.pathname)});
                });
                $.subscribe('domEvent', function gtm_domEvent(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM domEvent updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                    cdpm = window.CATTDL.CATTParams
                    cdpm.domevents = d;
                    dataLayer.push({'event': 'domEvent'+"_"+(cdpm.domevents && cdpm.domevents.id || "")})
                    gatcDL.push({'event': 'domEvent'+"_"+(cdpm.domevents && cdpm.domevents.id || "")})
                });
                $.subscribe('updateUserData', function gtm_updateUserData(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM updateUserData updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                    cdpm = window.CATTDL.CATTParams
                    cdpm.user = {};
                    cdpm.user.action = d && d.action || "";
                    cdpm.user.msg = d && d.data && d.data.id || d.data && d.data.data || "";
                    dataLayer.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                    gatcDL.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                });
                $.subscribe('error', function gtm_error(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM error updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                    dataLayer.push({'event': 'jserror'})
                    gatcDL.push({'event': 'jserror'})
                });

                cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
                    || '';
                cdpm['poolcontrol'] = cdpm.poolcontrol
                    || !((cdpm && cdpm.utmaguid || 1)%20);
                window.CATTDL.CATTParams = cdpm;

            } else console.log('GTM $.subsribe undefined');
        } catch(e) {
            var msg = 'GTM CATTDL Core: '+e;
            console && ((console.error)?console.error(msg):console.log(msg))
        } finally {
            dl.push({'event': 'dl core'});
        }
        return w.CATTDL
    }, 1000)
}(window.jQuery, window, window.dataLayer, document.location))
</script>

<script>
(function gtm_cattdlNewView(jQ, w, dl, cdl, loc) {
    'use strict';
    setTimeout(function cattNewView() {
        if (jQ && cdl) try {
            var cdpm = cdl.CATTParams || {}
            var keeps = {}
            var locpathname = loc.pathname == '/' && /#!/i.test(loc.hash) && (/([^#!][^?]*)/i.exec(loc.hash) || ['']).pop() || loc.pathname
            var wgetData = w.getPageData && w.getPageData(locpathname) || {}

            //Set previous pageid
            /*window.sessionStorage.setItem('gtm_previouspageid', cdpm.pageid || '')*/
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            params.previouspageid = cdpm.pageid || '';
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.thomascook.com');

            //Not keeping all params from the previous view. Refreshing CATTParams.
            var refreshparams = [
                "abtanumber"
                , "consultantref"
                , "dreamcapturerid"
                , "emailguid"
                , "ecircleid"
                , "gaguid"
                , "utmaguid"
                , "utmbguid"
                , "urlparams"
                , "domevents"
                , "device"
                , "poolcontrol"
            ]
            var cdpmkeys = Object.keys(cdpm);

            if (!/\/packages\//i.test(locpathname) || (wgetData && wgetData.details && wgetData.matrix)) {
                for (var i in cdpmkeys){
                    var reg = new RegExp(cdpmkeys[i], 'i');
                    if (!reg.test(refreshparams.join('|'))) delete cdpm[cdpmkeys[i]]
                };
            }

            //url & cookies
            var refurl = cdpm.urlparams && cdpm.urlparams.fullurl || "";
            cdpm.urlparams = {};
            cdpm.urlparams.paramstring = "";
            var cdurl = cdpm.urlparams;
            if (/\/#\!\//.test(loc.href)) {
                cdurl.paramstring = (/([?].*)/.exec(loc.hash) || []).pop();
                cdurl.fullurl = loc.href.replace(/#\!\//,'') || "";
            } else {
                 cdurl.paramstring = loc.search;
                cdurl.fullurl = loc.href || "";
            };
                cdurl.pathname = locpathname;
                ((cdurl && cdurl.fullurl).split(/\?|&|#/g).slice(1)).forEach(function urlparams(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) {cdurl[cur[1]]=cur[2]} });
                cdurl.referrer = refurl || document.referrer ||  "";
            cdpm.urlparams = cdurl;

            cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]})
            cdpm['gaguid'] = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || ""
            cdpm['utmaguid'] = cdpm.utmaguid || (cdpm.cookies && cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) || []).pop() || ""
            cdpm['utmbguid'] = cdpm.utmbguid || cdpm.cookies && cdpm.cookies.__utmb || ""
            cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');

            //define pageid based on url
            cdpm['pageid'] = ({
                'search'            : 'search',
                'searchresults-map' : 'searchmap',
                'holidays'            : 'searchseo',
                'packages'            : 'accom',
                'customize'         : 'cust',
                'pax'                 : 'pax',
                'payment'             : 'pay',
                'confirmation'      : 'booking',
                'process-payment'     : 'secure',
                ''                  : 'home'
            })[(/\/([^\/]*)/i.exec(locpathname) || ['']).pop()];

            //journey steps path
            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')
            if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
                var steps = (ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/) || []).filter(function steps(e){return e})
                var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
                if (lastSteps[1] === cdpm.pageid)
                    lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
                else
                    lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
                keeps['trailingsteps'] = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps
            } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

            var domainName = ({
                'airtours':'.airtours.co.uk',
                'club18-30':'.club18-30.com',
                'eceit':'staging.eceit.net',
                'directholidays':'.directholidays.co.uk',
                'thomascook':'.thomascook.com'
            })[((/([^\.]*).co.uk|([^\.]*).com|([^\.]*).net/i.exec(location.hostname) || []).filter(function hostname(e){return e}) || ['thomascook']).pop()];

            if (cdurl) {
            cdpm['internalcampaignid'] = cdurl.intcmp || (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['optimostcreative'] = window.opCreative || ""
            cdpm['emailguid'] = cdurl.user_id || (w.CATTDL.ewls(/user_id=([^&]*)/i) || []).pop() || ""
            cdpm['ecircleid'] =  cdurl.user_id ||(w.CATTDL.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['dreamcaptureid'] =  cdpm.urlparams.dc_id || (w.CATTDL.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop()  || ""
            cdpm['abtanumber'] = cdurl.abtaNumber || (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['consultantref'] =  cdurl.consultantRef || (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['qsearchedkeyword'] = cdurl.q || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || ""
            }
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
             jQ.extend(cdl.CATTParams, keeps);
             cdpm.pageid = cdpm.pageid || 'home';

             window.CATTDL.CATTParams = cdpm
        } catch(e) {
            w.CATTDL.error('GTM CATTDL New View: '+e)
        } finally {
            dl.push({'event': 'core_'+(cdpm.pageid || 'home')});
        }
        return w.CATTDL
    }, 500)
}(window.jQuery, window, window.dataLayer, window.CATTDL, document.location))
</script>
