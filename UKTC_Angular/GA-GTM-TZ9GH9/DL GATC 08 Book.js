<script>
(function gtm_gatcdlBook(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        var cdurl = cdpm.urlparams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {}
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "") 
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid       : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":(twlh(/staging.eceit/i)?"staging.eceit.net":(twlh(/thomascook.io/i)?"thomascook.io":"thomascook.com")))),
            trackername     : 'CATTGATC',
            anonymizeip     : false,
            allowlinker     : true,
            organicsearch   : {
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
            transaction : {
                'transactionId': cdpm.bookingref || '',
                'transactionDate': new Date().toUTCString(),
                'transactionType': 'Booking',
                'transactionAffiliation': 'TCUK',
                'transactionTotal': cdpm.totalprice || '0',
                'transactionShipping': 0,
                'transactionTax': 0,
                'transactionPaymentType': cdpm.cardtype || 'na',
                'transactionCurrency': 'GBP',
                'transactionShippingMethod': '',
                'transactionPromoCode': cdpm.promotion && cdpm.promotion.code || '',
                'transactionProducts': [{
                    'id': cdpm.accomguid || '',
                    'name':(cdpm.accomname || '')+'|'+(cdpm.accomcode || '')+'|'+(cdpm.deptairport || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''),
                    'sku': (cdpm.destination || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.touroperator    || ''),
                    'category': (cdpm.lob || "")+'|'+(cdpm.holidaytype || ""),
                    'price': (cdpm.totalprice || '0'),
                    'currency': 'GBP',
                    'quantity': 1
                }]
            },
            vp  : cdpmVP,
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
                'DeptDate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+
                '&depAirport='+(cdpm.deptairport || '')+
                '&DestAirport='+(cdpm.destairport || '')+               
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&PaxInfant='+(cdpm.paxinfant || '')+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomGuid='+(cdpm.accomguid || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(''+cdpm.rooms || '')+
                '&Duration='+(''+cdpm.duration || '')+          
                '&BookingRef='+(cdpm.bookingref || '')+
                '&payOpt='+(cdpm.paymentoption || '')+
                '&GBV='+(cdpm.totalprice || '')+    
                '&depVal='+(cdpm.depositvalue || '')+
                '&depSel='+(cdpm.depositselected || '')+
                '&AppServer='+(cdpm.appserver || '')+
                '&SessionID='+(cdpm.sessionid || '')            
                ).toLowerCase(),
            customvars : {
                var02   : {'index': 2,  'name':'AppServer',         'value':(cdpm.appserver || ''),                 'scope': 3},
                var04   : {'index': 4,  'name':'InternalCampaign',  'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                var09   : {'index': 9,  'name':'tcFrogVis',         'value':'Angular',                              'scope': 1},
                var30   : {'index': 30, 'name':'UtmaGuid',          'value':(cdpm.utmaguid || ''),                  'scope': 1},
                var31   : {'index': 31, 'name':'eCircleID',         'value':(cdpm.ecircleid || ''),                 'scope': 1},
                var32   : {'index': 32, 'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                var35   : {'index': 35, 'name':'UtmbGuid',          'value':(cdpm.utmbguid || ''),                  'scope': 2},
                var39   : {'index': 39, 'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                angularpages        : {'category': 'Angular Pages', 'action': locpathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+locpathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+locpathname, 'value': 1, 'noninteraction': true},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': loc.hostname+locpathname+'?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true},
                opcreative          : {'category': 'OptimostCreative', 'action': cdpm.optimostcreative || '', 'label': loc.href || '', 'value': 1, 'noninteraction': true}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC GATCDL Book: '+e)
    } finally {
        dl.push({'event': 'GATCDL Book'})
        gatcDL.push({'event': 'GATCDL Book'})
    }
    return window.DL_gatc
}(window.CATTDL, window.dataLayer || [], document.location || window.location))
</script>
