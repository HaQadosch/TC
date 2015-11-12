//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';


    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';
        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        window._gaq.push(['CATTGATC._trackPageview']);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

        var as = document.getElementsByTagName("a");
        var inBound = new RegExp("^#$|^javascript:|"+document.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace('.', '\\.')+"|urlaubswelt\\.neckermann\\.de|google-analytics\\.com|mailto:", "gi");
        for (var i=0; i<as.length; i++){
            var aHref = as[i].href;
            if(!aHref || aHref.match(inBound)) continue;
            var aOnClick = as[i].onclick;

            as[i].onclick = function () {
                window._gaq.push(['CATTGATC._trackEvent', 'outbound link', 'click', this.href.split("//")[1], 1, true]);
                aOnClick();
            };
        }
    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>


//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';

        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var VP = '/VP/'+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '');
        var fullVP = VP;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';

        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0;};}

        var VP = '/VP/'+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '');
        var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.deptdate || '').replace(/\//g, '-')+'_'+((cdpm.searchresultstotal.tcTrim() == "0")?'nResults':'yResults');
        var QSP_CAT = 'SS_CAT='+(cdpm.lob || '')+'_'+(cdpm.pageid || '');
        var QSP_P = 'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+'&depAirport='+(cdpm.departureairportselected || '')+'&PaxAdult='+(cdpm.paxadult || '')+'&PaxChild='+(cdpm.paxchild || '')+'&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTop3='+(cdpm.searchresultstop3 || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTot='+(cdpm.searchresultstotal || '')+'&destAirport='+(cdpm.destinationairportselected || '');
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';

        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0;};}

        var VP = '/VP/'+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '');
        var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomcode || '');
        var QSP_CAT = 'SS_CAT='+(cdpm.lob || '')+'_'+(cdpm.pageid || '');
        var QSP_P = 'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+'&depAirport='+(cdpm.departureairportselected || '')+'&PaxAdult='+(cdpm.paxadult || '')+'&PaxChild='+(cdpm.paxchild || '')+'&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+(cdpm.accomcode || '')+'&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+(cdpm.rooms || '')+'&destAirport='+(cdpm.destinationairportselected || '');
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    function waitForDelayedContent(selector, experiment, timeout, keepAlive) {
        var intervalTime = 50;
        timeout = timeout || 3000;
        keepAlive = keepAlive || false;
        var maxAttempts = timeout / intervalTime;
        var attempts = 0;
        var elementsCount = 0;
        var interval = setInterval(function () {
            if (window.$(selector).length > elementsCount) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                experiment();
                elementsCount = window.$(selector).length;
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts++;
        }, intervalTime);
    }
    if (cdl) try {
        cdpm = cdl.CATTParams || '';

        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0;};}

        var VP = '/VP/'+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '');
        var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomcode || '');
        var QSP_CAT = 'SS_CAT='+(cdpm.lob || '')+'_'+(cdpm.pageid || '');
        var QSP_P = 'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+'&depAirport='+(cdpm.departureairportselected || '')+'&PaxAdult='+(cdpm.paxadult || '')+'&PaxChild='+(cdpm.paxchild || '')+'&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+(cdpm.accomcode || '')+'&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+(cdpm.rooms || '')+'&destAirport='+(cdpm.destinationairportselected || '');
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

        waitForDelayedContent('#upsellingContent div', function () {
            // Upselling offers are available
            if(window.$('#upsellingContent div').html().trim() !== ''){
                window._gaq.push(['CATTGATC._trackEvent', 'Sichtbarkeit', 'Upselling', 'visible_' + window.CATTParams.AccomCode]);

                var upsellOption = window.$('.checkout-upselling-offer-item-checked .description').text();
                var upsellPrice  = window.$('.checkout-upselling-offer-item-checked .price').text().replace(' ?','');
                // Upselling selection was changed
                window.$('#upsellingContent input:radio').change(function () {
                    upsellOption = window.$(this).parent().parent().find('.description').text();
                    upsellPrice  = window.$(this).parent().parent().find('.price').text().replace(' ?','');
                    if(upsellPrice !== 0){
                        window._gaq.push(['CATTGATC._trackEvent', 'Interaktion', 'Upselling', upsellOption + '_' + upsellPrice]);
                    }
                });

                // Booking Button was clicked
                window.$('.module-ordernavigation-next').click(function() {
                    if(upsellPrice !== 0){
                        window._gaq.push(['CATTGATC._trackEvent', 'Buchung mit Upsell', 'Upselling', upsellOption + '_' + upsellPrice]);
                    }
                });
            }
        }, 5000);

    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(cdl){
    'use strict';
    var cdpm = '';
    if (cdl) try {
        cdpm = cdl.CATTParams || '';

        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0;};}
        if (!cdpm.bookingref || (cdpm.bookingref == "0")) cdpm.bookingref = "empty_"+Math.random();

        var QSP_P = 'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+'&depAirport='+(cdpm.departureairportselected || '')+'&PaxAdult='+(cdpm.paxadult || '')+'&PaxChild='+(cdpm.paxchild || '')+'&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+(cdpm.accomcode || '')+'&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+(cdpm.rooms || '')+'&BookingRef='+(cdpm.bookingref || '')+'&payOpt='+(cdpm.paymentoption || '')+'&GBV='+(cdpm.bookingvalue || '0')+'&depVal='+(cdpm.depositvalue || '')+'&depSelect='+(cdpm.depositselection || '');
        var VP = '/VP/'+(cdpm.lob || '')+'/'+(cdpm.holidaytype || '')+'/'+(cdpm.pageid || '');
        var fullVP = VP+'?'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
        window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._setCustomVar',  1, 'Buyer',  (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''), 3]);
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        window._gaq.push(['CATTGATC._addTrans', cdpm.bookingref || '','', cdpm.bookingvalue || '0','','','','','']);
        window._gaq.push(['CATTGATC._addItem', cdpm.bookingref || '',
            (cdpm.destination || '')+'|'+(cdpm.destinationairportSelected || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.touroperator || ''), // SKU
            (cdpm.accomname || '')+'|'+(cdpm.accomcode || '')+'|'+(cdpm.departureairportselected || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdpm.deptdate || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''), // ProductName
            (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''),   // Category
            cdpm.bookingvalue || '0',  // UnitPrice
            '1'       // quantity
        ]);
        window._gaq.push(['CATTGATC._trackTrans']);


        try {
            if (cdpm.searches && cdpm.searches.intcmp){
                var campaignID = cdpm.searches.intcmp;
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (cdpm.errorcode){
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', (cdpm.errorcode || '')+'_SessionID='+(cdpm.sessid || '')+'_AppServer='+(cdpm.appserver || ''), window.document.referrer, 1, true]);
        }

    } catch(e) {
        cdl.error && cdl.error('GTM GATC: '+e) || '';
    } finally {
        cdl.DL_gatc = {};
    }
    return cdl;
}(window.CATTDL));
//</script>
