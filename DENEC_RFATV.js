<script id='gtm_RFA_TVTracking'>
(function gtm_RFA_TVTrackingDL(edl, cdl){
    'use strict';
    if (edl && cdl) try {
        cdl.DL_rfa = {
            rfa_OID : '2804',
            rfa_SEO_AID : '6085',
            rfa_DIRECT_AID : '6084',
            rfa_COOKIE_LIFETIME : 30,
            rfa_COOKIE_NAME : '610e5f7246720b8df560510bff2c08ef',
            rfa_COOKIE_DOMAIN : 'neckermann-reisen.de',
            rfa_IGNORE_REFERRER_HOSTNAMES : ['neckermann-reisen.de','neckermann-urlaubswelt.de'],
            rfa_IGNORE_CGI_PARAMETER : ['utm_medium', 'gclid'],
            rfa_ACKNOWLEDGE_REFERRER_HOSTNAMES : []
        };
    } catch(e) {
        cdl.errror && cdl.error('GTM RFA DL: ', e);
    } finally {
        edl.push({'event':'GTM DL RFA'});
    }
    return edl && cdl && cdl.DL_rfa;
}(window.externaldataLayer, window.CATTDL));

(function gtm_TVTracking(edl, cdl, rfdl){
    'use strict';
    window.RFA_Cookie_Get=function(t){var n,r,i,s=document.cookie.split(";");for(n=0;n<s.length;n++){i=s[n];r=i.indexOf("=");if(i.substr(0,r).replace(/^\s+|\s+$/g,"")==t){return unescape(i.substr(r+1))}}};window.RFA_Cookie_Set=function(t,n,r,i){var s=[t+"="+escape(n)];if(r!==null&&r!==undefined){var o=new Date();o.setMinutes(o.getMinutes()+r);s.push("Expires="+o.toUTCString())}if(i!==null&&i!==""){s.push("Domain="+i)}s.push("Path=/");document.cookie=s.join("; ")};window.RFA_TRACKING_HOSTNAME="r.refinedads.com";if(window.location&&window.location.protocol&&window.location.protocol=="https:"){var RFA_TRACKING_URL="https://"+RFA_TRACKING_HOSTNAME}else{var RFA_TRACKING_URL="http://"+RFA_TRACKING_HOSTNAME}window.RFA_Url_Parser=function(t){this.url=t;this.parseUrl(t)};RFA_Url_Parser.prototype.regexp=/(https?:\/\/)([a-zA-Z0-9_\-\.]+[a-zA-Z]+)\.?(:[0-9]+)?\/?(.*)?/;RFA_Url_Parser.prototype.parseUrl=function(e){result=this.url.match(this.regexp);if(!result){result=[]}this.scheme=result[1]||"";this.host=result[2]||"";this.port=result[3]||"";this.path=result[4]||"";return this};RFA_Url_Parser.prototype.getQueryValue=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)";var n=new RegExp(t);var r=n.exec(this.url);if(r===null){return""}else{return decodeURIComponent(r[1])}};RFA_Url_Parser.prototype.getHost=function(){if(this.host){return this.host.toLowerCase()}return"na"};RFA_Url_Parser.prototype.getPath=function(){if(this.path){var e="/"+this.path;if(e.indexOf("#")!=-1){e=e.substr(0,e.indexOf("#"))}if(e.indexOf("?")!=-1){return e.substr(0,e.indexOf("?"))}return e}return"/"};RFA_Url_Parser.prototype.getTLD=function(){if(!this.host){return""}var e=this.host.toLowerCase().split(".").reverse();var t=[e[0]];if(e[1]){t.push(e[1])}if(t.join(".").length<=5&&e[2]){t.push(e[2])}return t.reverse().join(".")};window.RFA_SEO_GENERIC_Tracking=function(){if(RFA_Cookie_Get(RFA_COOKIE_NAME)){RFA_Cookie_Set(RFA_COOKIE_NAME,1,RFA_COOKIE_LIFETIME,RFA_COOKIE_DOMAIN);return}RFA_Cookie_Set(RFA_COOKIE_NAME,1,RFA_COOKIE_LIFETIME,RFA_COOKIE_DOMAIN);var e=function(e,t,n,r,i){(function(){var s=document,o=s.createElement("img");o.width="1";o.height="1";o.src=RFA_TRACKING_URL+"/r.rfa?aid="+e+"&oid="+t+"&c1="+encodeURIComponent(n)+"&c2="+encodeURIComponent(r)+"&c3="+encodeURIComponent(i)+"&url="+encodeURIComponent(RFA_TRACKING_URL)+"%2Fpixel.gif";s.body.appendChild(o)})()};var t=new RFA_Url_Parser(document.location.href);var n=document.referrer;if(n){var r=new RFA_Url_Parser(n);if(t.getHost()==r.getHost()){return}if(!(window.RFA_ACKNOWLEDGE_REFERRER_HOSTNAMES&&RFA_ACKNOWLEDGE_REFERRER_HOSTNAMES.length>0&&RFA_ACKNOWLEDGE_REFERRER_HOSTNAMES.join(" ").indexOf(r.getHost())!=-1)&&window.RFA_IGNORE_CGI_PARAMETER&&RFA_IGNORE_CGI_PARAMETER.length>0){for(var i=0;i<RFA_IGNORE_CGI_PARAMETER.length;i++){if(t.getQueryValue(RFA_IGNORE_CGI_PARAMETER[i])!=""){return}}}if(window.RFA_IGNORE_REFERRER_HOSTNAMES&&RFA_IGNORE_REFERRER_HOSTNAMES.length>0){var s=r.getHost();for(var i=0;i<RFA_IGNORE_REFERRER_HOSTNAMES.length;i++){if(s.indexOf(RFA_IGNORE_REFERRER_HOSTNAMES[i])!=-1){return}}}var o=r.getHost();var u=o.split(".").reverse();if(u.length<2){return}var a=["Google","Yahoo","Bing"];for(var i=0;i<a.length;i++){if(u[1]==a[i].toLowerCase()||u.length>2&&u[2]==a[i].toLowerCase()&&["co","com"].indexOf(u[1])>-1&&u[0].length==2){var f=r.getQueryValue("q");if(f===""){f="not provided"}e(RFA_SEO_AID,RFA_OID,a[i],o,f);return}}e(RFA_GENERIC_AID,RFA_OID,r.getTLD(),r.getHost(),r.getPath());return}else{if(window.RFA_IGNORE_CGI_PARAMETER&&RFA_IGNORE_CGI_PARAMETER.length>0){for(var i=0;i<RFA_IGNORE_CGI_PARAMETER.length;i++){if(t.getQueryValue(RFA_IGNORE_CGI_PARAMETER[i])!=""){return}}}e(RFA_DIRECT_AID,RFA_OID,"Direct","default","default");return}};
    if (edl && cdl && rfdl) try {
        window.RFA_OID = rfdl.rfa_OID || '';
        window.RFA_SEO_AID = rfdl.rfa_SEO_AID || '';
        window.RFA_DIRECT_AID = rfdl.rfa_DIRECT_AID || '';
        window.RFA_COOKIE_LIFETIME = rfdl.rfa_COOKIE_LIFETIME || 30;
        window.RFA_COOKIE_NAME = rfdl.rfa_COOKIE_NAME || '';
        window.RFA_COOKIE_DOMAIN = rfdl.rfa_COOKIE_DOMAIN || '';
        window.RFA_IGNORE_REFERRER_HOSTNAMES = rfdl.rfa_IGNORE_REFERRER_HOSTNAMES || [];
        window.RFA_IGNORE_CGI_PARAMETER = rfdl.rfa_IGNORE_CGI_PARAMETER || [];
        window.RFA_ACKNOWLEDGE_REFERRER_HOSTNAMES = rfdl.rfa_ACKNOWLEDGE_REFERRER_HOSTNAMES || [];
        RFA_SEO_GENERIC_Tracking()
    } catch(e) {
        cdl.errror && cdl.error('GTM RFA: ', e);
    } finally {
        edl.push({'event':'GTM RFA'});
    }
    return edl && cdl && rfdl;
}(window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_rfa))
</script>

<script id='gtm_RFA_TVTracking'>
(function gtm_RFA_TVTrackingDL(edl, cdl){
    'use strict';
    if (edl && cdl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_rfa = {
            v_id : '53300000',
            v_event : 'sale',
            v_saletype : 'booking',
            v_saletotal : cdpm.bookingvalue || 0,
            v_salecurrency : 'EUR',
            v_orderid : cdpm.bookingref || '',
            pixel : {
                src : '//r.refinedads.com/image.php?',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.errror && cdl.error('GTM RFA DL:'+e)
    } finally {
        edl.push({'event':'GTM DL RFA'})
    }
    return edl && cdl && cdl.DL_rfa
}(window.externaldataLayer, window.CATTDL));

(function gtm_TVTracking(jQ, edl, cdl, rfdl){
    'use strict'
    if (jQ, edl && cdl && rfdl) try {
        var src = rfdl.pixel && rfdl.pixel.src && rfdl.pixel.src+
            'v_id='+(rfdl.v_id || '')+
            '&v_event='+(rfdl.v_event || '')+
            '&v_saletype='+(rfdl.v_saletype || '')+
            '&v_saletotal='+(rfdl.v_saletotal || 0)+
            '&v_salecurrency='+(rfdl.v_salecurrency || '')+
            '&v_orderid='+(rfdl.v_orderid || '')
        || '';

        src && jQ().append && jQ('body').append(jQ('<img>', {
            src : src,
            width : 1,
            height : 1
        }));
        rfdl.pixel = {
            src : src,
            status: 'fired'
        }
    } catch(e) {
        cdl.errror && cdl.error('GTM RFA:'+e)
    } finally {
        edl.push({'event':'GTM RFA'})
    }
    return edl && cdl && rfdl
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_rfa))
</script>
