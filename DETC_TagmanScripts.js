//<script id='gtm_core'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    if (jQ) try {
        w.CATTDL = w.CATTDL || {};
        var cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}
        var keeps = {};

        w.CATTDL = {
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
                if (/accomguid/i.test(pp)) checked = checked.toLowerCase().replace(/\|/g, '-') || "generic";
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase().replace(/accommodation/, 'hotel') || "generic";
                if (/holidaytype/i.test(pp)) checked = checked.toLowerCase().replace(/accommodation/, 'hotel') || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/errorcode/i.test(pp)) checked = checked && checked.substr(0, 270) || "";
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });

        var ck_cdpm = JSON.parse(w.CATTDL.ckget('gtm_cdpm') || '{}');

        keeps['attribution'] = ck_cdpm.attribution
            || [];
        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/);
            if (steps[0] === '') steps.shift();
            if (steps[steps.length-1] === '') steps.pop();
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps);
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')';
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps;

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        var cv = w.CATTDL.ckget('multicom_orig') || '';
        cv = cv.split('|');
        var varlob = cv[0] || cdpm.lob || 'generic';
        var varholidaytype = cv.length > 1 && cv[1] || cdpm.holidaytype || 'generic';
        if (/^PACKAGE$/gi.test(varlob) || /^flighthotel$/gi.test(varlob)) {cdpm.lob = "epackage"} else {cdpm.lob = varlob.toLowerCase()}
        if (/^ePackage$/gi.test(varholidaytype) || /^flighthotel$/gi.test(varholidaytype)) {cdpm.holidaytype = "epackage"} else {cdpm.holidaytype = varholidaytype.toLowerCase()}

        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});

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

        cdpm.pageid = cdpm.pageid || 'booking';

         cdpm['errors'] = cdpm.errorcode
             || '';

        cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
            || '';

         cdpm['pagetimestamp'] = +new Date();

         jQ.extend(w.CATTDL.CATTParams, keeps);
         w.CATTDL.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.thomascook.com');
         window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e;
        console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'core_'+cdpm.holidaytype});
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer))
//</script>

// Attr affmeta
//<script id='gtm_affmeta'>
(function gtm_affilinateAffMetaDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams || '';
        var season = (function season(){
            var ssn = '';
            try {
                var dates = (cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').split('/');
                if (dates.length == 3) {
                    var year = parseInt(dates[2]);
                    var month = parseInt(dates[1]);
                    if (year === 2014) {
                        ssn = (month < 11)?"S14":'W14';
                    } else if (year === 2015) {
                        if (month < 5) ssn = 'W14';
                        else ssn = (month < 11)?'S15':'W15';
                    } else if (year === 2016) {
                          if (month < 5) ssn = 'W15';
                          else ssn = (month < 11)?'S16':'W16';
                    }
                }
            } catch(e){
                cdl.error('GTM Season:'+ e);
            }
            return ssn;
        }());

        cdl.DL_attr_affmeta = (function gtm_affilinetData(lob, hol){
            var data = {};
            if (lob && hol) try {
                data = {
                    quantity     : 1,
                    singlePrice : cdpm.bookingvalue || '',
                    brand         : "Thomas Cook",
                    articlenb     : cdpm.accomcode || "1",
                    productname : cdpm.accomname || '',
                    property1     : '',
                    property2     : cdpm.destination || '',
                    property3     : cdpm.duration || '',
                    property4     : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
                    property5     : cdpm.starrating || '',
                    order         : cdpm.bookingref || '0',
                    voucher     : cdpm.voucher || '',
                    ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
                };
                if (/citybreaks/i.test(hol)) {
                    data.category = season+' > City Breaks > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/eurostar/i.test(lob) && /eurostar/i.test(hol)) {
                    data.articlenb = cdpm.destination || '';
                    data.productname = 'Eurostar';
                    data.category = season+' > Eurostar > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /eurostar/i.test(hol)) {
                    data.productname = 'Eurostar > '+(cdpm.accomname || '');
                    data.category = season+' > Eurostar + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                    data.property5 = '';
                } else if (/epackage/i.test(lob) && /epackage/i.test(hol)) {
                    data.productname = (cdpm.touroperator || '')+' > '+ (cdpm.accomname || '');
                    data.category = season+' > Flight + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/hotel/i.test(lob) && /hotel/i.test(hol)) {
                    data.category = season+' > Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /ski/i.test(hol)) {
                    data.category = season+' > Ski > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                }
            } catch(e) {

            }
            return data;
        }(cdpm.lob, cdpm.holidaytype));
        cdl.DL_attr_affmeta.site = 10519;

    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && cdl.DL_attr_affmeta;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffMET(cdl, jQ, afdl) {
    'use strict';
    if (cdl && jQ && afdl) try {
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
            window.unescape("%0D%0A");
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+window.escape(article);
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
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affmeta))
//</script>


//<script id='gtm_affdirect'>
(function gtm_affilinateAffdirectDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        var season = (function season(){
            var ssn = '';
            try {
                var dates = (cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').split('/');
                if (dates.length == 3) {
                    var year = parseInt(dates[2]);
                    var month = parseInt(dates[1]);
                    if (year === 2014) {
                        ssn = (month < 11)?"S14":'W14';
                    } else if (year === 2015) {
                        if (month < 5) ssn = 'W14';
                        else ssn = (month < 11)?'S15':'W15';
                    } else if (year === 2016) {
                        if (month < 5) ssn = 'W15';
                        else ssn = (month < 11)?'S16':'W16';
                     }
                }
            } catch(e) {
                cdl.error('GTM Season:'+ e);
            }
            return ssn;
        }());
        cdl.DL_attr_affdirect = (function gtm_affilinetData(lob, hol) {
            var data = {};
            if (lob && hol) try {
                data = {
                    quantity : 1,
                    singlePrice : cdpm.bookingvalue || '',
                    brand : "Thomas Cook",
                    articlenb : cdpm.accomcode || "1",
                    productname : cdpm.accomname || '',
                    property1 : '',
                    property2 : cdpm.destination || '',
                    property3 : cdpm.duration || '',
                    property4 : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
                    property5 : cdpm.starrating || '',
                    order : cdpm.bookingref || '0',
                    voucher : cdpm.voucher || '',
                    ref : cdpm.attribution && cdpm.attribution.utm_source || ''
                };
                if (/citybreaks/i.test(hol)) {
                    data.category = season+' > City Breaks > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/eurostar/i.test(lob) && /eurostar/i.test(hol)) {
                    data.articlenb = cdpm.destination || '';
                    data.productname = 'Eurostar';
                    data.category = season+' > Eurostar > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /eurostar/i.test(hol)) {
                    data.productname = 'Eurostar > '+(cdpm.accomname || '');
                    data.category = season+' > Eurostar + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                    data.property5 = '';
                } else if (/epackage/i.test(lob) && /epackage/i.test(hol)) {
                    data.productname = (cdpm.touroperator || '')+' > '+ (cdpm.accomname || '');
                    data.category = season+' > Flight + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/hotel/i.test(lob) && /hotel/i.test(hol)) {
                    data.category = season+' > Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /ski/i.test(hol)) {
                    data.category = season+' > Ski > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                }
            } catch(ee) { }
            return data;
        }(cdpm.lob, cdpm.holidaytype));
        cdl.DL_attr_affdirect.site = 9416;
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl.DL_attr_affdirect;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffDirect(cdl, jQ, afdl) {
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
            window.unescape("%0D%0A");
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+window.escape(article);
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');
        afdl.pixel = {
            article: article,
            src: src
        };
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affdirect));
//</script>



//<script id='gtm_afflong'>
(function gtm_affilinateAflongDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        var season = (function season() {
            var ssn = '';
            try {
                var dates = (cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').split('/');
                if (dates.length == 3) {
                    var year = parseInt(dates[2]);
                    var month = parseInt(dates[1]);
                    if (year === 2014) {
                        ssn = (month < 11)?"S14":'W14';
                    } else if (year === 2015) {
                        if (month < 5) ssn = 'W14';
                        else ssn = (month < 11)?'S15':'W15';
                    } else if (year === 2016) {
                        if (month < 5) ssn = 'W15';
                        else ssn = (month < 11)?'S16':'W16';
                    }
                }
            } catch(e){
                cdl.error('GTM Season:'+ e);
            }
            return ssn;
        }());

        cdl.DL_attr_afflong = (function gtm_affilinetData(lob, hol){
            var data = {};
            if (lob && hol) try {
                data = {
                    quantity     : 1,
                    singlePrice : cdpm.bookingvalue || '',
                    brand         : "Thomas Cook",
                    articlenb     : cdpm.accomcode || "1",
                    productname : cdpm.accomname || '',
                    property1     : '',
                    property2     : cdpm.destination || '',
                    property3     : cdpm.duration || '',
                    property4     : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
                    property5     : cdpm.starrating || '',
                    order         : cdpm.bookingref || '0',
                    voucher     : cdpm.voucher || '',
                    ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
                };
                if (/citybreaks/i.test(hol)) {
                    data.category = season+' > City Breaks > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/eurostar/i.test(lob) && /eurostar/i.test(hol)) {
                    data.articlenb = cdpm.destination || '';
                    data.productname = 'Eurostar';
                    data.category = season+' > Eurostar > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /eurostar/i.test(hol)) {
                    data.productname = 'Eurostar > '+(cdpm.accomname || '');
                    data.category = season+' > Eurostar + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                    data.property5 = '';
                } else if (/epackage/i.test(lob) && /epackage/i.test(hol)) {
                    data.productname = (cdpm.touroperator || '')+' > '+ (cdpm.accomname || '');
                    data.category = season+' > Flight + Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/hotel/i.test(lob) && /hotel/i.test(hol)) {
                    data.category = season+' > Hotel > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                } else if (/epackage/i.test(lob) && /ski/i.test(hol)) {
                    data.category = season+' > Ski > '+(cdpm.country || '')+(cdpm.country?' > ':'')+(cdpm.destination || '');
                }
            } catch(e) {

            }
            return data;
        }(cdpm.lob, cdpm.holidaytype));
        cdl.DL_attr_afflong.site = 9415;

        if (cdl.twlh(/club18-30/i) || /club/i.test(cdpm.touroperator)) {
            cdl.DL_attr_afflong.productname = "Package booking for "+(cdpm.paxadult || 0)+" Adults";
            cdl.DL_attr_afflong.site = 11787;
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl.DL_attr_afflong;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffLong(cdl, jQ, afdl) {
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
            window.unescape("%0D%0A");

        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+window.escape(article);
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        };
    } catch(e){
        cdl.error('GTM Attr: '+e);
    }
return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_afflong));
//</script>
