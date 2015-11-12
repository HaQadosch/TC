//<script id='gtm_pool'>
(function gtm_pool(cdl, dl) {
    'use strict';
    var cdpm = '';
    if (cdl && dl) try {
        cdpm = cdl.CATTParams;
        dl.push({'event': 'pool'+((cdpm && cdpm.utmaguid || 1)%2?'C':'M')});

    } catch(e) {
        cdl.error("GTM pool: "+e);
    }
    return cdl && dl;
}(window.CATTDL, window.dataLayer));
//</script>

/* Homepage.
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
window.criteo_q= window.criteo_q|| [];
window.criteo_q.push(
    { event: "setAccount", account: 19215 },
    { event: "setCustomerId", id: "Client User ID" },
    { event: "setSiteType", type: "d" },
    { event: "viewHome" }
);
</script>
*/
//<script id='gtm_criteo'>
(function gtm_criteo(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=criteo/)) try {
        var dlcriteo = {
           'DL_criteo' : {
               'start' : new Date().getTime(),
               'script' : {
                   'src' : 'https://static.criteo.net/js/ld/ld.js'
               },
               'event' : 'viewHome',
               'account' : '19215',
               'type' : 'd',
               'id' : cdpm.utmaguid || '',
               'requiresdom' : 'yes'
           }
       };
       cdl.assign && cdl.assign(cdl, dlcriteo);
       var oldCache = jQ.ajaxSetup().cache;
       cdl.assign && dl.push && jQ.getScript && jQ.when && jQ.when(
           jQ.getScript(dlcriteo.DL_criteo.script.src, function gtm_criteoScript(){
               window.criteo_q = window.criteo_q || [];
               window.criteo_q.push(
                   { event: "setAccount", account: dlcriteo.DL_criteo.account },
                   { event: "setCustomerId", id:  dlcriteo.DL_criteo.id },
                   { event: "setSiteType", type: dlcriteo.DL_criteo.type },
                   { event: dlcriteo.DL_criteo.event, requiresDOM : dlcriteo.DL_criteo.requiresdom }
               );
           })
        ).done(function gtm_criteoDone() {
            jQ.ajaxSetup({cache: oldCache});
            dl.push(cdl.assign({}, {'event': 'criteo'}, dlcriteo));
        });
    } catch(e) {
        cdl.error && cdl.error('GTM Criteo : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>

/* Product.
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
window.criteo_q= window.criteo_q|| [];
window.criteo_q.push(
    { event: "setAccount", account: 19215 },
    { event: "setCustomerId", id: "Client User ID" },
    { event: "setSiteType", type: "d" },
    { event: "viewItem", item: "Your item id" },
    { event: "viewSearch", checkin_date:"date_in", checkout_date:"date_out" }
);
</script>
*/
//<script id='gtm_criteo'>
(function gtm_criteo(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=criteo/)) try {
        var dlcriteo = {
           'DL_criteo' : {
               'start' : new Date().getTime(),
               'script' : {
                   'src' : 'https://static.criteo.net/js/ld/ld.js'
               },
               'event' : 'viewItem',
               'account' : '19215',
               'type' : 'd',
               'id' : cdpm.utmaguid || '',
               'requiresdom' : 'yes',
               'item' : (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
               'cin' : cdpm.deptdate || cdpm.deptdateselected || '',
               'cout' : cdpm.returndate|| cdpm.returndateselected || ''
           }
       };
       cdl.assign && cdl.assign(cdl, dlcriteo);
       var oldCache = jQ.ajaxSetup().cache;
       cdl.assign && dl.push && jQ.getScript && jQ.when && jQ.when(
           jQ.getScript(dlcriteo.DL_criteo.script.src, function gtm_criteoScript(){
               window.criteo_q = window.criteo_q || [];
               window.criteo_q.push(
                    { event: "setAccount", account: dlcriteo.DL_criteo.account },
                    { event: "setCustomerId", id:  dlcriteo.DL_criteo.id },
                    { event: "setSiteType", type: dlcriteo.DL_criteo.type },
                    { event: dlcriteo.DL_criteo.event, item: dlcriteo.DL_criteo.item, requiresDOM : dlcriteo.DL_criteo.requiresdom },
                    { event: "viewSearch", checkin_date: dlcriteo.DL_criteo.cin, checkout_date: dlcriteo.DL_criteo.cout }
               );
           })
        ).done(function gtm_criteoDone() {
            jQ.ajaxSetup({cache: oldCache});
            dl.push(cdl.assign({}, {'event': 'criteo'}, dlcriteo));
        });
    } catch(e) {
        cdl.error && cdl.error('GTM Criteo : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>

/* Basket.
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
window.criteo_q= window.criteo_q|| [];
window.criteo_q.push(
    { event: "setAccount", account: 19215 },
    { event: "setCustomerId", id: "Client User ID" },
    { event: "setSiteType", type: "d" },
    { event: "viewBasket", item: [
        { id: "Your item id", price: Your item unit price, quantity: 1 }
    ]},
    { event: "viewSearch", checkin_date:"date_in", checkout_date:"date_out" }
);
</script>
*/
//<script id='gtm_criteo'>
(function gtm_criteo(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=criteo/)) try {
        var dlcriteo = {
           'DL_criteo' : {
               'start' : new Date().getTime(),
               'script' : {
                   'src' : 'https://static.criteo.net/js/ld/ld.js'
               },
               'event' : 'viewBasket',
               'account' : '19215',
               'type' : 'd',
               'id' : cdpm.utmaguid || '',
               'requiresdom' : 'yes',
               'item' : [{
                  id: (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
                  price: (''+cdpm.bookingvalue).replace(/(\d+)\.\d+/, '$1'),
                  quantity: 1
               }],
               'cin' : cdpm.deptdate || cdpm.deptdateselected || '',
               'cout' : cdpm.returndate|| cdpm.returndateselected || ''
           }
       };
       cdl.assign && cdl.assign(cdl, dlcriteo);
       var oldCache = jQ.ajaxSetup().cache;
       cdl.assign && dl.push && jQ.getScript && jQ.when && jQ.when(
           jQ.getScript(dlcriteo.DL_criteo.script.src, function gtm_criteoScript(){
               window.criteo_q = window.criteo_q || [];
               window.criteo_q.push(
                    { event: "setAccount", account: dlcriteo.DL_criteo.account },
                    { event: "setCustomerId", id:  dlcriteo.DL_criteo.id },
                    { event: "setSiteType", type: dlcriteo.DL_criteo.type },
                    { event: dlcriteo.DL_criteo.event, item: dlcriteo.DL_criteo.item, requiresDOM : dlcriteo.DL_criteo.requiresdom },
                    { event: "viewSearch", checkin_date: dlcriteo.DL_criteo.cin, checkout_date: dlcriteo.DL_criteo.cout }
               );
           })
        ).done(function gtm_criteoDone() {
            jQ.ajaxSetup({cache: oldCache});
            dl.push(cdl.assign({}, {'event': 'criteo'}, dlcriteo));
        });
    } catch(e) {
        cdl.error && cdl.error('GTM Criteo : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>


/* Transaction.
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
window.criteo_q= window.criteo_q|| [];
window.criteo_q.push(
    { event: "setAccount", account: 19215 },
    { event: "setCustomerId", id: "Client User ID" },
    { event: "setSiteType", type: "d" },
    { event: "trackTransaction" , id: "Transaction Id", item: [
        { id: "First item id", price: First item unit price, quantity: 1 }
    ]}
);
</script>
*/
//<script id='gtm_criteo'>
(function gtm_criteo(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=criteo/)) try {
        var dlcriteo = {
           'DL_criteo' : {
               'start' : new Date().getTime(),
               'script' : {
                   'src' : 'https://static.criteo.net/js/ld/ld.js'
               },
               'event' : 'trackTransaction',
               'account' : '19215',
               'type' : 'd',
               'id' : cdpm.utmaguid || '',
               'requiresdom' : 'yes',
               'ref'         : cdpm.bookingref || '',
               'dedup'       : /criteo/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?1:0,
               'item' : [{
                  id: (cdpm.departureairportsearched || cdpm.departureairportselected || '')+(cdpm.destinationairportsearched || cdpm.destinationairportselected || '')+(cdpm.flighttype===1?'-r':'-o'),
                  price: (''+cdpm.bookingvalue).replace(/(\d+)\.\d+/, '$1'),
                  quantity: 1
               }]
           }
       };
       cdl.assign && cdl.assign(cdl, dlcriteo);
       var oldCache = jQ.ajaxSetup().cache;
       cdl.assign && dl.push && jQ.getScript && jQ.when && jQ.when(
           jQ.getScript(dlcriteo.DL_criteo.script.src, function gtm_criteoScript(){
               window.criteo_q = window.criteo_q || [];
               window.criteo_q.push(
                    { event: "setAccount", account: dlcriteo.DL_criteo.account },
                    { event: "setCustomerId", id:  dlcriteo.DL_criteo.id },
                    { event: "setSiteType", type: dlcriteo.DL_criteo.type },
                    { event: dlcriteo.DL_criteo.event, deduplication: dlcriteo.DL_criteo.dedup, id: dlcriteo.DL_criteo.ref, item: dlcriteo.DL_criteo.item, requiresDOM : dlcriteo.DL_criteo.requiresdom }
               );
           })
        ).done(function gtm_criteoDone() {
            jQ.ajaxSetup({cache: oldCache});
            dl.push(cdl.assign({}, {'event': 'criteo'}, dlcriteo));
        });
    } catch(e) {
        cdl.error && cdl.error('GTM Criteo : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>
