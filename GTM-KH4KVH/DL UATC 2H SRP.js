<script id='GTM-KH4KVH_UATCDLSRPH'>
  (function gtm_uatcdlSRPH(jQ, cdl, loc, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
      if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL SRP/i.test(a && a.event || '');}) ) try {
      var twlh = cdl.twlh;
      var twls = cdl.twls;
      var ewls = cdl.ewls;
      var ld = cdl._;
      cdpm = cdl.CATTParams || {};
      timeStart = cdpm.timestart || 0;
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};

      var accoms = jQ('div.AccomResultsContainer .ResultsListView');
      var jqa = '';
      var jqaname = '';
      var jqadepdate = '';
      var jqaid = '';
      var cdpmcategory = ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase();
      var jqabrand = '';
      var jqavariant = '';
      var jqaretdate = '';
      var jqatotalprice = '';
      var cdpmlist = ('search|'+cdpm.sortoption).toLowerCase();
      var cdpmposition = 1000;
      var dimension27 = 'SRP_Viewer';

      var ldaddimpression = ld(accoms).map(function ldaddimpression(accom){
        jqa            = jQ(accom);
        jqaid          = jqa.find('span.exactMatch').attr('id').substr(0, 6);
        jqaname        = jqa.find('span.headerInfo span.name').text()+'||||';
        jqabrand       = '';
        jqaboardbasis  = jqa.find('div.boardBasisContainer div.ResultItemDetailsHeader div').text();
        jqaretdate     = cdl.gadate(new Date(cdpm.deptdate+86400000*(cdpm.duration || 0)));
        jqatotalprice  = ld.words(jqa.find('div.ResultItemPriceBox span.ResultItemHeaderTotalPrice.ResultItemHeaderPrice').text()).join('.');
        jqavariant     = cdl.transpose('{boardbasis}||{depdate}|{retdate}|{paxtotal}|{paxadult}|{paxchild}|{paxinfant}|{totalprice}', {
                              'boardbasis': jqaboardbasis || ''
                            , 'depdate':    cdl.gadate(new Date(cdpm.deptdate || '')) ||""
                            , 'retdate':    jqaretdate ||""
                            , 'paxtotal':   cdpm.paxtotal || "0"
                            , 'paxadult':   cdpm.paxadult || "0"
                            , 'paxchild':   cdpm.paxchild || "0"
                            , 'paxinfant':  cdpm.paxinfant || "0"
                            , 'totalprice': jqatotalprice || ''
                          })

        return {
            'id'         : jqaid
          , 'name'       : jqaname
          , 'depdate'    : jqadepdate
          , 'category'   : cdpmcategory
          , 'brand'      : jqabrand
          , 'variant'    : jqavariant
          , 'list'       : cdpmlist
          , 'position'   : ++cdpmposition
          , 'dimension27': 'SRP_Viewer'
        };
      }).value();

      var virtualPage = cdl.transpose('/vp/en/{lob}/{holidaytype}/{pageid}', {
                            'lob'         : cdpm.lob || 'epackage'
                          , 'holidaytype' : cdpm.holidaytype || 'epackage'
                          , 'pageid'      : cdpm.pageid || 'search'
                        }).toLowerCase();

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-33036832-7'
        , cookiedomain    : 'thomascook.com'
        , name            : 'CATTUATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            page            : virtualPage
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , nbrimpressions  : cdpm.searchresultstotal
          , addimpression   : ldaddimpression
          , metrics         : {
              metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0}
            , metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0}
            , metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0}
            , metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0}
            , metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0}
            , metric6         : {'searchresultspagenbr'   : 1}
            , metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0}
            , metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultstotal) || 0}
            , metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0}
            , metric15        : {'hitcount'               : 1}
          }
          , dimensions      : {
              dimension1      : {'deptairport'                : cdpm.departureairportselected || 'empty'}
            , dimension2      : {'destination'                : cdpm.destination || 'empty'}
            , dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || 'empty'}
            , dimension6      : {'appserver'                  : cdpm.appserver || 'empty'}
            , dimension7      : {'boardbasis'                 : accoms.eq(0).find('div.boardBasisContainer div.ResultItemDetailsHeader div').text() || 'empty'}
            , dimension9      : {'duration'                   : ''+cdpm.duration || 'empty'}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension13     : {'resortsearched'             : cdpm.searches && cdpm.searches.resort || 'empty'}
            , dimension14     : {'sessid'                     : cdpm.sessid || 'empty'}
            , dimension15     : {'starrating'                 : accoms.eq(0).find('img.starRating').attr('title').replace(/ stars?/, '') || 'empty'}
            , dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension20     : {'touroperator'               : 'empty'}
            , dimension21     : {'destinationsearched'        : cdpm.searches && cdpm.searches.resort || 'empty'}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || 'empty'}
            , dimension23     : {'searchresultspagenbr'       : '1'}
            , dimension24     : {'searchresultspages'         : '1'}
            , dimension25     : {'searchresultsperpage'       : cdpm.searchresultstotal || 'empty'}
            , dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'}
            , dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'}
            , dimension33     : {'carrier'                    : 'empty'}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
          , events : {
              internalcampaignid : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': virtualPage+'_'+loc.host, 'value': 1, 'noninteraction': true}
            , errorcode          : {'category': 'Errors',           'action': cdpm.errorcode ||  '',         'label': (document.URL || virtualPage || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK multicom UATCDLH SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL SRP', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer));
</script>
