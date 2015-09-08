//<script id='gtm_gatc'>
setTimeout(function gtm_gatc(){
    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-33094200-1']);
    var domainName = (/h4u\.me/i.test(document.location.host))?'.h4u.me':'.hotels4u.com';
    window._gaq.push(['CATTGATC._setDomainName', domainName]);
    window._gaq.push(['CATTGATC._addOrganic', 'search.bt.com', 'p'], ['CATTGATC._addOrganic', 'search.sky.com', 'term'], ['CATTGATC._addOrganic', 'search.mywebsearch.com', 'searchfor'], ['CATTGATC._addOrganic', 'search.orange.co.uk', 'q'], ['CATTGATC._addOrganic', 'search.virginmedia.com', 'q'], ['CATTGATC._addOrganic', 'search.incredibar.com', 'q'], ['CATTGATC._addOrganic', 'search.alot.com', 'q'], ['CATTGATC._addOrganic', 'search.sweetim.com', 'q'], ['CATTGATC._addOrganic', 'searchmobileonline.com', 'q'], ['CATTGATC._addOrganic', 'searchbrowsing.com', 'q'], ['CATTGATC._addOrganic', 'advancedsearch2.virginmedia.com', 'SearchQuery']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    var cdl = window.CATTDL || '';
    var cdpm = cdl && cdl.CATTParams || '';

    var QSP_P = ''; for (var i in cdpm) {if (cdpm && cdpm[i] && !/cookies|searches/g.test(i)) QSP_P += '&'+i+'='+ cdpm[i];}
    var VP = ""; var fullVP = "";
    var doneAlready = /xbGTMBooking=/i.test(document.cookie) && (/xbGTMBooking=([^;]*)/i.exec(document.cookie)|| []).pop() || '';
    if (cdpm.bookingref && cdpm.bookingvalue && !doneAlready) try {
        if (/GTMbookingAccount/i.test(document.cookie || '')) {
            VP = '/vp/hotel/hotel/booking_account'; fullVP = VP+QSP_P.replace(/\&/, '?');
            window._gaq.push(['CATTGATC._trackPageview', fullVP]);
        } else {
            VP = '/vp/hotel/hotel/booking'; fullVP = VP+QSP_P.replace(/\&/, '?');
            var today = in5Min = new Date(); in5Min.setMinutes(today.getMinutes()+30);document.cookie="GTMbookingAccount=XB; expires="+in5Min.toUTCString()+"; path=/; domain=.hotels4u.com;"
            window._gaq.push(['CATTGATC._trackPageview', fullVP]);
            window._gaq.push(['CATTGATC._addTrans', (cdpm.bookingref || 'na'),'',(cdpm.bookingvalue || '0'),'','','','','']);
            window._gaq.push(['CATTGATC._addItem', (cdpm.bookingref || 'na'),
                (cdpm.accomguid || ''), // SKU
                (cdpm.accomname || '')+'|'+(cdpm.accomguid || '')+'||'+(cdpm.paxtotal || '')+'|||'+(cdpm.deptdate || '')+'|'+(cdpm.duration || '')+'|', // ProductName
                'hotel|hotel',   // Category
                (cdpm.bookingvalue || ''),  // UnitPrice
                '1'       // quantity
            ]);
            window._gaq.push(['CATTGATC._set', 'currencyCode', (cdpm.currency || 'GBP')]);
            window._gaq.push(['CATTGATC._trackTrans']);
            today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
            document.cookie="xbGTMBooking="+(cdpm.bookingref || '')+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.hotels4u.com;";
        }
    } catch(e) {
        var bookRef = "empty_"+Math.random();
        window._gaq.push(['CATTGATC._addTrans', bookRef,'',"0.01",'','','','','']);
        window._gaq.push(['CATTGATC._addItem', bookRef,
            'SKUErr_'+e, // SKU
            'PNameErr_'+e, // ProductName
            'hotel|hotel',   // Category
            "0.01",  // UnitPrice
            '1'       // quantity
        ]);
        window._gaq.push(['CATTGATC._set', 'currencyCode', (cdpm.currency || 'GBP')]);
        window._gaq.push(['CATTGATC._trackTrans']);
    }
    window._gaq.push(['CATTGATC._trackEvent', 'booking tracking', (cdpm.bookingref || 'na') || ('ref_'+Date.now()), (cdpm.currency || 'GBP')+'_'+(cdpm.bookingvalue || '0.01'), 1, true]);
    if (/HC/i.test(cdpm.cookies && cdpm.cookies.affiliate || '')) window._gaq.push(['CATTGATC._trackEvent', 'HCtracking', (cdpm.bookingref || 'na'), (cdpm.hcBooking || 'na'), 1, true]);

    (function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();
},1500)
</script>
