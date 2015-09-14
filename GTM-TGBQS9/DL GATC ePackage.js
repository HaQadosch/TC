<script id='GTM-TGBQS9_GATCDLePackage'>
  (function gtm_gatcdlePackage(cdl, dl, loc){
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    if (cdl && !dl.some(function(a){return /GATCDL Conf/i.test(a && a.event || '');}) ) try {
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
      var errLabel = cdl.transpose('{pn}/?destination={dest}&deptairport={dpa}&deptdate={dd}&duration={dn}&appserver={as}', {
          'pn': loc.pathname || ''
        , 'dest': destination
        , 'dpa': cdpm.destinationairportselected || ''
        , 'dd': cdpm.deptdate || ''
        , 'dn': cdpm.duration || ''
        , 'as': cdpm.appserver || ''
      });

      ld.assign(cdl.DL_gatc, {
          profileid     : 'UA-33029666-1'
        , cookiedomain  : "directholidays.co.uk"
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
          , qsp_p : cdl.transpose('deptdate={dd}&depairport={dpa}&destairport={dta}&paxadult={pa}&paxchild={pc}&paxinfant={pi}&boardbasis={bb}&destination={dt}&accomcode={ac}&accomguid={ag}&accomname={an}&rooms={rm}&duration={dn}&bookingref={ref}&payopt={po}&gbv={gbv}&depval={depval}&depsel={depsel}&appserver={as}&sessionid={sid}', {
              'dd'     : deptdate
            , 'dpa'    : cdpm.departureairportselected || ''
            , 'dta'    : cdpm.destinationairportselected || ''
            , 'pa'     : cdpm.paxadult || ''
            , 'pc'     : cdpm.paxchild || ''
            , 'pi'     : cdpm.paxinfant || ''
            , 'bb'     : boardbasis
            , 'dt'     : destination
            , 'ac'     : cdpm.accomcode || ''
            , 'ag'     : cdpm.accomguid || ''
            , 'an'     : accomname
            , 'rm'     : cdpm.rooms || ''
            , 'dn'     : cdpm.duration || ''
            , 'ref'    : cdpm.bookingref || ''
            , 'po'     : cdpm.paymentoption || ''
            , 'gbv'    : cdpm.bookingvlaue || ''
            , 'depval' : cdpm.depositvalue || ''
            , 'depsel' : cdpm.depositselected || ''
            , 'as'     : cdpm.appserver || ''
            , 'sid'    : cdpm.sessionId || ''
          }).toLowerCase()
          , customvars : {
              custvar02   : {'index': 2,  'name':'AppServer',                      'value':(cdpm.appserver || ''),          'scope': 3}
            , custvar04   : {'index': 4,  'name':'InternalCampaign',               'value':(cdpm.internalcampaignid || ''), 'scope': 3}
            , custvar30   : {'index': 30, 'name':'UtmaGuid',                       'value':(cdpm.utmaguid || ''),           'scope': 1}
            , custvar31   : {'index': 31, 'name':'eCircleID',                      'value':(cdpm.ecircleid || ''),          'scope': 1}
            , custvar32   : {'index': 32, 'name':'dreamCaptureID',                 'value':(cdpm.dreamcaptureid || ''),     'scope': 1}
            , custvar35   : {'index': 35, 'name':'UtmbGuid',                       'value':(cdpm.utmbguid || ''),           'scope': 2}
            , custvar39   : {'index': 39, 'name':'dreamCaptureAbtaVisitorSession', 'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
          }
          , events : {
              internalcampaignid  : {'category': 'InternalCampaign',     'action': cdpm.internalcampaignid || '', 'label': cdpmVP+'_'+loc.host,   'value': 1, 'noninteraction': true}
            , qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '',   'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true}
            , errorcode           : {'category': 'Errors',               'action': cdpm.errors || '',             'label': errLabel,              'value': 1, 'noninteraction': true}
            , opcreative          : {'category': 'OptimostCreative',     'action': cdpm.optimostcreative || '',   'label': loc.href || '',        'value': 1, 'noninteraction': true}
          }
          , addtrans : {
              transactionid : cdpm.bookingref || ''
            , affiliation   : 'UKTC'
            , totalprice    : cdpm.bookingvalue || 0
            , tax           : ''
            , shipping      : ''
            , city          : ''
            , state         : ''
            , country       : ''
          }
          , additem  : {
              transactionid   : (cdpm.bookingref || '')
            , productsku      : (cdpm.destination || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomresort || '')+'|'+(cdpm.touroperator   || '')
            , productname     : (cdpm.accomname || '')+'|'+(cdpm.accomcode || '')+'|'+(cdpm.deptairport || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || '')
            , productcategory : (cdpm.lob || '')+'|'+(cdpm.holidaytype || '')
            , unitprice       : (cdpm.bookingvalue || 0)
            , quantity        : '1'
          }
        }
      });
    } catch(e) {
      cdl.error('GTM DLGATC UK TC Multicom Conf: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'GATCDL Conf', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return window.DL_gatc;
  }(window.CATTDL, window.dataLayer, document.location));
</script>