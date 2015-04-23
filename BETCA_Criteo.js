//<script id='gtm_CriteoDL'>
(function gtm_CriteoDL(cdl, dl, jQ) {
    'use strict';
    var cdpm = '';
    if (cdl && dl && jQ) try {
        cdpm = cdl.CATTParams;
        var tagType = /home|generic|subsearch|subsrch/.test(cdpm.pageid|| '') && 'homepage'
            || /search/.test(cdpm.pageid || '') && 'srp'
            || /accom|select/.test(cdpm.pageid|| '') && 'product'
            || /pax|pay/.test(cdpm.pageid|| '') && 'basket'
            || /confirm|booking|itinerary/.test(cdpm.pageid|| '') && 'purchase'
            || '';
        cdl.DL_criteo = {
            account     : /nl/i.test(cdpm.language || '')?6954:/fr/i.test(cdpm.language || '')?19300:0,
            siteType     : 'd',
            event         : (function(tg) {
                return (tg === 'homepage' && 'viewHome'
                    || tg === 'srp' && 'viewList'
                    || tg === 'product' && 'viewItem'
                    || tg === 'basket' && 'viewBasket'
                    || tg === 'purchase' && 'trackTransaction'
                    || '');
            }(tagType)),
            requiresdom : 'yes',
            itemsrp     : [],
            itemacc     : (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
            itempax     : [{
                id: (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
                price: (''+cdpm.bookingvalue).replace(/(\d+)\.\d+/, '$1'),
                quantity: 1
            }],
            ref         : cdpm.bookingref || '',
            dedup         : /criteo/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?1:0,
            cin         : cdpm.deptdate || cdpm.deptdateselected || '',
            cout         : cdpm.returndate || cdpm.returndateselected || cdpm.arrivaldateselected || '',
            email         : '',
            script         : {
                status     : 'not fired',
                url     : 'https://static.criteo.net/js/ld/ld.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_criteo: "+e);
    } finally {
        if (/nl|fr/i.test(cdpm.language || '')) dl.push({event: 'DL_criteo '+cdpm.pageid});
    }
    return cdl && dl && jQ && cdl.DL_criteo;
}(window.CATTDL, window.dataLayer, window.jQuery))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoLP(jQ, cdl, ctdl){
    'use strict';
    if (jQ && cdl && ctdl) try {
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email) {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event }
            )} else {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event }
            )}
        ctdl.script.status = 'fired';
        });
    } catch(err) {
        cdl.error('GTM Criteo LP: '+err);
    }
    return jQ && cdl && ctdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoSRP(jQ, cdl, ctdl){
    'use strict';
    if (jQ && cdl && ctdl) try{
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email)  { window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event, item: ctdl.itemsrp},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )} else { window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event, item: ctdl.itemsrp},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )}
            ctdl.script.status = 'fired';
        });
    } catch(err) {
        cdl.error('GTM Criteo SRP: '+err);
    }
    return jQ && cdl && ctdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>


//<script id='gtm_Criteo'>
(function gtm_criteoAccom(jQ, cdl, ctdl) {
    'use strict';
    if (jQ && cdl && ctdl) try {
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email) { window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event, item: ctdl.itemacc, requiresDOM: ctdl.requiresdom},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )} else { window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event, item: ctdl.itemacc},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )}
            ctdl.script.status = 'fired';
        });
    } catch(err) {
        cdl.error('GTM Criteo Accom: '+err);
    }
    return jQ && cdl && ctdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoPaxPay(jQ, cdl, ctdl) {
    'use strict';
    if (jQ && cdl && ctdl) try {
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email)  {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event, item: ctdl.itempax},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )} else {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event, item: ctdl.itempax},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )}
        ctdl.script.status = 'fired';
        });
    } catch(err) {
        cdl.error('GTM Criteo PaxPay: '+err);
    }
    return jQ && cdl && ctdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_CriteoDL(cdl, dl, jQ) {
    'use strict';
    var cdpm = '';
    if (cdl && dl && jQ) try {
        cdpm = cdl.CATTParams;
        var tagType = /home|generic|subsearch|subsrch/.test(cdpm.pageid|| '') && 'homepage'
            || /search/.test(cdpm.pageid || '') && 'srp'
            || /accom|select/.test(cdpm.pageid|| '') && 'product'
            || /pax|pay/.test(cdpm.pageid|| '') && 'basket'
            || /confirm|booking|itinerary/.test(cdpm.pageid|| '') && 'purchase'
            || '';
        cdl.DL_criteo = {
            account     : /nl/i.test(cdpm.language || '')?6954:/fr/i.test(cdpm.language || '')?19300:0,
            siteType     : 'd',
            event         : (function(tg) {
                return (tg === 'homepage' && 'viewHome'
                    || tg === 'srp' && 'viewList'
                    || tg === 'product' && 'viewItem'
                    || tg === 'basket' && 'viewBasket'
                    || tg === 'purchase' && 'trackTransaction'
                    || '');
            }(tagType)),
            requiresdom : 'yes',
            itemsrp     : [],
            itemacc     : (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
            itempax     : [{
                id: (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
                price: (''+cdpm.bookingvalue).replace(/(\d+)\.\d+/, '$1'),
                quantity: 1
            }],
            ref         : cdpm.bookingref || '',
            dedup         : /criteo/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?1:0,
            cin         : cdpm.deptdate || cdpm.deptdateselected || '',
            cout         : cdpm.returndate || cdpm.returndateselected || cdpm.arrivaldateselected || '',
            email         : '',
            script         : {
                status     : 'not fired',
                url     : 'https://static.criteo.net/js/ld/ld.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_criteo: "+e);
    } finally {
        if (/nl|fr/i.test(cdpm.language || '')) dl.push({event: 'DL_criteo '+cdpm.pageid});
    }
    return cdl && dl && jQ && cdl.DL_criteo;
}(window.CATTDL, window.dataLayer, window.jQuery));

(function gtm_criteoConf(jQ, cdl, ctdl) {
    'use strict';
    if (jQ && cdl && ctdl) try {
        jQ.ajaxSetup({cache: true});
        (/6954|19300/i.test(ctdl.account || '')) && jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email) {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event, id: ctdl.ref, deduplication: ctdl.dedup, item: ctdl.itempax},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )} else {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event, id: ctdl.ref, deduplication: ctdl.dedup, item: ctdl.itempax},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )}
            ctdl.script.status = 'fired';
        });
    } catch(err) {
        cdl.error('GTM Criteo Conf: '+err);
    }
    return jQ && cdl && ctdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo));
//</script>
