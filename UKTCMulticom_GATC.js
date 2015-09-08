//<script id='gtm_gatc'>
(function gtm_gatcdlLP(cdl, dl, loc) {
    'use strict';
    if (cdl) try {
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : 'UA-33036832-1',
            cookiedomain     : /directholidays.co.uk/.test(location.hostname)?'directholidays.co.uk':/thomascookcityescapes/.test(location.hostname)?'thomascookcityescapes.com':'thomascook.com',
            trackername        : 'CATTGATC',
            anonymizeip        : true,
            allowlinker        : true,
            organicsearch    : {
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.softonic.com': 'q',
                'search.searchcompletion.com': 'q',
                'searchmobileonline.com': 'q',
                'search.webplayer.tv': 'q',
                'search.babylon.com': 'q',
                'search.sweetim.com': 'q',
                'gooofullsearch.com': 'Keywords',
                'search.rpidity.com': 'q'
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
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportSelected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC GATCDL LP: '+e);
    } finally {
        dl.push({'event': 'GATCDL LP'});
    }
    return cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcdlSRP(cdl, dl, loc) {
    'use strict';
    if (cdl) try {
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : 'UA-33036832-1',
            cookiedomain     : /directholidays.co.uk/.test(location.hostname)?'directholidays.co.uk':/thomascookcityescapes/.test(location.hostname)?'thomascookcityescapes.com':'thomascook.com',
            trackername        : 'CATTGATC',
            anonymizeip        : true,
            allowlinker        : true,
            organicsearch    : {
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.softonic.com': 'q',
                'search.searchcompletion.com': 'q',
                'searchmobileonline.com': 'q',
                'search.webplayer.tv': 'q',
                'search.babylon.com': 'q',
                'search.sweetim.com': 'q',
                'gooofullsearch.com': 'Keywords',
                'search.rpidity.com': 'q'
            }
        };

        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.deptdate || '').replace(/\//g, '-')+'_'+
                ((cdpm.searchresultstotal === '0'?'nResults':'yResults') || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportselected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&srpTop3='+(cdpm.searchresultstop3 || '')+
                '&srpTot='+(cdpm.searchresultstotal || '')+
                '&duration='+(cdpm.duration || '')+
                '&sortoption='+(cdpm.sortoption || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC GATCDL SRP: '+e);
    } finally {
        dl.push({'event': 'GATCDL SRP'});
    }
    return cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcdlCust(cdl, dl, loc) {
    'use strict';
    if (cdl) try {
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : 'UA-33036832-1',
            cookiedomain     : /directholidays.co.uk/.test(location.hostname)?'directholidays.co.uk':/thomascookcityescapes/.test(location.hostname)?'thomascookcityescapes.com':'thomascook.com',
            trackername        : 'CATTGATC',
            anonymizeip        : true,
            allowlinker        : true,
            organicsearch    : {
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.softonic.com': 'q',
                'search.searchcompletion.com': 'q',
                'searchmobileonline.com': 'q',
                'search.webplayer.tv': 'q',
                'search.babylon.com': 'q',
                'search.sweetim.com': 'q',
                'gooofullsearch.com': 'Keywords',
                'search.rpidity.com': 'q',
                'cuil': 'q',
                'cluuz': 'q',
                'myway': 'searchfor',
                'mywebsearch': 'searchfor',
                'lo.st': 'x_query',
                'news.google.fr': 'q',
                'voila': 'kw',
                'exalead': 'q',
                'yauba': 'q',
                'yougoo': 'q',
                'hooseek': 'recherche',
                'ecosia': 'q',
                'ecofree': 'q',
                'ethicle': 'q',
                'skynet': 'q',
                'udark': 'q',
                'wibeez': 'q',
                'veosearch': 'q',
                'incredimail': 'q',
                'conduit': 'q',
                'searcheo': 'q',
                'imesh': 'q',
                'fastbrowsersearch': 'q',
                'magentic': 'q',
                'search.free.fr': 'q',
                'vizzeo': 'q',
                'bluewin.ch': 'searchTerm',
                'google': 'as_q'
            }
        };

        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.accomresort || '')+'_'+
                (cdpm.accomname || '')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '')+
                '&depAirport='+(cdpm.departureairportselected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC GATCDL Cust: '+e);
    } finally {
        dl.push({'event': 'GATCDL Cust'});
    }
    return cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcdlPay(cdl, dl, loc) {
    'use strict';
    if (cdl) try {
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : 'UA-33036832-1',
            cookiedomain     : /directholidays.co.uk/.test(location.hostname)?'directholidays.co.uk':/thomascookcityescapes/.test(location.hostname)?'thomascookcityescapes.com':'thomascook.com',
            trackername        : 'CATTGATC',
            anonymizeip        : true,
            allowlinker        : true,
            organicsearch    : {
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.softonic.com': 'q',
                'search.searchcompletion.com': 'q',
                'searchmobileonline.com': 'q',
                'search.webplayer.tv': 'q',
                'search.babylon.com': 'q',
                'search.sweetim.com': 'q',
                'gooofullsearch.com': 'Keywords',
                'search.rpidity.com': 'q'
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
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportselected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&destAirport='+(cdpm.destinationairportselected || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC GATCDL Pay: '+e);
    } finally {
        dl.push({'event': 'GATCDL Pay'});
    }
    return cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcdlConf(cdl, dl, loc) {
    'use strict';
    if (cdl) try {
        var cdpm = cdl.CATTParams || {};
        var confType = (/([^_]*)_?confirm/i.exec(cdpm.pageid) || ['']).pop();
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : 'UA-33036832-1',
            cookiedomain     : /directholidays.co.uk/.test(location.hostname)?'directholidays.co.uk':/thomascookcityescapes/.test(location.hostname)?'thomascookcityescapes.com':'thomascook.com',
            trackername        : 'CATTGATC',
            anonymizeip        : true,
            allowlinker        : true,
            organicsearch    : {
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.softonic.com': 'q',
                'search.searchcompletion.com': 'q',
                'searchmobileonline.com': 'q',
                'search.webplayer.tv': 'q',
                'search.babylon.com': 'q',
                'search.sweetim.com': 'q',
                'gooofullsearch.com': 'Keywords',
                'search.rpidity.com': 'q',
                'cuil': 'q',
                'cluuz': 'q',
                'myway': 'searchfor',
                'mywebsearch': 'searchfor',
                'lo.st': 'x_query',
                'news.google.fr': 'q',
                'voila': 'kw',
                'exalead': 'q',
                'yauba': 'q',
                'yougoo': 'q',
                'hooseek': 'recherche',
                'ecosia': 'q',
                'ecofree': 'q',
                'ethicle': 'q',
                'skynet': 'q',
                'udark': 'q',
                'wibeez': 'q',
                'veosearch': 'q',
                'incredimail': 'q',
                'conduit': 'q',
                'searcheo': 'q',
                'imesh': 'q',
                'fastbrowsersearch': 'q',
                'magentic': 'q',
                'search.free.fr': 'q',
                'vizzeo': 'q',
                'bluewin.ch': 'searchTerm',
                'google': 'as_q'
            }
        };
        cdl.DL_gatc.webanalytics = {
            transaction : {
                'transactionId': (cdpm.bookingref || ''),
                'transactionDate': new Date().toUTCString(),
                'transactionType': 'Booking',
                'transactionAffiliation': 'TCFR',
                'transactionTotal': (cdpm.bookingvalue || '0'),
                'transactionShipping': 0,
                'transactionTax': 0,
                'transactionPaymentType': 'na',
                'transactionCurrency': 'EUR',
                'transactionShippingMethod': '',
                'transactionPromoCode': '',
                'transactionProducts': [{
                    'id': cdpm.accomguid || '',
                    'name':((cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-'))+'|'+(cdpm.accomcode || '')+'|'+(cdpm.departureairportselected || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdpm.deptdate || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''),
                    'sku': ((cdpm.destination || ''))+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.touroperator || ''),
                    'category': (cdpm.lob || "")+'|'+(cdpm.holidaytype || "")+(confType?('_'+confType):''),
                    'price': (cdpm.bookingvalue || '0'),
                    'currency': 'EUR',
                    'quantity': 1
                }]
            },
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '')+'_'+
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
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&BookingRef='+(cdpm.bookingref || '')+
                '&payOpt='+(cdpm.paymentoption || '')+
                '&GBV='+(cdpm.bookingvalue || '')+
                '&depVal='+(cdpm.depositvalue || '')+
                '&depSelect='+(cdpm.depositselection || '')
                ).toLowerCase(),
            customvars : {
                custvar01     : {'index': 1,    'name':'Buyer',                'value':(cdpm.lob || '')+'|'+(cdpm.holidaytype || ''),    'scope': 3},
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC GATCDL Conf: '+e);
    } finally {
        dl.push({'event': 'GATCDL Conf'});
    }
    return cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcLP(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || {};
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){return w._gaq.push(arr)};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);
        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

        wgp([tn+'_trackPageview']);

        for (var evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = '//stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());

        var as=d.getElementsByTagName("a");
        var inBound=new RegExp("^#$|^javascript:|"+d.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace(".","\\.")+"|thomascook\\.com|google-analytics\\.com|mailto:","gi");
        for(var i=0;i<as.length;i++){
            var aHref=as[i].href;
            if(!aHref||aHref.match(inBound))continue;
            var aOnClick=as[i].onclick;
            as[i].onclick=function extClick(){wgp([tn+"_trackEvent","outbound link","click",this.href.split("//")[1],1,true]);aOnClick();};
        }
    } catch(e) {
        cdl.error('GTM FR TC GATC LP: '+e);
    }
    return cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcSRP(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || {};
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){return w._gaq.push(arr);};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);

        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

        for (var evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP]);

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = '//stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());

    } catch(e) {
        cdl.error('GTM FR TC GATC SRP: '+e);
    }
    return cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcCust(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || {};
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr);};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);

        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

        for (var evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP]);

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = '//stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());
    } catch(e) {
        cdl.error('GTM FR TC GATC Cust: '+e);
    }
    return cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcPay(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || {};
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr);};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);

        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

        for (var evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP]);

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = '//stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());
    } catch(e) {
        cdl.error('GTM FR TC GATC Pay: '+e);
    }
    return cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>

//<script id='gtm_gatc'>
(function gtm_gatcConf(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || '';
        var gawa = gadl.webanalytics || '';
        var trdl = gawa && gawa.transaction || '';
        var tpdl = trdl && trdl.transactionProducts && trdl.transactionProducts[0] || '';
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);

        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

        for (var evt in gawa.events) {
            var gevt = gawa.events[evt];
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        var fullVP = gawa.vp+'?'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP]);

        wgp([tn+'_addTrans', trdl.transactionId,'',trdl.transactionTotal,'','','','','']);
        wgp([tn+'_addItem', trdl.transactionId, tpdl.sku, tpdl.name, tpdl.category, tpdl.price, tpdl.quantity]);
        wgp([tn+'_trackTrans']);

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = '//stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());
    } catch(e) {
        cdl.error('GTM FR TC GATC Conf: '+e);
    }
    return cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
//</script>
