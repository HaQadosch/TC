<script id='GTM-KPS3CD_GATCDLLP'>
  (function gtm_gatcdlLP(cdl, dl, loc) {
    'use strict';
    var timeStart = window.dataLayer
    .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
    .map(function dlMap(evt) {return evt['gtm.start']; })
    .pop() || 0;
    var stampEpoch = +new Date();
    var cdpm = {};
    if (cdl && !dl.some(function(a){return /GATCDL LP/i.test(a && a.event || '');}) ) try {
      var ld = cdl._;
      cdpm = cdl.CATTParams || {};
      cdl.DL_gatc = cdl.DL_gatc || {};
      cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

      var destination = (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-');
      var accomname = (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-');
      var deptdate = cdl.gadate(cdpm.deptdate || '0');
      var boardbasis = (cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-');

      var cdpmVP = cdl.transpose('/vp/{lob}/{hlt}/{pid}', {
          'lob': cdpm.lob || ''
        , 'hlt': cdpm.holidaytype || ''
        , 'pid': cdpm.pageid || ''
      }).toLowerCase();

      ld.assign(cdl.DL_gatc, {
          profileid     : 'UA-33029666-1'
        , cookiedomain  : "club18-30.com"
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
          , qsp_st : cdl.transpose('ss_st={dest}_{accn}_{accc}', {
              'dest': destination
            , 'accn': accomname
            , 'accc': cdpm.accomcode || ''
          }).toLowerCase()
          , qsp_cat : cdl.transpose('ss_cat={lob}_{pid}', {
              'lob': cdpm.lob || ''
            , 'pid': cdpm.pageid || ''
          }).toLowerCase()
          , qsp_p : cdl.transpose('deptdate={dd}&depairport={dp}&paxadult={pa}&paxchild={pc}&boardbasis={bb}&destination={dt}&accomcode={ac}&accomname={an}&rooms={rm}&appserver={as}', {
              'dd': deptdate
            , 'dp': cdpm.departureairportselected || ''
            , 'pa': cdpm.paxadult || ''
            , 'pc': cdpm.paxchild || ''
            , 'bb': boardbasis
            , 'dt': destination
            , 'ac': cdpm.accomcode || ''
            , 'an': accomname
            , 'rm': cdpm.rooms || ''
            , 'as': cdpm.appserver || ''
          }).toLowerCase()
          , customvars : {
              custvar02 : {'index': 2,  'name':'AppServer',        'value':cdpm.appserver || '',          'scope': 3}
            , custvar04 : {'index': 4,  'name':'InternalCampaign', 'value':cdpm.internalcampaignid || '', 'scope': 3}
            , custvar30 : {'index': 30, 'name':'UtmaGuid',         'value':cdpm.utmaguid || '',           'scope': 1}
            , custvar35 : {'index': 35, 'name':'UtmbGuid',         'value':cdpm.utmbguid || '',           'scope': 2}
          }
          , events : {
              internalcampaignid : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host, 'value': 1, 'noninteraction': true}
            , errorcode          : {'category': 'Errors',           'action': cdpm.errorcode ||  '',         'label': (document.URL || cdpmVP || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK Club1830 GATCDL LP: '+e);
    } finally {
      stampEpoch = +new Date();
      dl.push({'event': 'GATCDL LP', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_gatc;
  }(window.CATTDL, window.dataLayer_KPS3CD, document.location));
</script>