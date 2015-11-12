//<script id='gtm_CriteoDL'>
(function gtm_CriteoDL(cdl, dl, jQ) {
    'use strict';
    var cdpm = '';
    if (cdl && dl && jQ) try {
        cdpm = cdl.CATTParams;
        var tagType = /home|generic|subsearch|subsrch/.test(cdpm.pageid) && 'homepage'
            || /search/.test(cdpm.pageid) && 'srp'
            || /accom/.test(cdpm.pageid) && 'product'
            || /pax|pay/.test(cdpm.pageid) && 'basket'
            || /confirm|booking/.test(cdpm.pageid) && 'purchase'
            || '';
        cdl.DL_criteo = {
            account     : 14991,
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
            itemsrp     : (cdpm.searchresultstop3 || '').split(/-/g) || [],
            itemacc     : cdpm.accomguid || (cdpm.accomcode || '').replace(/^.+\|/, '') || '',
            itempax     : [{
                id: cdpm.accomguid || (cdpm.accomcode || '').replace(/^.+\|/, '') || '',
                price: cdpm.bookingvalue || '',
                quantity: 1
            }],
            ref         : cdpm.bookingref || '',
            dedup         : /criteo/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?1:0,
            cin         : cdl.gadate && cdl.gadate(cdpm.deptdate || '').replace(/(\d\d)-?\/?(\d\d)-?\/?(\d\d\d\d)/, '$3-$2-$1') || '',
            cout         : cdpm.retdate && cdl.gadate && cdl.gadate(cdpm.retdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1') || '',
            email         : (jQ('input[type=hidden][name=email]').val() || '').replace(/\s*/g, '').toLowerCase() || jQ('a[href*=mailto]').filter(function(){return !/Contactez/i.test($(this).text())}).text() || '',
            script         : {
                status     : 'not fired',
                url     : '//static.criteo.net/js/ld/ld.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_criteo: "+e);
    } finally {
        dl.push({event: 'DL_criteo '+cdpm.pageid});
    }
    return cdl && dl && jQ && cdl.DL_criteo;
}(window.CATTDL, window.externaldataLayer, window.jQuery))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoLP(jQ, cdl, ctdl){
    'use strict'
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
            )};
        ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo LP: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoSRP(jQ, cdl, ctdl){
    'use strict'
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
            )};
            ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo SRP: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>


//<script id='gtm_Criteo'>
(function gtm_criteoAccom(jQ, cdl, ctdl) {
    'use strict'
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
                { event: ctdl.event, item: ctdl.itemacc, requiresDOM: ctdl.requiresdom},
                { event: "viewSearch", checkin_date:ctdl.cin, checkout_date:ctdl.cout}
            )};
            ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo Accom: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoPaxPay(jQ, cdl, ctdl) {
    'use strict'
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
            )};
        ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo PaxPay: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

//<script id='gtm_Criteo'>
(function gtm_criteoConf(jQ, cdl, ctdl) {
    'use strict'
    if (jQ && cdl && ctdl) try {
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(ctdl.script.url, function gtm_criteoScript(){
            window.criteo_q = window.criteo_q || [];
            if (ctdl.email) {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: "setEmail", email: [ctdl.email]},
                { event: ctdl.event, id: ctdl.ref, deduplication: ctdl.dedup, item: ctdl.itempax}
            )} else {window.criteo_q.push(
                { event: "setAccount", account: ctdl.account },
                { event: "setSiteType", type: ctdl.siteType },
                { event: ctdl.event, id: ctdl.ref, deduplication: ctdl.dedup, item: ctdl.itempax}
            )};
            ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo Conf: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
//</script>

/* Vacances-Paques */
<script id='gtm_CriteoPaques'>
(function gtm_CriteoDL(cdl, dl, jQ) {
    'use strict'
    if (cdl && dl && jQ) try {
        var cdpm = cdl.CATTParams || '';
        var tagType = 'srp';
        cdl.DL_criteo = {
            account     : 14991,
            siteType     : 'd',
            event         : 'viewList',
            requiresdom : 'yes',
            itemsrp     : (function (){
                var items = ($('div.tcrow > div > div.bloc_sejours_famille > p.image').map(function(i, e){return (/_\w([^_]*).jpg/i.exec(jQ(e).attr('data-offer-image') || '') || ['']).pop()}) || []).slice(0, 3) || [];
                return items.length > 2 && [items[0], items[1], items[2]] || [];
            }()),
            dedup         : /criteo/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?1:0,
            cin         : '',
            cout         : '',
            email         : (jQ('input[type=hidden][name=email]').val() || '').replace(/\s*/g, '').toLowerCase() || jQ('a[href*=mailto]').filter(function(){return !/Contactez/i.test($(this).text())}).text() || '',
            script         : {
                status     : 'not fired',
                url     : '//static.criteo.net/js/ld/ld.js'
            }
        }
    } catch(e) {
        cdl.error("GTM DL_criteo Paques: "+e)
    } finally {
        dl.push({event: 'DL_criteo landing seo '+cdpm.pageid});
    }
    return cdl && dl && jQ && cdl.DL_criteo
}(window.CATTDL, window.externaldataLayer, window.jQuery));

(function gtm_criteoSRP(jQ, cdl, ctdl){
    'use strict'
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
            )};
            ctdl.script.status = 'fired'
        })
    } catch(err) {
        cdl.error('GTM Criteo SRP Paques: '+err)
    }
    return jQ && cdl && ctdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_criteo))
</script>
