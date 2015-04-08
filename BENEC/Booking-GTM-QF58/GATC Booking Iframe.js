<script>
(function gatcBooking(ctpm){
    'use strict'
    if (ctpm){
        try{
            var cdpm = window.CATTDL && window.CATTDL.CATTParams || {};

            var QSP_P = 'DeptDate='+ctpm.DeptDateSelected.replace(/\//g, '-')+
            '&depAirport='+ctpm.DepartureAirportSelected+
            '&PaxAdult='+ctpm.PaxAdult+
            '&PaxChild='+(ctpm.PaxChild || '')+
            '&Destination='+(ctpm.DestinationAirportSelected || '')+
            '&Rooms='+(ctpm.Rooms || '')+
            '&BookingRef='+(ctpm.BookingRef || '')+
            '&payOpt='+(ctpm.PaymentOption || '')+
            '&GBV='+(ctpm.BookingValue || '')+
            '&depVal='+(ctpm.DepositValue || '')+
            '&depSelect='+(ctpm.DepositSelection || '')+
            '&Brochure='+(ctpm.Brochure || '')
            var VP = '/VP/'+(ctpm.Language || '')+'/'+(ctpm.LOB || '')+'/'+(ctpm.HolidayType || '')+'/'+"booking"
            var fullVP = VP+'?'+QSP_P;
            fullVP = fullVP.toLowerCase();

            window._gaq = window._gaq || [];
            window._gaq.push(['CATTGATC._setAccount', 'UA-33087819-1']);
            window._gaq.push(['CATTGATC._setDomainName', 'thomascookairlines.be']);
            window._gaq.push(['_gat._anonymizeIp']);
            window._gaq.push(['CATTGATC._setAllowLinker', true]);

            window._gaq.push(['CATTGATC._setCustomVar',  1, 'Buyer',  (ctpm.LOB)+'|'+(ctpm.HolidayType), 3]);
            
            if(ctpm.SessID){window._gaq.push(['CATTGATC._setCustomVar', 11, 'SessionID', ctpm.SessID, 3])};
            if(ctpm.AppServer){window._gaq.push(['CATTGATC._setCustomVar', 12, 'AppServer', ctpm.AppServer, 3])};
            window._gaq.push(['CATTGATC._setCustomVar', 13, 'LOB', ctpm.LOB || 'flight', 3]);
            window._gaq.push(['CATTGATC._setCustomVar', 14, 'HolidayType', ctpm.HolidayType || 'flight', 3]);
            window._gaq.push(['CATTGATC._setCustomVar', 15, 'InitialHolidayType', 'flight', 3]);
            if(ctpm.PageId){window._gaq.push(['CATTGATC._setCustomVar', 16, 'PageID', 'booking', 3])};
            if(ctpm.Duration){window._gaq.push(['CATTGATC._setCustomVar', 17, 'Duration', ctpm.Duration, 3])};            
            if (ctpm.Language) {
                window._gaq.push(['CATTGATC._setCustomVar', 19, 'PageLanguage', ctpm.Language, 3]);
                window._gaq.push(['CATTGATC._setCustomVar', 20, 'SessionLanguage', cdpm.Language, 2]);
            };
            //if(cdpm.destination){window._gaq.push(['CATTGATC._setCustomVar', 21, 'Country', cdpm.destination, 3])};
            //if(cdpm.region){window._gaq.push(['CATTGATC._setCustomVar', 22, 'Region', cdpm.region, 3])};
            //if(cdpm.accomresort){window._gaq.push(['CATTGATC._setCustomVar', 23, 'Place', cdpm.accomresort, 3])};           
            if(ctpm.DeptDateSelected){window._gaq.push(['CATTGATC._setCustomVar', 24, 'DeptDate', ctpm.DeptDateSelected.replace(/(.+)-(.+)-(.+)/,'$3/$2/$1') , 3])};
            //if(cdpm.accomcode){window._gaq.push(['CATTGATC._setCustomVar', 25, 'AccomCode', cdpm.accomcode, 3])};
            //if(cdpm.accomname){window._gaq.push(['CATTGATC._setCustomVar', 26, 'AccomName', ctpm.accomname, 3])};
            if(ctpm.DepartureAirportSelected){window._gaq.push(['CATTGATC._setCustomVar', 27, 'DepartureAirport', ctpm.DepartureAirportSelected, 3])};
            if(ctpm.DestinationAirportSelected){window._gaq.push(['CATTGATC._setCustomVar', 28, 'DestinationAirport', ctpm.DestinationAirportSelected, 3])};
            if (/_utma=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 30, 'UtmaGuid', (function(e){var t=/_utma=([^;%=]*)/i.exec(e)&&/_utma=([^;%=]*)/i.exec(e).pop()||false;t=t&&t.split(".")[1];return t||""})(document.cookie), 1]);}
            if (/&m_i=/i.test(document.location.search)) {window._gaq.push(['CATTGATC._setCustomVar', 31, 'espID', (function(e){var t=/&m_i=([^&]*)/i.exec(e)&&/&m_i=([^&]*)/i.exec(e).pop()||false;return t||""})(document.location.search), 1]);}
            if (/_utmb=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 35, 'UtmbGuid', (function(e){var t=/_utmb=([^;%=]*)/i.exec(e)&&/_utmb=([^;%=]*)/i.exec(e).pop()||false;return t||""})(document.cookie), 2]);}
            if (typeof window.CATTDL != 'undefined'){
                //window.CATTDL.CATTParams.utmaguid && window._gaq.push(['CATTGATC._setCustomVar',  30, 'UtmaGuid', window.CATTDL.CATTParams.utmaguid, 1]);
                window.CATTDL.CATTParams.landingtimestamp && window._gaq.push(['CATTGATC._setCustomVar',  29, 'TimeStamp',  window.CATTDL.CATTParams.landingtimestamp, 2]);
            }
            window._gaq.push(['CATTGATC._trackPageview', fullVP]);
            
            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            var ctpmBookingItems = "_a_/_b_/_c_/_d_/_e_/_f_/_g_"

            ctpm.BookingItems.forEach(function forEach(cur){
                var type = cur.Type
                var item = cur.Type+'-'+cur.Quantity+'-'+cur.ValueInCurrency

                if (/flex/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_a_/,item) 
                else if (/flight/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_b_/, item)
                else if (/insurance/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_c_/, item)
                else if (/meal/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_d_/, item)
                else if (/seat/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_e_/, item)
                else if (/speq/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_f_/, item)
                else if (/xbag/i.test(type)) ctpmBookingItems = ctpmBookingItems.replace(/_g_/, item)
            })
            ctpmBookingItems = ctpmBookingItems.replace(/[_a_|_b_|_c_|_d_|_e_|_f_|_g_]/g, '')

            window._gaq.push(['CATTGATC._addTrans', (ctpm.BookingRef || ''),'',(''+ctpm.BookingValue || ''),'','','','','']);
            window._gaq.push(['CATTGATC._addItem', (ctpm.BookingRef || ''),
                (ctpm.DepartureAirportSelected || '')+'|'+(ctpm.DestinationAirportSelected || '')+'|'+(ctpm.DeptDateSelected || '')+'|'+(ctpm.Carrier || ''), // SKU
                (ctpm.Language || '')+'|'+(ctpm.FlightNo || '')+'|'+(ctpm.DepartureAirportSelected || '')+'|'+(ctpm.PaxTotal || '')+'|'+ctpm.PaxAdult+'|'+ctpm.PaxChild+'|'+ctpm.DeptDateSelected+'|'+ctpm.DurationSelected+'|'+ctpm.PaymentOption+'|'+ctpm.FlightType+'|'+ctpmBookingItems, // ProductName
                (ctpm.LOB || '').toLowerCase()+'|'+(ctpm.HolidayType || '').toLowerCase(),   // Category
                (ctpm.BookingValue || ''),  // UnitPrice
                '1'       // quantity
            ]);
            window._gaq.push(['CATTGATC._trackTrans']);

        } catch(e) {
            console.info('GTM GATC Iframe Book: '+e)
        } finally {
            window.dataLayer && dataLayer.push({'event' : 'GATC Iframe Book'})
        }
    }
}(window.CATTParams || {}))
</script>
