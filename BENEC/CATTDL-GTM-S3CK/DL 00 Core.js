<script>
//jQuery plugin
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
</script>

<script>
(function gtm_cattdlCore(w, dl, loc, jQ) {
    'use strict';
    //setTimeout(function(){
    if (jQ) {
        try{
            w.CATTDL = w.CATTDL || {};
            var cdpm = w.CATTDL.CATTParams || {};
            var ctpm = w.CATTParams || {};
            var keeps = {};

            w.CATTDL = {
                twlh    : function twlh(rg) {return RegExp.prototype.test.call(rg, loc.host)},
                twdc    : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
                ewdc    : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
                twls    : function twls(rg) {return RegExp.prototype.test.call(rg, loc.search)},
                ewls    : function ewls(rg) {return RegExp.prototype.exec.call(rg, loc.search)},
                gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
                gatime  : function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
                ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
                ckset   : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
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
                post    : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;"},
                get     : function get(key) {
                    var regKey = new RegExp(key+'=([^;]*)', 'i')
                    return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false
                },
                info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
                error   : function error(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg}
            };



            //journey steps path
            var ck_cdpm = JSON.parse(CATTDL.ckget('gtm_cdpm') || '{}')
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
                'neckermann':'.neckermann.be',
                'thomascookairlines':'.thomascookairlines.be'
            })[((/([^\.]*).be|([^\.]*).com|([^\.]*).net/i.exec(location.hostname) || []).filter(function hostname(e){return e}) || ['neckermann']).pop()];

            cdpm['cookies'] = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
            cdpm['searches'] = {}; (document.location.href.split(/\?|&|#/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});
            cdpm['gaguid'] = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || "";
            cdpm['utmaguid'] = cdpm.utmaguid || (cdpm.cookies && cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) || []).pop() || "";
            cdpm['utmbguid'] = cdpm.utmbguid || cdpm.cookies && cdpm.cookies.__utmb || "";
            cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');
            cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
                || '';

            cdpm['lob'] = (({
                'algemeen'              : 'general'
                ,'packagae'             : 'flightpackage'
                ,'vliegvakanties'       : 'flightpackage'
                ,'flightpackage'        : 'flightpackage'
                ,'dichtbijvakanties'    : 'nearby'  
                ,'hotelonly'            : 'hotel'                           
            })[ctpm.LOB] || ctpm.LOB || 'generic').toLowerCase();          
            cdpm['holidaytype'] = (({
                'algemeen'              : 'general'
                ,'vliegvakanties'       : 'flightpackage'
                ,'flightpackage'        : 'flightpackage'
                ,'car'                  : 'carholidays'
                ,'dichtbijvakanties'    : 'nearby'
                ,'hotelonly'            : 'hotel'
                ,'promotie'             : 'offer'
                ,'flight-neckermann'    : 'flight'
            })[ctpm.HolidayType] || ctpm.HolidayType || 'generic').toLowerCase();            
            cdpm['initialholidaytype'] = (({
                'algemeen'              : 'general'
                ,'vliegvakanties'       : 'flightpackage'
                ,'flightpackage'        : 'flightpackage'
                ,'car'                  : 'carholidays'
                ,'dichtbijvakanties'    : 'nearby'
                ,'hotelonly'            : 'hotel'   
                ,'promotie'             : 'offer'
                ,'flight-neckermann'    : 'flight'              
            })[ctpm.InitialHolidayType] || ctpm.InitialHolidayType || 'generic').toLowerCase();
            cdpm['pageid'] = (({
                'lister'            : 'search'
                ,'listersolr'       : 'search'
                ,'detail'           : 'accom'
                ,'detailsolr'       : 'accom'
                , 'pay'             : 'summary'
            })[ctpm.PageId] || ctpm.PageId || 'home').toLowerCase();

            CATTDL.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
            window.CATTDL.CATTParams = cdpm


            jQuery.extend(CATTDL.CATTParams, keeps);

            //Booking Diaglog pageid
            if (/BookingDialog.aspx/.test(location.pathname)){
                var locationhash = (/[^#s=]+/.exec(window.location.hash) || ["1"]).pop();
                    cdpm.pageid = ({
                        "1": "pax",
                        "2": "cust",
                        "3": "contacts",
                        "4": "summary",
                        "" :  "none"
                    })[locationhash];
                 if (cdpm.pageid === 'summary' && !jQ('#defaultPaymentAgreed.go-to.payment-confirmation-button').is('visible')) {
                    cdpm.pageid = 'pay'
                 };
                jQuery(window).hashchange(function(e){
                    locationhash = (/[^#s=]+/.exec(window.location.hash) || ["1"]).pop();
                    var hashstep = ({
                        "1": "pax",
                        "2": "cust",
                        "3": "contacts",
                        "4": "summary",
                        "" :  "none"
                    })[locationhash];
                   cdpm.pageid = hashstep;
                   dl.push({'event' : 'core_'+(hashstep || 'pax')})
                });
                jQuery('#defaultPaymentAgreed.go-to.payment-confirmation-button').click(function(e){
                   cdpm.pageid = 'pay';
                   dl.push({'event' : 'core_pay'});
                })
            };
            // End Booking Dialog pageid
        
        } catch(e) {
            var msg = 'GTM CATTDL Core: '+e;
            console && ((console.error)?console.error(msg):console.log(msg))
        } finally {
            dl.push({'event': 'core_'+(window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || 'home')});
        }
        return w.CATTDL  
    }      
    //}, 1000)
}(window, window.dataLayer, document.location, window.jQuery))
</script>
