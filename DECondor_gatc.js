//<script id='gtm_gatc'>
(function gtm_gatc(cdl, cdpm) {
    'use strict';
    window._gaq = window._gaq || [];
    window._gaq.push(['_require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);
    window._gaq.push(['CATTGATC._setAccount', 'UA-40916028-1']);

    var domainName = location.host.match(/fliegenpreise/gi)?'fliegenpreise.de':(location.host.match(/catchafly-t/gi)?'catchafly-t.com':(location.host.match(/vuelayvolaras/gi)?'vuelayvolaras.com':'condor.com'));
    window._gaq.push(['CATTGATC._setDomainName', domainName]);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);

    if (cdl && cdpm) try {
        var QSP_ST = '';
        var QSP_CAT = '';
        var QSP_P = '';
        var contentCATT = '';
        for (var i in cdpm) {
            contentCATT = cdpm[i];
            if (contentCATT !== "") QSP_P += '&'+i+'='+contentCATT;
        }
        QSP_P = QSP_P.replace(/^\&/, '').replace(/\=$/, '');

        if (/holidays/i.test(location.host || document.URL)) {
            cdpm.language = window.condorContextPath.replace(/\//g, '') || 'de';
            cdpm.lob = 'holidays';
            cdpm.holidaytype = 'holidays';
            if (/group/i.test(location.pathname || document.URL)) {
                cdpm.pageid = 'search';
                QSP_ST = 'SS_ST='+
                    '|'+($('input#departure-hidden').val() || $('input#departure.form-control.input-search').val() || '')+
                    '|'+($('input#destination-hidden').val() || $('input#destination.form-control.input-search').val() || '')+
                    '|'+($('input#date-departuredate-send').val() || '')+
                    '|'+($('#search-durationchoice-flexible:checked').length?'flexible':'exactly' || '')+
                    '|'+($('select#inputDuration option[selected=selected]').attr('data-to') || 0)+
                    '|'+(($('input#traveller-hidden-adults').val() || '').split(';').length || 0)+
                    '|'+(($('input#traveller-hidden-children').val() || '').split(';').length || 0)+
                    '&';
                QSP_CAT = 'SS_CAT=holidays_search_de&';
                QSP_P = '';
            } else if (/offer/i.test(location.pathname || document.URL)) {
                cdpm.pageid = 'accom';
                QSP_ST = 'SS_ST='+
                    '|'+($('input#departure-hidden').val() || unescape(cdpm.searches && cdpm.searches.deparipcodes||'') || '')+
                    '|'+($('input#destination-hidden').val() || cdpm.searches && cdpm.searches.gilsearch || '')+
                    '|'+($('input#date-departuredate-send').val() || cdpm.searches && cdpm.searches.tddate || '')+
                    '|'+($('#search-durationchoice-flexible:checked').length?'flexible':'exactly' || '')+
                    '|'+($('select#inputDuration option[selected=selected]').attr('data-to') || 0)+
                    '|'+(($('input#traveller-hidden-adults').val() || '').split(';').length || 0)+
                    '|'+(($('input#traveller-hidden-children').val() || '').split(';').length || 0)+
                    '&';
                QSP_CAT = 'SS_CAT=holidays_accom_de&';
                QSP_P = '';
            } else if (/notbookable/i.test(location.pathname || document.URL)) {
                  cdpm.pageid = 'notbookable';
                  QSP_ST = '';
                  QSP_CAT = '';
                  QSP_P = '';
            } else if (/book/i.test(location.pathname || document.URL)) { // http://holidays.condor.com/book?cid=8cbef329-8622-49ec-836b-0a1d2fa8a869
                  cdpm.pageid = (location.href || document.URL).replace('book?cid', 'book/step1?cid').replace(/.*(book\/step\d).*/, '$1').replace('/', '_').replace(/.*book\/success.*/, 'confirmation');
                  QSP_ST = '';
                  QSP_CAT = '';
                  QSP_P = '';
            }
        } else if ((/search|select/i).test(cdpm.pageid) && cdpm.departureairportsearched) {
            QSP_ST = 'SS_ST='+(cdpm.departureairportsearched || '')+ '-'+(cdpm.returndestinationairportsearched || '')+ '|'+(cdpm.destinationairportsearched || '')+ '-'+(cdpm.returndepartureairportsearched || '')+'|'+(cdpm.deptdate || '')+ '|'+(cdpm.flighttype || '')+ '|'+(cdpm.durationsearched || '')+ '|'+(cdpm.paxadult || '')+ '|'+(cdpm.paxchild || '')+ '|'+(cdpm.paxinfant || '')+'&';
            QSP_CAT = 'SS_CAT='+(cdpm.holidaytype || '')+'_'+(cdpm.pageid || '')+'_'+(cdpm.language || '')+'&';
        }

        var fullVP = '/VP'+(/mcfi/i.test(cdpm.pageContext)?"M":"")+'/'+(cdpm.language === ""?"":cdpm.language+"/")+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '')+'?'+QSP_ST+QSP_CAT+QSP_P;
        fullVP = fullVP.toLowerCase();

        if (/intcmp/i.test(document.location.href)){
            var campaignID = ((/intcmp=([^&|\s|\?]*)/i).exec(document.location.href) || []).pop() || '';
            window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
        }

        if (typeof cdpm.language != 'undefined') {
            window._gaq.push(['CATTGATC._setCustomVar',  10, 'Language',  cdpm.language, 2]);
        }
        if (typeof cdpm.login != 'undefined') {
            window._gaq.push(['CATTGATC._setCustomVar',  11, 'Login',  cdpm.login+"", 2]);
        }

        cdpm.utmaguid && window._gaq.push(['CATTGATC._setCustomVar',  30, 'UtmaGuid', cdpm.utmaguid, 1]);
        cdpm.landingtimestamp && window._gaq.push(['CATTGATC._setCustomVar',  29, 'TimeStamp', cdpm.landingtimestamp, 2]);

        if (cdpm.pageid === "") {
            window._gaq.push(['CATTGATC._trackPageview']);
        } else {
            if ((/^flight$|^ssr$|^etf$|^oci$|^coupon$/i).test(cdpm.lob || '') || (/^flight$|^ssr$|^etf$|^oci$|^coupon$/i).test(cdpm.holidaytype || '') || /holidays/i.test(location.host || document.URL)) {
                window._gaq.push(['CATTGATC._trackPageview', fullVP.replace(/etf\/etf/, 'flight\/etf')]);
            } else     {
                window._gaq.push(['CATTGATC._trackPageview']);
            }
        }

        if(cdpm.errorcode){
            var errorLabel= cdpm.errorcode+'&AppServer='+cdpm.appserver;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }

    } catch(e) {
        cdl.error && cdl.error('GTM GATC:'+e);
    }
    else {window._gaq.push(['CATTGATC._trackPageview'])}
    (function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();

    if (/holidays/i.test(location.host || document.URL) && /success/i.test(location.pathname || document.URL)) {
        var z = '';
        $('div.row.panel-form--box').each(function(e, b){
            z = $(b).text().trim().replace(/\s*\n\s*/g, '|');
            if (/Reiseziel\|/i.test(z)) { cdl.reiseziel = z.replace(/.*\|(.*)/, '$1');
            } else if (/Auftragsnummer/i.test(z)) {cdl.bookingref = z.replace(/.*\|(.*)/, '$1');
            } else if (/Gesamtpreise\|/i.test(z)) {cdl.bookingvalue = z.replace(/.*\|(.*)/, '$1').replace(' EUR', '').replace('.', '').replace(',', '.');
            } else if (/Hinflug\|/i.test(z)) {
                cdl.hinflug = z.replace(/.*\|(.*)Abflu.*/, '$1');
                cdl.departureairport = cdl.hinflug.replace(/(.*)\s-.*/, '$1');
                cdl.destinationairport = cdl.hinflug.replace(/[^-]*-\s(.*)/, '$1');
            } else if (/Dauer\|/i.test(z)) {cdl.dauer = z.replace(/.*\|\D*(\d+)\D*/, '$1');
            } else if (/Anreise\|/i.test(z)) {cdl.anreise = z.replace(/.*\|(.*)/, '$1');
            } else if (/Hotel\|/i.test(z)) {cdl.hotel = z.replace(/.*\|(.*)/, '$1');
            } else if (/Reiseveranstalter\|/i.test(z)) {cdl.reiseveranstalter = z.replace(/.*\|(.*)/, '$1');
            } else if (/Unterbringung\|/i.test(z)) {
                cdl.paxadult = z.replace(/.*\|\D*(\d+)\s?Erwa.*/g, '$1');
                cdl.unterbringung = z.replace(/.*\|(.*)/g, '$1');
            }
            return true}
        );
        cdl.paxtotal = $('hr.hr-bookdscription:eq(2)').next().text().replace(/\D*(\d+)\D*/g, '$1');

        window._gaq.push(['CATTGATC._addTrans', cdl.bookingref, '', (cdl.bookingvalue || 0), '', '', '', '', '']);
        window._gaq.push(['CATTGATC._addItem',  cdl.bookingref,
            (cdl.departureairport || '')+'|'+(cdl.destinationairport || '')+'|'+(cdl.anreise || '')+'|'+(cdl.reiseveranstalter || ''), // SKU
            (cdpm.language || '')+'|'+(cdl.reiseziel || '')+'|'+(cdl.hinflug || '')+'|'+(cdl.paxtotal || '')+'|'+(cdl.paxadult || '')+'|'+(cdl.anreise || '')+'|'+(cdl.dauer || '')+'|'+(cdl.hotel || '')+'|'+(cdl.unterbringung || ''), // ProductName
            ((cdpm.language === "")?"":cdpm.language+"-")+(cdpm.lob || 'generic').toLowerCase()+'|'+(cdpm.holidaytype || 'generic'),   // Category
            (cdl.bookingvalue || 0),  // UnitPrice
            '1'       // quantitycdl
        ]);
        window._gaq.push(['CATTGATC._trackTrans']);
    }


    return cdl && cdpm;
}(window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams))
</script>


//<script id='gtm_gatcBooking'>
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
            (cdl.departureairportselected || '')+'-'+(cdl.returndestinationairportselected || '')+'|'+(cdl.destinationairportselected || '')+'-'+(cdl.returndepartureairportselected || '')+'|'+(cdl.deptdateselected || '')+'|'+(cdl.carrier || ''), // SKU
            (cdl.language || '')+'|'+(cdl.flightno || '')+'|'+(cdl.departureairportselected || '')+'-'+(cdl.returndestinationairportselected || '')+'|'+(cdl.paxtotal || '0')+'|'+(cdl.paxadult || '0')+'|'+(cdl.paxchild || '0')+'|'+(cdl.deptdateselected || '')+'|'+(cdl.durationselected || '0')+'|'+(cdl.paymentoption || '')+'|'+(cdl.flighttype || '')+'|'+ctpmBookingItems, // ProductName
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
