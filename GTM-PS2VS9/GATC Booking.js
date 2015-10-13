<script id='gtm_gatcBooking'>
(function gtm_gatcBooking(ctpm, cdl) {
    'use strict';
    if (ctpm && cdl) try {
        var lh = document.location.hostname;
        if (/^0?$/.test(cdl.bookingref)) cdl.bookingref = ((document.referrer)?"empty_":"noReferrer_")+Math.random();

        window._gaq = window._gaq || [];
                window._gaq.push(['_require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);
        window._gaq.push(['CATTGATC._setAccount', 'UA-40916028-1']);

        var domainName = /fliegenpreise/i.test(lh)?'fliegenpreise.de':(/catchafly-t/i.test(lh)?'catchafly-t.com':(/vuelayvolaras/i.test(lh)?'vuelayvolaras.com':'condor.com'));
        window._gaq.push(['CATTGATC._setDomainName', domainName]);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);

        var  QSP_P = '';
        var contentCATT = '';
        for (var i in ctpm) {
            contentCATT = ctpm[i];
            if (contentCATT !== "") QSP_P += '&'+i+'='+contentCATT;
        }
        QSP_P = QSP_P.replace(/^\&/, '').replace(/\=$/, '');

        var fullVP = '/VP'+(((/mcfi/i).test(cdl.pagecontext))?"M":"")+'/'+((cdl.language === "")?"":cdl.language+"/")+(cdl.lob || 'generic')+'/'+(cdl.holidaytype || 'generic')+'/'+cdl.pageid+'?'+QSP_P;
        fullVP = fullVP.toLowerCase();

        cdl.language              && window._gaq.push(['CATTGATC._setCustomVar',  10, 'Language',  cdl.language, 2]);
        cdl.login                 && window._gaq.push(['CATTGATC._setCustomVar',  11, 'Login',  cdl.login+"", 2]);
        cdl.ociinvite             && window._gaq.push(['CATTGATC._setCustomVar',  12, 'OciInvite',  cdl.ociinvite+"", 2]);
        cdl.utmaguid             && window._gaq.push(['CATTGATC._setCustomVar',  30, 'UtmaGuid', cdl.utmaguid, 1]);
        cdl.landingtimestamp     && window._gaq.push(['CATTGATC._setCustomVar',  29, 'TimeStamp',  cdl.landingtimestamp, 2]);

      window._gaq.push(['CATTGATC._setCustomVar',  28, 'Actual URL',  document.URL, 3]);

        window._gaq.push(['CATTGATC._trackEvent', 'OcIInvite', fullVP, (cdl.ociinvite || '')+""]);
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        var ctpmBookingItems = "_a_/_b_/_c_/_d_/_e_/_f_/_g_/_h_/_i_";
        ctpm.BookingItems.forEach(function BookingItemsForEach(cur){
            var type = cur.Type;
            var item = cur.Type+(/prior/i.test(cur.Status)?'_PRIOR':'')+(/flight/i.test(type)?('_'+cdl.compartment+'_'+cdl.tariff):'')+'-'+cur.Quantity+'-'+cur.ValueInCurrency;

            if (/flex/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_a_/,item);
            else if (/flight/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_b_/, item);
            else if (/insurance/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_c_/, item);
            else if (/meal/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_d_/, item);
            else if (/seat/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_e_/, item);
            else if (/speq/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_f_/, item);
            else if (/xbag/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_g_/, item);
            else if (/rail/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_h_/, item);
            else if (/pets/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_i_/, item);
        });
        ctpmBookingItems = ctpmBookingItems.replace(/_a_|_b_|_c_|_d_|_e_|_f_|_g_|_h_|_i_/g, '');
        window._gaq.push(['CATTGATC._addTrans', cdl.bookingref+(/ssr/i.test(cdl.holidaytype)?'_ssr':''), '', (cdl.bookingvalue || 0), '', '', '', '', '']);
        window._gaq.push(['CATTGATC._addItem',  cdl.bookingref+(/ssr/i.test(cdl.holidaytype)?'_ssr':''),
            (cdl.departureairport || '')+'-'+(cdl.returndestinationairport || '')+'|'+(cdl.destinationairport || '')+'-'+(cdl.returndepartureairport || '')+'|'+(cdl.deptdate || '')+'|'+(cdl.carrier || '')+'-'+(cdl.nonfeederdepartureairport || '')+'-'+(cdl.nonfeederreturndestinationairport || '')+'|'+(cdl.nonfeederdestinationairport || '')+'-'+(cdl.nonfeederreturndepartureairport || ''), // SKU
            (cdl.language || '')+'|'+(cdl.flightno || '')+'|'+(cdl.departureairport || '')+'-'+(cdl.returndestinationairport || '')+'|'+(cdl.paxtotal || '0')+'|'+(cdl.paxadult || '0')+'|'+(cdl.paxchild || '0')+'|'+(cdl.deptdate || '')+'|'+(cdl.duration || '0')+'|'+(cdl.paymentoption || '')+'|'+(cdl.flighttype || '')+'|'+ctpmBookingItems+ '|'+(cdl.discountcode || '')+'-'+(cdl.discountvalueincurrency || '0')+'-'+(cdl.discountdetails || ''), // ProductName
            ((cdl.language === "")?"":cdl.language+"-")+(cdl.lob || 'generic').toLowerCase()+'|'+(cdl.holidaytype || 'generic'),   // Category
            (cdl.bookingvalue || 0),  // UnitPrice
            '1'       // quantity
        ]);
        window._gaq.push(['CATTGATC._trackTrans']);

        if (/intcmp=/i.test(document.location.href)){
            var campaignID = ((/intcmp=([^&|\s|\?]*)/i).exec(document.location.href) || []).pop() || '';
            if (campaignID) window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', campaignID, document.location.search, 1, true]);
        }

        if(cdl.errorcode){
            var errorLabel= cdl.errorcode+'&AppServer='+cdl.appserver;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }

        (function() {var ga = document.createElement('script'); ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)})();
    } catch(e) {
        window.CATTDL.error("GTM DE Condor GATC: "+e);
    }
    return ctpm && cdl;
}(window.CATTParams, !window.CATTDL?!1:window.CATTDL.CATTParams))
</script>
