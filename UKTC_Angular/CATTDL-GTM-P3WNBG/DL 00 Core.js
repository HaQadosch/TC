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
                    cdpm.user.msg = d && d.data && (d.data.id || d.data.data && d.data.data.message || d.data.statusText) || "";
                    cdpm.user.id = d && d.data && d.data.id || "";
                    dataLayer.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                    gatcDL.push({'event': 'updateUserData'+"_"+(d && d.action || '')});
                });
                $.subscribe('error', function gtm_error(d){
                    if (/test=test/i.test(document.cookie)) console.info('GTM error updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                    dataLayer.push({'event': 'jserror'})
                    gatcDL.push({'event': 'jserror'})
                });             
            } else console.log('GTM $.subsribe undefined');

            cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
                    || '';
            cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
            window.CATTDL.CATTParams = cdpm;
                
            //UA call
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');  
            
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
