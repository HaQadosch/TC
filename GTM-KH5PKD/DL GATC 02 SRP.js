<script id='GTM-KH5PKD_GATCDLSRP'>
  (function gtm_gatcdlSRP(cdl, dl, loc) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    if (cdl && dl) //&& !dl.some(function(a){return /GATCDL SRP/i.test(a && a.event || '');}) ) 
    try {
      var ld = cdl._;
      cdpm = cdl.CATTParams || {};
      cdl.DL_gatc = cdl.DL_gatc || {};
      cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};
      var errors = cdpm.errors || cdpm || {};
      
      var destination = (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-');
      var deptdate = cdl.gadate(cdpm.deptdate || '0').replace(/\//g, '-');
      var boardbasis = (cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-');

      var cdpmVP = cdl.transpose('/vp/{lob}/{hlt}/{pid}', {
        'lob': cdpm.lob || ''
        , 'hlt': cdpm.holidaytype || ''
        , 'pid': cdpm.pageid || ''
      }).toLowerCase();

      ld.assign(cdl.DL_gatc, {
        profileid     : 'UA-33036832-1'
        , cookiedomain  : 'thomascook.com'
        , trackername   : 'CATTGATC'
        , anonymizeip   : true
        , allowlinker   : true
        , organicsearch : {
          'search.incredibar.com'      : 'q'
          , 'search.alot.com'            : 'q'
          , 'search.softonic.com'        : 'q'
          , 'search.searchcompletion.com': 'q'
          , 'searchmobileonline.com'     : 'q'
          , 'search.webplayer.tv'        : 'q'
          , 'search.babylon.com'         : 'q'
          , 'search.sweetim.com'         : 'q'
          , 'gooofullsearch.com'         : 'Keywords'
          , 'search.rpidity.com'         : 'q'
        }
        , webanalytics : {
          vp    : cdpmVP
          , qsp_st : cdl.transpose('ss_st={dest}_{dptd}_{nres}', {
            'dest': destination
            , 'dptd': deptdate
            , 'nres': (parseInt(cdpm.searchresultstotal) || 0) === 0?'nResults':'yResults'
          }).toLowerCase()
          , qsp_cat : cdl.transpose('ss_cat={lob}_{pid}', {
            'lob': cdpm.lob || ''
            , 'pid': cdpm.pageid || ''
          }).toLowerCase()
          , qsp_p : cdl.transpose('deptdate={dd}&depairport={dp}&paxadult={pa}&paxchild={pc}&boardbasis={bb}&destination={dt}&srptop3={top3}&srptot={tot}&duration={dn}&sortoption={so}', {
            'dd'  : deptdate
            , 'dp'  : cdpm.departureairportselected || ''
            , 'pa'  : ''+(cdpm.paxadult || '')
            , 'pc'  : ''+(cdpm.paxchild || '')
            , 'bb'  : boardbasis
            , 'dt'  : destination
            , 'top3': cdpm.searchresultstop3 || ''
            , 'tot' : ''+(cdpm.searchresultstotal || '')
            , 'dn'  : cdpm.duration || ''
            , 'so'  : cdpm.sortoption || ''
          }).toLowerCase()
          , customvars : {
            custvar02 : {'index': 2,    'name':'AppServer',        'value':(cdpm.appserver || ''),          'scope': 3}
            , custvar04 : {'index': 4,  'name':'InternalCampaign', 'value':(cdpm.internalcampaignid || ''), 'scope': 3}
            , custvar30 : {'index': 30, 'name':'UtmaGuid',         'value':(cdpm.utmaguid || ''),           'scope': 1}
            , custvar35 : {'index': 35, 'name':'UtmbGuid',         'value':(cdpm.utmbguid || ''),           'scope': 2}
          }
          , events : {
            internalcampaignid : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '',              'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true}
            , errorcode          : {'category': 'Errors',         'action': (errors.errorcode+errors.errormsg) || '',   'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessionid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK TC Cruise GATCDL SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'GATCDL SRP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_gatc;
  }(window.CATTDL, window.dataLayer_KH5PKD, document.location));
</script>