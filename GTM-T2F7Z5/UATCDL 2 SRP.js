<script id='GTM-T2F7Z5_UATCDLSRP'>
  (function gtm_uatcdlSRP(jQ, cdl, loc, dl){
    'use strict';
    if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL SRP/i.test(a && a.event || '');}) ) try {
      var twlh = cdl.twlh;
      var twls = cdl.twls;
      var ewls = cdl.ewls;
      var ld = cdl._;
      var cdpm = cdl.CATTParams || {};
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};

      var accoms = jQ('div.AccomResultsContainer.PackageResultContainer .ResultsListView');
      var jqflights = '';
      var jqa = '';
      var jqaname = '';
      var jqadepdate = '';
      var jqaid = '';
      var cdpmcategory = cdl.transpose('en|{lob}|{holidaytype}', {
                            'lob'         : cdpm.lob || 'epackage'
                          , 'holidaytype' : cdpm.holidaytype || 'epackage'
                        }).toLowerCase();
      var jqabrand = '';
      var jqavariant = '';
      var jqaboardbasis = '';
      var jqaairportcode = '';
      var jqaairportname = '';
      var jqaretdate = '';
      var jqatotalprice = '';
      var cdpmlist = ('search|'+cdpm.sortoption).toLowerCase();
      var cdpmposition = 1000;
      var dimension27 = 'SRP_Viewer';

      var ldaddimpression = ld(accoms).map(function ldaddimpression(accom){
        jqa            = jQ(accom);
        jqflights      = jqa.find('div.ResultItemDetails div.flight div.journey-legs-container div.journey-leg:eq(0)');

        jqaid          = jqa.find('span.exactMatch').attr('id').substr(0, 6);
        jqaname        = jqa.find('span.headerInfo span.name').text()+'||||';
        jqabrand       = jqflights.find('img.SupplierLogo').attr('title').toLowerCase();
        jqaboardbasis  = jqa.find('div.boardBasisContainer div.ResultItemDetailsHeader div').text();
        jqaairportcode = jqflights.find('span.code.departure').text();
        jqaairportname = jqflights.find('span.code.departure').parent().find('span.name').text().trim();
        jqadepdate     = cdl.gadate(new Date(jqflights.find('span.dateTime.departure span:eq(0)').text()));
        jqaretdate     = cdl.gadate(new Date(jqflights.find('div.details:eq(1) span.date.arrival span').text()));
        jqatotalprice  = ld.words(jqa.find('div.ResultItemPriceBox span.ResultItemHeaderTotalPrice.ResultItemHeaderPrice').text()).join('.');
        jqavariant     = cdl.transpose('{boardbasis}|{airport}|{depdate}|{retdate}|{paxtotal}|{paxadult}|{paxchild}|{paxinfant}|{totalprice}', {
                              'boardbasis': jqaboardbasis || ''
                              , 'airport': jqaairportcode || jqaairportname || ""
                              , 'depdate': jqadepdate ||""
                              , 'retdate': jqaretdate ||""
                              , 'paxtotal': cdpm.paxtotal || "0"
                              , 'paxadult': cdpm.paxadult || "0"
                              , 'paxchild': cdpm.paxchild || "0"
                              , 'paxinfant': cdpm.paxinfant || "0"
                              , 'totalprice': jqatotalprice || ''
                          }).toLowerCase();

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

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-33036832-7'
        , profileid2      : 'UA-33029666-1'
        , cookiedomain    : 'directholidays.co.uk'
        , name            : 'CATTUATC'
        , name2           : 'CATT2UATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            page            : cdl.transpose('/vp/en/{lob}/{holidaytype}/{pageid}', {
                                  'lob'         : cdpm.lob || 'epackage'
                                , 'holidaytype' : cdpm.holidaytype || 'epackage'
                                , 'pageid'      : cdpm.pageid || 'search'
                              }).toLowerCase()
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
            , dimension15     : {'starrating'                 : accoms.eq(0).find('span.starRating img').attr('title').replace(/ stars?/, '') || 'empty'}
            , dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension20     : {'touroperator'               : accoms.eq(0).find('div.ResultItemDetails div.flight div.journey-legs-container div.journey-leg:eq(0) img.SupplierLogo').attr('title').toLowerCase() || 'empty'}
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
            , dimension33     : {'carrier'                    : accoms.eq(0).find('div.ResultItemDetails div.flight div.journey-legs-container div.journey-leg:eq(0) img.SupplierLogo').attr('title').toLowerCase() || 'empty'}
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
        }
      });

    } catch(e) {
      cdl.error('GTM UK directholidays UATCDL SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL SRP', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer_T2F7Z5));
</script>
