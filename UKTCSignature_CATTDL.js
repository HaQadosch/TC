// DL CATT

//<script id='gtm_cattdlPaxPay'>
(function gtm_cattdlPaxPay(jQ, dl, cdl){
    'use strict';
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams;
        var newPM = {};
        var keeps = {};

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/).filter(function steps(e){return e});
            var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop());
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')';
            else
                lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
            keeps.trailingsteps = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps;
        } else keeps.trailingsteps = cdpm.pageid+'(1)';

        newPM.roomtype = jQ('.room-type').next().text() || '';

        jQ('input[name=pax_inputs_fields:leadPaxPanel:firstname]').live('blur', function(e){
            var fn = jQ(e.currentTarget).val() || '';
            keeps.firstname = fn;
            jQ.extend(cdl.CATTParams, newPM, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');
            /*window.sessionStorage && window.sessionStorage.setItem('gtm_fn', fn) || cdl.ckset('gtm_fn', fn, Infinity, '/', '.thomascook.com');*/
        });

        jQ('input[name=pax_inputs_fields:leadPaxPanel:surname]').live('blur', function(e){
            var ln = jQ(e.currentTarget).val() || '';
            keeps.lastname = ln;
            jQ.extend(cdl.CATTParams, newPM, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');
            /*window.sessionStorage && window.sessionStorage.setItem('gtm_ln', ln) || cdl.ckset('gtm_ln', ln, Infinity, '/', '.thomascook.com');*/
        });

        jQ.extend(cdl.CATTParams, newPM, keeps);

        keeps.accomname = cdpm.accomname || '';
        keeps.accomcode = cdpm.accomcode || '';
        keeps.accomresort = cdpm.accomresort || '';
        keeps.boardbasis = cdpm.boardbasis || '';
        keeps.departureairportselected = cdpm.departureairportselected || '';
        keeps.destinationairportselected = cdpm.destinationairportselected || '';
        keeps.retdate = cdpm.retdate || '';
        jQ.extend(ck_cdpm, keeps);
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');

    } catch(e) {
        cdl.error('GTM CATTDL PaxPay: '+e);
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL PaxPay'});
    }
    return jQ && jQ.extend && cdl;
}(window.jQuery, window.dataLayer, window.CATTDL));
//</script>


//<script id='gtm_cattdlBooking'>
(function gtm_cattdlBooking(jQ, dl, cdl){
    'use strict';
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams;
        var newPM = {};
        var keeps = {};

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/).filter(function steps(e){return e});
            var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop());
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')';
            else
                lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
            keeps.trailingsteps = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps;
        } else keeps.trailingsteps = cdpm.pageid+'(1)';

        newPM.roomtype = jQ('.room-type').next().text() || '';

        jQ('input[name=pax_inputs_fields:leadPaxPanel:firstname]').live('blur', function(e){
            var fn = jQ(e.currentTarget).val() || '';
            keeps.firstname = fn;
            jQ.extend(cdl.CATTParams, newPM, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');
            /*window.sessionStorage && window.sessionStorage.setItem('gtm_fn', fn) || cdl.ckset('gtm_fn', fn, Infinity, '/', '.thomascook.com');*/
        });

        jQ('input[name=pax_inputs_fields:leadPaxPanel:surname]').live('blur', function(e){
            var ln = jQ(e.currentTarget).val() || '';
            keeps.lastname = ln;
            jQ.extend(cdl.CATTParams, newPM, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');
            /*window.sessionStorage && window.sessionStorage.setItem('gtm_ln', ln) || cdl.ckset('gtm_ln', ln, Infinity, '/', '.thomascook.com');*/
        });

        jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.tcsignature.com');

    } catch(e) {
        cdl.error('GTM CATTDL Booking: '+e);
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Booking'});
    }
    return jQ && jQ.extend && cdl;
}(window.jQuery, window.dataLayer, window.CATTDL));
//</script>


//<script id='gtm_gatcdl'>
(function gtm_gatcdl(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
        profileid        : "UA-33036832-1",
            cookiedomain     : "thomascook.com",
            trackername        : 'CATTGATC',
            anonymizeip        : false,
            allowlinker        : true,
            organicsearch    : {
                'search.bt.com': 'p',
                'search.sky.com': 'term',
                'search.mywebsearch.com': 'searchfor',
                'search.orange.co.uk': 'q',
                'search.virginmedia.com': 'q',
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.sweetim.com': 'q',
                'searchmobileonline.com': 'q',
                'searchbrowsing.com': 'q',
                'advancedsearch2.virginmedia.com': 'SearchQuery'
            }
        };
        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '')+
                '&depAirport='+(cdpm.departureairportselected || '')+
                '&DestAirport='+(cdpm.destinationairportselected || '')+
                '&PaxAdult='+(''+(cdpm.paxadult || ''))+
                '&PaxChild='+(''+(cdpm.paxchild || ''))+
                '&PaxInfant='+(''+(cdpm.paxinfant || ''))+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomGuid='+(cdpm.accomguid || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(''+(cdpm.rooms || ''))+
                '&Duration='+(''+(cdpm.duration || ''))+
                '&BookingRef='+(cdpm.bookingref || '')+
                '&payOpt='+(cdpm.paymentoption || '')+
                '&GBV='+(cdpm.bookingvlaue || '')+
                '&depVal='+(cdpm.depositvalue || '')+
                '&depSel='+(cdpm.depositselected || '')+
                '&AppServer='+(cdpm.appserver || '')+
                '&SessionID='+(cdpm.sessionId || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',                            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',                    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',                            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',                            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',                    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',                             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': (cdpm.errors && cdpm.errors.code) || '', 'label': loc.pathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(loc.href)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true},
                opcreative             : {'category': 'OptimostCreative', 'action': cdpm.optimostcreative || '', 'label': loc.href || '', 'value': 1, 'noninteraction': true}
            },
            addtrans : {
                transactionid         :     cdpm.bookingref || '',
                affiliation         :     'UKTCSignature',
                totalprice            :     cdpm.bookingvalue || 0,
                tax                 :     '',
                shipping            :     '',
                city                 :     '',
                state                :     '',
                country                :     ''
            },
            additem     : {
                transactionid         :    (cdpm.bookingref || ''),
                productsku            :    (cdpm.destination || '')+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.touroperator    || ''),
                productname            :     (cdpm.accomname || '')+'|'+(cdpm.accomcode || '')+'|'+(cdpm.departureairportselected || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdpm.deptdate || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''),
                productcategory        :     (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''),
                unitprice             :     (cdpm.bookingvalue || 0),
                quantity            :     '1'
            }
        };

        dl.push({'event': 'GATCDL Booking'});

    } catch(e) {
        cdl.error('GTM GATCDL Booking: '+e);
    }
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatc(jQ, cdl, gadl, w, d){
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || {};
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr);};
        var gatrans = gawa.addtrans;
        var gaitem = gawa.additem;

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);
        wgp([tn+'_addIgnoredRef', 'www1.thomascook.com']);
        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term])});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope])});

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP]);

        var evt;
        for (evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        (function gtm_callGAscript() {
            var ga = d.createElement('script');
                ga.src = 'https://stats.g.doubleclick.net/dc.js';
            var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
        }());

        w._gaq.push([tn+'_addTrans', gatrans.transactionid, gatrans.affiliation, gatrans.totalprice, gatrans.tax, gatrans.shipping, gatrans.city, gatrans.state, gatrans.country]);

        w._gaq.push([tn+'_addItem',
            gaitem.transactionid,
            gaitem.productsku,
            gaitem.productname,
            gaitem.productcategory,
            gaitem.unitprice,
            gaitem.quantity
        ]);

        w._gaq.push([tn+'_trackTrans']);

    } catch(e) {
        cdl.error('GTM GATC Book: '+e);
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>

// Attribution
//<script id='gtm_attribution'>
(function gtm_attribution(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        var paidChannels = /afflong|met|part|affdirect|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5];});

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdl.CATTParams.attribution = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            };
            var winningCampaign = '';
            var m = vL[1];
            if ((/afflong/i).test(m)) winningCampaign = 'afflong';
            else if ((/met/i).test(m)) winningCampaign = 'affmeta';
            else if ((/affdirect|part/i).test(m)) winningCampaign = 'affdirect';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dl.push({event: 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', /tcsignature/i.test(window.location.hostname)?'.tcsignature.com':'.thomascook.com');
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && dl && cdl.CATTParams.attribution;
}(window.CATTDL, window.dataLayer));
//</script>
