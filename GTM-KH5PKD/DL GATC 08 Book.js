<script id='GTM-KH5PKD_GATCDLBook'>
(function gtm_gatcdlBook(cdl, dl, loc){
    'use strict'
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    if (cdl && cdl.CATTParams && dl) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        var cdurl = cdpm.urlparams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {}

        var destination = (cdpm.destination || '') || '';
        var deptdate = cdl.gadate(cdpm.deptdate || 0);
        var boardbasis = cdpm.boardbasis || '';
        var errors = cdpm.errors || cdpm || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "") 
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid     : 'UA-33036832-1'
            , cookiedomain  : 'thomascook.com'
            , trackername   : 'CATTGATC'
            , anonymizeip     : false
            , allowlinker     : true
            , organicsearch   : {
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
            vp  : cdpmVP,
            qsp_st : ('ss_st='+ 
                (cdpm.destination || '')+'_'+
                (cdpm.cruiseship || cdpm.accomname || '')+'_'+
                (cdpm.cruiseshipid || cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+ 
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : ( 
                'DeptDate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate || 0) || '')+
                '&depAirport='+(cdpm.deptairport || '')+
                '&DestAirport='+(cdpm.destairport || '')+               
                '&PaxAdult='+(''+(cdpm.paxadult || ''))+
                '&PaxChild='+(''+(cdpm.paxchild || ''))+
                '&PaxInfant='+(''+(cdpm.paxinfant || ''))+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '')+
                '&AccomCode='+(cdpm.cruiseshipid || cdpm.accomcode || '')+
                '&AccomGuid='+(cdpm.cruiseshipid || cdpm.accomguid || '')+
                '&AccomName='+(cdpm.cruiseship || cdpm.accomname || '')+
                '&Rooms='+(''+(cdpm.rooms || ''))+
                '&Duration='+(''+(cdpm.duration || ''))+            
                '&BookingRef='+(cdpm.bookingref || '')+
                '&payOpt='+(cdpm.paymentoption || '')+
                '&GBV='+(cdpm.totalprice || cdpm.bookingvlaue || '')+  
                '&depVal='+(cdpm.depositvalue || '')+
                '&depSel='+(cdpm.depositselected || '')+
                '&AppServer='+(cdpm.appserver || '')+
                '&SessionID='+(cdpm.sessionId || '')            
                ).toLowerCase(),
            customvars : {
                custvar02   : {'index': 2,  'name':'AppServer',                         'value':(cdpm.appserver || ''),                 'scope': 3},
                custvar04   : {'index': 4,  'name':'InternalCampaign',                  'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30   : {'index': 30, 'name':'UtmaGuid',                          'value':(cdpm.utmaguid || ''),                  'scope': 1},
                custvar31   : {'index': 31, 'name':'eCircleID',                         'value':(cdpm.ecircleid || ''),                 'scope': 1},
                custvar35   : {'index': 35, 'name':'UtmbGuid',                          'value':(cdpm.utmbguid || ''),                  'scope': 2}
            },
            events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true}
                , qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true}
                , errorcode          : {'category': 'Errors',           'action': cdpm.errorcode ||  '',       'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessionid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
            },
            addtrans : {
                transactionid       :   cdpm.bookingref || '',
                affiliation         :   'UKTC',
                totalprice          :   cdpm.totalprice || cdpm.bookingvalue || 0,
                tax                 :   '',
                shipping            :   '',
                city                :   '',
                state               :   '',
                country             :   ''
            },
            additem  : {
                transactionid       :   (cdpm.bookingref || ''),
                productsku          :   (cdpm.destination || '')+'|'+(cdpm.cruiseship || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.cruiseline  || ''),
                productname         :   (cdpm.cruiseship || '')+'|'+(cdpm.cruiseline || '')+'|'+(cdpm.deptairport || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''),
                productcategory     :   (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''),
                unitprice           :   (cdpm.totalprice || cdpm.bookingvalue || 0),
                quantity            :   '1'
            }
        }

    } catch(e) {
      cdl.error('GTM UK TC Cruise GATCDL Book: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'GATCDL Book', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return window.DL_gatc
}(window.CATTDL, window.dataLayer_KH5PKD || [], document.location || window.location))
</script>